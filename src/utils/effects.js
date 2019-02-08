import { useState, useCallback } from 'react';

export function inputHandler(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(function(event) {
    setValue(event.currentTarget.value);
  }, []);

  return {
    value,
    onChange,
  };
}