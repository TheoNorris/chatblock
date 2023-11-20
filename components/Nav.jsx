"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { disconnect } from "mongoose";

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the width as needed

  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className="bg-white-800 p-4 flex items-center justify-between">
      {/* Company Logo */}
      <Link href="/">
        <img
          src="/assets/images/blacklogo.png"
          alt="chatbox logo"
          width={40}
          height={40}
          className="object-contain mx-auto"
        />
      </Link>

      {isMobile ? (
        session?.user ? (
          <div className="flex inline-block">
            <img
              src={session?.user.image}
              alt="Burger Icon"
              className="w-8 h-8 rounded-full object-cover"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown-container">
                <Link
                  href="/profile"
                  className="dropdown-item"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-post"
                  className="dropdown-item"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Post
                </Link>
                <button
                  type="button"
                  className="button-clean m-2"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  SIGN OUT
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="button"
                >
                  SIGN IN
                </button>
              ))}
          </>
        )
      ) : (
        <div className="flex items-center">
          {session?.user ? (
            <>
              <Link href="/create-post">
                <button className="button m-2">POST</button>
              </Link>
              <button
                type="button"
                onClick={signOut}
                className="button-clean m-2"
              >
                SIGN OUT
              </button>
              <Link href="/profile">
                <img
                  src={session?.user.image}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </Link>
            </>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="button"
                  >
                    SIGN IN
                  </button>
                ))}
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
