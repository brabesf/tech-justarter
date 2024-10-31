import * as React from 'react';
import { TextField } from "@radix-ui/themes";

export function CnjSelector({ cnj, setCnj }) {
    
    const handleChange = (event) => {
        setCnj(event.target.value);
      };
    

  return (
    <TextField.Root
      style={{height: '100%',
        width: "25vw"
      }}
      type="text"
      value={cnj}
      onChange={handleChange}
      placeholder="Número de processo"
    />
  );
}