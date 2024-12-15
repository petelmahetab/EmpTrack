const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Complete the quarterly report",
        "date": "2024-12-08",
        "category": "Reporting",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Prepare for team meeting",
        "date": "2024-12-09",
        "category": "Meetings",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Review project documentation",
        "date": "2024-12-10",
        "category": "Documentation",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Fix production issues",
        "date": "2024-12-08",
        "category": "Maintenance",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Task 2",
        "description": "Conduct user testing",
        "date": "2024-12-09",
        "category": "Testing",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Develop new feature",
        "date": "2024-12-08",
        "category": "Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Update database schema",
        "date": "2024-12-10",
        "category": "Database",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Optimize application performance",
        "date": "2024-12-11",
        "category": "Optimization",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Prepare training materials",
        "date": "2024-12-08",
        "category": "Training",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  // Add similar employee structures up to employee 10
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];
//We need to create 2 function for seting and getting the data localStorage. call using AppJSX useEffect import .Side stack run
export const setLocalStorage=()=>{//we need to Convert object into JSON or Array to string
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
};
//we need to get local Storage
export const getLocalStorage=()=>{
    const employee=JSON.parse(localStorage.getItem("employees"))
    const admin=JSON.parse(localStorage.getItem("admin"))

return{employee,admin}

};
