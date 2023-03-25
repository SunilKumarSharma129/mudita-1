import React, { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetch } from "../hooks/useFetch";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCalendlyEventListener, PopupButton } from "react-calendly";
import { usePost } from "../hooks/usePost";
import { disease } from "../utility/Constants";

const Doctor = () => {
  const location = useLocation();
  const propsData = location.state;
  const { user } = useAuthContext();
  const { loading, error, fetch } = useFetch();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { posting, post, postError } = usePost();
  const [doc, setDoc] = useState(null);

  console.log(disease[Math.round(propsData.prediction)]);

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
      <div className="bg-plum px-2 py-10 mt-10">
      <div className="lg:text-3xl xl:text-3xl text-xl 2xl:text-3xl md:text-3xl text-hover-green text-center">Based on your response, following illness can be predicted:</div>
        <div className="lg:text-5xl xl:text-5xl text-2xl 2xl:text-5xl md:text-5xl my-6 text-custom-green text-center">{disease[Math.round(propsData.prediction)]}</div>
        <div className="lg:text-2xl xl:text-2xl text-lg 2xl:text-2xl md:text-3xl p-5 bg-white text-hover-green text-center">To get proper analysis, you can consult with following recommended doctors.</div>
        <div className="mt-10 flex flex-wrap justify-center w-full gap-20 wrapper">
        {data.map((value) => {
          return (
            <div class="card card-compact bg-white md:w-96 2xl:w-96 xl:w-96 lg:w-96  w-84 bg-base-100 h-max shadow-xl rounded-xl overflow-hidden">
              <figure>
                <img
                  className="w-full h-48 object-cover "
                  src={value.avatar}
                  alt="Doc Image"
                />
              </figure>
              <div class="card-body text-center">
                <h1 class="text-2xl mt-4 card-title">{value.name}</h1>
                <div className="text-xl text-gray">{value.degree}</div>
                <div class="card-actions mx-10 my-8 rounded-lg  p-3 text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl bg-custom-green text-white">
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
    </div>
  );
};

export default Doctor;
