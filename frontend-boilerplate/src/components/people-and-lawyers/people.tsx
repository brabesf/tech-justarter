import { Flex,Heading, Text } from "@radix-ui/themes";

import { RelatedPeople } from "@/interfaces/Lawsuit-details.types";

export function People({people} : {people: RelatedPeople}) {
  return <Flex align='start' direction={"column"} gap="0">
            <Heading size='2'>{people.name}</Heading>
            <Text size='1'>{"Parte envolvida - "+ people.role}</Text>
        </Flex>;
}