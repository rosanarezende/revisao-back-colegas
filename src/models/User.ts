export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    if (password.length < 6) {
      throw new Error("Invalid password");
    }

    this.password = password;
  }

  public setEmail(email: string): void {
    if (email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }
    this.email = email;
  }
}
