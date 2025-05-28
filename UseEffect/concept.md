The `useEffect` hook is one of the most **essential and powerful** hooks in React. It allows you to **perform side effects** in function components, such as:

* Fetching data
* Subscribing to events
* Setting up timers
* Direct DOM manipulation

---

## 🔍 What is `useEffect`?

`useEffect` runs after the component renders, and can be thought of as a combination of:

* `componentDidMount`
* `componentDidUpdate`
* `componentWillUnmount` (via cleanup)

---

## 📦 Syntax

```js
useEffect(() => {
  // Code to run (effect)
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

---

## 🧠 Key Concepts (Explained with Examples)

---

### 1. **Run on Every Render**

```jsx
useEffect(() => {
  console.log('This runs after every render');
});
```

❗ **No dependency array** → runs after every render.

---

### 2. **Run Only on Initial Mount**

```jsx
useEffect(() => {
  console.log('Runs only once on mount');
}, []);
```

✅ **Empty dependency array** → runs only once when component mounts (like `componentDidMount`).

---

### 3. **Run When Specific State or Prop Changes**

```jsx
useEffect(() => {
  console.log('Count changed to', count);
}, [count]);
```

⚙️ **Dependency array with variables** → runs when any of the listed variables change.

---

### 4. **Cleanup Function (e.g., for subscriptions or timers)**

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Cleanup function runs on unmount or before next effect
  return () => {
    clearInterval(timer);
    console.log('Timer cleaned up');
  };
}, []);
```

🔁 Use cleanup to **prevent memory leaks** or remove subscriptions.

---

### 5. **Fetching Data Example**

```jsx
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []); // fetch only once on mount

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

📡 Side effect: **Fetching remote data**

---

### 6. **Effect Dependencies Gotcha**

```jsx
useEffect(() => {
  console.log(`Name is ${name}`);
}, [user]); // ❌ WRONG if you're using `name`, not `user`

//
```
