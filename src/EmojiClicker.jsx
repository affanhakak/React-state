import { useState } from "react";
import { v4 as uuid } from "uuid";

function genRandomEmojis() {
  const emoChoices = ["😀", "🤡", "👻", "👿", "🫥", "😡", "🥶"];
  return emoChoices[Math.floor(Math.random() * emoChoices.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([
    { id: uuid(), emoji: genRandomEmojis() },
  ]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: genRandomEmojis() },
    ]); //spread operator keeps whatever was there in previous array and adds in the emoji passed as second element in the array
  };
  const deleteEmoji = (id) => {
    setEmojis((previousEmojis) => {
      return previousEmojis.filter((e) => e.id !== id);
    });
  };
  const replaceEmoji = () => {
    setEmojis((previousEmojis) => {
      return previousEmojis.map((e) => {
        return { ...e, emoji: "🫀" };
      });
    });
  };
  return (
    <>
      <div>
        {emojis.map((e) => {
          return (
            <span
              key={e.id}
              style={{ fontSize: "4rem" }}
              onClick={() => deleteEmoji(e.id)}
            >
              {e.emoji}
            </span>
          );
        })}
      </div>
      <div>
        <button onClick={addEmoji}>Add Emoji</button>
        <button onClick={replaceEmoji}>Replace</button>
      </div>
    </>
  );
}

[{}];

//Arrays In State
//generating ids with uuid
//deleting elements
//updating all elements in an array
