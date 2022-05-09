function reverseString(inp) {
  let n = inp.length - 1
	let word = ""
	while (n > -1) {
		word += inp.slice(n, n+1)
		n -= 1
	}
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
