import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetch } from "../hooks/useFetch";

const Doctor = () => {
  const { user } = useAuthContext();
  const { loading, error, fetch } = useFetch();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("doctor/all").then((res) => {
      console.log(res);
      setData(res);
    });
  }, [user]);

  return <div>Doctor</div>;
};

export default Doctor;
