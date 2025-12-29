import GiftClient from "./GiftClient";

export default async function GiftPage({ searchParams }) {
  const params = await searchParams;   // ✅ unwrap Promise
  const name = params?.name;

  return <GiftClient name={name} />;
}
