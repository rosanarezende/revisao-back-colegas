import express from "express"
import { FriendshipController } from "../controller/FriendshipController"

export const friendshipRouter = express.Router()

const friendship = new FriendshipController()

friendshipRouter.post("/make", friendship.makeFriendship)
friendshipRouter.delete("/undo", friendship.undoFriendship)