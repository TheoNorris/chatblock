// app/components/ConditionalNav.jsx
"use client";
import { useRouter } from "next/navigation";
import Nav from "./Nav";

const ConditionalNav = () => {
  const router = useRouter();

  if (router.pathname !== "/") {
    return <Nav />;
  }

  return null;
};

export default ConditionalNav;
