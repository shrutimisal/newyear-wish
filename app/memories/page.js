import MemoriesClient from "./MemorieClient";

export default async function MemoriesPage({ searchParams }) {
  const params = await searchParams;
  const name = params?.name?.toLowerCase();

  return <MemoriesClient name={name} />;
}
