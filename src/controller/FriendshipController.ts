import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { FriendshipDatabase } from "../data/FriendshipDatabase";
import { FriendshipBusiness } from "../business/FriendshipBusiness";

export class FriendshipController {

  async makeFriendship(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;
      const userToMakeFriendshipId = req.body.id;

      const idUser = new Authenticator().verify(token).id;

      const friendships = await new FriendshipDatabase().getFriendshipById(idUser)

      const userRelation = friendships.find(relation => {
        return relation.user_id === userToMakeFriendshipId || relation.user_to_make_friendship_id === userToMakeFriendshipId;
      })

      if (userRelation) {
        throw new Error("Você já tem esse amigo adicionado.")
      }

      await new FriendshipBusiness().makeFriendship(idUser, userToMakeFriendshipId)

      res.status(200).send({ message: "Amizade feita com sucesso."})

    } catch (err) {
      res.status(400).send({ message: err.message})
    }
  }
}