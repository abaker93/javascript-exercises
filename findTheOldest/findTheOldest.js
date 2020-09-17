let findTheOldest = function(arr) {
    const currYear = new Date().getFullYear();
	let people = [];
    arr.forEach(person => {
		if (!person.yearOfDeath) person.yearOfDeath = currYear;
		let age = person.yearOfDeath - person.yearOfBirth;
		let obj = {
			"name": person.name,
			"yearOfBirth": person.yearOfBirth,
			"yearOfDeath": person.yearOfDeath,
			"age": age
		}
		people.push(obj);
	});

	let oldestPerson = people[0];
	people.forEach(person => {
		if (person.age > oldestPerson.age) oldestPerson = person;
	})

	return oldestPerson;
}

module.exports = findTheOldest
