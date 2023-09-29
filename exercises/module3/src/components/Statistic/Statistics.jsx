import StatisticLine from "./StatisticLine.jsx";

const Statistics = ({good, neutral, bad, all, average, positive}) => {
    return (
        <table>
            <tbody>
                <StatisticLine text='Good' value={good} />
                <StatisticLine text='Neutral' value={neutral} />
                <StatisticLine text='Bad' value={bad} />
                <StatisticLine text='All' value={all} />
                <StatisticLine text='Average' value={average} />
                <StatisticLine text='Positive' value={positive} />
            </tbody>
        </table>
    )
}

export default Statistics