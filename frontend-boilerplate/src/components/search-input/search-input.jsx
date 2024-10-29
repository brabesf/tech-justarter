import { Button, Flex } from "@radix-ui/themes";
import { CourtSelector } from "./court-selector";
import { CnjSelector } from "./cnj-selector";
import { set } from "lodash";

export function SearchInput({tribunal, setTribunal, cnj, setCnj, onSearch}) {

  return <Flex align="start" justify="start" gap='4'>
            <CourtSelector tribunal={tribunal} setTribunal={setTribunal}/>
            <CnjSelector cnj={cnj} setCnj={setCnj}/>
            <Button size='3' onClick={onSearch}>
	            Buscar
            </Button>
        </Flex>;
}
