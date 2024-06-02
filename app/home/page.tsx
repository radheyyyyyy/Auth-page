"use client"
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Appbar} from "@/components/Appbar";

export default function Home(){
   return(
       <Appbar/>
   )
}