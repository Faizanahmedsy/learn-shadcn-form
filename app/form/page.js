"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const Form = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input placeholder="Your Name" />
        <Button type="submit" onClick={() => router.push("/welcome")}>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Form;
