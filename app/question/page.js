import QuestionClient from "./QuestionClient";

export default async function QuestionPage({ searchParams }) {
  const params = await searchParams;   // ✅ unwrap Promise
  const name = params?.name?.toLowerCase();

  return <QuestionClient name={name} />;
}
