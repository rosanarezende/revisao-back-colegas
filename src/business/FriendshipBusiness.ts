import { UserDatabase } from "../data/UserDatabase";
import { FriendshipDatabase } from "../data/FriendshipDatabase";

export class FriendshipBusiness {
  public async makeFriendship(userId: string, userToMakeFriendshipId: string) {
    return await new FriendshipDatabase().makeFriendship(userId, userToMakeFriendshipId)
  }
}