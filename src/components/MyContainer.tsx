
import { useState } from "react";
import MyList, { TItem } from "./MyList";

const MyContainer = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<TItem>([
    { id: "1", text: "This is first task", clicked: false },
    { id: "2", text: "This is second task", clicked: false },
  ]);

  const addItem = () => {
    if (input.trim() === "") return;

    setItems((prev) => [
      ...prev,
      { id: String(prev.length + 1), text: input, clicked: false },
    ]);
    setInput("");
  };

  const toggleClicked = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, clicked: !it.clicked } : it))
    );
  };

  return (
    <div>
      {/* This creates role="textbox" automatically */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addItem}>Add</button>

      <MyList
        header="this is list header"
        items={items}
        onItemClick={toggleClicked}
      />
    </div>
  );
};

export default MyContainer;
