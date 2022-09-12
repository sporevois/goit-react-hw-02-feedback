import styles from "./Feedback.module.css";

const FeedbackOptions = ({leaveFeedback}) => {
    return (
        <>
            <button className={styles.btn} onClick={() => leaveFeedback("good")}>Good</button>
            <button className={styles.btn} onClick={() => leaveFeedback("neutral")}>Neutral</button>
            <button className={styles.btn} onClick={() => leaveFeedback("bad")}>Bad</button>
        </>
    )
}

export default FeedbackOptions;