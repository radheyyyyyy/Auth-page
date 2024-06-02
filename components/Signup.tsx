"use client"
import {useState} from "react";
import {signup} from "@/server actions/signup";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function Signup(){
    let router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    return(
        <div className='px-10 py-10 border-2 rounded border-black'>
            <div className='font-bold text-2xl mb-5'>Register to create an Account</div>
            <div>
                <label className='font-bold mb-3' id="username">First Name
                <input className='w-full p-1 border-2 border-gray-300 rounded' id="fname" type="text"
                       placeholder="Radhey" onChange={(e) => setFirstName(e.target.value)}/></label>
            </div>
            <div className='mt-4'>
                <label className='font-bold mb-3' id="username">Last Name
                <input className='w-full p-1 border-2 border-gray-300 rounded' id="lname" type="text"
                       placeholder="Shah" onChange={(e) => setLastName(e.target.value)}/></label>
            </div>
            <div className='mt-4'>
                <label className='font-bold mb-3' id="username">Email
                <input className='peer w-full p-1 border-2 border-gray-300 rounded' id="email" type="email"
                       placeholder="Email" onChange={(e) => setEmail(e.target.value)}/></label>
                <p className='invisible peer-invalid:visible text-red-400'>Please Enter valid email</p>
            </div>
            <div>
                <label className='font-bold mb-3' id="password">Password
                <input className=' w-full p-1 border-2 border-gray-300 rounded' id="password" type="password"
                       placeholder="Password" onChange={(e) => setPassword(e.target.value)}/></label>

            </div>
            <div>
                <button onClick={async ()=>{
                    await signup(email,password,firstName,lastName);
                    alert("Registered successfully");
                    router.push("/api/auth/signin")
                }} className='bg-black w-full p-2 hover:bg-gray-500 hover:text-black rounded text-white mt-4 focus:border-2 focus:border-black'>Register Now</button>
            </div>
            <div className='mt-2 ml-8'>
                Already have an account? <Link href={"/api/auth/signin"} className='text-blue-500 underline'>Log in</Link>
            </div>
        </div>
    )
}