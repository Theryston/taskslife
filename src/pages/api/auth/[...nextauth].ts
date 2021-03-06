import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../configs/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import CreateLifeService from "../../../services/CreateLifeService";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
      async session(data) {
        const { user } = data;
        const life = await CreateLifeService.execute({ user });
        return {
          ...data.session,
          life: {
            _id: life._id,
            name: life.name,
            cards: life.cards,
            image: life.image,
            updatedAt: life.updatedAt,
            createdAt: life.createdAt,
            number: life.createdAt.getTime(),
          },
        };
      },
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
    ],
  });
}
