import React from 'react'
import test from './Test2'
import Quiz from 'react-quiz-component'
const AptitudeTest = () => {
    return (
        <div>
            <Quiz quiz={test} showDefaultResult={false} onComplete={() => {
                window.open("/student/aptitudetest", "_self");
            }} />
        </div>
    )
}

export default AptitudeTest