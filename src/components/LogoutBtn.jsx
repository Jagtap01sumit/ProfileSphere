"use client";
import axios from "axios";

import React from "react";

import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get("api/users/logout");
            toast.success("logout successfully");
            router.push("/login");
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
    return (
        <div> <button
            onClick={logout}
            className="border-2  text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"
        >
            Logout
        </button></div>
    )

}