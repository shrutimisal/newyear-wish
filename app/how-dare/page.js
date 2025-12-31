import HowDareClient from "./HowDareClient";

export default async function HowDarePage({ searchParams }) {
  const params = await searchParams;
  const name = params?.name;

  return <HowDareClient name={name} />;
}
