import { TextField } from "@radix-ui/themes";
import * as React from 'react';

import styles from "@/styles/CnjSelector.module.css"

export function CnjSelector({ cnj, setCnj } : {cnj: string, setCnj: (cnj: string) => void}) {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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