function capitalize(s){
	let sEven = s.split("")
	s = s.split("")
	
	for(let i = 0; i < s.length; i++) {
		if(i % 2 == 0) {
			s[i] = s[i].toUpperCase()
		}
	}

	for(let i = 0; i < sEven.length; i++) {
		if(i % 2 != 0) {
			sEven[i] = sEven[i].toUpperCase()
		}
	}

	return [s.join(""),sEven.join("")]
};

console.log(capitalize("gabriel"))