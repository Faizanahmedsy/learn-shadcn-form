"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setUserName } from "@/lib/toolkit/slices/username";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const GlobalState = useSelector((state) => state);

  console.log("GlobalState", GlobalState);

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    console.log("name", name);
    e.preventDefault();

    dispatch(setUserName(name));
    router.push("/welcome");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          placeholder="Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button type="submit" onClick={handleSubmit}>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Form;
