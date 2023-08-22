let employee_list = [
  {
    first_name: "ramesh",
    Last_name: "fadrate",
    Email_id: "ram@gmail.com",
  },
  {
    first_name: "john",
    Last_name: "cena",
    Email_id: "cena@gmail.com",
  },
  {
    first_name: "tom",
    Last_name: "cruice",
    Email_id: "tom@gmail.com",
  },
  {
    first_name: "abhay",
    Last_name: "singh",
    Email_id: "abhay@gmail.com",
  },
  {
    first_name: "rahul",
    Last_name: "kumar",
    Email_id: "rahul@gmail.com",
  },
  {
    first_name: "soni",
    Last_name: "kapoor",
    Email_id: "soni@gmail.com",
  },
];

const table_body = document.querySelector(".table_body");
let table_rows = ``;

for (let i = 0; i < employee_list.length; i++) {
  console.log("here");
  table_rows += `
        <tr class="row">
            <td class="first_name">${employee_list[i].first_name}</td>
            <td class="last_name">${employee_list[i].Last_name}</td>
            <td class="email">${employee_list[i].Email_id}</td>
            <td class="actions">
                <button class="btn btn-warning edit">Update</button>
                <button class="btn btn-danger delete">Delete</button>
                <button class="btn btn-light view">View</button>
            </td>
        </tr>`;
}
table_body.innerHTML = table_rows;

console.log(table_rows);
