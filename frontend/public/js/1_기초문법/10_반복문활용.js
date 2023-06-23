/*
console.log('-----문제1-----')
let int = Number(prompt('문제1 : 별의 개수를 입력하세요.'));

let output = ``

for(let i=1; i<=int; i++ ){
	output += `*`
}
	console.log(output)
	
console.log('-----문제2-----')
int = Number(prompt('문제2 : 별의 개수를 입력하세요.'));

output = ``

for(let i=1; i<=int; i++ ){
	output += `*`
	if(i%3==0){output += `\n`}
	
}
	console.log(output)
	
console.log('-----문제3-----')
int = Number(prompt('문제3 : 별의 개수를 입력하세요.'));

output = ``

for(let i=1; i<=int; i++ ){
	
	console.log(output += `*`)
}
	
	
console.log('-----문제4-----')
int = Number(prompt('문제4 : 별의 개수를 입력하세요.'));

output = ``

for(let i=1; i<=int; i++){
	for(let j=int-i+1; j>0; j--){
			output += `*`
			}
	output += `\n`
	console.log(output)
	output = ``
}

console.log('-----문제5-----')
int = Number(prompt('문제5 : 별의 개수를 입력하세요.'));

output = ``

for(let i=1; i<=int; i++){
	for(let j=int-i; j>0; j--){
		output += ` `
	}
	for(let k=1; k<=i; k++){
		output +=`*`
	}	
output += `\n`
console.log(output)
output = ``
	
}

console.log('-----문제6-----')
int = Number(prompt('문제6 : 별의 개수를 입력하세요.'));

output = ``

for(let i=1; i<=int; i++){
	for(let k=0; k<i-1; k++){
	output +=` `
	}
	for(let j=int-i+1; j>0; j--){
		output +=`*`
	}	

output += `\n`
console.log(output)
output = ``

}

console.log('-----문제7-----')
int = Number(prompt('문제7 : 별의 개수를 입력하세요.'));

output = ``

for(let i=1; i<=int; i++){
	for(let j=int-i; j>0; j--){
		output +=` `
	}
	for(let k=0; k<i; k++){
		if(k==0){output +=`*`}
		else{
		output +=`**`}
	}
 output += `\n`
console.log(output)
output = ``
	
}

console.log('-----문제8-----')
int = Number(prompt('문제8 : 별의 개수를 입력하세요.'));

output = ``

for(i=1; i<=int; i++){
	for(j=2; j<=i; j++){
	output +=` `
	}
	output +=`*`
	for(k=int-i; k>0; k--){
	output +=`**`
	}
output += `\n`
console.log(output)

output = ``
}

console.log('-----문제9-----')
let int1 = Number(prompt('문제9 : 별의 개수를 입력하세요.'));

int = int1/2
output = ``

for(let i=1; i<=int; i++){
	for(let j=int-i; j>0; j--){
		output +=` `
	}
	for(let k=0; k<i; k++){
		if(k==0){output +=`*`}
		else{
		output +=`**`}
	}
 output += `\n`
console.log(output)
output = ``
}

for(i=1; i<=int; i++){
	for(j=2; j<=i; j++){
	output +=` `
	}
	output +=`*`
	for(k=int-i; k>0; k--){
	output +=`**`
	}
output += `\n`
console.log(output)

output = ``
}
*/
console.log('-----문제10-----')
int = Number(prompt('문제10 : 별의 개수를 입력하세요.'));

output = ``

for(let i=1; i<=int; i++){
	for(let j=2; j<=i; j++){
	output += `  `
	}

output += `*`
if(i!=int){output += ` `}
	for(let k=int-i; k>1; k--){
	if(i!=int)output += `  `
	}
	for(let l=int-i; l>1; l--){
	if(i!=int)output += `  `
	}
if(i!=int){output += ` `}
if(i!=int){output += `*`}
	
output +=`\n`
output += ``
}
console.log(output)

for(let i=1; i<=int; i++){
	
	
	
	}





	