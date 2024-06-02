"use client"

import {useRouter} from "next/navigation";
import {signOut} from "next-auth/react";

export function Appbar(){
    let router=useRouter()
    return(
        <div className='flex justify-between py-4 border-b-2 border-gray-500'>
            <div className='ml-5 mt-3 font-bold'>devxcode</div>
            <div>
                <button className='bg-purple-500 p-2 mr-10 rounded mt-2 text-white hover:bg-purple-700' onClick={async ()=>{ router.push("http://localhost:3000/signin");}}>Logout</button></div>
        </div>
    )
}