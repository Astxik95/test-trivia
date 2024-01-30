const Scores = () => {
    const storedScores = JSON.parse(localStorage.getItem('scores')) || [];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Scores History</h2>
            {storedScores.length === 0 ? (
                <p>No scores available.</p>
            ) : (
                <>
                    {storedScores.map((score, index) => (
                        <div className="bg-white rounded-md shadow-md p-4 mb-4">
                            <div
                                className="text-xl mb-2 font-bold text-green"
                                dangerouslySetInnerHTML={{ __html: score.category }}
                            />
                            <p className="text-lg text-typography">
                                <span className="font-bold">Date:</span> {score.date}
                            </p>
                            <p className="text-lg text-typography">
                                <span className="font-bold">Score:</span> {score.score}/10
                            </p>
                            <p className="text-lg text-typography">
                                <span className="font-bold">Answers:</span> {score.answers.join(', ')}
                            </p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Scores;
