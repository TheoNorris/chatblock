"use client";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import Typewriter from "@components/Typewriter";

const Home = () => {
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

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
            {providers &&
              Object.values(providers).map((provider) => (
                <Link key={provider.name} href="/profilepage">
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="button"
                  >
                    SIGN IN
                  </button>
                </Link>
              ))}
            <button className="button opacity-transition">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
