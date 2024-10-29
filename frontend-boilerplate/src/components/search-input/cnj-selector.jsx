import * as React from 'react';
import { TextField } from "@radix-ui/themes";

export function CnjSelector({ cnj, setCnj }) {
    
    const handleChange = (event) => {
        setCnj(event.target.value);
      };
    

  return (
    <input
      type="text"
      value={cnj}
      onChange={handleChange}
      placeholder="Número de processo"
    />
  );
}