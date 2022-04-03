import dbConnect from "../configs/dbConnect";
import { IUser } from "../interfaces/IUser";
import Life from "../models/Life";

export default class CreateLifeService {
  /**
   *
   * @param {IUser} user - User data object
   * @returns {Promise<void>} - Promise that resolves when the life is created
   */
  public static async execute({ user }: { user: IUser }): Promise<void> {
    await dbConnect();

    const life = await Life.findOne({ user: user.id });

    if (!life) {
      await Life.create({
        name: user.name,
        user: user.id,
        cards: [],
      });
    }
  }
}