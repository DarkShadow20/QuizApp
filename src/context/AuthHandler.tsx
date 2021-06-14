import axios from "axios";

export const AuthApiLogin = async (email: string, password: string,token:string) => {
    if(token){
      const response = await axios.post(
        "https://QuizApp.kunalgupta9.repl.co/users/login",
        {
          email,
          password,
        },{headers:{authorization:token}}
      );
      return response;
    }
    const response = await axios.post(
      "https://QuizApp.kunalgupta9.repl.co/users/login",
      {
        email,
        password,
      }
    );
    return response;
  };

export const AuthApiSignUp = async (name: string, email: string, password: string) => {
    const response = await axios.post(
      "https://QuizApp.kunalgupta9.repl.co/users/signup",
      {
        name,
        email,
        password,
      }
    );
    return response;
  };