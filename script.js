function stringChop(str, size) {
  // your code here
  let op=[]; 
    size = parseInt(size)

	if(size > str.length){
		op.push(str);
		return op;
	}
    
	let start = 0; let end = size-1 ;
	let len = str.length ;let last = len-1

	    while(end < len){
		if((last-end+1) >= size){
			
			let chunk = str.slice(start, end+1);
			   op.push(chunk);
	           start = end+1;
			   end= (end+size) < len? end+size : end+1;
		}
		else{
			op.push(str.slice(end, len));
			end = len; // stop the loop
		}
	}
	return op;
}

//Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size."); 
alert(stringChop(str, size));


