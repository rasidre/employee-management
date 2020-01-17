const employeeList = document.getElementById("employeeList");

employeesData = [
  {
    firstName: "Michael",
    lastName: "Owen",
    position: "Social Media Manager",
    salary: "46 500",
    description: "Michael is working as a social media manager. He is quite calm and friendly."
  },
  {
    firstName: "Steven",
    lastName: "Lampard",
    position: "CTO",
    salary: "62 100",
    description: "Steven is very ambitious. He is trying to get the company to the next level."
  },
  {
    firstName: "Eden",
    lastName: "Gerrard",
    position: "Key Account Manager",
    salary: "39 250",
    description: "Eden is our newbie. He started working in our company 4 months ago."
  }
];

employeesData.map((employee, index) => {
  let anchorContainer = document.createElement("a");
  let headerDiv = document.createElement("div");
  let employeeName = document.createElement("h5");
  let employeeSalary = document.createElement("small");
  let employeeDescription = document.createElement("p");

  anchorContainer.classList = "list-group-item list-group-item-action";
  anchorContainer.setAttribute("href", "#");
  headerDiv.classList = "d-flex w-100 justify-content-between";
  employeeName.classList = "mb-1";
  employeeDescription.classList = "mb-1";

  employeeList.appendChild(anchorContainer);
  anchorContainer.appendChild(headerDiv);
  headerDiv.appendChild(employeeName);
  headerDiv.appendChild(employeeSalary);
  anchorContainer.appendChild(employeeDescription);

  employeeName.innerText = `${employee.firstName} ${employee.lastName} - ${employee.position}`;
  employeeSalary.innerText = `${employee.salary} €`;
  employeeDescription.innerText = `${employee.description}`;

  console.log(employee);
});
