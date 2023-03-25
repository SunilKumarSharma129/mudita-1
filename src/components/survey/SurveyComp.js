import React from 'react'
import { useState } from 'react';

const SurveyComp=()=>
{
    var Surveyques = [
        {
            Question:"Please select your gender",
            AnswerText:[
                {Answer: "Male", isChosen: true},
                {Answer: "Female", isChosen: true},
                {Answer: "Transgender", isChosen: true},
                {Answer: "Other", isChosen: true}
            ]
        },
        {
            Question:"Marital Status",
            AnswerText:[
                {Answer: "Single", isChosen: true},
                {Answer: "Married", isChosen: true},
                {Answer: "Divorced", isChosen: true},
            ]
        },
        {
            Question:"What is your employment situation?",
            AnswerText:[
                {Answer: "Job", isChosen: true},
                {Answer: "Business", isChosen: true},
                {Answer: "Unemployed", isChosen: true},
                {Answer: "Retired", isChosen: true}
            ]
        },
        {
            Question:"Are you diabetic?",
            AnswerText:[
                {Answer: "Yes", isChosen: true},
                {Answer: "No", isChosen: true}
            ]
        },
        {
            Question:"How is your blood pressure?",
            AnswerText:[
                {Answer: "Low", isChosen: true},
                {Answer: "Normal", isChosen: true},
                {Answer: "High", isChosen: true}           
             ]
        },
        {
            Question:"Do you have any disability?",
            AnswerText:[
                {Answer: "Yes", isChosen: true},
                {Answer: "No", isChosen: true}
            ]
        },
        {
            Question:"Do you have any history of health condition?",
            AnswerText:[
                {Answer: "Yes", isChosen: true},
                {Answer: "No", isChosen: true}
            ]
        },
        {
            Question:"What is you family structure?",
            AnswerText:[
                {Answer: "Nuclear", isChosen: true},
                {Answer: "Joint", isChosen: true}
            ]
        },
        {
            Question:"Do you suffer from headaches?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you suffer from dizziness?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Have you suffered any kind of loss, change, ot trauma recently?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you get panic attacks?",
            AnswerText:[
                {Answer: "Yes", isChosen: true},
                {Answer: "No", isChosen: true}
            ]
        },
        {
            Question:"Do you feel pain in heart or chest?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you feel pain in lower back?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you suffer from nausea or upset stomach?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you feel soreness in muscles?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you have trouble in getting your breathe?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you get hot or cold spells?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you feel numbness or tingling in parts of your body?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you have a lump in your throat",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you feel weak in parts of your body?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you feel heavy in your arms or legs?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Are you worried about your health?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Have you ever though that the doctor is wrong?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you feel scared suddenly?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you suffer from nervousness or shakiness?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you overthink?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you feel hopeless?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Feeling everything is an effort?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Feeling Blue?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Feeling worthless?",
            AnswerText:[
                {Answer: "Yes", isChosen: true},
                {Answer: "No", isChosen: true}
            ]
        },
        {
            Question:"Do you get suicidal thoughts?",
            AnswerText:[
                {Answer: "Yes", isChosen: true},
                {Answer: "No", isChosen: true}
            ]
        },
        {
            Question:"Feeling of being trapped or caught?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Feeling lonely?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Do you blame yourself for things?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        },
        {
            Question:"Overall, how would you say your health is?",
            AnswerText:[
                {Answer: "Poor", isChosen: true},
                {Answer: "Good", isChosen: true},
                {Answer: "Very good", isChosen: true},
                {Answer: "Fair", isChosen: true},
                {Answer: "Excellent", isChosen: true}
            ]
        },
        {
            Question:"Do you have difficulty in remembering things?",
            AnswerText:[
                {Answer: "Not at all", isChosen: true},
                {Answer: "Quite a bit", isChosen: true},
                {Answer: "Little", isChosen: true},
                {Answer: "Moderate", isChosen: true},
                {Answer: "Extremely", isChosen: true}
            ]
        }
    ]

    const[currQues, setCurrQues] = useState(0);
    const[totalques, setTotalques] = useState(0);
    const[showTotal, setShowTotal] = useState(false);
    const[response, setResponse] = useState([]);

    const handleResponse=(e)=>
    {
    	response.push(e.target.innerText);

        if(isChosen)
        {
            setTotalques(totalques+1);
        }

        const nextQues = currQues+1;
        if(nextQues < Surveyques.length)
        {
            setCurrQues(nextQues);
        }
        else{
            setShowTotal(true);
        }
    }

    const resetSurvey=()=>
    {
        setCurrQues(0);
        setTotalques(0);
        setShowTotal(false);
    }

    return(
        <div className='survey bg-snow justify-center h-screen flex items-center'>
            {showTotal ? (
                <div>
                    Thank you!
                    <>
                    <button type = "submit" onClick={resetSurvey}>Retake the survey</button>
                    </>
                </div>
            )
            :(
        <>
        
        <div className='bg-lavender h-96 w-full positon-absolute px-56'>
        <div className='heading text-5xl tracking-wide text-center'>
            Help us match you to the <span className=' text-new-green'>right therapist</span>
        </div>
        <div className='para text-center my-9 px-20'>
            <p>Please fill out this short questionnaire to provide some background information 
                about you and the issues you'd like to deal with in therapy. It would help us 
                match you with the most suitable therapist for you. Your answers will also give
                this therapist a good starting point in getting to know you.</p>
        </div>
        <div className='shadow-lg bg-white'>
        <div className='question '>
            
            <div className='quesText text-2xl'>
                {Surveyques[currQues].Question}
            </div>
        </div>

        <div className='answer text-xl flex flex-col'>
            {Surveyques[currQues].AnswerText.map((answer) =>
            (
                <button onClick={(e)=>handleResponse(e)}>{answer.Answer}</button>
            ))}
        </div>
        </div>
        </div>
        </>
       )
            }
            </div>
    )
}

export default SurveyComp; 