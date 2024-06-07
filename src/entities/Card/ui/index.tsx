import { Card, Image, Text, Group, Badge, Button } from "@mantine/core";
import styles from "./styles.module.css";
import { FC } from "react";

interface CustomCardProps {
  background_image: string;
  name: string;
  released: string;
  rating: number;
}

const CustomCard: FC<CustomCardProps> = ({
  background_image,
  name,
  released,
  rating,
}) => {
  return (
    <Card withBorder radius="md" p="md" className={styles.card}>
      <Card.Section>
        <Image src={background_image} alt={name} className={styles.imageGame}/>
      </Card.Section>

      <Card.Section className={styles.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {name}
          </Text>
          <Badge size="sm" variant="light">
            {rating}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {released}
        </Text>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1, alignItems: "end" }}>
          Show details
        </Button>
      </Group>
    </Card>
  );
};

export default CustomCard;
