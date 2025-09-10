
import React from "react";
import ConditionalRendering from "./ConditionalRendering";
import DynamicObjects from "./DynamicObjects";
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <h1>Exercise 1: Counter</h1>
      <Counter />
      <h1>Exercise 2: Conditional Rendering & Dynamic Objects</h1>
      <ConditionalRendering />
      <DynamicObjects />
    </div>
  );
}
