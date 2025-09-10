import React, { useState } from "react";

export default function DynamicObjects() {
  const [profile, setProfile] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex@example.com",
    preferences: { theme: "light", newsletter: true },
  });

  const updateField = (key, value) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const toggleTheme = () => {
    setProfile(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        theme: prev.preferences.theme === "light" ? "dark" : "light",
      },
    }));
  };

  const toggleNewsletter = () => {
    setProfile(prev => ({
      ...prev,
      preferences: { ...prev.preferences, newsletter: !prev.preferences.newsletter },
    }));
  };

  return (
    <div>
      <h2>Dynamic Objects</h2>
      <label>
        First Name:
        <input
          value={profile.firstName}
          onChange={e => updateField("firstName", e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          value={profile.lastName}
          onChange={e => updateField("lastName", e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          value={profile.email}
          onChange={e => updateField("email", e.target.value)}
        />
      </label>

      <button onClick={toggleTheme}>Toggle Theme ({profile.preferences.theme})</button>
      <button onClick={toggleNewsletter}>
        Newsletter: {profile.preferences.newsletter ? "On" : "Off"}
      </button>

      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
