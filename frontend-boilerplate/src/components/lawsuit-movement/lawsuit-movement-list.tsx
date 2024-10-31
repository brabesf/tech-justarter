import { ScrollArea, Flex } from "@radix-ui/themes";
import { LawsuitMovement } from "./lawsuit-movement";
import styles from "@/styles/Lawsuit-movement-list.module.css"

export function LawsuitMovementList({movements, participating, offer, callAccept, callInteraction}) {
  return <ScrollArea className={styles.movements}>
          <Flex align='center' direction={"column"} gap="0">
            {movements.map((item, index) => (
              <LawsuitMovement movement={item} blur={(index == 0) && participating} offer = {offer} callAccept={callAccept} movementId={movements.length - index - 1} callInteraction={callInteraction}/>
              ))}
          </Flex>
        </ScrollArea>
}
