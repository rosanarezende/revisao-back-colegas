import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase{
    
    private static TABLE_NAME = "LaBookUser"

    public async signup(id: string, email: string, name: string, password: string):Promise<void>{
        await super.connection()
           .insert({
               id, email, name, password
           })
           .into(UserDatabase.TABLE_NAME)
    }

}