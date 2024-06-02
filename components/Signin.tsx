"use client"
import {useState} from "react";
import {signup} from "@/server actions/signup";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Link from "next/link";
export function Signin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let session = useSession();
    let router=useRouter();
    return(
        <div className='px-10 py-10 border-2 rounded border-black'>
            <div className='font-bold text-2xl mb-5 ml-6'>Login to your Account</div>
            <div>
                <label className='font-bold mb-3' id="username">Email
                    <input className='w-full p-1 border-2 border-gray-300 rounded' id="email" type="email"
                           placeholder="xyz@gmail.com" onChange={(e) => setEmail(e.target.value)}/></label>
            </div>
            <div className='mt-4'>
                <label className='font-bold mb-3' id="username">Password
                    <input className='w-full p-1 border-2 border-gray-300 rounded' id="pass" type="text"
                           placeholder="Password" onChange={(e) => setPassword(e.target.value)}/></label>
            </div>
            <div>
                <button onClick={async () => {
                    const res = await signIn("credentials", {email: email, password: password, redirect: false});
                    if(res?.ok==true){
                        router.push("http://localhost:3000/home")
                    }
                    else alert("Failed to login");

                }}
                        className='bg-black w-full p-2 hover:bg-gray-500 hover:text-black rounded text-white mt-4 focus:border-2 focus:border-black'>Login
                </button>
            </div>
            <div className='border-2 border-gray-500 mt-4'></div>
            <div>
                <button onClick={async () => {
                    const res = await signIn("google");
                    if(session.status==='authenticated'){
                        router.push("http://localhost:3000")
                    }
                    else {
                        alert("Login failed")
                    }

                }}
                        className='bg-black w-full p-2 hover:bg-gray-500 hover:text-black rounded text-white mt-4 focus:border-2 focus:border-black'>Login with Google
                </button>
            </div>
            <div className='mt-3'>Don&apos;t have an account?<Link className='text-blue-500 underline' href={"/signup"}>Click here</Link></div>
        </div>
    )
}