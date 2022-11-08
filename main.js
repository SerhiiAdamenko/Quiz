const questions = [
  {
    question: "Яка мова працює у браузері?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
  },
  {
    question: "Що означає CSS?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: 2,
  },
  {
    question: "Що означає HTML?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 1,
  },
  {
    question: "У якому році було створено JavaScript?",
    answers: ["1996", "1995", "1994", "усі відповіді неправильні"],
    correct: 2,
  },
];

//Finding elements
const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

//Game variables
let score = 0; //
let questionIndex = 0; //

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  // Вопрос

  const headerTemplate = `<h2 class="title">%title%</h2>`;
  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );
  headerContainer.innerHTML = title;

  // Варианты ответов
  let answerNumber = 1;
  for (answerText of questions[questionIndex]["answers"]) {
    const questionTemplate = `<li><label><input value='%number%' type="radio" class="answer" name="answer" /><span>%answer%</span></label></li>`;

    const answerHTML = questionTemplate
      .replace("%number%", answerText)
      .replace("%answer%", answerText);

    listContainer.innerHTML = listContainer.innerHTML + answerHTML;
    answerNumber++;
  }
}
function checkAnswer() {
  // console.log("checkAnswer started!");
  // находим выбраную радио кнопку
  const checkedRadio = listContainer.querySelector(
    'input[type="radio"]:checked'
  );
  console.log(checkedRadio);
  //если ответ не выбран ничего не делаем выходим из функции
  if (!checkedRadio) {
    submitBtn.blur();
    return;
  }
  console.log(checkedRadio.value);

  const userAnswer = parseInt(checkedRadio.value);

  //если ответ верно - увеличиваем счет
  if (userAnswer === questions[questionIndex]["correct"]) {
    score++;
    console.log("score", score);
  }
}
