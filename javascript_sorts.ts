const names = ["Eli", "Elijah", "Anton", "Olga", "Nihal", "Brandon"];
names.sort((a, b) => {
	/*
    a comes first: negative number
    a == b: return 0
    b comes first: return positive number
    */
    // Let's invert the result so we sort in reverse (descending) order!
	return a.localeCompare(b) * -1;
});

console.log(names);

// -------------

// We can compare any type, as long as we know how!
type HasFoo = {
	foo: string;
};

const objects: HasFoo[] = [{ foo: "bar2" }, { foo: "bar1" }];
objects.sort((a, b) => {
	return a.foo.localeCompare(b.foo);
});

console.log(objects);
