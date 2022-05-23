import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "./firebase-config";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: name, age: Number(age) });
  };

  const inc = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newAge = { age: age + 1 };
    await updateDoc(userDoc, newAge);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((item) => ({ ...item.data(), id: item.id })));
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(e) => setAge(+e.target.value)}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((item, i) => (
        <div key={item.id}>
          <h1>Name: {item.name}</h1>
          <h1>Age: {item.age}</h1>
          <button onClick={() => inc(item.id, item.age)}>Increase Age</button>
          <button onClick={() => deleteUser(item.id)}>Delete User</button>
        </div>
      ))}
    </div>
  );
};

export default App;
