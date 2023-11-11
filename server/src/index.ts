import { app } from "./app";

const PORT = process.env.PORT || 3000;

async function main() {
  await app.listen(PORT);

  console.log(`Server is listening on port ${PORT}`);
}

main();
