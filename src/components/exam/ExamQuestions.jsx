"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitExam } from "../../features/exams/examsSlice"

function ExamQuestions({ questions }) {
  const dispatch = useDispatch()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    dispatch(submitExam(answers))
  }

  const question = questions[currentQuestion]

  return (
    <div className="space-y-4">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>{question.text}</p>
          </div>
          <div className="mt-5">
            {question.options.map((option, index) => (
              <div key={index} className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id={`question-${question.id}-option-${index}`}
                    name={`question-${question.id}`}
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    checked={answers[question.id] === option}
                    onChange={() => handleAnswer(question.id, option)}
                  />
                  <label
                    htmlFor={`question-${question.id}-option-${index}`}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          Previous
        </button>
        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default ExamQuestions

