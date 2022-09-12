import styles from "./Feedback.module.css";
import { Component } from "react";

export default class Feedback extends Component{
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    leaveFeedback = (propName) => {
        this.setState((prevState) => {
            const value = prevState[propName];
            return {
                [propName]: value + 1,
            }
        })        
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const percentage = Number((good / total) * 100).toFixed(0);
        return percentage;        
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
            <div>
                <div>
                    <h2>Please leave feedback</h2>
                    <button className={styles.btn} onClick={() => { this.leaveFeedback("good") }}>Good</button>
                    <button className={styles.btn} onClick={() => { this.leaveFeedback("neutral") }}>Neutral</button>
                    <button className={styles.btn} onClick={() => { this.leaveFeedback("bad") }}>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        <li>Total: {total}</li>
                        <li>Positive feedback: {positivePercentage} %</li>
                    </ul>
                </div>
            </div>
        )
    }
}
