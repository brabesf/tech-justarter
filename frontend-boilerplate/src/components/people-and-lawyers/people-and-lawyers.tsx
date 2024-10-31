import { Flex, Heading, ScrollArea } from "@radix-ui/themes";

import styles from "@/styles/Parties.module.css"

import { Lawyer } from "./lawyer"
import { People } from "./people";

export function PeopleAndLawyers({people, lawyers}) {
  return <Flex align='start' direction={"column"} gap="0">
          <Heading size='4'>
            Partes envolvidas
          </Heading>
          <ScrollArea className={styles.parties}>
            {people.map((item, index) => (
              <People key={index} people={item}/>
              ))}
            {lawyers.map((item, index) => (
              <Lawyer key={index} lawyer={item}/>
              ))}
          </ScrollArea>
        </Flex>;
}
