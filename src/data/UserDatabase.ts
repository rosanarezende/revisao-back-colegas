import { BaseDatabase } from "./BaseDatabase";
import { User } from "../models/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LaBookUser";

  private toModel(dbResult?: any): User | undefined {
    return (
      dbResult &&
      new User(dbResult.id, dbResult.name, dbResult.email, dbResult.password)
    );
  }

  public async signup(
    id: string,
    email: string,
    name: string,
    password: string
  ): Promise<void> {
    await super
      .connection()
      .insert({
        id,
        email,
        name,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await super
      .connection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return this.toModel(result[0]);
  }
}
