import React, { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useCalendlyEventListener, PopupButton } from "react-calendly";
import { usePost } from "../hooks/usePost";

const Doctor = () => {
  const { user } = useAuthContext();
  const { loading, error, fetch } = useFetch();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { posting, post, postError } = usePost();
  const [doc, setDoc] = useState(null);

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log(e);
    },
  });

  useEffect(() => {
    if (!user) {
      navigate("/Login");
    } else {
      fetch("doctor/all").then((res) => {
        console.log(res);
        setData(res);
      });
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="bg-plum h-screen flex flex-wrap justify-center w-full gap-20 px-2 py-10 mt-10 wrapper">
        {data.map((value) => {
          return (
            <div class="card card-compact bg-white md:w-96 2xl:w-96 xl:w-96 lg:w-96  w-84 bg-base-100 h-max shadow-xl rounded-xl overflow-hidden">
              <figure>
                <img
                  className="w-full h-48 object-cover "
                  src={value.avatar}
                  alt="Shoes"
                />
              </figure>
              <div class="card-body text-center">
                <h1 class="text-2xl mt-4 card-title">{value.name}</h1>
                <div className="text-xl text-gray">{value.degree}</div>
                <div class="card-actions mx-10 my-8 rounded-lg  p-3 text-2xl bg-custom-green text-white">
                  <PopupButton
                    url="https://calendly.com/hackeramitkumar"
                    rootElement={document.getElementById("root")}
                    text="Book an Appointment"
                    textColor="#ffffff"
                    color="#00a2ff"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctor;
