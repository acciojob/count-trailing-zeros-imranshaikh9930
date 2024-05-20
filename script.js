function trailingZeros(n) {
  //your JS code here. If required.

	let temp = 0;
	let count = 0;
	while(n >=0){
		temp = n % 10;
		count++;
		n/=10;
	}

	retunn count;
}

console.log(trailingZeros(10))

// const input = prompt("Enter a number");
// alert(trailingZeros(input));
