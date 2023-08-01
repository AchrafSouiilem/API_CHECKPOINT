import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  useEffect(() => {
    //axios get
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function () {});
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    //axios post
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: user
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function () {
      });
  };
  const handleChange = (e) =>
    setUser({ id: Date.now(), [e.target.name]: e.target.value });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {data.map((elment) => (
          <li key={elment.id}>{elment.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
