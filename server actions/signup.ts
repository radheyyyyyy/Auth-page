"use server"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function signup(email: string, pass: string,lname:string,fname:string) {
        await prisma.clients.create({
            data:{
                email,pass,lname,fname
            }
        })
}