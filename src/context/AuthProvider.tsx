import { createContext, useContext, useState, useEffect } from "react";
import { AuthApiLogin, AuthApiSignUp } from './AuthHandler';
import { AuthenticationContextType } from './quizContext.type'
export const AuthContext = createContext({} as AuthenticationContextType);
export const AuthProvider: React.FC = ({ children }) => {
  const [isUserLogin, setLogin] = useState(false);
  const [token,setToken]=useState("");
  const [email,setEmail]=useState("");
  useEffect(() => {
    (async function(){
      const localUser = await localStorage?.getItem("QuizAuth")
      console.log(localUser)
      if (localUser) {
        let loginStatus = JSON.parse(localUser);
        loginStatus.tokens && setLogin(true);
        setToken(loginStatus.tokens)
        setEmail(loginStatus.emails)
      }
    })()
  },[isUserLogin]);

  async function loginUserWithCredentials(email: string, password: string) {
    try {
        const response = await AuthApiLogin(email, password,token);
        console.log(response)
        if (response.data.success) {
            setLogin(true);
            localStorage.setItem(
              "QuizAuth",
              JSON.stringify({ tokens: response.data.token, emails:email })
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
          JSON.stringify({ tokens: response.data.user.token,emails:email })
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
    setToken("");
    setEmail("");
    localStorage.removeItem("QuizAuth");
  }
  return (
    <AuthContext.Provider
      value={{
        isUserLogin,
        loginUserWithCredentials,
        signinUser,
        LogOut,
        token,
        email
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}