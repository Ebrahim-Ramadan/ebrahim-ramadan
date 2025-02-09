// page.tsx

import { Posts } from "./Posts";

export const revalidate = 60000000000000000000000000000;


export default async function Home() {
  return <Posts />;
}