import { Flex,ScrollArea } from "@radix-ui/themes";
import { Activity } from "@/interfaces/Lawsuit-details.types";
import styles from "@/styles/Lawsuit-movement-list.module.css"
import { OfferProps } from "@/pages/lawsuit/[number]";
import { LawsuitMovement } from "./lawsuit-movement";

export function LawsuitMovementList({movements, participating, offer, callAccept, callInteraction} : {movements: Activity[], participating : boolean, offer: OfferProps, callAccept : () => void, callInteraction : (id: number) => void}) {
  return <ScrollArea className={styles.movements}>
          <Flex align='center' direction={"column"} gap="0">
            {movements.map((item, index) => (
              <LawsuitMovement key={index} movement={item} blur={(index == 0) && participating} offer = {offer} callAccept={callAccept} movementId={movements.length - index - 1} callInteraction={callInteraction}/>
              ))}
          </Flex>
        </ScrollArea>
}
