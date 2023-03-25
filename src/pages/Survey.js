import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import SurveyComp from "../components/survey/SurveyComp";
import { useAuthContext } from "../hooks/useAuthContext";

const Survey = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      navigate("/Login");
    }
  }, [user]);
  return (
    <div>
      <Navbar />
      <SurveyComp />
    </div>
  );
};

export default Survey;
