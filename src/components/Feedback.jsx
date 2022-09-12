import styles from "./Feedback.module.css";
import { Component } from "react";

export default class Feedback extends Component{
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }


    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <div>
                    <h2>Please leave feedback</h2>
                    <button className={styles.btn}>Good</button>
                    <button className={styles.btn}>Neutral</button>
                    <button className={styles.btn}>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        <li>Total:</li>
                        <li>Positive feedback:</li>
                    </ul>
                </div>
            </div>
        )
    }
}
