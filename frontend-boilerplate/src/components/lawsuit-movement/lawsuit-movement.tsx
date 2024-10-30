import { Card, DataList } from "@radix-ui/themes";
import styles from "@/styles/Lawsuit-movement.module.css"
export function LawsuitMovement({movement}) {

  return (
    <Card className={styles.movement}>
      <DataList.Root>
        <DataList.Item>
          <DataList.Label>Data:</DataList.Label>
          <DataList.Value>{movement.date}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label>Tribunal:</DataList.Label>
          <DataList.Value>{movement.description}</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
  );
}
