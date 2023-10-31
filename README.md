# A simple example of Redux with React

## Redux Building Parts: actions, reducers, store

### Actions

Simply put, actions are events. They are the only way you can send data from your application to your Redux store. Actions are plain JavaScript objects that have **a type field**. You can think of an action as an event that describes something that happened in the application. The data can be from user-interaction, API calls, or form submissions, etc.

### Reducers

Reducers are pure functions that take the **current state** and **an action** as arguments, and return a new state result. In other words, **(state, action) => newState**. They are the only way to change the state in a Redux application. You can think of reducers as event listeners which handles events dispatched from actions.

### Store

The store holds the application state. It is recommended to keep only one store in any Redux app. When you want to split your data handling logic, you'll use reducer composition instead of many stores.

1. State
   ↓ (defines)
2. UI
   ↓ (triggers)
3. Actions
   ↓ (sent to)
4. Reducer
   ↓ (updates)
5. Store
   ↓ (contains)
6. Back to Step 1

---

## Run the app

### `npm i`

### `json-server --watch db.json`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

---
