import React, { useState } from 'react'
import logo from '../assets/logo.png'
import "./main.css"
const questions = [
    { id: 4, text: "L'argent fait-il le bonheur ?", type: "radio", options: ["Oui", "Non"] },
    { id: 5, text: "Cristiano Ronaldo ou Lionel Messi ?", type: "radio", options: ["Cristiano Ronaldo", "Lionel Messi"] },
    { id: 6, text: "Crois-tu au coup de foudre ?", type: "radio", options: ["Oui", "Non"] },
    { id: 7, text: "Es-tu plus introverti(e) qu'extraverti(e) ?", type: "radio", options: ["Oui", "Non"] },
    { id: 8, text: "Tu es quelqu'un qui planifie tout à l'avance plutôt que de tout faire à la dernière minute ?", type: "radio", options: ["Oui", "Non"] },
    { id: 9, text: "Peux-tu passer une journée sans téléphone ?", type: "radio", options: ["Oui", "Non"] },
    { id: 10, text: "Es-tu intéressé(e) par la mode ?", type: "radio", options: ["Oui", "Non"] },
    { id: 11, text: "Te considères-tu comme un(e) sportif(ve) ?", type: "radio", options: ["Oui", "Non"] },
    { id: 13, text: "Quelle est ta boisson de prédilection ?", type: "radio", options: ["Café", "Thé", "Soda", "Eau", "Autre (précise)"] },
    { id: 14, text: "Es-tu plutôt \"soirée film\" ou \"soirée jeux vidéo\" ?", type: "radio", options: ["Film", "Jeux vidéo", "Aucun des deux", "Les deux !"] },
    { id: 15, text: "Quel genre de musique te motive avant un examen ?", type: "radio", options: ["Rap", "Pop", "Rock", "Classique", "Jazz", "Autre (précise)"] },
    { id: 16, text: "Si tu pouvais choisir un super-pouvoir pour réussir ta prépa, lequel ce serait ?", type: "radio", options: [
      "Téléportation pour ne plus jamais être en retard",
      "Lecture rapide pour absorber tout le cours en 5 minutes",
      "Super-mémoire pour retenir tous tes cours",
      "Contrôle du temps pour prolonger les deadlines"
    ]},
    { id: 17, text: "Quel est ton loisir préféré en dehors des cours ?", type: "radio", options: ["Sport", "Lecture", "Sortir entre amis", "Jeux vidéo", "Autre (précise)"] },
    { id: 18, text: "Es-tu plutôt du matin ou du soir pour réviser ?", type: "radio", options: ["Matin", "Soir", "Ça dépend des jours"] },
    { id: 19, text: "Si tu devais choisir une série/film pour passer la soirée, tu choisirais…", type: "radio", options: [
      "Un thriller captivant",
      "Une comédie pour rire un bon coup",
      "Un documentaire pour apprendre encore plus",
      "Un film d'animation pour se détendre"
    ]},
    { id: 20, text: "Ton type d'humour :", type: "radio", options: ["Sarcastique", "Absurde", "Jeux de mots", "Tout me fait rire"] },
    { id: 21, text: "Si tu devais emmener ton parrain/filleul dans un endroit cool de la ville, où iriez-vous ?", type: "radio", options: [
      "Café cosy",
      "Parc ou espace vert",
      "Musée ou expo",
      "Salle de sport ou skatepark",
      "Autre (précise)"
    ]},
    { id: 22, text: "Es-tu plutôt introverti(e) ou extraverti(e) ?", type: "radio", options: ["Introverti(e)", "Extraverti(e)", "Un peu des deux"] },
    { id: 23, text: "Quelle qualité attends-tu de ton parrain/filleul ?", type: "radio", options: ["Bonne écoute", "Drôle et sympa", "Motivé(e)", "Calme et posé(e)", "Autre (précise)"] },
  ];
  

function Main() {
    const [currentQuestion, setCurrentQuestion] = useState(-1); // Start at -1 for name input
    const [answers, setAnswers] = useState({});
    const [name, setName] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const handleAnswer = (answer) => {
        setAnswers({ ...answers, [currentQuestion]: answer });
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsComplete(true);
        }
    };

    const handleNameSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {
            setCurrentQuestion(0);
        }
    };

    const progress = isComplete ? 100 : ((currentQuestion + 2) / (questions.length + 1)) * 100;

    return (
        <div className="main-container">
            <div className="logo-text">10 parrains parfaits</div>
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

                {currentQuestion === -1 ? (
                    <div className="question-card">
                        <h2 className="question-text">Quel est ton Nom complet ?</h2>
                        <form onSubmit={handleNameSubmit} className="name-form">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="name-input"
                                placeholder="Entre ton prénom"
                                required
                            />
                            <button type="submit" className="submit-button">Commencer</button>
                        </form>
                    </div>
                ) : isComplete ? (
                    <div className="question-card">
                        <h2 className="question-text">Merci, {name}!</h2>
                        <p>Ton formulaire a été soumis avec succès. rendez-vous a la soiree de parrainage pour decouvrir ton parrain parfait!</p>
                    </div>
                ) : (
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
                )}
            </div>
            <footer className="footer">
                made by enkasWD
            </footer>
        </div>
    )
}

export default Main

