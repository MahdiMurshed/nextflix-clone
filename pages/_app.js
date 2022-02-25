import "../styles/globals.css";
import { useState, useEffect } from "react";
import Login from "./login";
import { m } from "lib/magic-client";
import Loading from "@/components/loading";

function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const lg = await m.user.isLoggedIn();
        setLoggedIn(lg);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return !loggedIn ? <Login /> : <Component {...pageProps} />;
}

export default MyApp;
