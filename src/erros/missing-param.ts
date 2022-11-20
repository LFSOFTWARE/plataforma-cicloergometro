export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Missing patam: ${paramName}`);
    this.name = `Missing param: ${paramName}`;
  }
}
