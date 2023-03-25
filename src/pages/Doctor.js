import React, { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

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

  return(
    <div>
      <Navbar />
      <div className="bg-plum h-screen flex flex-wrap justify-center w-full gap-20 px-2 py-10 mt-10 wrapper">
        {data.map((value) => {
          return (
            
<div class="card card-compact bg-white w-96 bg-base-100 h-max shadow-xl">
  <figure><img className="w-full h-48 object-cover" src={value.avatar} alt="Shoes" /></figure>
  <div class="card-body text-center ">
    <h1 class="text-2xl mt-4 card-title">{value.name}</h1>
    <div className="text-xl text-gray">{value.degree}</div>
    <div class="card-actions">
      <button className="mt-4  p-3 text-2xl bg-custom-green text-white">Book Appointment</button>
    </div>
  </div>
</div>

          );
        })}
      </div>
    </div>
  )
};

export default Doctor;
