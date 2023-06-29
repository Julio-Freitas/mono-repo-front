import { sum } from "@alura/utils/macth";
import { Text } from "@alura/ds";

export default function Home() {
  return (
    <main>
      <h1>{sum(1, 2)}</h1>
      <Text tag="h1"> OLA MUNDO</Text>
    </main>
  );
}
