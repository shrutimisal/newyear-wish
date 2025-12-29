"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function GiftPage() {
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  // ✅ GET NAME FROM URL
  const name = params.get("name");

  const openGift = () => {
    setOpened(true);
    setTimeout(() => {
      router.push(`/memories?name=${name}`);
    }, 1800);
  };

  // Optional safety check
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
        <h2>One last thing 🎁</h2>
        <p>Tap the gift box to see some memories I wanted to share 💗</p>

        <div
          className={`gift ${opened ? "open" : ""}`}
          onClick={openGift}
        >
          🎁
        </div>

        {opened && <p>Opening magic... ✨</p>}
      </div>
    </div>
  );
}
