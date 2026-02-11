import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from './../utils/useLocalStorage';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const createEmptyQuestions = () => {
    return Array.from({ length: 15 }, (_, index) => ({
        id: index + 1,
        title: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
    }));
};

function CreateGame() {
	const navigate = useNavigate()
    const [savedQuestions, setSavedQuestions] = useLocalStorage('millionaire-questions', createEmptyQuestions());
    const [questions, setQuestions] = useState(savedQuestions);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');

    useEffect(() => {
        setQuestions(savedQuestions);
    }, [savedQuestions]);

    const handleNext = () => {
        setDirection('next');
        setCurrentIndex((prev) => (prev + 1) % 15);
    };

    const handlePrev = () => {
        setDirection('prev');
        setCurrentIndex((prev) => (prev - 1 + 15) % 15);
    };

    const handleTitleChange = (e) => {
        const newQuestions = [...questions];
        newQuestions[currentIndex].title = e.target.value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (value, answerIndex) => {
        const newQuestions = [...questions];
        newQuestions[currentIndex].answers[answerIndex] = value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerSelect = (e) => {
        const newQuestions = [...questions];
        newQuestions[currentIndex].correctAnswer = Number(e.target.value);
        setQuestions(newQuestions);
    };

    const handleClear = () => {
        if (window.confirm('Вы уверены, что хотите очистить все вопросы?')) {
            const empty = createEmptyQuestions();
            setQuestions(empty);
            setSavedQuestions(empty);
			localStorage.removeItem('gameMode');
            setCurrentIndex(0);
        }
    };

    const handleSave = () => {
        setSavedQuestions(questions);
        alert('Вопросы и правильные ответы успешно сохранены!');
    };

	const handleStartGame = () => {
		setSavedQuestions(questions)

		localStorage.setItem('gameMode', 'custom')

		navigate('/question/0')
	}

    const isGameReady = questions.every(q => 
        q.title.trim() !== '' && 
        q.answers.every(a => a.trim() !== '') &&
        q.correctAnswer !== '' && 
        q.correctAnswer !== null
    );

    const currentQuestion = questions[currentIndex];

    return (
        <section className="create">
            <div className="container">
                <h1 className="create__title">Создание вопросов</h1>
                
                <div className="create__buttons">
                    <button className="create__button" onClick={handleClear}>Очистить</button>
                    <button className="create__button" onClick={handleSave}>Сохранить</button>
                </div>

                <div className="create__question--content">
                    <div className="create__question--slider">
                        <button onClick={handlePrev}>
                            <ArrowBackIosIcon sx={{ fontSize: 40 }} />
                        </button>
                    </div>

                    <div 
                        className={`create__question slide-${direction}`} 
                        key={currentIndex}
                    >
                        <h2 className="create__question--number">Вопрос {currentIndex + 1} / 15</h2>
                        
                        <input 
                            className="create__question--title" 
                            placeholder="Введите текст вопроса..."
                            value={currentQuestion.title}
                            onChange={handleTitleChange}
                        />

                        <h2 className="create__question--answers">Варианты ответа</h2>
                        
                        <div className="answers-grid">
                            {currentQuestion.answers.map((answer, idx) => (
                                <input 
                                    key={idx}
                                    className="create__question--answer" 
                                    placeholder={`Вариант ${idx + 1}`}
                                    value={answer}
                                    onChange={(e) => handleAnswerChange(e.target.value, idx)}
                                />
                            ))}
                        </div>

                        <div className="create__question--correct">
                            <label>Выберите правильный ответ:</label>
                            <select 
                                className="create__select"
                                value={currentQuestion.correctAnswer} 
                                onChange={handleCorrectAnswerSelect}
                            >
                                <option value="" disabled>-- Не выбрано --</option>
                                {currentQuestion.answers.map((ans, idx) => (
                                    <option key={idx} value={idx}>
                                        {ans.trim() ? ans : `Вариант ${idx + 1}`}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="create__question--slider">
                        <button onClick={handleNext}>
                            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
                        </button>
                    </div>
                </div>

                <div className="create__begin-game">
                    <button 
                        disabled={!isGameReady} 
                        className={`begin-game ${!isGameReady ? 'disabled-button' : ''}`}
						onClick={handleStartGame}
                    >
                        Начать игру
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CreateGame;