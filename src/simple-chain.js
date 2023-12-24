const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *               -----------------
 */
const chainMaker = {
  getLength() {
    this.arr = Array.isArray(this.arr) ? this.arr.length : 0;
    return this;
  },
  addLink(value) {
    if(!Array.isArray(this.arr)) {
      this.arr = [];
    }
    if(value === undefined){
      value = ' ';
    }
    this.arr.push(`( ${value + ''} )`);
    return this;
  },
  removeLink(position) {
    if(!Array.isArray(this.arr)) {
      this.arr = [];
    }
    if (!Number.isInteger(position) || position > this.arr.length || position <= 0 || !this.arr[position - 1]) {
      this.arr = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if(!Array.isArray(this.arr)) {
      this.arr = [];
    }
    this.arr.reverse();
    return this;
  },
  finishChain() {
    if(!Array.isArray(this.arr)) {
      this.arr = [];
    } 
    const str = this.arr.join("~~");
    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
