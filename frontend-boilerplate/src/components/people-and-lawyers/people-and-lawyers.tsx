import { Heading, Flex, ScrollArea } from "@radix-ui/themes";
import { People } from "./people";
import { Lawyer } from "./lawyer"
import styles from "@/styles/Parties.module.css"

export function PeopleAndLawyers({people, lawyers}) {
  return <Flex align='start' direction={"column"} gap="0">
          <Heading size='4'>
            Partes envolvidas
          </Heading>
          <ScrollArea className={styles.parties}>
            {people.map((item, index) => (
              <People people={item}/>
              ))}
            {lawyers.map((item, index) => (
              <Lawyer lawyer={item}/>
              ))}
          </ScrollArea>
        </Flex>;
}
