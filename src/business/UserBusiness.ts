import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness{

    public async signup(email: string, name: string, password: string){
        const idGenarator = new IdGenerator()
        const id = idGenarator.generatorId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const userDatabase = new UserDatabase()
        await userDatabase.signup(id, email, name, hashPassword)

        return { id: id }
    }

}