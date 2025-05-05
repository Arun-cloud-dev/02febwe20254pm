fetch("user-ar.json")
  .then((response) => response.json())
  .then((data) => {
    const list = document.getElementById("userList");
    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} from ${user.country} ${user.age} years old`;
      list.appendChild(li);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
