import AskClient from "./AskClient";

export default async function AskPage({ searchParams }) {
  const params = await searchParams;
  const name = params?.name;

  return <AskClient name={name} />;
}
