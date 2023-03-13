import './App.css';
import { useState } from 'react';
import Flashcard from './components/flashcard';
import AnswerForm from './components/answerForm';

const App = () => {

  const [questionNum, setQuestionNum] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const [isFlipped, setFlipFlashcard] = useState(false);
  const [rightBtnStatus, setRightBtnStatus] = useState('');
  const [leftBtnStatus, setLeftBtnStatus] = useState('');

  const [answerInput, setAnswerInput] = useState('');

  const [answerFeedback, setAnswerFeedback] = useState('');

  const flipCard = () => {
    setFlipFlashcard(!isFlipped);
  }

  const getNextQuestion = () => {
    // only go to next question if another question exists
    if(questionNum != cardData.length - 1) {
      setQuestionNum(questionNum + 1);
      setRightBtnStatus('');
      setLeftBtnStatus('');
      setAnswerFeedback('');
    }
    else {
      setRightBtnStatus('fade');
    }
    setFlipFlashcard(false);
  }

  const getPrevQuestion = () => {
    if(questionNum != 0) {
      setQuestionNum(questionNum - 1);
      setLeftBtnStatus('');
      setRightBtnStatus('');
      setAnswerFeedback('');
    }
    else {
      setLeftBtnStatus("fade");
    }
    setFlipFlashcard(false);
  }

  const shuffleCards = () => {
    // shuffle the array cardData
    for(let i = cardData.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
      console.log(cardData[i]);
    }

    setFlipFlashcard(false);
    setLeftBtnStatus('');
    setRightBtnStatus('');
    setAnswerFeedback('');

  }

  const onCheckAnswer = () => {
    // remove anything with parentheses including the parentheses itself
    let cardDataNoParentheses = cardData[questionNum].answer.replace(/ *\([^)]*\ *\)/g, "");

    //only check answer if you are not looking at the solution
    if(!isFlipped) {
      // answer does not need to match lower or uppercase to be correct
      if(cardData[questionNum].answer.toLocaleLowerCase() == answerInput.toLocaleLowerCase()) {
        setAnswerFeedback("correct")
        setCurrentStreak(currentStreak + 1);
        if(currentStreak >= longestStreak) {
          setLongestStreak(longestStreak + 1);
        }
      }
      // answer does not need to include anything inside parentheses to be correct
      else if(cardDataNoParentheses.toLocaleLowerCase() == answerInput.toLocaleLowerCase()) {
        setAnswerFeedback("correct")
        setCurrentStreak(currentStreak + 1);
        if(currentStreak >= longestStreak) {
          setLongestStreak(longestStreak + 1);
        }
      }
      else {
        setAnswerFeedback("incorrect");
        setCurrentStreak(0);
      }
    } 
    else {
      setAnswerFeedback("You can only answer a question before you flip it");
    }
    
}
  

  return (
    <div className="App">
      <div className='header'>
        <h2>Test your Tagalog</h2>
        <h3>Test your knowledge by guessing some common Tagalog words and phrases</h3>
        <h5>Number of cards: {cardData.length}</h5>
        <h5>Current Streak: {currentStreak}, Longest Streak: {longestStreak}</h5>
        <Flashcard isFlipped = {isFlipped} flipCard={flipCard} cardData={cardData[questionNum]}/>
        <AnswerForm 
          currentVal={answerInput} 
          handleChange={(e) => setAnswerInput(e.target.value)}
          answerFeedback={answerFeedback}
          onCheckAnswer={onCheckAnswer}
        />
        
        <div className='button-row'>
          <button id={leftBtnStatus} className='button' onClick={getPrevQuestion}>←</button>
          <button id={rightBtnStatus} className='button' onClick={getNextQuestion}>→</button>
          <button className="button" onClick={shuffleCards}>Shuffle Cards</button>
        </div>
        
      </div>
    </div>
  )

}

const cardData = [
  {
    id: 1,
    question: "Tuloy kayo",
    answer: "You may come in (polite)",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 2,
    question: "Sino sila",
    answer: "who is it?",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 3,
    question: "saing",
    answer: "steamed rice",
    category: "food",
    image: "./src/assets/steamed_rice.jpeg"
  },
  {
    id: 4,
    question: "bawang",
    answer: "garlic",
    category: "food",
    image: "./src/assets/garlic.jpeg"
  },
  {
    id: 5,
    question: "Tutuloy na ako",
    answer: "I have to go",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 6,
    question: "gumamit",
    answer: "use",
    category: "verb",
    image: ""
  },
  {
    id: 7,
    question: "tumawa",
    answer: "laugh",
    category: "verb",
    image: ""
  },
  {
    id: 8,
    question: "pumanta",
    answer: "go",
    category: "verb",
    image: ""
  },
  {
    id: 9,
    question: "kamusta",
    answer: "Hello (formal)",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 10,
    question: "salamat po",
    answer: "thank you (formal)",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 11,
    question: "magandang umaga",
    answer: "good morning",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 12,
    question: "saging",
    answer: "banana",
    category: "food",
    image: "./src/assets/banana.jpg"
  },
  {
    id: 13,
    question: "sampalok",
    answer: "tamarind",
    category: "food",
    image: "./src/assets/tamarind.jpg"
  },
]

export default App