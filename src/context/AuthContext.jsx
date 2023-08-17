import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from "../services/FirebaseConfig";
import { getProfile, setProfileData, setWorkout, updateProfile } from "../services/profile";
import { getWorkout } from "../services/workout";
import jwt_decode from "jwt-decode";

function toTimeStamp(strDate) {
    var datum = Date.parse(strDate);
    return datum/1000;
}


export const AuthContext = createContext({});
const authRef = auth;




export const Auth = ({ children }) => {

  const [user, setUser] = useState(null);

  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  const [userExercises, setUserExercises] = useState();

  const provider = new GoogleAuthProvider();


  useEffect(() => {
    const storagedUser = window.localStorage.getItem('@App:user');
    const token = window.localStorage.getItem('@App:token');

    if (token) {
      var decoded = jwt_decode(token);
      const newDate = new Date();
     const timeStamp = toTimeStamp(newDate);
     if (timeStamp > decoded.exp) {
        console.log("é maior");
        logout();
        setLoading(false);
     } else  {
      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
     }
    }
    setLoading(false);
   
    // const storagedToken = localStorage.getItem('@App:token');

   

  }, []);

  useEffect(() => {
    async function getProfileUser() {
      try {
        const res = await getProfile(user.uid);
        if (res) {
          setProfile(res);
        }
      } catch (error) {
        console.log(error);
      }

    }
    if (user) {
      if (user.email !== 'admin@admin.com') {
        getProfileUser();
        getUserExercises();
      } else {
        setProfile(null);
      }
    }
  }, [user]);

  async function login(email, senha) {
    try {
      const response = await signInWithEmailAndPassword(authRef, email, senha);
      // localStorage.setItem('@App:user', email);
      // localStorage.setItem('@App:senha', senha);
      setUser(response.user);
      localStorage.setItem("@App:token", response.user.accessToken);
      // localStorage.setItem("@User", JSON.stringify(response.user));
      localStorage.setItem("@App:user", JSON.stringify(response.user));
      console.log(response);
      // console.log(response.user.accessToken);

      return true;

    } catch (error) {
      return error.message;
    }

  }

  async function signUp(email, senha) {

    try {
      const response = await createUserWithEmailAndPassword(authRef, email, senha);
      // localStorage.setItem('@App:user', email);
      // localStorage.setItem('@App:token', senha);
      // localStorage.setItem("@AccessToken", response.user.accessToken);
      // localStorage.setItem("@User", JSON.stringify(response.user));
      // return true;
      await setProfileData({ email }, response.user.uid);
      await setWorkout(response.user.uid);
      return response;
    } catch (error) {
      return error.message;
    }

  }

  async function forgotPassword(email) {

    try {
      const response = await sendPasswordResetEmail(authRef, email);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  async function socialLogin(email) {
    try {
      const res = await signInWithPopup(authRef, provider);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {

    // localStorage.removeItem('@AccessToken');
    // localStorage.setItem('@User');

    // setUser(null);

    setUser(null);

    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('@App:token');
  }

  async function updateProfileUser(data) {
    console.log(data);
    try {

      await updateProfile(data, user.uid);
      const res = await getProfile(user.uid);
      if (res) {
        setProfile(res);
      }
    } catch (error) {
      console.log(error);
    }

  }

  async function getUserExercises() {
    try {

      const res = await getWorkout(user.uid);

      if (res) {
        setUserExercises(res);
      }
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <AuthContext.Provider value={{ signed: !!user, user, profile, loading, userExercises, login, signUp, forgotPassword, socialLogin, logout, updateProfileUser }}>
      {children}
    </AuthContext.Provider>
  );
};




export default Auth;



