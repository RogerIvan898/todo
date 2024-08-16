import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from "next-auth/next";
import {JWT} from "next-auth/jwt";

async function authenticateUser(email: string, password: string) {
  try {
    const response = await fetch('https://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        id: data.id,
        name: data.name,
        email: data.email,
        token: data.token,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const user = await authenticateUser(credentials?.email || '', credentials?.password || '');
          if (user) {
            return user;
          }
          return null;
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.token = user.token; // Сохраняем токен в JWT
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
      };
      session.token = token.token as string; // Сохраняем токен в сессии
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin', // Задайте путь к вашей странице входа, если она есть
  },
});