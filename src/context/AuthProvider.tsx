import { createContext, useContext, useState, useEffect } from "react";
import { AuthApiLogin, AuthApiSignUp } from './AuthHandler';
import { AuthenticationContextType } from './quizContext.type'
export const AuthContext = createContext({} as AuthenticationContextType);
export const AuthProvider: React.FC = ({ children }) => {
  const [isUserLogin, setLogin] = useState(false);
  const [token,setToken]=useState("");
  useEffect(() => {
    const localUser = localStorage?.getItem("QuizAuth")
    if (localUser) {
      let loginStatus = JSON.parse(localUser);
      loginStatus.tokens && setLogin(true);
      setToken(loginStatus.tokens)
    }
  }, []);

  async function loginUserWithCredentials(email: string, password: string) {
    try {
        const response = await AuthApiLogin(email, password,token);
        if (response.data.success) {
            setLogin(true);
            localStorage.setItem(
              "QuizAuth",
              JSON.stringify({ tokens: response.data.token })
            );
            return { success: response.data.success };
        }
        } catch (error) {

        console.log("Sahi username password nahi pata kya?", error);
        return { success: false };
        }
    }

  async function signinUser(username: string, email: string, password: string) {
    try {
      const response = await AuthApiSignUp(username, email, password);
      console.log(response.data)
      if (response.data.success) {
          console.log(response.data.user.token)
        setLogin(true);
        localStorage.setItem(
          "QuizAuth",
          JSON.stringify({ tokens: response.data.user.token })
        );
        return { success: response.data.success };
      }
    } catch (error) {
      console.log("Sahi username password nahi pata kya?", error);
      return { success: false };
    }
  }
  function LogOut() {
    setLogin(false);
    localStorage.removeItem("QuizAuth");
  }
  return (
    <AuthContext.Provider
      value={{
        isUserLogin,
        loginUserWithCredentials,
        signinUser,
        LogOut,
        token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}