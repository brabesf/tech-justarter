import { Card, DataList, Text, AlertDialog, Flex, Button } from "@radix-ui/themes";
import styles from "@/styles/Lawsuit-movement.module.css"
import React, {useState} from "react";

export function LawsuitMovement({movement, blur, offer, callAccept}) {
  
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card className={blur ? styles.blurred : styles.movement} 
      onMouseEnter={() => blur ? setIsHovered(true) : setIsHovered(false)}
      onMouseLeave={() => setIsHovered(false)}>
      {isHovered ? 
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <DataList.Root>
            Clique para liberar a última movimentação
          </DataList.Root>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="40vw">
          <AlertDialog.Title>{offer.header.title}</AlertDialog.Title>
          <AlertDialog.Description size="3">
            {offer.header.subtitle}
          </AlertDialog.Description>
          <Flex gap = '3' direction='column'>
            {offer.body.benefits.map((item, index) => (
              <Text size='1'>{item}</Text>
              ))}
          </Flex>

          <Flex gap = '1' direction='column' align='center'>
            <Text>{"De " + offer.body.price.next + " por:"}</Text>
            <Text>{offer.body.price.current}</Text>
            <Text size='1'>{"No "+ offer.body.price.period}</Text>
          </Flex>      
          <AlertDialog.Action>
            <Button variant="solid" color="jade" onClick={callAccept}>
              {offer.body.button.label}
            </Button>
          </AlertDialog.Action>
          
        </AlertDialog.Content>

        
      </AlertDialog.Root> : <DataList.Root>
        <DataList.Item>
          <DataList.Label>Data:</DataList.Label>
          <DataList.Value>{movement.date}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Movimentação:</DataList.Label>
          {blur ? <DataList.Value className={styles.blurredText}>Boa tentativa, agora passa o pix!</DataList.Value>:
          <DataList.Value>{movement.description}</DataList.Value>}
        </DataList.Item>
      </DataList.Root>}
    </Card>
  );
}
