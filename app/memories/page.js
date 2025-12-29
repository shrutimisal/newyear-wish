import MemoriesClient from "./MemoriesClient";

export default async function MemoriesPage({ searchParams }) {
  const params = await searchParams;      // ✅ unwrap Promise
  const name = params?.name?.toLowerCase();

  return <MemoriesClient name={name} />;
}
