import { Button,Flex, Heading } from "@radix-ui/themes";

import styles from "@/styles/Lawsuit-header.module.css"
import { LawsuitHeaderProps } from "@/interfaces/Lawsuit-header.types";
export function LawsuitHeader({lawsuit, handleBack} : LawsuitHeaderProps) {
  return <Flex className={styles.header} gap="9">
          <Flex direction='column'>
          <Heading size='7'>
            {"Processo n°" + lawsuit.number + " do " + lawsuit.court}
          </Heading>
          <Heading size='2'>
            {"Data de distribuição: " + lawsuit.date.slice(0, 10)}
          </Heading>
          </Flex>
          <Button onClick={handleBack}>
            Pesquisar outro processo
          </Button>
        </Flex>;
}
