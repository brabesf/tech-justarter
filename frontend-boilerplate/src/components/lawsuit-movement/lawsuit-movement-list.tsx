import { Heading, Flex } from "@radix-ui/themes";
import { LawsuitMovement } from "./lawsuit-movement";

export function LawsuitMovementList({movements, participating, offer, callAccept}) {
  return <Flex align='center' direction={"column"} gap="0">
          {movements.map((item, index) => (
            <LawsuitMovement movement={item} blur={(index == 0) && participating} offer = {offer} callAccept={callAccept}/>
            ))}
        </Flex>;
}
