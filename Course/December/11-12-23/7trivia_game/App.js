import React from 'react'
import '../styles/App.css';

const App = () => {
    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');
    const [userAnswer, setUserAnswer] = React.useState('');
    const [result, setResult] = React.useState('');

    React.useEffect(() => {
        initial();
    }, []);

    const handleAnswerChange = (event) => {
        setUserAnswer(event.target.value);
    };

    const initial = async () => {
        try {
            let response = await fetch('https://opentdb.com/api.php?amount=1')
            response = await response.json();
            if (response.response_code == 0) {
                setQuestion(response.results[0].question);
                setAnswer(response.results[0].correct_answer);
                setUserAnswer('');
                setResult(' ')
            }
            else { 
                initial() 
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = () => {
        if (userAnswer.toLowerCase() === answer.toLowerCase()) {
            setResult('Correct!');
        } else {
            setResult('Incorrect. The correct answer is: ' + answer);
        }
        initial();
    };

    return (
        <div id='main'>
            <h1 className='title'>Trivia Game</h1>
            <p className='question-para'>Question: {question}</p>
            <input className='answer-input-field' type="text" value={userAnswer} onChange={handleAnswerChange} />
            <button className='submit-btn' onClick={handleSubmit}>Submit</button>
            {result && <p className='result-para'>{result}</p>}
        </div>
    );
};


export default App;
