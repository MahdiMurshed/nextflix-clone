import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setMsg("");
    setEmail(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (email) {
      router.push("/");
    } else {
      setMsg("Please enter email");
    }
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)),
          url(/static/signin-bg.jpg)`,
      }}
      className="flex flex-col items-center h-[100vh] bg-[color:var(--black)]"
    >
      <Head>
        <title>Netflix Sign in</title>
      </Head>
      <header className="flex justify-between w-full m-4 px-8">
        <div>
          <a>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width="128px"
              height="34px"
            />
          </a>
        </div>
      </header>
      <main className="flex justify-center items-center w-full h-[100vh] relative z-10">
        <div
          className="flex flex-col pb-4 px-2 pt-2  bg-[color:var(--black20)] w-[240px] h-1/3 
        items-center justify-center"
        >
          <h3 className="text-[color:var(--white10)] font-bold text-xl mb-8 mt-4">
            Sign In
          </h3>
          <input
            className="py-2 px-6 w-full text-[color:var(--black30)] h-10 rounded-lg"
            type="text"
            placeholder="Email"
            onChange={handleChange}
          />
          <p className="my-1 text-[color:var(--white20)]">{msg}</p>
          <button
            className="bg-[color:var(--red10)] px-12 py-2 mt-6  rounded-md text-lg"
            onClick={handleClick}
          >
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
