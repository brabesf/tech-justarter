import { Button, Flex } from "@radix-ui/themes";

import { CnjSelector } from "./cnj-selector";
import { CourtSelector } from "./court-selector";

import {SearchInputProps} from "@/interfaces/Search-input.types"

export function SearchInput({tribunal, setTribunal, cnj, setCnj, onSearch} : SearchInputProps) {

  return <Flex align="start" justify="start" gap='4'>
            <CourtSelector tribunal={tribunal} setTribunal={setTribunal}/>
            <CnjSelector cnj={cnj} setCnj={setCnj}/>
            <Button size='3' onClick={onSearch}>
	            Buscar
            </Button>
        </Flex>;
}