import { Flex, Heading, ScrollArea, Text } from "@radix-ui/themes";

import { LawsuitProps } from "@/interfaces/Lawsuit-details.types";
import styles from "@/styles/Lawsuit-details.module.css"

function formatMoney(value: number) {
  
  const formattedValue = value.toFixed(2);
  let [integerPart, fractionalPart] = formattedValue.split('.');
  let integerFormatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return integerFormatted + ',' + fractionalPart;
}
export function LawsuitDetails({lawsuit}: {lawsuit: LawsuitProps}) {
  return <Flex align='start' direction={"column"} gap="0">
          <Heading size='4'>
            Detalhes
          </Heading>
          <ScrollArea className={styles.details}>
            <Flex direction='column'>
              <Text size='2'>Natureza: {lawsuit.nature}</Text>
              <Text size='2'>Tipo: {lawsuit.kind}</Text>
              <Text size='2'>Assunto: {lawsuit.subject}</Text>
              <Text size='2'>Valor: R${formatMoney(lawsuit.value)}</Text>
            </Flex>
          </ScrollArea>
        </Flex>;
}
