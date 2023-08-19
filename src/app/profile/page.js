"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import TopicList from "@/components/TopicList";
import Navbar from "@/components/Prof_Navbar";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function page() {
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
  };
  return (
    <main className="m-12">
      <Navbar />
      <TopicList />
      <TopicList />
      <TopicList />
      <TopicList />

      <TopicList />
      <button
        onClick={logout}
        className="border-2  text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"
      >
        Logout
      </button>
    </main>
  );
}
