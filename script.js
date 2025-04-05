let json = ['user1', 'user2', 'user3', 'user4', 'user5'];
const json2 = JSON.stringify(json)
console.log(json2)

// 2
// получить коллекцию  списка элимента и преобазовать в масси в (Аrray.from)    
const items = Array.from(document.querySelectorAll('.cities li'))

console.log(items)

//   перебрать все элименты списка и вернуть их в текстовое содержимое
const cities = items.map((city) => {
    return city.textContent
}

)
console.log(cities)

const json3 = JSON.stringify(cities)
// 3
let usersStr = '["Poly","Masha","Dasha","Lena","Rita"]'
let usersList = document.querySelector('.users')

let usersArr = JSON.parse(usersStr)
for (let user of usersArr) {
    let userr = document.createElement('li')
    usersList.appendChild(userr)
    userr.textContent = user
}
console.log(usersList)
// 4
let json4 = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
let employees= JSON.parse(json4);
let tbody= document.querySelector('#employeesBody')
for( let employee of employees){
    let tr= document.createElement('tr')
    tbody.appendChild(tr)
    tr.innerHTML=`
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.salary}</td>
    `
}