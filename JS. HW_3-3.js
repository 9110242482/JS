
// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

  
  // Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

const wordending = function (resultNumber) {
    let number = Math.abs(resultNumber);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return "сотрудников";
    }
    number %= 10;
    if (number === 1) {
        return "сотрудник";
    }
    if (number >= 2 && number <= 4) {
        return "сотрудника";
    }
    return "сотрудников";
}


const getDepartments = function (companies) {
    companies.forEach ((company) => {
        let depts = [];
        let count = 0;
        depts.push(company.name);
        if (company.departments) {
            company.departments.forEach((dept) => {
                count += +dept.employees_count;
                if (dept.employees_count) {
                    depts.push (`- ${dept.name} (${dept.employees_count} ${wordending(dept.employees_count)})`);
                }
                else depts.push(` - ${dept.name} (нет сотрудников)`);
                });
            if (count) {
                depts[0] += ` (${count} ${wordending(count)})`;
            }
            else depts [0] += ` (нет сотрудников)`;
        }
        console.log (depts.join(`\n\ `));
    });
};

getDepartments(enterprises);


// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

const getEnterpriseName = function (val) {
 let enterprise
  enterprises.forEach(ent=> {
    let department
    if (ent.departments) {
      department = ent.departments.find(dept => {return dept.id == val || dept.name == val});
    }
    if (department) {
      enterprise = ent.name;
    }
 })
 return enterprise ? enterprise: "Нет предприятия с таким отделом.";
}
console.log (getEnterpriseName(4));
console.log (getEnterpriseName('Отдел маркетинга'));


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

const getNewId = function (company) {
  let maxId = company[0].id;
  company.forEach((ent => {
    if (maxId < ent.id) {
      maxId = ent.id;
    }
    if (ent.departments) {
      ent.departments.forEach((dep) => {
        if (maxId < dep.id) {
          maxId = dep.id;
        }
      })
    }
  }))
  return maxId +1;
}

const addEnterprise = function(name) {
  enterprises.push ({
    id: getNewId (enterprises),
    name: name,
    departments: []
  })
}
addEnterprise ('Предприятие 4');


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

const getEnterprise = function (val) {
  let enterprise = enterprises.find(el => el.id == val);
    return enterprise ? enterprise: 'Нет организации с таким id.';
}

const addDepartment = function(id, name) {
  const enterprise = getEnterprise (id);
  if (typeof enterprise == 'object') {
    enterprise.departments.push ({
    id: getNewId (enterprises),
    name: name,
    employees_count: [],
  })
  }
  else console.log ('Нет организации с таким id.');
}
addDepartment (11, 'ФЭО');


// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

const editEnterprise = function(id, newname) {
  const enterprise = getEnterprise (id)
  if (typeof enterprise == 'object') {
    enterprise.name = newname;
}
else console.log ('Нет организации с таким id.');
}
editEnterprise (11, '4 Предприятие');


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

const getDepartment = function (val) {
  let department
   enterprises.forEach((ent)=> {
     const dept = ent.departments.find((el) => {
       return el.id == val || el.name == val;
      })
     if (dept) department = dept;
  })
  return department ? department: "Нет отдела с таким id.";
 }

const editDepartment = function(val, newname) {
  const department = getDepartment (val);
  if (typeof department == 'object') {
    department.name = newname;
  }
    else console.log ('Нет отдела с таким id.');
}
editDepartment (12, 'Бухгалтерия');


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

const deleteEnterprise = function(id) {
 enterprises.forEach ((enterprise, index) => {
    if (enterprise.id === id) {
    enterprises.splice(index, 1);
    }
})
}
deleteEnterprise (1);


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

const deleteDepartment = function(id) {
  enterprises.forEach (e => {
   let index = e.departments.findIndex (d => d.id === id && d.employees_count == 0);
   if (index !== -1) {
     e.departments.splice(index, 1);
   }
 })
}
 deleteDepartment (12);
 

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

const getEnterpriseId = function (val) {
  let enterprise
   enterprises.forEach(ent=> {
     let department
     if (ent.departments) {
       department = ent.departments.find(dept => {return dept.id == val})
     }
     if (department) {
       enterprise = ent.id;
     }
  })
  return enterprise ? enterprise: "Нет предприятия с таким отделом.";
 }

const moveEmployees = function (currentID, newID) {
  let currentDep = getDepartment (currentID);
  let newDep = getDepartment (newID);
  let ent1 = getEnterpriseId (currentID);
  let ent2 = getEnterpriseId (newID);
  if (typeof currentDep != 'object' || typeof newDep != 'object') {
    console.log ('Нет отдела с таким id.');
  }
  else {
    if (ent1 != ent2) {console.log ('Отделы принадлежат разным предприятиям. Перевод невозможен.');
}
    else {
      newDep.employees_count += currentDep.employees_count;
      currentDep.employees_count = 0;
          }
  }}

moveEmployees (2, 3);

