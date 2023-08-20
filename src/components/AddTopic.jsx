"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("All field are require");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if (res.ok) {
                router.push("/profile");
            } else {
                throw new Error("Failed to create a topic");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main >
            <form onSubmit={handleSubmit} className="flex flex-col justify-center m-9  gap-3">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="border text-black border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Achivement"
                />

                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="border text-black border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Description"
                />

                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
                >
                    Add Achivements
                </button>
            </form>
        </main>
    );
}