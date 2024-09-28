import React, { useState } from 'react'
import logo from '../assets/logo.png'
import "./main.css"
const questions = [
    { id: 1, text: "Est-ce que tu préfères les soirées tranquilles à la maison plutôt que sortir faire la fête ?", type: "radio", options: ["Oui", "Non"] },
    { id: 2, text: "En couple ou célibataire ?", type: "radio", options: ["En couple", "Célibataire"] },
    { id: 3, text: "Ton gars/ta go peut-il avoir un meilleur/meilleure ami(e) ?", type: "radio", options: ["Oui", "Non"] },
    { id: 4, text: "L'argent fait-il le bonheur ?", type: "radio", options: ["Oui", "Non"] },
    { id: 5, text: "Cristiano Ronaldo ou Lionel Messi ?", type: "radio", options: ["Cristiano Ronaldo", "Lionel Messi"] },
    { id: 6, text: "Crois-tu au coup de foudre ?", type: "radio", options: ["Oui", "Non"] },
    { id: 7, text: "Es-tu plus introverti(e) qu'extraverti(e) ?", type: "radio", options: ["Oui", "Non"] },
    { id: 8, text: "Tu es quelqu'un qui planifie tout à l'avance plutôt que de tout faire à la dernière minute ?", type: "radio", options: ["Oui", "Non"] },
    { id: 9, text: "Peux-tu passer une journée sans téléphone ?", type: "radio", options: ["Oui", "Non"] },
    { id: 10, text: "Es-tu intéressé(e) par la mode ?", type: "radio", options: ["Oui", "Non"] },
    { id: 11, text: "Te considères-tu comme un(e) sportif(ve) ?", type: "radio", options: ["Oui", "Non"] },
    { id: 12, text: "Enfin, est-ce que tu aimes l'école ?", type: "radio", options: ["Oui", "Non"] },
  ];
  

export default function Main() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
  
    const handleAnswer = (answer) => {
        setAnswers({ ...answers, [currentQuestion]: answer });
        if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        }
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="main-container">
            <img src={logo} alt="logo" className="logo" />
            <div className="form-container">
 
                <div className="progress-container">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="progress-text">
                                {Math.round(progress)}%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="question-card">
                    <h2 className="question-text">
                        {questions[currentQuestion].text}
                    </h2>
                    <div className="options-container">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className="option-button"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


 
