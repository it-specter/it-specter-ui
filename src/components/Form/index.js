import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './styles';

const Form = (props) => {
  return (
    <StyledForm>
      {props.children}
    </StyledForm>
  );
};

Form.propTypes = {

};

// Card.defaultProps = {
//   children: PropTypes.node.isRequired,
//   variant: 'Card',
// };

export default Form;