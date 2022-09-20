import PropTypes from "prop-types";
import { StatisticsList } from './Statistics.styled';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => { 
  
  return (
    <StatisticsList>
      <li>Good: <span>{good}</span></li>
      <li>Neutral: <span>{neutral}</span></li>
      <li>Bad: <span>{bad}</span></li>
      <li>Total: <span>{total}</span></li>
      <li>Positive feedbacks: <span>{positivePercentage}</span>%</li>
    </StatisticsList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistics;
