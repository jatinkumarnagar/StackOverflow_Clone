import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()

  const user = 1;
  const navigate = useNavigate()

  const questionList = useSelector(state => state.questionsReducer);
  console.log(questionList)
 /* var questionList = [{
    _id: 1,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a Function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node.js", "react js", "mongodb"],
    userPosted: "manu",
    userId: 1,
    askedOn: "Jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: "Kumar",
      answeredOn: "Jan 2",
      userId: 2,
    }]
  },{
    _id: 2,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a Function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python", "mongodb"],
    userPosted: "manu",
    askedOn: "Jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "Yashwant",
      answeredOn: "June 21",
      userId: 2,
    }]
  },{
    _id: 3,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a Function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "manu",
    askedOn: "Jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: "Manish",
      answeredOn: "July 22",
      userId: 2,
    }]
  }]
*/
  const checkAuth = () => {
    if(user === null){
      alert("Please Log in or Sign up to ask a Question")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
      {questionList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.data.length} Questions</p>
            <QuestionList questionList={questionList.data} />
          </>
        )}
      </div>
    </div>
  )
}

export default HomeMainbar
