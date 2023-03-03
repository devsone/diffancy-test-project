import { useState } from "react";

export const useLanding = () => {
  const [items, setItems] = useState<string>("");

  const generateNodes = () => {
    return items.split(" ").filter((item) => item);
  };

  return { items, setItems, generateNodes };
};
