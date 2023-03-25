import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Doctor = () => {
  const { loading, error, fetch } = useFetch();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("doctor/all").then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  console.log();

  return <div>Doctor</div>;
};

export default Doctor;
