import styles from "./Feedback.module.css";
import { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";

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
                <Section title="Please leave feedback">
                    <FeedbackOptions leaveFeedback={this.leaveFeedback}/>
                </Section>
                <Section title="Statistics">
                    {!total
                        ? <Notification message="There is no feedback" />
                        : <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                        />
                    }                    
                </Section>

            </div>
        )
    }
}
