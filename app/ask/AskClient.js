"use client";
import { useRouter } from "next/navigation";

export default function AskClient({ name }) {
  const router = useRouter();

  if (!name) {
    return (
      <div className="container">
        <div className="card">
          <p>Invalid access ❌</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        
        {/* 🌸 IMAGE ABOVE HEY */}
        <img
          src="/images/png_cat.png"
          alt="cute"
          style={{
            width: "140px",
            margin: "0 auto 16px",
            display: "block"
          }}
        />

        <h2>Hey 💖</h2>
        <p>I made something for you…</p>
        <p>Will you see it? 🥺</p>

        <div className="options">
          <button onClick={() => router.push(`/gift?name=${name}`)}>
            Yes 😌
          </button>

          <button
            style={{ background: "#888", marginTop: "10px" }}
            onClick={() => router.push(`/how-dare?name=${name}`)}
          >
            No 🙄
          </button>
        </div>
      </div>
    </div>
  );
}
