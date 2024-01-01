import { CallStateAuth } from "@/services/firebase/authFirebase";
import { createContext, useContext, useEffect, useState } from "react";
export const contextAuth = createContext();

export const useAuth = () => {
  const authContext = useContext(contextAuth);
  return authContext;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const setStateUser = (user) => setUser(user);
  const validateUser = async (email) => {
    /*const usuarios = await getAllUsers()
    let user = {};
    usuarios.data.forEach((user_) => {
      if (user_.email === email) {
        user = user_
      }
    })

    return user*/
  }

  useEffect(() => {
    const unSuscribe = CallStateAuth(async (user) => {
      if (user) {
        const uid = user.uid;
        //const userData = await validateUser(user?.email)

        setUser({ ...user/*, ...userData*/ });
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unSuscribe();
  }, []);

  return (
    <contextAuth.Provider
      value={{
        user,
        setStateUser: setStateUser,
        loading,
        setLoading: setLoading,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};
