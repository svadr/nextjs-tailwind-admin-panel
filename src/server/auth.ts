import { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userService } from "./services/userService";

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_URL,
	session: {
		strategy: "jwt", //(1)
	},
	callbacks: {
		async jwt({ token, account, profile }) {
			if (account && account.type === "credentials") {
				token.userId = account.providerAccountId;
			}
			return token;
		},
		async session({ session, token, user }) {
			// @ts-ignore
			session.user.id = token.userId; //(3)
			return session;
		},
	},
	pages: {
		signIn: "/login", //(4) custom signin page path
	},
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text", placeholder: "username" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const { username, password } = credentials as {
					username: string;
					password: string;
				};

				return userService.authenticate(username, password); //(5)
			},
		}),
	],
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
