import { useState } from "react";
import signInWithEmailAndPassword from "../utility/SignIn";
import { useAuthContext } from "../hooks/useAuthContext";
import { BASE_URL } from "../utility/Constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const loginUrl = BASE_URL + "user";

export const useLogin = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userDetails = await signInWithEmailAndPassword(email, password);
      const token = await userDetails.user.getIdToken();
      const response = await axios.get(loginUrl, {
        headers: {
          Authorization: token,
        },
      });

      if (response.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: token,
            user: response.data,
          })
        );
        dispatch({
          type: "SIGNIN",
          payload: {
            token: token,
            user: response.data,
          },
        });
        navigate("/");
      } else {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, signIn };
};
