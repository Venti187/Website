const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');



let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

//change with questions
let questions = [
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question1.png",
        choice1: 'Ak-47 Gold Arabesque ',
        choice2: 'Ak-47 Safari Mesh',
        choice3: 'Ak-47 Green Laminate',
        choice4: 'Ak-47 Case Hardened',
        answer: 4,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question2.png",
        choice1: 'Ak-47 Fire Serpent',
        choice2: 'Ak-47 Red Laminate',
        choice3: 'Ak-47 Redline',
        choice4: 'Ak-47 Orbit Mk01',
        answer: 1,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question3.png",
        choice1: 'Ak-47 Wild Lotus',
        choice2: 'Ak-47 Leet Museo',
        choice3: 'Ak-47 Head Shot',
        choice4: 'Ak-47 Asiimov',
        answer: 3,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question4.png",
        choice1: 'Ak-47 Nightwish',
        choice2: 'Ak-47 Legion of Anubis',
        choice3: 'Ak-47 Bloodsport',
        choice4: 'Ak-47 Fuel Injector',
        answer: 1,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question5.png",
        choice1: 'AUG Chameleon',
        choice2: 'AUG Akihabara',
        choice3: 'AUG Momentum',
        choice4: 'AUG Torque',
        answer: 2,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question6.png",
        choice1: 'AWP Oni Taji ',
        choice2: 'AWP Hyper Beast',
        choice3: 'AWP Dragon Lore',
        choice4: 'AWP Duality',
        answer: 3,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question7.png",
        choice1: 'AWP Mortis',
        choice2: 'AWP The Prince',
        choice3: 'AWP Medusa ',
        choice4: 'AWP Gungir',
        answer: 4,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question8.png",
        choice1: 'AWP Neo Noir',
        choice2: 'AWP Desert Hydra',
        choice3: 'AWP Fade',
        choice4: 'AWP Man-o-war',
        answer: 1,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question9.png",
        choice1: 'AWP Elite Build',
        choice2: 'AWP Wildfire',
        choice3: 'AWP Corticera',
        choice4: 'AWP Graphite',
        answer: 2,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question10.png",
        choice1: 'Desert-Egale Ocean Drive',
        choice2: 'Desert-Egale Blaze',
        choice3: 'Desert-Egale Code Red',
        choice4: 'Desert-Egale Kumicho Dragon',
        answer: 2,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question11.png",
        choice1: 'Glock-18 Nuclear Garden',
        choice2: 'Glock-18 Fade',
        choice3: 'Glock-18 Brass ',
        choice4: 'Glock-18 Gamma Doppler',
        answer: 4,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question12.png",
        choice1: 'M4A1-S Icarus Fell',
        choice2: 'M4A1-S Phosphor',
        choice3: 'M4A1-S Imminent Danger',
        choice4: 'M4A1-S Cyrex',
        answer: 1,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question13.png",
        choice1: 'M4A1-S Nightmare',
        choice2: 'M4A1-S Atomic Alloy',
        choice3: 'M4A1-S Knight',
        choice4: 'M4A1-S Guardian',
        answer: 3,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question14.png",
        choice1: 'M4A1-S Icarus Fell',
        choice2: 'M4A1-S Decimator',
        choice3: 'M4A1-S Hot Rod',
        choice4: 'M4A1-S Phosphor',
        answer: 4,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question15.png",
        choice1: 'M4A1-S Control Panel',
        choice2: 'M4A1-S Flashback',
        choice3: 'M4A1-S Printstream',
        choice4: 'M4A1-S Basilisk',
        answer: 3,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question16.png",
        choice1: 'M4A4 X-Ray',
        choice2: 'M4A4 Eye of Horus',
        choice3: 'M4A4 Tooth Fairy',
        choice4: 'M4A4 Asiimov',
        answer: 4,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question17.png",
        choice1: 'M4A4 The Emperor',
        choice2: 'M4A4 Howl',
        choice3: 'M4A4 Buzz Kill',
        choice4: 'M4A4 The Coalition',
        answer: 2,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question18.png",
        choice1: 'M4A4 Poseidon',
        choice2: 'M4A4 Desolate Space',
        choice3: 'M4A4 Dragon King',
        choice4: 'M4A4 Spider Lily',
        answer: 1,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question19.png",
        choice1: 'M4A4 Griffin',
        choice2: 'M4A4 Temukau',
        choice3: 'M4A4 Red DDPAT',
        choice4: 'M4A4 Magnesium',
        answer: 2,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question20.png",
        choice1: 'USP-S The Traitor',
        choice2: 'USP-S Neo Noir',
        choice3: 'USP-S Kill Confirmed',
        choice4: 'USP-S Orion',
        answer: 3,

    },
    {
        question: 'Which Knife is this?',
        image: "../Images/Question21.png",
        choice1: 'Karambit',
        choice2: 'Talon Knife',
        choice3: 'M9 Bayonet',
        choice4: 'Narvaja Knife',
        answer: 1,

    },
    {
        question: 'Which Knife is this?',
        image: "../Images/Question22.png",
        choice1: 'Karambit',
        choice2: 'Talon Knife',
        choice3: 'Gut Knife',
        choice4: 'Butterfly Knife',
        answer: 2,

    },
    {
        question: 'Which Knife is this?',
        image: "../Images/Question23.png",
        choice1: 'Bayonet',
        choice2: 'Falchion Knife',
        choice3: 'Flip Knife',
        choice4: 'Shadow Daggers',
        answer: 3,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question24.png",
        choice1: 'Butterfly Knife Lore',
        choice2: 'Butterfly Knife Bright Water',
        choice3: 'Butterfly Knife Marble Fade',
        choice4: 'Butterfly Knife Gamma Doppler',
        answer: 4,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question25.png",
        choice1: 'M9 Bayonet Freehand',
        choice2: 'M9 Bayonet Tiger Tooth',
        choice3: 'M9 Bayonet Case Hardened',
        choice4: 'M9 Bayonet Scorched',
        answer: 2,

    },
    {
        question: 'What is the name of this skin?',
        image: "../Images/Question26.png",
        choice1: 'Ursus Knife Doppler',
        choice2: 'Ursus Knife Ultraviolet',
        choice3: 'Ursus Knife Fade',
        choice4: 'Ursus Knife Crimson Web',
        answer: 1,

    },

]


const SCORE_POINTS = 100
//change number of questions here
const MAX_QUESTIONS = 9

playAgain = () => {
    localStorage.removeItem('currentQuestion'); // Clear the saved question index
    localStorage.removeItem('score'); // Clear the saved score
    startGame(); // Reset the game
}


startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}



saveQuizState = () => {
    localStorage.setItem('currentQuestion', questionCounter);
    localStorage.setItem('score', score);
}

restoreQuizState = () => {
    const savedQuestionIndex = localStorage.getItem('currentQuestion');
    const savedScore = localStorage.getItem('score');

    if (savedQuestionIndex && savedScore) {
        questionCounter = parseInt(savedQuestionIndex);
        score = parseInt(savedScore);
        scoreText.innerText = score;
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    }
}

window.addEventListener('load', restoreQuizState);
window.addEventListener('beforeunload', saveQuizState);



getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('../html/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]

    question.innerText = currentQuestion.question

    // Clear the image container
    const skinImageContainer = document.querySelector('#skinImageContainer');
    skinImageContainer.innerHTML = '';
    // Create an image element and set the source to the question's image
    const image = document.createElement('img')
    image.src = currentQuestion.image
    // Append the image element to the question element
    skinImageContainer.appendChild(image)


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()






