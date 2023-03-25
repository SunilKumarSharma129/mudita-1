import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

       /* if(isChosen)
        {
            setTotalques(totalques+1);
        }*/

        const nextQues = currQues+1;
        if(nextQues < Surveyques.length)
        {
            setCurrQues(nextQues);
        }
        else{
            setShowTotal(true);
        }
    }

    return(
        <div className='survey bg-snow justify-center h-screen flex items-center'>
            {showTotal ? (
                <div>
                    <div className='text-xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-custom-green'>Thank you!</div>
                    
                    <div>
                    <Link to="/Doctor"><button className='w-full bg-new-green hover:bg-hover-green hover:text-white my-2 rounded-full p-3'>Continue</button></Link>
                    </div>
                </div>
            )
            :(
        <>
        
        <div className='h-96 w-full  bg-lavender'>
        <div className='px-3 md:px-56 lg:px-56 xl:px-56 2xl:px-56'>
        <div className='heading text-5xl tracking-wide text-center'>
            Help us match you to the <span className=' text-new-green'>right therapist</span>
        </div>
        <div className='para text-center my-2 md:my-9 lg:my-9 xl:my-9 2xl:my-9 px-1 md:px-20 lg:px-20 xl:px-20 2xl:px-20'>
            <p>Please fill out this short questionnaire to provide some background information 
                about you and the issues you'd like to deal with in therapy. It would help us 
                match you with the most suitable therapist for you. Your answers will also give
                this therapist a good starting point in getting to know you.</p>
        </div>
        </div>
        <div className='px-2 md:px-96 lg:px-96 xl:px-96 2xl:px-96'>
        <div  className='shadow-lg h-max bg-white p-9'>
        <div className='question '>
            
            <div className='quesText text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl mx-auto'>
                {Surveyques[currQues].Question}
            </div>
        </div>

        <div className='answer mt-3 text-start text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl flex flex-col'>
            {Surveyques[currQues].AnswerText.map((answer) =>
            (
                <button className='bg-new-green hover:bg-hover-green hover:text-white my-2 rounded-full p-3' onClick={(e)=>handleResponse(e)}>{answer.Answer}</button>
            ))}
        </div>
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