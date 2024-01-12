"use client";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import Typewriter from "@components/Typewriter";
import { useRouter } from "next/navigation";

const Home = () => {
  const [providers, setProviders] = useState(null);
  const [loginDropdown, setLoginDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  const handleSignIn = async (providerId) => {
    await signIn(providerId, { callbackUrl: "/profilepage" });
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div id="home-div" className="text-center">
        <div id="welcome-text">
          <img
            src="/assets/images/blacklogo.png"
            alt="chatbox logo"
            width={300}
            height={300}
            className="object-contain mx-auto"
          />
          <h1 id="sosspot" className="text-5xl font-bold mt-4 mb-4">
            CHATBLOCK
          </h1>
          <Typewriter />

          <div className="flex space-x-4 mt-4">
            <div className="login-div">
              <button
                onClick={() => setLoginDropdown((prev) => !prev)}
                className="button opacity-transition"
              >
                LOGIN
              </button>
              {loginDropdown && (
                <div>
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
            <Link href="/register">
              <div>
                <button className="button opacity-transition">REGISTER</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
