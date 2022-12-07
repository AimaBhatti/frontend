import { createContext, useContext, useEffect, useState } from "react";
import { getUserFromLocalCookie } from "../lib/auth";
import Cookies from "js-cookie";
import Router from "next/router";

let userState;

const User = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ id: null, username: null });
  const [loading, setLoading] = useState(false);

  const login = (res) => {
    console.log(res)
    setUser({ id: res.user.id, username: res.user.username });
    setToken(res);
  };

  const logout = () => {
    setUser({ id: null, username: null });
    unsetToken();
  };

  const setToken = (data) => {
    if (typeof window === "undefined") {
      return;
    }
    Cookies.set("id", data.user.id);
    Cookies.set("username", data.user.username);
    Cookies.set("jwt", data.jwt);

    if (Cookies.get("username")) {
      Router.replace("/");
    }
  };

  const unsetToken = () => {
    if (typeof window === "undefined") {
      return;
    }
    Cookies.remove("id");
    Cookies.remove("jwt");
    Cookies.remove("username");
    Router.replace('/');
  };

  useEffect(() => {
    if (!userState && user) {
      userState = user;
    }
  }, [user]);

  return (
    <User.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </User.Provider>
  );
};

export const useUser = () => useContext(User);

export const useFetchUser = () => {
  const [data, setUser] = useState({
    user: userState || null,
    loading: userState === undefined,
  });

  useEffect(() => {
    if (userState !== undefined) {
      return;
    }

    let isMounted = true;
    const resolveUser = async () => {
      const user = await getUserFromLocalCookie();
      if (isMounted) {
        setUser({ user, loading: false });
      }
    };
    resolveUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
};
