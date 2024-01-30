import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
    const score = localStorage.getItem('currentScore') || '';

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center text-green text-[50px] leading-normal font-bold mb-[146px]">Thank You</div>
                <p className="text-3xl text-center text-typography font-bold">Your Score: {score} / 10</p>
                <div className="flex gap-x-6">
                    <Link
                        to='/'
                        className="flex justify-center items-center mt-[99px] py-4 px-5 bg-green text-white w-[150px] h-14 rounded-[18px] text-lg font-bold"
                    >
                        Back to home
                    </Link>
                    <Link
                        to='/scores'
                        className="flex justify-center items-center mt-[99px] py-4 px-5 bg-green text-white w-[150px] h-14 rounded-[18px] text-lg font-bold"
                    >
                        View scores
                    </Link>
                </div>
            </div>
        </>
    )
};

export default ThankYouPage;