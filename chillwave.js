class ChillWaveString {
  /**
   * @param {String} str
   */
  constructor(str) {
    this.str = str;
  }

  render() {
    return this.str.split('').join(' ');
  }
};

module.exports = ChillWaveString;
