function trailingZeros(n) {
  //your JS code here. If required.

	let count = 0 ;
	for(let i = 5 ;n/ i >=1;i*=5){
		count+=Math.floor(n/i);
	}
	return count;
}

// console.log(trailingZeros(10))

const input = prompt("Enter a number");
alert(trailingZeros(input));
