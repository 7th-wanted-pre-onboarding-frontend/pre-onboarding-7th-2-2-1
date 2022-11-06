import React from 'react';

export default function DateInput({ value, onClick }) {
  return (
    <button type='button' onClick={onClick}>
      {value}
    </button>
  );
}
