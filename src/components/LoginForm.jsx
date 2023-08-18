'use client'

import React, { useEffect } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaFacebookF, FaRegEnvelope, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Link from "next/link";
import { useRouter } from 'next/navigation';




export default function Login() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    })
    const [error,setError]=React.useState("");

   const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
        setError("all fields are necessary");
    } else {
       
        setError("");
        onLogin();
    }
};
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        

        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    return (
        <main>

            <div className="flex flex-col w-full flex-1 px-20 text-center items-center justify-center min-h-screen bg-gray-200">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    <div className="w-3/5 p-5">
                        <div className="text-left font-bold">
                        <span className="text-blue-500">Profile</span><span className="text-black">Sphere</span>
                        </div>
                        <div className="py-10">
                            <h2 className="text-5xl font-bold text-blue-500 mb-2">{loading ? "Processing" : "Login"}</h2>
                            <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
                            <div className="flex justify-center my-2">
                                <a href="#" className='border-2 border-gray-200 bg-blue-500 rounded-full p-3 mx-1'><FaFacebookF className="text-sm" /></a>
                                <a href="#" className='border-2 border-gray-200  bg-blue-500 rounded-full p-3 mx-1'><FaLinkedinIn className="text-sm" /></a>
                                <a href="#" className='border-2 border-gray-200 bg-blue-500 rounded-full p-3 mx-1'><FaGoogle className="text-sm" /></a>
                            </div>
                            <p className="text-gray-400 my-3">or use your email account</p>
                            <form className="flex flex-col items-center" method='POST' onSubmit={handleSubmit}>
                                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input

                                        id="email"
                                        type="text"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        placeholder="email"
                                        className='bg-gray-100 text-black outline-none text-sm flex-1' />
                                </div>
                                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input

                                        id="password"
                                        type="password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        placeholder="password"
                                        className='bg-gray-100 outline-none text-sm text-black flex-1' />
                                </div>
                                <div className="flex-64 mb-5 text-black items-center justify-center">
                                    <label className='flex-items-center text-xs'><input type="checkbox" name='remember' className='mr-2 mt-1' />Remember me</label>
                                </div>
                                {error && (<div
                                    className="bg-red-500 text-white w-fit text-sm py-1 mb-2 px-3 rounded-md mt-2 flex items-start">{error}</div>)}
                                <button
                                    onClick={handleSubmit}
                                    className='border-2  text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white' >login</button>
                            </form>
                        </div>

                    </div>
                    <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>

                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">Fill up personal information and start journey with us</p>
                        <Link href="/signup" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500' >SignUp
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    )
}
