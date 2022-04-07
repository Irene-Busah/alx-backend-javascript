/* Eslint-disabled */
export default class Building {
    constructor (sqft) {
        this._sqft = sqft;
        if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
          throw Error('Class extending Building must override evacuationWarningMessage');
        }
    }

    // getter method
    get sqft() {
      return this._sqft;
    }

    // setter method
    set sqft(newSqrt) {
      this._sqft = newSqrt;
    }
}
