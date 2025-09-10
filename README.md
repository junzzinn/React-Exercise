# React Counter App

This is a simple React application that demonstrates the use of the **useState** hook for state management.

## 🚀 Features
- Displays a counter value starting at 0.
- Increment button: increases the count by 1.
- Decrement button: decreases the count by 1.

## 🛠️ Technologies Used
- React
- JavaScript (ES6+)

# React Exercises: Conditional Rendering & Dynamic Objects

This project contains two small React components that demonstrate:
1) **Conditional Rendering** (using `&&`, the ternary operator, and early returns)
2) **Dynamic Objects** (immutable updates for top-level and nested fields, dynamic keys, and key removal)

## Components

### 1) `ConditionalRendering.jsx`
- Shows how to:
  - Render elements conditionally with `&&`
  - Switch content with the **ternary operator**
  - Use **early return** to stop rendering part of the UI
- Includes a simple login/logout toggle and a button to hide tips via early return

### 2) `DynamicObjects.jsx`
- Manages a `profile` object in state with nested `preferences`
- Demonstrates **immutable updates** for:
  - Top-level fields (e.g., `firstName`, `email`)
  - Nested fields (e.g., `preferences.theme`, `preferences.newsletter`)
- Adds **dynamic fields** via `[dynamicKey]: dynamicValue`
- Removes keys from the object using object rest syntax

## Tech
- React 18+
- JavaScript (ES2020+)

## How to Run
```bash
npm install
npm start
