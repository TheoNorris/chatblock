"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from "@components/profile";

export const User = () => {
  return (
    <Profile
      name="My"
      desc="User Information"
      data={[]}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
};
