import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { surveyQuestions } from "../../utility/Constants";
import { useAuthContext } from "../../hooks/useAuthContext";
import { usePost } from "../../hooks/usePost";

const SurveyComp = () => {
  const { user } = useAuthContext();
  const [responses, setResponses] = useState(Array(38).fill(0));
  const [currQues, setCurrQues] = useState(0);
  const [end, setEnd] = useState(false);
  const { post, postError, posting } = usePost();
  const [prediction, setPrediction] = useState();

  useEffect(() => {
    console.log(user);
    if (!user) return;
    console.log(user);
    const age = parseInt(user.user.age);
    const gender = 0; // TODO
    const temp = [...responses];
    temp[0] = age;
    temp[1] = gender;
    if (age < 25) setCurrQues(surveyQuestions[0].next[0]);
    else setCurrQues(surveyQuestions[0].next[1]);
    setResponses(temp);
  }, [user]);

  const handleResponse = async (e, idx) => {
    const nextQues = surveyQuestions[currQues].next[idx];
    const temp = [...responses];
    temp[currQues] = idx;
    setResponses(temp);
    if (nextQues) {
      setCurrQues(nextQues);
    } else {
      console.log(responses);
      const res = await post("predict", { inputData: responses }, false);
      setPrediction(res);
      setEnd(true);
    }
  };

  return (
    <div className="survey bg-snow justify-center h-screen flex items-center">
      {end ? (
        <div>
          <div className="text-xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-custom-green">
            Thank you!
          </div>

          <div>
            <Link to="/Doctor" state={prediction}>
              <button className="w-full bg-new-green hover:bg-hover-green hover:text-white my-2 rounded-full p-3">
                See Results
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="lg:h-84 h-96 w-full  bg-lavender">
            <div className="px-3 md:px-20 lg:px-20 xl:px-56 2xl:px-56">
              <div className="heading text-2xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl tracking-wide text-center">
                Help us match you to the{" "}
                <span className=" text-new-green">right therapist</span>
              </div>
              <div className="para text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-center my-2 md:my-9 lg:my-9 xl:my-9 2xl:my-9 px-1 md:px-20 lg:px-20 xl:px-20 2xl:px-20">
                <p>
                  Please fill out this short questionnaire to provide some
                  background information about you and the issues you'd like to
                  deal with in therapy. It would help us match you with the most
                  suitable therapist for you. Your answers will also give this
                  therapist a good starting point in getting to know you.
                </p>
              </div>
            </div>
            {currQues && (
              <div className="px-2 md:px-44 lg:px-56 xl:px-96 2xl:px-96">
                <div className="shadow-lg h-max bg-white p-9">
                  <div className="question ">
                    <div className="quesText text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl mx-auto">
                      {surveyQuestions[currQues].Question}
                    </div>
                  </div>

                  <div className="answer mt-3 text-start text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl flex flex-col">
                    {surveyQuestions[currQues].AnswerText.map((answer, idx) => (
                      <button
                        className="bg-new-green hover:bg-hover-green hover:text-white my-2 rounded-full p-3"
                        onClick={(e) => handleResponse(e, idx)}
                      >
                        {answer}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SurveyComp;
