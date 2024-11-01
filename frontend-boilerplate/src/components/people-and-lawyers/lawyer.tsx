import { Flex,Heading, Text } from "@radix-ui/themes";

import {LawyerProps} from "@/interfaces/Lawsuit-details.types"

export function Lawyer({lawyer} : {lawyer: LawyerProps}) {
  return <Flex align='start' direction={"column"} gap="0">
            <Heading size='2'>{lawyer.name}</Heading>
            <Text size='1'>Advogado envolvido</Text>
        </Flex>;
}