import * as React from 'react';
import { TextField } from "@radix-ui/themes";
import styles from "@/styles/CnjSelector.module.css"
export function CnjSelector({ cnj, setCnj }) {
    
    const handleChange = (event) => {
        setCnj(event.target.value);
      };
    

  return (
    <TextField.Root
      className={styles.selector}
      type="text"
      value={cnj}
      onChange={handleChange}
      placeholder="Número de processo"
    />
  );
}