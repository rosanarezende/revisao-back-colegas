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

    public async login(email: string, password: string) {

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserByEmail(email)

        const hashManager = new HashManager()
        const comparePassword = await hashManager.compare(password, user.password)

        if(!comparePassword) {
            throw new Error ("Parâmetro incorreto")
        }

        return {id: user.id}
    }
}