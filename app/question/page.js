"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Question() {
  const router = useRouter();
  const params = useSearchParams();
  const name = params.get("name")?.toLowerCase();

  const [error, setError] = useState("");

  // Data based on person
  const data = {
    mansi: {
      correct: "Mauu🐱",
      options: ["Mauu🐱", "Mansi", "Don❤️", "Mansi GPM"],
    },
    akanksha: {
      correct: "Madam✨",
      options: ["Akanksha", "Akku❤️", "Madam✨", "Doreamon"],
    },
    dnyaneshwari: {
      correct: "D❤️",
      options: ["Dnyanu✨", "D❤️", "Dnyanu FS", "Dnyanu GPM"],
    },
  };

  if (!data[name]) {
    return (
      <div className="container">
        <div className="card">
          <p>Invalid access ❌</p>
        </div>
      </div>
    );
  }

  const handleSelect = (option) => {
    if (option === data[name].correct) {
      router.push(`/gift?name=${name}`);
    } else {
      setError("Wrong one 😝 Choose again!");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Hey {name.charAt(0).toUpperCase() + name.slice(1)} 💖</h2>
        <p>Let's see how much you know me..</p>
        <p>How is your number saved in my phone?</p>

        <div className="options">
          {data[name].options.map((opt) => (
            <button key={opt} onClick={() => handleSelect(opt)}>
              {opt}
            </button>
          ))}
        </div>

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
