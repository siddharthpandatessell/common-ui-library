import React from "react";
import useValidatedInput from '../../hooks/useValidatedInput';

export function TessellInput({ initialText }) {
  const validator = (text) => (text.length > 5 ? "Too long" : null);
  const [inputProps, error] = useValidatedInput(initialText, validator);

  return (
    <div>
      <input {...inputProps} />
      {error && (
        <div className="error" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
}
