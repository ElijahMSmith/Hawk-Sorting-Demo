/*

Sort in ascending order:
- Find the smallest number
- Stick it in the first slot
- Find the second smallest number
- Stick in in the second slot
- ...
- Profit.


[] = len 5
 i 0 1 2 3 4
 j 0
   1 1
   2 2 2
   3 3 3 3
   4 4 4 4 4
15 operations

Bubble sort:
10 operations

Big-Oh measures in relation to the length of the input, which we say is some unknown 'n'
Time: O(f(n))
Space: O(f(n))

For this insertion sort, we say it is:
Runtime: O(n^2)
Space: O(1)

*/

function insertionSort(data: number[]): number[] {
	// Do n things (i = 0 -> n)
	for (let i = 0; i < data.length; i++) {
		let smallestThing: number = data[i];
		let smallestIndex: number = i;

		// Also n, although it technically gets smaller each time
		// n, n-1, n-2, ..., 1
		// See more info about recurrence relations: https://www.geeksforgeeks.org/how-to-analyse-complexity-of-recurrence-relation/
		for (let j = i; j < data.length; j++) {
			if (data[j] < smallestThing) {
				smallestThing = data[j];
				smallestIndex = j;
			}
		}

		data[smallestIndex] = data[i];
		data[i] = smallestThing;
	}

	return data;
}

console.log(insertionSort([3, 10, 5, 3, 13, 1]));
