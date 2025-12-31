"use client";
import { useEffect, useState } from "react";

export default function MemoriesClient({ name }) {
  const [showWish, setShowWish] = useState(false);

  const memories = {
    akanksha: [
      {
        image: "1a.jpeg",
        note: "Even standing with you, feel like home. 💕",
      },
      {
        image: "2a.jpeg",
        note: "Forever grateful for moments like these with you ✨",
      },
      {
        image: "3a.jpeg",
        note: "Some people just make everything brighter — that’s you 🌸",
      },
      {
        image: "4a.jpeg",
        note: "Don't forget to always hold hold my hand 🌸",
      },
      {
        image: "5a.jpeg",
        note: "Always keep shining, like you always do ✨",
      },
      {
        image: "cm.jpeg",
        note: "Grateful for this bond , a lots of kisses for you 🤍",
      },
    ],

    mansi: [
      {
        image: "1m.jpeg",
        note: "In that moment, your shoulder felt like home and my sorrows felt far away. 🤍",
      },
      {
        image: "2m.jpeg",
        note: "Smiles that feel safe. ✨",
      },
      {
        image: "3m.jpeg",
        note: "Life feels lighter when you’re around, Be my Dance partner always 🌷",
      },
      {
        image: "4m.jpeg",
        note: "So thankful for you — today and always💖",
      },
      {
        image: "cm.jpeg",
        note: "Grateful for this bond , a lots of kisses for you 🤍",
      },
    ],

    dnyaneshwari: [
      {
        image: "1d.jpeg",
        note: "Your presence alone makes moments meaningful 🌼",
      },
      {
        image: "2d.jpeg",
        note: "Strong, kind, and beautiful — just like this memory 💫",
      },
      {
        image: "3d.jpeg",
        note: "Every shared moment feels special with you 💕",
      },
      {
        image: "4d.jpeg",
        note: "You bring warmth wherever you go 🌸",
      },
      {
        image: "cm.jpeg",
        note: "Grateful for this bond , a lots of kisses for you 🤍",
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => setShowWish(true), 3000);
  }, []);

  if (!name || !memories[name]) {
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
        <h2>Some memories 💕</h2>
        {/* <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
          Just a few memories 🤍
        </p> */}

        <div className="photos">
          {memories[name].map((item, index) => (
            <div className="memory-card" key={index}>
              <img
                src={`/photos/${name}/${item.image}`}
                alt="memory"
                className="memory-image"
              />
              <div className="memory-note">{item.note}</div>
            </div>
          ))}
        </div>

        {showWish && (
          <div className="wish">
            <h1>✨ Happy New Year ✨</h1>
            <p>
              Wishing you a year full of love, growth, and beautiful moments ❤️
            </p>
            <br></br>
            <p>
              Made with ❤️ By your's Shruti!
            </p>
          </div>

          
        )}
      </div>
    </div>
  );
}
