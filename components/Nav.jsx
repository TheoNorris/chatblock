"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the width as needed
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);
  const [loginDropdown, setLoginDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  const handleSignOut = async () => {
    setToggleDropdown(false);
    await signOut({
      callbackUrl: "/",
    });
  };

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
      <h1 className="text-gray-500 text-4xl text-left">CHATBLOCK</h1>
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
                  onClick={handleSignOut}
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
                className="button-clean m-2"
                onClick={handleSignOut}
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
              <div className="login-div">
                <button
                  onClick={() => setLoginDropdown((prev) => !prev)}
                  className="button opacity-transition"
                >
                  LOGIN
                </button>
                {loginDropdown && (
                  <div className="providers-div">
                    {providers &&
                      Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                          <button
                            type="button"
                            onClick={() => handleSignIn(provider.id)}
                            className="social-button"
                          >
                            {provider.id === "google" && (
                              <img
                                src="/assets/images/gmail.png"
                                alt="Google Logo"
                                width={50}
                                height={50}
                              />
                            )}
                            {provider.id === "facebook" && (
                              <img
                                src="/assets/images/facebook.png"
                                alt="Facebook Logo"
                                width={50}
                                height={50}
                              />
                            )}
                          </button>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
