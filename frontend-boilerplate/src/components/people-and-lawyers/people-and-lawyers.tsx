import { Flex, Heading, ScrollArea } from "@radix-ui/themes";

import styles from "@/styles/Parties.module.css"

import { Lawyer } from "./lawyer"
import { People } from "./people";
import { LawsuitProps } from "@/interfaces/Lawsuit-details.types";

export function PeopleAndLawyers({lawsuit} : {lawsuit : LawsuitProps}) {
  return <Flex align='start' direction={"column"} gap="0">
          <Heading size='4'>
            Partes envolvidas
          </Heading>
          <ScrollArea className={styles.parties}>
            {lawsuit.related_people.map((item, index) => (
              <People key={index} people={item}/>
              ))}
            {lawsuit.lawyers.map((item, index) => (
              <Lawyer key={index} lawyer={item}/>
              ))}
          </ScrollArea>
        </Flex>;
}
