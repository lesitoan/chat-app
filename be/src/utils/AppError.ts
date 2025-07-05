class AppError extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status || 500;
    Object.setPrototypeOf(this, new.target.prototype);
  }
  getStatus(): number {
    return this.status;
  }
}

export default AppError;