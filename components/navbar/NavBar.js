import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { m } from "lib/magic-client";

const NavBar = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const { email } = await m.user.getMetadata();
        setUser(email);
      } catch {
        // Handle errors if required!
      }
    };
    getData();
  }, [router]);
  const handleNav = (path, e) => {
    e.preventDefault();
    router.push(path);
  };
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await m.user.logout();
      console.log(await m.user.isLoggedIn()); // => `false`
    } catch (Err) {
      console.log(Err);
    }
    router.push("/login");
  };
  return (
    <header className="fixed top-0 flex items-center justify-around z-50 w-full py-1.5 bg-black/5">
      <div className="flex items-center ">
        <div className="mr-8">
          <Link href="/">
            <a>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128px"
                height="34px"
              />
            </a>
          </Link>
        </div>
        <nav className="">
          <ul className="flex items-center mx-2 px-2 space-x-4">
            <li
              className="inline-block cursor-pointer"
              onClick={(e) => handleNav("/", e)}
            >
              Home
            </li>
            <li
              className="inline-block cursor-pointer"
              onClick={(e) => handleNav("/browse/list", e)}
            >
              My List
            </li>
          </ul>
        </nav>
      </div>
      <div className="relative justify-self-end ml-16">
        <button className="flex" onClick={() => setShowDropdown(!showDropdown)}>
          <p>{user}</p>
          <Image
            src={"/static/expand_more.svg"}
            alt="Expand dropdown"
            width="24px"
            height="24px"
          />
        </button>
        {showDropdown && (
          <div className="absolute top-7 right-7 bg-black/50 px-4 py-2 cursor-pointer">
            <a onClick={handleSignOut}>Sign out</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
