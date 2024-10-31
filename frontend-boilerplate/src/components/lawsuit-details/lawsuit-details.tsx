import { Flex, Heading, ScrollArea, Text } from "@radix-ui/themes";

import styles from "@/styles/Lawsuit-details.module.css"
import { LawsuitProps } from "@/interfaces/Lawsuit-details.types";

export function LawsuitDetails({lawsuit}: {lawsuit: LawsuitProps}) {
  return <Flex align='start' direction={"column"} gap="0">
          <Heading size='4'>
            Detalhes
          </Heading>
          <ScrollArea className={styles.details}>
            <Flex direction='column'>
              <Text size='2'>{"Natureza: " + lawsuit.nature}</Text>
              <Text size='2'>{"Tipo: " + lawsuit.kind}</Text>
              <Text size='2'>{"Assunto: " + lawsuit.subject}</Text>
              <Text size='2'>{"Valor: R$" + lawsuit.value}</Text>
            </Flex>
          </ScrollArea>
        </Flex>;
}
