// Do a side-effect (doesn't modify data) for each thing
const myArr = [3, 9, 15, 2, 1];
myArr.forEach((a) => {
	console.log(a);
});

// ---------
// Keep only the items that pass a filter criteria (return true)
let currentSearchTerm = "el";
const searchableNames = ["Eli", "Elijah", "Bob", "Robert"];
console.log(
	names.filter((a) => {
		return a.toLowerCase().startsWith(currentSearchTerm.toLowerCase());
	})
);

// ----------
// Turn each item into a new thing
console.log(
	[21, 45, 33].map((num) => {
		return `Hello, I am ${num} years old`;
	})
);
