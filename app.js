const quiz = [
  {
    question: 'この中で一番値段の高いキーボードは次のうちどれ？',
    answers: [
      'Wooting H60',
      'RealForce GX1',
      'HHKB professional',
      'Razer Huntsman V3 pro',
    ],
    correct: 'HHKB professional',
  },
  {
    question: 'この中で一番軽いキーボードは次のうちどれ？',
    answers: ['Keychron K2', 'Logitech MX Keys', 'Corsair K95', 'Anne Pro 2'],
    correct: 'Anne Pro 2',
  },
  {
    question: 'この中で一番キー数が多いキーボードは次のうちどれ？',
    answers: [
      'Varmilo VA87M',
      'Ducky One 2 Mini',
      'Corsair K95 Platinum',
      'Leopold FC660M',
    ],
    correct: 'Corsair K95 Platinum',
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//quizの問題文、選択肢の定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    //問題がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題がもうなければこちらを実行
    window.alert(
      '終了！あなたの正解数は' + score + '/' + quizLength + 'です！'
    );
  }
};

//ボタンを押したら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
