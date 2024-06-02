import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaClient} from '@prisma/client'
import {signIn} from "next-auth/react";
const prisma=new PrismaClient();
const handler=NextAuth({
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{label:"Email",type:"email"},
                password:{label:"Password",type:"password"},
            },
            async authorize(credentials){
                const user=await prisma.clients.findFirst({
                    where:{
                        email:credentials?.email
                    }
                })
                if(user){
                    return{id:user.user_id.toString(),success:true}
                }
                else{
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ||"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ||""
        })
    ],
    pages:{
        signIn:"/signin"
    },
    callbacks:{
        async signIn({credentials,email,user,profile}){
            if(credentials){
                return 'http://localhost:3000/home'
            }
            else return false;
        }
    }
})

export {handler as GET ,handler as POST}