"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { setUserName } from "@/lib/toolkit/slices/username";

//This project is work in progress 

const Welcome = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setUserName(name));
    setOpen(false);
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex h-screen flex-col gap-4">
          <div className="flex items-end justify-end p-4 px-20">
            <Button onClick={() => setOpen(true)}>Edit Profile</Button>
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="font-bold text-4xl text-orange-300">
              {"welcome".toUpperCase()}
            </div>

            <div className="font-bold text-3xl">{username && username}</div>
          </div>
        </div>

        {/* <Button variant="outline">Edit Profile</Button> */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={username ? username : ""}
                className="col-span-3"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue={username ? `@${username.toLowerCase()}` : ""}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Welcome;
