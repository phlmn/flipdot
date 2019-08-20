#!/usr/bin/env node

const FlipDot = require('../dist/index.js').default;

const args = process.argv.slice(2);
const text = args[0];

const flipdot = new FlipDot();
flipdot.drawText(text);
flipdot.send(() => {
  flipdot.close();
});
