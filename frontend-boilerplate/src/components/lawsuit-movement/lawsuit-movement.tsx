import { Card, DataList, Text, AlertDialog, Flex, Button } from "@radix-ui/themes";
import { Cross1Icon, CheckIcon } from "@radix-ui/react-icons";
import styles from "@/styles/Lawsuit-movement.module.css"
import React, {useState} from "react";

export function LawsuitMovement({movement, blur, offer, callAccept}) {
  
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AlertDialog.Root>
    {(blur && isHovered) ?
      <>
        <AlertDialog.Trigger>
          <Card className={styles.blurred}
            onMouseLeave={() => setIsHovered(false)}>
              <DataList.Root>
                Clique para liberar a última movimentação
              </DataList.Root>
          </Card>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="40vw">
          <Flex direction='column' gap='5'>
            <Flex align='start' justify='start' direction='column' gap='1'>
              <Flex align='start' justify='start' direction='row' gap='7'>
                <AlertDialog.Title>{offer.header.title}</AlertDialog.Title>
                <AlertDialog.Cancel>
                    <Cross1Icon style={{justifyContent: 'end'}}/>
                </AlertDialog.Cancel> 
              </Flex>
              
              <AlertDialog.Description size="3">
                {offer.header.subtitle}
              </AlertDialog.Description>
            </Flex>
            <Flex gap = '3' direction='column'>
              {offer.body.benefits.map((item, index) => (
                <Flex gap='3'>
                  <CheckIcon color="green"/>
                  <Text size='1'>{item}</Text>
                </Flex>
                ))}
            </Flex>

          <Flex gap = '1' direction='column' align='center' justify='center'>
            <Text>{"De " + offer.body.price.next + " por:"}</Text>
            <Text>{offer.body.price.current}</Text>
            <Text size='1'>{"No "+ offer.body.price.period}</Text>
          </Flex>     
          <AlertDialog.Action>
            <Button variant="solid" color="jade" style={{width: '100%'}} onClick={callAccept}>
              {offer.body.button.label}
            </Button>
          </AlertDialog.Action>
          <Text size='1' align='center'>Renovação mensal automática. Cancele quando quiser.</Text>
        </Flex>
        
      </AlertDialog.Content>
      </>
    : <Card className={styles.movement}
        onMouseEnter={() => blur ? setIsHovered(true) : setIsHovered(false)}>
            <DataList.Root>
              <DataList.Item>
                <DataList.Label>Data:</DataList.Label>
                <DataList.Value>{movement.date}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Movimentação:</DataList.Label>
                {blur ? <DataList.Value className={styles.blurredText}>Boa tentativa, agora passa o pix!</DataList.Value>:
                <DataList.Value>{movement.description}</DataList.Value>}
              </DataList.Item>
            </DataList.Root>

        </Card>
  
    }
    </AlertDialog.Root> 
  );
}