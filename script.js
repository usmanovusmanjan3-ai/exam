/* =========================================
   VELORA ONLINE EXAM SYSTEM
========================================= */


/* =========================
   QUESTIONS
========================= */

const questions = {

    web: [

        {
            question: "HTML nimaning qisqartmasi?",
            answers: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Tool Multi Language",
                "Home Text Markup Language"
            ],
            correct: 0
        },

        {
            question: "CSS asosan nima uchun ishlatiladi?",
            answers: [
                "Ma'lumotlar bazasi yaratish",
                "Veb sahifa dizaynini yaratish",
                "Server yaratish",
                "Fayllarni siqish"
            ],
            correct: 1
        },

        {
            question: "Figma dasturi asosan nima uchun ishlatiladi?",
            answers: [
                "Video montaj",
                "Dasturlash",
                "UI/UX dizayn",
                "Antivirus"
            ],
            correct: 2
        },

        {
            question: "JavaScript qanday til?",
            answers: [
                "Dasturlash tili",
                "Operatsion tizim",
                "Grafik muharrir",
                "Brauzer"
            ],
            correct: 0
        },

        {
            question: "CSSda matn rangini o‘zgartirish uchun qaysi xususiyat ishlatiladi?",
            answers: [
                "background",
                "font",
                "color",
                "text"
            ],
            correct: 2
        },

        {
            question: "HTMLda havola yaratish uchun qaysi teg ishlatiladi?",
            answers: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],
            correct: 1
        },

        {
            question: "Responsive dizayn nima?",
            answers: [
                "Faqat kompyuter uchun dizayn",
                "Faqat telefon uchun dizayn",
                "Turli ekranlarga moslashuvchi dizayn",
                "Faqat planshet uchun dizayn"
            ],
            correct: 2
        },

        {
            question: "UI nimani anglatadi?",
            answers: [
                "User Interface",
                "Universal Internet",
                "User Information",
                "User Input"
            ],
            correct: 0
        },

        {
            question: "UX nimani anglatadi?",
            answers: [
                "User Extension",
                "User Experience",
                "Universal Experience",
                "User Example"
            ],
            correct: 1
        },

        {
            question: "CSS Grid nima uchun ishlatiladi?",
            answers: [
                "Veb sahifada layout yaratish",
                "Audio yozish",
                "Server ishga tushirish",
                "Rasm tahrirlash"
            ],
            correct: 0
        },

        {
            question: "HTML sahifaning asosiy sarlavhasi uchun qaysi teg ishlatiladi?",
            answers: [
                "<p>",
                "<h1>",
                "<title2>",
                "<head>"
            ],
            correct: 1
        },

        {
            question: "Canva qanday platforma?",
            answers: [
                "Dizayn platformasi",
                "Operatsion tizim",
                "Antivirus",
                "Brauzer"
            ],
            correct: 0
        },

        {
            question: "CSSda elementlar orasidagi tashqi masofa qaysi xususiyat?",
            answers: [
                "padding",
                "margin",
                "space",
                "gapper"
            ],
            correct: 1
        },

        {
            question: "CSSda ichki masofa qaysi xususiyat?",
            answers: [
                "margin",
                "padding",
                "inside",
                "space"
            ],
            correct: 1
        },

        {
            question: "JavaScriptda o‘zgaruvchi yaratish uchun qaysi kalit so‘z ishlatiladi?",
            answers: [
                "let",
                "make",
                "variable",
                "create"
            ],
            correct: 0
        },

        {
            question: "Web brauzerga misol qaysi?",
            answers: [
                "Google Chrome",
                "Python",
                "Figma",
                "Windows"
            ],
            correct: 0
        },

        {
            question: "Frontend nima?",
            answers: [
                "Foydalanuvchi ko‘radigan veb qism",
                "Server qurilmasi",
                "Ma'lumotlar bazasi",
                "Antivirus"
            ],
            correct: 0
        },

        {
            question: "Backend nima bilan bog‘liq?",
            answers: [
                "Faqat ranglar bilan",
                "Server va ma'lumotlar bilan",
                "Faqat rasmlar bilan",
                "Monitor bilan"
            ],
            correct: 1
        },

        {
            question: "Hex rang kodi qaysi belgidan boshlanadi?",
            answers: [
                "@",
                "$",
                "#",
                "&"
            ],
            correct: 2
        },

        {
            question: "Veb sahifa faylining odatiy kengaytmasi qaysi?",
            answers: [
                ".html",
                ".exe",
                ".mp3",
                ".zip"
            ],
            correct: 0
        }

    ],


    programming: [

        {
            question: "Python qanday dasturlash tili?",
            answers: [
                "Yuqori darajali dasturlash tili",
                "Operatsion tizim",
                "Grafik dastur",
                "Brauzer"
            ],
            correct: 0
        },

        {
            question: "JavaScriptda konsolga ma'lumot chiqarish uchun nima ishlatiladi?",
            answers: [
                "print()",
                "console.log()",
                "write.console()",
                "output()"
            ],
            correct: 1
        },

        {
            question: "Algoritm nima?",
            answers: [
                "Masalani yechish ketma-ketligi",
                "Kompyuter qurilmasi",
                "Rasm",
                "Operatsion tizim"
            ],
            correct: 0
        },

        {
            question: "Python faylining kengaytmasi?",
            answers: [
                ".java",
                ".py",
                ".js",
                ".html"
            ],
            correct: 1
        },

        {
            question: "Dasturlashda if operatori nima uchun ishlatiladi?",
            answers: [
                "Shart tekshirish",
                "Rasm chizish",
                "Fayl siqish",
                "Kompyuterni o‘chirish"
            ],
            correct: 0
        }

    ],


    computer: [

        {
            question: "Kompyuterning asosiy hisoblash qurilmasi?",
            answers: [
                "Monitor",
                "Protsessor",
                "Klaviatura",
                "Printer"
            ],
            correct: 1
        },

        {
            question: "RAM nima?",
            answers: [
                "Tezkor xotira",
                "Qattiq disk",
                "Monitor",
                "Sichqoncha"
            ],
            correct: 0
        },

        {
            question: "SSD nima?",
            answers: [
                "Xotira qurilmasi",
                "Monitor",
                "Klaviatura",
                "Protsessor"
            ],
            correct: 0
        },

        {
            question: "USB nima uchun ishlatiladi?",
            answers: [
                "Qurilmalarni ulash",
                "Monitorni bo‘yash",
                "Internetni o‘chirish",
                "Windows yaratish"
            ],
            correct: 0
        },

        {
            question: "Klaviatura qanday qurilma?",
            answers: [
                "Kiritish qurilmasi",
                "Chiqish qurilmasi",
                "Saqlash qurilmasi",
                "Tarmoq qurilmasi"
            ],
            correct: 0
        }

    ],


    word: [

        {
            question: "Microsoft Word nima?",
            answers: [
                "Matn muharriri",
                "Brauzer",
                "Antivirus",
                "Video muharrir"
            ],
            correct: 0
        },

        {
            question: "Wordda matnni qalin qilish tugmasi?",
            answers: [
                "Ctrl + I",
                "Ctrl + B",
                "Ctrl + U",
                "Ctrl + P"
            ],
            correct: 1
        },

        {
            question: "Word hujjatini saqlash?",
            answers: [
                "Ctrl + S",
                "Ctrl + X",
                "Ctrl + Z",
                "Ctrl + A"
            ],
            correct: 0
        },

        {
            question: "Wordda barcha matnni belgilash?",
            answers: [
                "Ctrl + A",
                "Ctrl + C",
                "Ctrl + V",
                "Ctrl + F"
            ],
            correct: 0
        },

        {
            question: "Word hujjatining odatiy kengaytmasi?",
            answers: [
                ".xlsx",
                ".pptx",
                ".docx",
                ".jpg"
            ],
            correct: 2
        }

    ],


    excel: [

        {
            question: "Microsoft Excel nima?",
            answers: [
                "Elektron jadval dasturi",
                "Matn muharriri",
                "Brauzer",
                "Video muharrir"
            ],
            correct: 0
        },

        {
            question: "Excelda formula qaysi belgidan boshlanadi?",
            answers: [
                "+",
                "=",
                "#",
                "@"
            ],
            correct: 1
        },

        {
            question: "Excel faylining kengaytmasi?",
            answers: [
                ".docx",
                ".xlsx",
                ".pptx",
                ".html"
            ],
            correct: 1
        },

        {
            question: "Excelda ustunlar qanday belgilanadi?",
            answers: [
                "Raqamlar bilan",
                "Harflar bilan",
                "Belgilar bilan",
                "Rasmlar bilan"
            ],
            correct: 1
        },

        {
            question: "Excelda qatorlar qanday belgilanadi?",
            answers: [
                "Harflar",
                "Raqamlar",
                "Ranglar",
                "Belgilar"
            ],
            correct: 1
        }

    ]

};


/* =========================
   SUBJECT NAMES
========================= */

const subjectNames = {

    web: "Veb dizayn va UI/UX",

    programming: "Dasturlash asoslari",

    computer: "Kompyuter qurilmalari",

    word: "Microsoft Word",

    excel: "Microsoft Excel"

};


/* =========================
   ELEMENTS
========================= */

const startScreen =
    document.getElementById("startScreen");

const examScreen =
    document.getElementById("examScreen");

const resultScreen =
    document.getElementById("resultScreen");


const studentNameInput =
    document.getElementById("studentName");

const subjectSelect =
    document.getElementById("subject");

const startBtn =
    document.getElementById("startBtn");


const examSubject =
    document.getElementById("examSubject");

const studentDisplay =
    document.getElementById("studentDisplay");


const timer =
    document.getElementById("timer");

const timerBox =
    document.querySelector(".timer-box");


const currentNumber =
    document.getElementById("currentNumber");

const totalQuestions =
    document.getElementById("totalQuestions");

const answeredCount =
    document.getElementById("answeredCount");

const progress =
    document.getElementById("progress");


const questionIndex =
    document.getElementById("questionIndex");

const questionText =
    document.getElementById("questionText");

const answersContainer =
    document.getElementById("answers");


const questionNumbers =
    document.getElementById("questionNumbers");


const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const finishBtn =
    document.getElementById("finishBtn");


const score =
    document.getElementById("score");

const correctCount =
    document.getElementById("correctCount");

const wrongCount =
    document.getElementById("wrongCount");

const emptyCount =
    document.getElementById("emptyCount");

const resultStudent =
    document.getElementById("resultStudent");

const resultMessage =
    document.getElementById("resultMessage");


const restartBtn =
    document.getElementById("restartBtn");

const homeBtn =
    document.getElementById("homeBtn");


/* =========================
   VARIABLES
========================= */

let currentQuestion = 0;

let selectedSubject = "web";

let examQuestions = [];

let userAnswers = [];

let studentName = "";

let timeLeft = 20 * 60;

let timerInterval;


/* =========================
   START EXAM
========================= */

startBtn.addEventListener(
    "click",
    startExam
);


function startExam() {

    studentName =
        studentNameInput.value.trim();


    if (!studentName) {

        alert(
            "Iltimos, ism va familiyangizni kiriting!"
        );

        studentNameInput.focus();

        return;
    }


    selectedSubject =
        subjectSelect.value;


    examQuestions =
        [...questions[selectedSubject]];


    /*
       Agar fan 5 ta savol bo‘lsa,
       shu savollar ishlaydi.
       Veb dizayn fanida 20 ta.
    */


    currentQuestion = 0;


    userAnswers =
        new Array(
            examQuestions.length
        ).fill(null);


    timeLeft = 20 * 60;


    startScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    examScreen.classList.remove(
        "hidden"
    );


    examSubject.textContent =
        subjectNames[selectedSubject];


    studentDisplay.textContent =
        `O‘quvchi: ${studentName}`;


    totalQuestions.textContent =
        examQuestions.length;


    createQuestionNumbers();

    showQuestion();

    startTimer();

}


/* =========================
   TIMER
========================= */

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();


    timerInterval =
        setInterval(
            function() {

                timeLeft--;

                updateTimer();


                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    alert(
                        "Vaqt tugadi! Imtihon avtomatik yakunlandi."
                    );

                    finishExam();

                }

            },
            1000
        );

}


function updateTimer() {

    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    if (timeLeft <= 60) {

        timerBox.classList.add(
            "warning"
        );

    } else {

        timerBox.classList.remove(
            "warning"
        );

    }

}


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    const question =
        examQuestions[
            currentQuestion
        ];


    if (!question) return;


    currentNumber.textContent =
        currentQuestion + 1;


    questionIndex.textContent =
        String(
            currentQuestion + 1
        ).padStart(2, "0");


    questionText.textContent =
        question.question;


    answersContainer.innerHTML =
        "";


    const letters =
        ["A", "B", "C", "D"];


    question.answers.forEach(
        (answer, index) => {


            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            if (
                userAnswers[
                    currentQuestion
                ] === index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.innerHTML = `

                <span class="answer-letter">
                    ${letters[index]}
                </span>

                <span>
                    ${answer}
                </span>

            `;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );


    updateProgress();

    updateQuestionNumbers();

    updateButtons();

}


/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(index) {

    userAnswers[
        currentQuestion
    ] = index;


    showQuestion();

}


/* =========================
   PROGRESS
========================= */

function updateProgress() {

    const answered =
        userAnswers.filter(
            answer =>
                answer !== null
        ).length;


    answeredCount.textContent =
        answered;


    const percent =
        (
            ((currentQuestion + 1) /
                examQuestions.length) *
            100
        );


    progress.style.width =
        `${percent}%`;

}


/* =========================
   QUESTION NUMBERS
========================= */

function createQuestionNumbers() {

    questionNumbers.innerHTML =
        "";


    examQuestions.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "q-number";


            button.textContent =
                index + 1;


            button.addEventListener(
                "click",
                () => {

                    currentQuestion =
                        index;

                    showQuestion();

                }
            );


            questionNumbers.appendChild(
                button
            );

        }
    );

}


function updateQuestionNumbers() {

    const buttons =
        document.querySelectorAll(
            ".q-number"
        );


    buttons.forEach(
        (button, index) => {


            button.classList.remove(
                "current"
            );


            button.classList.remove(
                "done"
            );


            if (
                index ===
                currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            if (
                userAnswers[index] !==
                null
            ) {

                button.classList.add(
                    "done"
                );

            }

        }
    );

}


/* =========================
   NAVIGATION BUTTONS
========================= */

prevBtn.addEventListener(
    "click",
    function() {

        if (
            currentQuestion > 0
        ) {

            currentQuestion--;

            showQuestion();

        }

    }
);


nextBtn.addEventListener(
    "click",
    function() {

        if (
            currentQuestion <
            examQuestions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

        } else {

            const unanswered =
                userAnswers.filter(
                    answer =>
                        answer === null
                ).length;


            if (unanswered > 0) {

                const confirmFinish =
                    confirm(
                        `Sizda ${unanswered} ta javobsiz savol bor. Imtihonni yakunlaysizmi?`
                    );


                if (confirmFinish) {

                    finishExam();

                }

            } else {

                finishExam();

            }

        }

    }
);


function updateButtons() {

    if (
        currentQuestion === 0
    ) {

        prevBtn.style.opacity =
            ".45";

    } else {

        prevBtn.style.opacity =
            "1";

    }


    if (
        currentQuestion ===
        examQuestions.length - 1
    ) {

        nextBtn.textContent =
            "Yakunlash ✓";

    } else {

        nextBtn.textContent =
            "Keyingi →";

    }

}


/* =========================
   FINISH EXAM
========================= */

finishBtn.addEventListener(
    "click",
    function() {


        const unanswered =
            userAnswers.filter(
                answer =>
                    answer === null
            ).length;


        if (
            unanswered > 0
        ) {

            const answer =
                confirm(
                    `Sizda ${unanswered} ta javobsiz savol bor. Haqiqatan ham yakunlaysizmi?`
                );


            if (!answer) {

                return;

            }

        }


        finishExam();

    }
);


/* =========================
   CALCULATE RESULT
========================= */

function finishExam() {

    clearInterval(
        timerInterval
    );


    let correct = 0;

    let wrong = 0;

    let empty = 0;


    examQuestions.forEach(
        (question, index) => {


            const answer =
                userAnswers[index];


            if (
                answer === null
            ) {

                empty++;

            } else if (
                answer ===
                question.correct
            ) {

                correct++;

            } else {

                wrong++;

            }

        }
    );


    const percentage =
        Math.round(
            (
                correct /
                examQuestions.length
            ) * 100
        );


    const finalScore =
        percentage;


    score.textContent =
        finalScore;


    correctCount.textContent =
        correct;


    wrongCount.textContent =
        wrong;


    emptyCount.textContent =
        empty;


    resultStudent.textContent =
        `${studentName} — ${subjectNames[selectedSubject]}`;


    if (
        percentage >= 86
    ) {

        resultMessage.textContent =
            "A'lo natija! Bilimingiz juda yaxshi.";

    } else if (
        percentage >= 66
    ) {

        resultMessage.textContent =
            "Yaxshi natija! Yana biroz mashq qiling.";

    } else if (
        percentage >= 35
    ) {

        resultMessage.textContent =
            "Qoniqarli natija. Mavzularni yana takrorlang.";

    } else {

        resultMessage.textContent =
            "Natijani yaxshilash uchun mavzularni qayta o‘rganing.";

    }


    examScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.remove(
        "hidden"
    );


    saveResult(
        correct,
        wrong,
        empty,
        finalScore
    );

}


/* =========================
   SAVE RESULT
========================= */

function saveResult(
    correct,
    wrong,
    empty,
    finalScore
) {

    const results =
        JSON.parse(
            localStorage.getItem(
                "veloraExamResults"
            )
        ) || [];


    results.push({

        id: Date.now(),

        student:
            studentName,

        subject:
            subjectNames[
                selectedSubject
            ],

        correct:
            correct,

        wrong:
            wrong,

        empty:
            empty,

        score:
            finalScore,

        date:
            new Date().toLocaleString(
                "uz-UZ"
            )

    });


    localStorage.setItem(
        "veloraExamResults",
        JSON.stringify(results)
    );

}


/* =========================
   RESTART
========================= */

restartBtn.addEventListener(
    "click",
    function() {

        resultScreen.classList.add(
            "hidden"
        );

        startScreen.classList.remove(
            "hidden"
        );

    }
);


/* =========================
   HOME
========================= */

homeBtn.addEventListener(
    "click",
    function() {

        clearInterval(
            timerInterval
        );


        resultScreen.classList.add(
            "hidden"
        );

        examScreen.classList.add(
            "hidden"
        );

        startScreen.classList.remove(
            "hidden"
        );

    }
);


/* =========================
   ENTER KEY
========================= */

studentNameInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            startExam();

        }

    }
);