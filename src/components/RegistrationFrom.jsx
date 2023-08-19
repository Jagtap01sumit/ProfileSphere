"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaRegEnvelope, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import axios from "axios";
import { toast } from "react-hot-toast";



export default function RegistrationForm() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",

        password: "",
        username: "",
    });
    const [error, setError] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user.email || !user.password || !user.username) {
            setError("all fields are necessary");
        } else {

            setError("");
            onSignup();
        }
    };
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            console.log("!");
            router.push("/login");
            console.log("2");

        } catch (error) {
            console.log("Signup failed", error.message);

            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <main>

            <div div className="flex flex-col w-full  flex-center px-10 text-center items-center justify-center min-h-screen bg-gray-200">
                <div className="bg-white rounded-2xl shadow-2xl flex  w-full max-w-4xl">
                    <div className="w-full p-5">
                        <div className="text-left font-bold">
                            <span className="text-blue-500">Profile</span><span className="text-black">Sphere</span>

                        </div>
                        <div className="py-10 px-10 w-full flex flex-col items-center justify-center ">

                            <h1 className="text-5xl font-bold text-blue-500 mb-2">{loading ? "Processing" : "Signup"}</h1>
                            <div className="border-2 w-10 border-blue-500 inline-block mb-8"></div>


                            <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
                                <div className="bg-gray-100  p-2 flex items-center mb-3  w-full">
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input

                                        id="username"
                                        type="text"
                                        value={user.username}
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                        placeholder="username"
                                        className='bg-gray-100 text-black w-full outline-none text-sm flex-1' />
                                </div>
                                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input

                                        id="email"
                                        type="text"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        placeholder="email"
                                        className='bg-gray-100  text-black w-full outline-none text-sm flex-1' />
                                </div>

                                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input
                                        className='bg-gray-100 text-black outline-none text-sm flex-1 w-full'
                                        id="password"
                                        type="password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        placeholder="password"
                                    />
                                </div>

                                <div className="flex flex-col mb-5 items-center justify-center">
                                    <label className='flex-items-center text-xs '></label>


                                    {error && (<div className="bg-red-500 text-white w-fit text-sm py-1 px-3  mb-2 rounded-md mt-2 flex items-start">{error}</div>)}


                                    <button
                                        onClick={handleSubmit}
                                        className='border-2  text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white'
                                    >{buttonDisabled ? " signup" : "Done"}
                                    </button>

                                    <label className='flex-items-center text-xs  text-black'><input type="text" name='or' className='mr-1 flex justify-center' />OR</label>
                                    <Link href="/login" className='border-2  text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white' >SignIn
                                    </Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
