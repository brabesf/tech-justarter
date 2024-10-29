import { Heading, Flex } from "@radix-ui/themes";

export function SearchHeader() {
  return <Flex align='center' direction={"column"} gap="6">
          <Heading size="8">
            Consulta de processos
          </Heading>
          <Heading size="3">
            Selecione um tribunal para listar os processos ou buscar pelo número unificado.
          </Heading>
        </Flex>;
}
