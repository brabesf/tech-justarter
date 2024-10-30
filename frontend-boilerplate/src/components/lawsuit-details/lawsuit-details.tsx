import { Heading, Flex, ScrollArea, Text } from "@radix-ui/themes";

export function LawsuitDetails({lawsuit}) {
  return <Flex align='start' direction={"column"} gap="0">
          <Heading size='4'>
            Detalhes
          </Heading>
          <ScrollArea style={{height:'30vh'}}>
            <Flex direction='column'>
              <Text>{"Natureza: " + lawsuit.nature}</Text>
              <Text>{"Tipo: " + lawsuit.kind}</Text>
              <Text>{"Assunto: " + lawsuit.subject}</Text>
              <Text>{"Valor: R$" + lawsuit.value}</Text>
            </Flex>
          </ScrollArea>
        </Flex>;
}
