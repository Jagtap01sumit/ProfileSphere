"use client";

import React from "react";
import TopicList from "@/components/TopicList";
import Prof_Navbar from "@/components/Prof_Navbar";

import LogoutBtn from "@/components/LogoutBtn";

export default function page() {
  return (
    <main className="m-12">
      <Prof_Navbar />
      <TopicList />
     <LogoutBtn/>
    </main>
  );
}
