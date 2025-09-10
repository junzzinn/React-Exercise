import React, { useState } from "react";

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTips, setShowTips] = useState(true);

  if (!showTips) {
    return (
      <div>
        <h2>Conditional Rendering</h2>
        <p>Tips are hidden. Click below to show them again.</p>
        <button onClick={() => setShowTips(true)}>Show Tips</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {isLoggedIn && <p>Welcome back!</p>}
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>

      <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      <button onClick={() => setShowTips(false)}>Hide Tips</button>
    </div>
  );
}
