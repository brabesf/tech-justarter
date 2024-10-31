import { Heading, Flex, Button } from "@radix-ui/themes";
import styles from "@/styles/Lawsuit-header.module.css"

export function LawsuitHeader({number, court, date, handleBack}) {
  return <Flex className={styles.header} gap="9">
          <Flex direction='column'>
          <Heading size='7'>
            {"Processo n°" + number + " do " + court}
          </Heading>
          <Heading size='2'>
            {"Data de distribuição: " + date.slice(0, 10)}
          </Heading>
          </Flex>
          <Button onClick={handleBack}>
            Pesquisar outro processo
          </Button>
        </Flex>;
}
