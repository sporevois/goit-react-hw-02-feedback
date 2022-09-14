import React from 'react';
import styles from "./Feedback.module.css";
import shortid from "shortid";

const FeedbackOptions = ({ options, leaveFeedback }) => {
	return (
		<>
            {options.map((option) => {
                return <button key={shortid.generate()} type="button" className={styles.btn} name={option} onClick={leaveFeedback}>
                    {option}
                </button>
            })}
		</>
	);
};

export default FeedbackOptions;