"use client";
import { useRouter } from "next/navigation";

export default function HowDareClient({ name }) {
  const router = useRouter();

  return (
    <div className="container">
      <div className="card">

        {/* 😤 IMAGE ABOVE TEXT */}
        <img
          src="/images/cat_gun.png"
          alt="how dare"
          style={{
            width: "160px",
            margin: "0 auto 18px",
            display: "block",
            filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.18))"
          }}
        />

        <h2>😤 How dare you say NO</h2>
        <p>I worked on this, you know 😤</p>

        <button onClick={() => router.push(`/ask?name=${name}`)}>
          Go back 😅
        </button>

      </div>
    </div>
  );
}
