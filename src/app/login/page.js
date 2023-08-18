"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import LoginForm from "../../components/LoginForm";

import Navbar from "@/components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
}
