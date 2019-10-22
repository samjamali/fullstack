import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { shallowEqual } from '@babel/types'


const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>

)

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>


    )

}

const Statistics = ({ s }) => {
    const { good, neutral, bad } = s

    const plus = bad + neutral + good;
    const average = (good - bad) / plus
    const posi = good / plus * 100

    if (plus > 0) {

        return (
            <div>
                <h1>Statistics</h1>
                <table>
                    <tbody>

                        <Statistic text="good" value={good} />
                        <Statistic text="neutral" value={neutral} />
                        <Statistic text="bad" value={bad} />
                        <Statistic text="all" value={ plus } />
                        <Statistic text="average" value={ average } />
                        <Statistic text="positive" value={ posi } />
                    </tbody>
                </table>

            </div>
        )
    }else{
        return(
            <p>No feedback given</p>
        )
    }

}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const s = {
        good: good,
        neutral: neutral,
        bad: bad
    }


    const handleGoodClick = () => {
        setGood(good + 1)

    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)

    }
    const handleBadClick = () => {
        setBad(bad + 1)

    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button onClick={handleGoodClick} text="good" />
            <Button onClick={handleNeutralClick} text="neutral" />
            <Button onClick={handleBadClick} text="bad" />

            <Statistics s={s} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)




ReactDOM.render(<App />, document.getElementById('root'))