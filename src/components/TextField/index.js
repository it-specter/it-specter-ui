import React from 'react';
import { StyledInput } from './styles';

const Input = ({
  value,
  type,
  label,
  onChange,
  onFocus,
  onBlur,
  setRef,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const validateValue = (val) => {
    if (type === 'email') {
      // VERY simple email validation
      if (val.indexOf('@') === -1) {
        setError('email is invalid');
      } else {
        setError(null);
      }
    }

    // ... any other validation you could think of
    // ... maybe even pass in an additional validation function as a prop?
  };

  const handleOnChange = (val) => {
    validateValue(val);
    onChange(val);
  };

  const renderLabel = () => {
    if (label) {
      // if we have an error
      if (error) {
        return <label>{error}</label>;
      }

      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value).length || type === 'date';

  return (
    <StyledInput focused={isFocused} error={error}>
      {renderLabel()}
      <input
        value={value}
        type={type}
        onChange={(e) => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={(ref) => setRef(ref)}
        {...props}
      />
    </StyledInput>
  );
};

Input.defaultProps = {
  type: 'text',
  label: '',
  onChange: (text) => {
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {},
};

export default Input;
