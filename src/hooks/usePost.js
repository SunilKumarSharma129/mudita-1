import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utility/Constants";
import { useAuthContext } from "./useAuthContext";

export const usePost = () => {
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState(null);
  const { user } = useAuthContext();

  const post = async (endpoint, body, register) => {
    try {
      console.log(body);
      setPosting(true);
      setPostError(null);
      const response = await axios.post(BASE_URL + endpoint, body, {
        headers: {
          Authorization: register ? "" : user.token,
        },
      });
      console.log(response);
      if (response.status === 200) return true;
      else return false;
    } catch (err) {
      console.log(err);
      setPostError(err);
      return false;
    } finally {
      setPosting(false);
    }
  };

  return { posting, post, postError };
};
