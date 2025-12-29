"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const allowedNames = ["mansi", "akanksha", "dnyaneshwari"];

  const handleSubmit = () => {
    if (allowedNames.includes(name.toLowerCase().trim())) {
      router.push(`/question?name=${name}`);
    } else {
      setError("Only special people are allowed 😌💖");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🎆 New Year Gate 🎆</h1>
        <p>Enter your name to unlock the surprise</p>

        <input
          type="text"
          placeholder="Your beautiful name 💕"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleSubmit}>Unlock ✨</button>

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
