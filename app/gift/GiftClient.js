"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GiftClient({ name }) {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  const openGift = () => {
    setOpened(true);
    setTimeout(() => {
      router.push(`/memories?name=${name}`);
    }, 1800);
  };

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
        <h2>Okay Beauty 🎁</h2>
        <p>Tap the gift box to see some memories I wanted to share 💗</p>

        <div
          className={`gift ${opened ? "open" : ""}`}
          onClick={openGift}
        >
          🎁
        </div>

        {opened && <p>Opening memories… ✨</p>}
      </div>
    </div>
  );
}
