"use client";

import { useEffect, useState } from "react";
import { DeleteAllCookies } from "./clear-cookies.action";

function getCookies() {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  return JSON.stringify(cookies, undefined, 2);
}

interface DisplayCookiesParams {
  deleteAllCookies: DeleteAllCookies;
}

/**
 * Display cookies on set to the browser, shows cookies using JS, so the cookie set can not be HttpOnly.
 */
export function DisplayCookies({ deleteAllCookies }: DisplayCookiesParams) {
  // Little hacky, but just for demo we will set state from an effect to track cookies
  const [cookieListString, setCookieListString] = useState("");

  useEffect(() => {
    // Do an initial state set on mount
    setCookieListString(getCookies());

    // Poll cookies every 500ms to track cookie changes
    const intervalId = setInterval(() => {
      setCookieListString(getCookies());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-600">
      <h2>Cookies - updated every 500ms</h2>
      <pre>{cookieListString}</pre>
      <button
        onClick={async () => {
          await deleteAllCookies();
        }}
        className="bg-red-600 rounded-sm p-1 m-2"
      >
        Reset Cookie Values
      </button>
    </div>
  );
}
