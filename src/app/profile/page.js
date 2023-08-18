import React from "react";
import TopicList from "@/components/TopicList";
import Navbar from "@/components/Prof_Navbar";

export default function page() {
  return (
    <main  className="m-12">
      
     
        <Navbar />
        <TopicList />
        <TopicList />
        <TopicList />
        <TopicList />
        <TopicList />
      
    </main>
  );
}
