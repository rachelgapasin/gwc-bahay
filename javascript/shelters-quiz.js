const questions = [
  {
    question:
      "Shelters that function as day shelters, usually for people who lose their homes (natural disaster) suddenly without warning.",
    optionA: "Emergency Shelter",
    optionB: "Domestic Shelters",
    optionC: "Prototypical Shelter",
    optionD: "Faith-Based",
    correctOption: "optionA",
  },

  {
    question: "Shelters that are youth specific, to redirect their lives.",
    optionA: "Emergency Shelter",
    optionB: "Prototypical Shelter",
    optionC: "Faith-Based",
    optionD: "Youth Shelters",
    correctOption: "optionD",
  },

  {
    question:
      "Shelters that look like Women shelters and that allow men with children and two-parent families the opportunities to stay.",
    optionA: "Prototypical Shelter",
    optionB: "Emergency Shelter",
    optionC: "Youth Shelters",
    optionD: "Family Shelters",
    correctOption: "optionD",
  },
  {
    question:
      "Shelters that house people overnight if they come in drunk instead of forcing people to quit drinking. Gives a place to stay while they experience abuse of drugs and alcohol.",
    optionA: "Family Shelters",
    optionB: "Emergency Shelters",
    optionC: "Wet Shelters",
    optionD: "Youth Shelters",
    correctOption: "optionC",
  },
  {
    question:
      "Shelters that allows people to recover from trauma and restart their life. It is a more comfortable and private houseing that's temporary in nature.",
    optionA: "Youth Shelters",
    optionB: "Wet Shelters",
    optionC: "Transitional Housing",
    optionD: "Permanent Supportive Housing",
    correctOption: "optionD",
  },
  {
    question:
      "Shelters that are the most established form of housing assistance. Provides affordable housing to those who can't afford much even with a job.",
    optionA: "Transitional housing",
    optionB: "Permanent Supporitve Housing",
    optionC: "Family Shelters",
    optionD: "Faith-Based",
    correctOption: "optionB",
  },
  {
    question:
      "Shelters that are faith-based to introduce residents to their values and beliefs during their stay.",
    optionA: "Youth Shelter",
    optionB: "Faith-Based",
    optionC: "Prototypical Shelter",
    optionD: "Wet Shelters",
    correctOption: "optionB",
  },
  {
    question:
      "Shelters that house women and their children who are also abuse victims.",
    optionA: "Emergency Shelter",
    optionB: "Youth Shelters",
    optionC: "Domestic Violence or Women Shelters",
    optionD: "Wet Shelters",
    correctOption: "optionC",
  },
  {
    question:
      "Shelter that gives people the chance to gain experience as a tenant while benefitting from social services.",
    optionA: "Prototypical Shelters",
    optionB: "Transitional Housing",
    optionC: "Permanent Supportive Housing",
    optionD: "Domestic Violence or Women Shelters",
    correctOption: "optionC",
  },
  {
    question:
      "Shelters that may receive bulk hygiene kits and other mobile resources to help them during their time on the street.",
    optionA: "Prototypical Homeless Shelters",
    optionB: "Faith-Based",
    optionC: "Family Shelters",
    optionD: "Wet Shelters",
    correctOption: "optionA",
  },
  {
    question:
      "The goal of the shelter is to intervene early while young adults are still developing in order to set a foundation for their successful and happy lives.",
    optionA: "Youth Shelters",
    optionB: "Wet Shelters",
    optionC: "Transitional Housing",
    optionD: "Permanent Supportive Housing",
    correctOption: "optionA",
  },
  {
    question:
      "What ages do women experience the highest rates of domestic abuse?",
    optionA: "18 to 24 and 25 to 34",
    optionB: "15 to 20 and 22 to 32",
    optionC: "12 to 15 and 20 to 30",
    optionD: "21 and below.",
    correctOption: "optionA",
  },
  {
    question:
      "This shelter functions as a day shelter, and temporary residents can also stay the night to keep out the harm from the environment outside.",
    optionA: "Wet Shelters",
    optionB: "Prototypical Shelters",
    optionC: "Faith-Based",
    optionD: "Emergency Shelters",
    correctOption: "optionD",
  },
  {
    question:
      "This shelter shows guests the faith that motivates the shelter to help people and which gives people hope.",
    optionA: "Faith-Based",
    optionB: "Wet Shelters",
    optionC: "Prototypical Shelter",
    optionD: "Domestic Violece or Women's Shelters",
    correctOption: "optionA",
  },
  {
    question:
      "This shelter involves giving job assistance, financial counceling, and affordable housing.",
    optionA: "Emergency Shelter",
    optionB: "Domestic Violence or Women's Shelters",
    optionC: "Permanent Supportive Housing",
    optionD: "Transitional Housing",
    correctOption: "optionD",
  },
  {
    question:
      "This shelter provides counceling services, resources, and education about relationship dynamics. It helps identify abusive relationships and how to separate from a current abuser.",
    optionA: "Wet Shelters",
    optionB: "Domestic Violence or Women's Shelters",
    optionC: "Youth Shelters",
    optionD: "Faith-Based",
    correctOption: "optionB",
  },
  {
    question:
      "Provides previously homeless people with resource that orient them away from homelessness like job assistance.",
    optionA: "Permanent Supportive Housing",
    optionB: "Transitional Housing",
    optionC: "Family Shelters",
    optionD: "Wet Shelters",
    correctOption: "optionB",
  },
  {
    question:
      "This shelter includes short sermons before taking part in meals or receiving a ticket for a bed.",
    optionA: "Family Shelters",
    optionB: "Transitional Housing",
    optionC: "Permanent Supportive Housing",
    optionD: "Faith-Based",
    correctOption: "optionD",
  },
  {
    question:
      "This shelter model provides secure and private living spaces for a percentage of their income rather than a set amount each month.",
    optionA: "Faith-Based",
    optionB: "Wet Shelters",
    optionC: "Prototypical Shelters",
    optionD: "Permanent Supportive Housing",
    correctOption: "optionD",
  },
  {
    question:
      "Which shelters are for time-bound circumstances rather than for those afflicted by chronic homelessness?",
    optionA: "Domestic Violence or Women's Shelters",
    optionB: "Wet Shelters",
    optionC: "Transitional Housing",
    optionD: "Prototypical Shelters",
    correctOption: "optionD",
  },
  {
    question: "Which shelter is a subset of emergency shelters?",
    optionA: "Wet Shelters",
    optionB: "Transitional Housing",
    optionC: "Domestic Violence or Women's Shelters",
    optionD: "Prototypical Shelters",
    correctOption: "optionC",
  },
  {
    question:
      "This housing can be for anyone, or with the purpose of specifically assisting a certain demographic of people in need.",
    optionA: "Wet Shelters",
    optionB: "Permanent Supportive Housing",
    optionC: "Faith-Based",
    optionD: "Youth Shelters",
    correctOption: "optionB",
  },
  {
    question:
      "Which shelter is somewhat controversial because of who they house overnight?",
    optionA: "Transitional Housing",
    optionB: "Permanent Supportive Housing",
    optionC: "Domestic Violence or Women’s Shelters",
    optionD: "Wet Shelters",
    correctOption: "optionD",
  },
  {
    question:
      "Shelters that are most common in war-torn regions with large refugee populations.",
    optionA: "Wet Shelters",
    optionB: "Domestic Violence or Women’s Shelters",
    optionC: "Emergency Shelters",
    optionD: "Transitional Housing",
    correctOption: "optionC",
  },
];

let shuffledQuestions = []; //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
  //function to shuffle and push 10 questions to shuffledQuestions array
  //app would be dealing with 10 questions per session
  while (shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1; //holds the current question number
let playerScore = 0; //holds the player score
let wrongAttempt = 0; //amount of wrong answers picked by player
let indexNumber = 0; //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function nextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
  const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      //get's correct's radio input with correct answer
      correctOption = option.labels[0].id;
    }
  });

  //checking to make sure a radio input has been checked or an option being chosen
  function closeOptionModal() {
    document.getElementById("option-modal").style.display = "none";
  }

  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "block";
    setTimeout(closeOptionModal, 3000);
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.color = "green";
      document.getElementById(correctOption).style.fontWeight = "600";
      playerScore++; //adding to player's score
      indexNumber++; //adding 1 to index so has to display next question..
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.color = "red";
      document.getElementById(correctOption).style.color = "green";
      document.getElementById(wrongLabelId).style.fontWeight = "600";
      document.getElementById(correctOption).style.fontWeight = "600";
      wrongAttempt++; //adds 1 to wrong attempts
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer(); //check if player picked right or wrong option
  unCheckRadioButtons();
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
    if (indexNumber <= 9) {
      //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
      nextQuestion(indexNumber);
    } else {
      handleEndGame(); //ends game if index number greater than 9 meaning we're already at the 10th question
    }
    resetOptionBackground();
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.color = "";
    document.getElementById(option.labels[0].id).style.fontWeight = "";
  });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null;
  let remarkColor = null;

  const playerGrade = (playerScore / indexNumber) * 100;

  // condition check for player remark and remark color
  if (playerGrade <= 30) {
    remark = "Keep Practicing!";
    remarkColor = "red";
  } else if (playerGrade >= 40 && playerGrade < 70) {
    remark = "You're getting there!";
    remarkColor = "orange";
  } else if (playerGrade >= 70) {
    remark = "Well done! You know your shelters!";
    remarkColor = "green";
  }

  //data to display to score board
  document.getElementById("attempts").innerHTML = indexNumber;
  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("grade-percentage").innerHTML = playerGrade;
  document.getElementById("wrong-answers").innerHTML = wrongAttempt;
  document.getElementById("right-answers").innerHTML = playerScore;
  document.getElementById("score-modal").style.display = "flex";
}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  nextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}
