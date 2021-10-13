import axios from "axios";

export const AuthApiLogin = async (email: string, password: string,token:string) => {
    if(token){
      const response = await axios.post(
        "https://f9beb2dd-98bc-4d32-b98c-2be892155154.id.repl.co/users/login",
        {
          email,
          password,
        },{headers:{authorization:token}}
      );
      return response;
    }
    const response = await axios.post(
      "https://f9beb2dd-98bc-4d32-b98c-2be892155154.id.repl.co/users/login",
      {
        email,
        password,
      }
    );
    return response;
  };

export const AuthApiSignUp = async (name: string, email: string, password: string) => {
    const response = await axios.post(
      "https://f9beb2dd-98bc-4d32-b98c-2be892155154.id.repl.co/users/signup",
      {
        name,
        email,
        password,
      }
    );
    return response;
  };