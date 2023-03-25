export const BASE_URL = "https://api-mudita.up.railway.app/";

export const surveyQuestions = [
  {
    Question: "Age",
    next: [8, 2],
  },
  {
    Question: "Please select your gender",
  },
  {
    Question: "Marital Status",
    AnswerText: ["Divorced", "Married", "Single"],
    next: [3, 3, 3],
  },
  {
    Question: "What is your employment situation?",
    AnswerText: ["Business", "Job", "Retired", "Unemployed"],
    next: [8, 8, 8, 8],
  },
  {
    Question: "Are you diabetic?",
    AnswerText: ["No", "Yes"],
    next: [5, 5],
  },
  {
    Question: "How is your blood pressure?",
    AnswerText: ["High", "Low", "Normal"],
    next: [9, 9, 9],
  },
  {
    Question: "Do you have any disability?",
    AnswerText: ["No", "Yes"],
    next: [7, 7],
  },
  {
    Question: "Do you have any history of health condition?",
    AnswerText: ["No", "Yes"],
    next: [9, 4],
  },
  {
    Question: "What is you family structure?",
    AnswerText: ["Joint", "Nuclear"],
    next: [6, 6],
  },
  {
    Question: "Do you suffer from headaches?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [10, 11, 10, 11, 11],
  },
  {
    Question: "Do you suffer from dizziness?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [11, 11, 11, 11, 11],
  },
  {
    Question: "Have you suffered any kind of loss, change, ot trauma recently?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [12, 12, 12, 12, 12],
  },
  {
    Question: "Do you get panic attacks?",
    AnswerText: ["No", "Yes"],
    next: [14, 13],
  },
  {
    Question: "Do you feel pain in heart or chest?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [14, 14, 14, 14, 14],
  },
  {
    Question: "Do you feel pain in lower back?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [15, 15, 15, 15, 15],
  },
  {
    Question: "Do you suffer from nausea or upset stomach?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [16, 16, 16, 16, 16],
  },
  {
    Question: "Do you feel soreness in muscles?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [17, 24, 17, 24, 24],
  },
  {
    Question: "Do you have trouble in getting your breathe?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [20, 20, 20, 20, 20],
  },
  {
    Question: "Do you get hot or cold spells?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [19, 19, 19, 19, 19],
  },
  {
    Question: "Do you feel numbness or tingling in parts of your body?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [24, 24, 24, 24, 24],
  },
  {
    Question: "Do you have a lump in your throat",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [21, 24, 21, 24, 24],
  },
  {
    Question: "Do you feel weak in parts of your body?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [22, 24, 22, 24, 24],
  },
  {
    Question: "Do you feel heavy in your arms or legs?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [18, 18, 18, 18, 18],
  },
  {
    Question: "Are you worried about your health?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [25, 29, 25, 29, 29],
  },
  {
    Question: "Have you ever though that the doctor is wrong?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [23, 23, 23, 23, 23],
  },
  {
    Question: "Do you feel scared suddenly?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [26, 26, 26, 26, 26],
  },
  {
    Question: "Do you suffer from nervousness or shakiness?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [27, 27, 27, 27, 27],
  },
  {
    Question: "Do you overthink?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [31, 31, 31, 31, 31],
  },
  {
    Question: "Do you feel hopeless?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [30, 30, 30, 30, 30],
  },
  {
    Question: "Feeling everything is an effort?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [32, 32, 32, 32, 32],
  },
  {
    Question: "Feeling Blue?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [29, 29, 29, 29, 29],
  },
  {
    Question: "Feeling worthless?",
    AnswerText: ["No", "Yes"],
    next: [33, 33],
  },
  {
    Question: "Do you get suicidal thoughts?",
    AnswerText: ["No", "Yes"],
    next: [35, 37],
  },
  {
    Question: "Feeling of being trapped or caught?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [28, 28, 28, 28, 28],
  },
  {
    Question: "Feeling lonely?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [36, 36, 36, 36, 36],
  },
  {
    Question: "Do you blame yourself for things?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [36, 36, 36, 36, 36],
  },
  {
    Question: "Overall, how would you say your health is?",
    AnswerText: ["Excellent", "Fair", "Good", "Poor", "Very good"],
    next: [null, null, null, null, null],
  },
  {
    Question: "Do you have difficulty in remembering things?",
    AnswerText: ["Extreme", "Little", "Moderate", "Not at All", "Quite a bit"],
    next: [34, 34, 34, 34, 34],
  },
];

export const disease = [
  "Addictive Behaviours",
  "Alzheimer",
  "Anxiety",
  "Anxiety Disorder",
  "Bipolar Disorder",
  "Depression",
  "Eating Disorder",
  "OCD",
  "Panic Disorder",
  "Parkinson",
  "Personality Disorder",
  "Post-Traumatic Stress Disorder",
  "Schizophrenia",
];
