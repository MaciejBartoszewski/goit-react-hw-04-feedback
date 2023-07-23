import { useState } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackoptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

const rating = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

export const App = () => {
  const [rated, setRated] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleCountFeedback = event => {
    const { name } = event.target;
    setRated(prev => ({ ...prev, [name]: prev[name] + 1 }));
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = () => {
    const values = Object.values(rated);
    const totalSum = values.reduce((total, value) => {
      return total + value;
    });
    return totalSum;
  };

  const countPositiveFeedbackPercentage = () => {
    if (rated.good >= 1) {
      const roundSum = Math.ceil((rated.good / countTotalFeedback()) * 100
      );
      const feedbackPercentage = `${roundSum + '%'}`;
      return feedbackPercentage;
    }
  };

  const totalSum = countTotalFeedback();

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={rating}
          onLeaveFeedback={handleCountFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalSum === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            rated={rated}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
}