import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "tech-bazar-db";

export const authOptions = {
  providers: [
    // Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Credentials
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await client.connect();
        const db = client.db(dbName);
        const users = db.collection("users");

        const user = await users.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Password is incorrect");

        return { id: user._id, email: user.email };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
