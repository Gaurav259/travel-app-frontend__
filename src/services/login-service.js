import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    console.log(number,password);
    const {
      data: { accessToken, username },
    } = await axios.post("https://travel-app-backend-rbzs.onrender.com/api/auth/login",
      {
      number : number, 
      password : password
      }
    );
    console.log("Logged IN");
    console.log({ accessToken, username });
 
    return { accessToken, username };
  } catch (err) {
    console.log("unable to login",{err});
  }
};









