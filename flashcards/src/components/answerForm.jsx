import React from 'react'

const AnswerForm = ({currentVal, handleChange, answerFeedback, onCheckAnswer}) => {

    return(
        <div>
            <div className='input-container'>
                <h3>Guess the Answer Here: </h3>
                <input
                  type="text"
                  name="flashcardAnswer"
                  value={currentVal}
                  placeholder="Guess the answer"
                  onChange={handleChange}
                  className="textbox"
                />
                <button type="submit" className='button' onClick={onCheckAnswer}>Answer</button>
            </div>
            <div className="input-container feedback">{answerFeedback}</div>
        </div>
        
    )
}

export default AnswerForm;