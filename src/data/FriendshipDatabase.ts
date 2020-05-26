import { BaseDatabase } from "./BaseDatabase";

export class FriendshipDatabase extends BaseDatabase {
  private static TABLE_NAME = "LaBookUserFriendship";

  public async makeFriendship(userId: string, userToMakeFriendshipId: string): Promise<void> {
    await super.connection()
      .insert({
        user_id: userId,
        user_to_make_friendship_id: userToMakeFriendshipId
      }).into(FriendshipDatabase.TABLE_NAME)
  }

  public async getFriendshipById(id: string): Promise<any[]> {
    return await super.connection()
      .select("*")
      .from(FriendshipDatabase.TABLE_NAME)
      .where({
        user_id: id,
      }).orWhere({
        user_to_make_friendship_id: id
      })
  }

  public async undoFriendship(userId: string, userUndoFriendship: string): Promise<void> {
    await super.connection()
    .delete()
    .from(FriendshipDatabase.TABLE_NAME)
    .where({
      user_id: userId,
      user_to_make_friendship_id: userUndoFriendship
    })
    .orWhere({
      user_id: userUndoFriendship,
      user_to_make_friendship_id: userId
    })
  }
}