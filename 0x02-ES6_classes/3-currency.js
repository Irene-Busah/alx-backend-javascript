export default class Currency {
  constructor (code, name) {
    Currency.checkType(name, 'string', `${name} must be a string`);
    this._name = name;

    Currency.checkType(code, 'string', `${code} code must be a number`);
    this._code = code;
  }

  // Getter methods
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setter method
  set code(newCode) {
    Currency.checkType(newCode, 'string', `${newCode} not of type string`);
    this._code = newCode;
  }

  set name(newName) {
    Currency.checkType(newName, 'string', `${newName} not of type string`);
    this._code = newName;
  }

  // static method
  static checkType(arg, type, errMsg) {
    /**
      * Throw error if `arg` is not of type `type`
      * @param {string} arg variable to check type of
      * @param {string} type string representing type required
      * @param {string} errMsg message to show if arg is not required type
      */
    // eslint-disable-next-line valid-typeof
    if (typeof arg !== type) throw TypeError(errMsg);
    return true;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
