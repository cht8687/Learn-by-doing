import React, { PropTypes} from 'react';

const Button = (props) => {
  const { label, btn } = props;

  return (
    <button className={btn}>
      <span className={label} />
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  btn: PropTypes.string
};

export default Button;