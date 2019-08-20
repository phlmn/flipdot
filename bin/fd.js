#!/usr/bin/env node

const blessed = require('blessed');

const FlipDot = require('../dist/index.js').default;

const args = process.argv.slice(2);
const command = args[0];

switch (command.toLowerCase()) {
  case 'draw':
    draw();
    break;
}

function draw() {
  var screen = blessed.screen({
    smartCSR: true
  });

  screen.title = 'Flipdot';

  screen.append(blessed.bigtext({
    content: 'Flipdot',
    width: '100%',
    align: 'center',
  // height: '80%',
    height: 'shrink',
    fch: 'o',
  }));

  var box = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Use the arrow keys to move the cursor.\nUse <space> to flip a pixel.',
    valign: 'middle',
    align: 'center',
    tags: true,
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      bg: 'magenta',
      border: {
        fg: '#f0f0f0'
      },
    }
  });

  screen.append(box);

  screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
  });

  const flipdot = new FlipDot();

  let cursor_x = 0;
  let cursor_y = 0;

  screen.key('up', () => {
    cursor_y--;
  });

  screen.key('down', () => {
    cursor_y++;
  });

  screen.key('left', () => {
    cursor_x--;
  });

  screen.key('right', () => {
    cursor_x++;
  });

  let timer;

  screen.key('space', () => {
    flipdot.setPixel(cursor_x, cursor_y, flipdot.getPixel(cursor_x, cursor_y));
  });

  setInterval(() => {
    if (flipdot.dirty) {
      flipdot.send();
    }
  }, 400);


  // flipdot.drawText(text);
  // flipdot.send(() => {
  //   flipdot.close();
  // });

  screen.render();
}
