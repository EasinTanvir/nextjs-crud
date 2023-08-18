"use client";
import axios from "axios";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const MainPostPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const sendData = {
      name,
      email,
    };
    await axios.post("/api/user", sendData);
    router.push("/user");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="">Name</label>
        <input onChange={(e) => setName(e.target.value)} type="text" />
      </div>{" "}
      <div>
        <label htmlFor="">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MainPostPage;
