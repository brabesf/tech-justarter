import { Button,DropdownMenu } from "@radix-ui/themes";

export function CourtSelector({tribunal, setTribunal} : {tribunal: string, setTribunal: (tribunal: string) => void}) {
  return <DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Button variant="soft" size='3'>
					{tribunal}
					<DropdownMenu.TriggerIcon />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content size = '2'>
				<DropdownMenu.Item onClick={() => setTribunal("TJAL")}>TJAL</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => setTribunal("TJCE")}>TJCE</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => setTribunal("Tribunal")}>Limpar</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>     
}
