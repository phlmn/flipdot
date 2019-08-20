import * as dgram from 'dgram';

import { config } from './config';
import font from './font';

const ROWS = 20;
const COLS = 48;

class Canvas {
  buffer: Buffer;
  client: dgram.Socket;
  dirty: boolean = true;

  constructor() {
    this.buffer = new Buffer(Math.ceil(ROWS / 8) * COLS);
    this.client = dgram.createSocket('udp4');
  }

  getBuffer() {
    return this.buffer;
  }

  setPixel(x, y, on) {
    const startPos = (COLS - x -1) * Math.ceil(ROWS / 8) + Math.floor(y / 8);
    const col = this.buffer[startPos];

    let newCol;

    if(on) {
      newCol = col | (1 << 7 - (y % 8));
    } else {
      newCol = col & (~(1 << 7 - (y % 8)));
    }

    this.buffer.set([newCol], startPos);
    this.dirty = true;
  }

  getPixel(x, y) {
    const startPos = (COLS - x -1) * Math.ceil(ROWS / 8) + Math.floor(y / 8);
    const col = this.buffer[startPos];

    return  ((col & (1 << 7 - (y % 8))) === 0);
  }

  drawChar(char: string, oX = 0, oY = 0) {
    let charData = font[char];

    if (!charData) {
      charData = font['_'];
    }

    charData.forEach((row, y) => {
      row.forEach((col, x) => {
        this.setPixel(x + oX, y + oY, col);
      });
    });
  }

  drawText(text: string, oX = 0, oY = 0) {
    const upper = text.toUpperCase();

    for(let i = 0; i < text.length; i++) {
      this.drawChar(upper.charAt(i), i * 4 + oX, oY);
    }
  }

  send(done: () => any) {
    this.client.send(this.buffer, 0, this.buffer.length, config.port, config.address, () => {
      if(done) done();
    });
    this.dirty = false;
  }

  close() {
    this.client.close();
  }
}

export default Canvas;
