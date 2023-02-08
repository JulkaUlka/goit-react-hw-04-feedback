import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled.jsx';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {Object.keys(options).map(option => (
        <ButtonItem key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
}

FeedbackOptions.propTypes = {  
  onLeaveFeedback: PropTypes.func.isRequired,
};
