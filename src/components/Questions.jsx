import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";


const Questions = () => {
    const { id } = useParams();
    const history = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get(
                `https://opentdb.com/api.php?amount=10&category=${id}`
            );
            setQuestions(response.data.results);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchQuestions();
        }
    }, [id]);

    const shuffleAnswers = (correctAnswer, incorrectAnswers) => {
        const allAnswers = [...incorrectAnswers, correctAnswer];
        const shuffledAnswers = [...allAnswers].sort(() => Math.random() - 0.5);

        return shuffledAnswers;
    };


    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestion].correct_answer) {
            setScore(score + 1);
        }

        if (currentQuestion < 9) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Quiz finished
            const currentDate = new Date().toLocaleDateString();
            const newScore = {
                date: currentDate,
                score,
                answers: questions.map(q => q.correct_answer),
                category: questions[currentQuestion].category
            };

            const storedScores = JSON.parse(localStorage.getItem('scores')) || [];
            const updatedScores = [...storedScores, newScore];

            localStorage.setItem('scores', JSON.stringify(updatedScores));
            localStorage.setItem('currentScore', JSON.stringify(score));

            history('/thank-you');
        }
    };

    return (
        <>
            {questions.length > 0 ? (
                <div className="flex flex-col items-center">
                    <div className="text-center text-green text-[50px] font-bold mb-[22px]">Question {currentQuestion + 1}:</div>
                    <div className={
                        `py-1 px-2 w-[100px] rounded-l-xl rounded-br-xl flex justify-center items-center text-white text-base capitalize
                            ${questions[currentQuestion].difficulty === 'easy' ?
                            'bg-light-green' : 
                            questions[currentQuestion].difficulty === 'medium' ?
                            'bg-yellow' : 
                            'bg-orange'}
                        `}>
                        {questions[currentQuestion].difficulty}
                    </div>
                    <p className="mt-[87px] text-3xl text-center text-typography font-bold mb-[72px]" dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
                    <div className="flex flex-wrap gap-6 flex-col sm:flex-row">

                        {shuffleAnswers(
                            questions[currentQuestion].correct_answer,
                            questions[currentQuestion].incorrect_answers
                        ).map((answer) => (
                            <button
                                key={answer}
                                onClick={() => handleAnswer(answer)}
                                className="w-[290px] max-w-1/4 py-4 px-5 rounded-[18px] border-2 border-solid border-border-green text-lg text-typography font-bold"
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                </div>
            ) : <div>Loading...</div>}
        </>
    );
};

export default Questions;
