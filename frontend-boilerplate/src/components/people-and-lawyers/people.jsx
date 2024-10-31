import { Flex,Heading, Text } from "@radix-ui/themes";

export function People({people}) {
  return <Flex align='start' direction={"column"} gap="0">
            <Heading size='2'>{people.name}</Heading>
            <Text size='1'>{"Parte envolvida - "+ people.role}</Text>
        </Flex>;
}