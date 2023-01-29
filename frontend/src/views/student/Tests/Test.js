const test = {
    "quizTitle": "Weekly Maths Test",
    "quizSynopsis": "A math test is not just a test of numbers, it's a test of problem-solving skills and logical thinking. Approach it with a clear mind and a positive attitude, and you'll be able to tackle any problem that comes your way.",
    "nrOfQuestions": "4",
    "questions": [
        {
            "question": "The pth derivative of a qth degree monic polynomial, where p, q are positive integers and 2p4 + 3pq3⁄2 = 3q3⁄2 + 2qp3 is given by?",
            "questionType": "text",
            "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "a) Cannot be generally determined",
                "b) (q – 1)!",
                "c) (q)!",
                "d) (q – 1)! * pq"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Self Explanatry",
            "point": "1"
        },
        {
            "question": "The first and second derivatives of a quadratic Polynomial at x = 1 are 1 and 2 respectively. Then the value of f(1) – f(0) Is given by?	",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                `a) 3⁄2`,
                `b) 1⁄2`,
                `c) 1`,
                `d) 0`
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Self Explanatry",
            "point": "1"
        },
        {
            "question": " Let f(x) = x9 ex then the ninth derivative of f(x) at x = 0 is given by?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "a) 9!",
                "b) 9! * e9",
                "c) 10!",
                "d) 21!"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "The key here is to expand ex as a mclaurin series and then multiply it by x9",
            "point": "1"
        },
        {
            "question": "The first, second and third derivatives of a cubic polynomial f(x) at x = 1, are 13, 23 and 33 respectively. Then the value of f(0) + f(1) – 2f(-1) is?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "a) 76",
                "b) 86",
                "c) 126",
                "d) 41.5",
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Self Explanatry",
            "point": "1"
        },
        {
            "question": ". Γ(n+1) = n! can be used when ____________",
            "questionType": "photo",
            "answerSelectionType": "single",
            "answers": [
                "a) n is any integer",
                "b) n is a positive integer",
                "c) n is a negative integer",
                "d) n is any real number"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "1"
        },
        {
            "question": "Gamma function is said to be as Euler’s integral of second kind.",
            "questionType": "text",
            "answerSelectionType": "multiple",
            "answers": [
                "True",
                "False"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Euler’s integral of first kind is nothing but the Beta function and Euler’s integral of second kind is nothing but Gamma function. These integrals were considered by L.Euler.",
            "point": "1"
        },
    ]
}

export default test;