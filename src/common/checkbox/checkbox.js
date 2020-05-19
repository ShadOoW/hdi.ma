import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

const check = keyframes`
  50% transform: scale(1.2);
`;

const Input = styled.input`
  display: none;

  &:checked +label {
    span {
      &:first-child {
        border-color: ${cssVarColorsNames.foregroundAccent};
        background: ${cssVarColorsNames.foregroundAccent};
        animation: ${check} .6s ease;
        svg {
          stroke-dashoffset: 0;
        }
        &:before {
          transform: scale(2.2);
          opacity: 0;
          transition: all .6s ease;
        }
      }
    }
  }
`;

const Label = styled.label`
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0,0,0);

    &:first-child {
      position: relative;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      transform: scale(1);
      vertical-align: middle;
      border: 2px solid ${cssVarColorsNames.foregroundAccent};
      transition: all .2s ease;
      margin-right: 1rem;

      svg {
        position: absolute;
        z-index: 1;
        top: 8px;
        left: 6px;
        fill: none;
        stroke: white;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 16px;
        stroke-dashoffset: 16px;
        transition: all .3s ease;
        transition-delay: .1s;
        transform: translate3d(0,0,0);
      }
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        background: #506EEC;
        display: block;
        transform: scale(0);
        opacity: 1;
        border-radius: 50%;
        transition-delay: .2s;
      }
    }
  }

  &:hover span:first-child {
    border-color: ${cssVarColorsNames.foregroundAccent};
  }
`;

const Checkbox = ({ text, uniqueId, checked, onChange }) => (
  <>
    <Input id={uniqueId} type='checkbox' defaultChecked={checked} onChange={onChange} />
    <Label htmlFor={uniqueId}>
      <span>
        <svg width='12px' height='9px' viewBox='0 0 12 9'>
          <polyline points='1 5 4 8 11 1' />
        </svg>
      </span>
      <span>{text}</span>
    </Label>
  </>
);

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  uniqueId: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}

Checkbox.defaultProps = {
  checked: false,
  onChange: () => { },
}

export default Checkbox;
