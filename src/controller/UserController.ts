import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { Authenticator } from "../services/Authenticator"

export class UserController {

    async signup(req: Request, res: Response) {
        try {
            const { email, name, password } = req.body

            const userBusiness = new UserBusiness()
            const result = await userBusiness.signup(email, name, password)

            const authenticator = new Authenticator()
            const token = authenticator.generationToken({
                id: result.id
            })

            res.status(200).send({
                token
            })

        } catch (err) {
            res.status(400).send({
                message: err.message
            })
        }

    }


    public async login(req: Request, res: Response) {
        try {

            const { email, password } = req.body

            const userBusiness = new UserBusiness()
            const result = await userBusiness.login(email, password)

            const authenticator = new Authenticator()
            const token = authenticator.generationToken({ id: result.id })

            res.status(200).send({ token })

        }
        catch (err) {
            res.status(400).send({ message: err.message })
        }
    }
}