import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.contrastText};
  border: 0.2rem ${({ theme }) => theme.colors.primary} solid;
  border-radius: 0.4rem;
  outline: none;
  padding: 0.8rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
