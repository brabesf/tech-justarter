import { Card, DataList } from "@radix-ui/themes";

import styles from "@/styles/Lawsuit-card.module.css";

export function LawsuitCard({props, handleClick}) {

  return (
    <Card className={styles.lawsuit} onClick={() => handleClick(props)}>
      <DataList.Root>
        <DataList.Item>
          <DataList.Label>Número:</DataList.Label>
          <DataList.Value>{props.number}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Tribunal:</DataList.Label>
          <DataList.Value>{props.court}</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
  );
}
