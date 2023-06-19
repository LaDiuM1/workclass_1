

// 1. 산술연산자
console.log ('더하기 : ' + 10+3)		//103
console.log ('더하기 : ' + (10+3))	//	13
console.log ('빼기 : ' + (10-3))		//7
console.log ('곱하기 : ' + (10*3))	//30
console.log ('나누기 : ' + (10/3))	//3.33....
console.log ('몫 : ' + (10%3))		//1

//문제

//문제1
let 국어 = +prompt('국어 점수')
let 영어 = Number(prompt('영어 점수'))
let 수학 = +prompt('수학 점수')

let 총점 = 국어 + 영어 + 수학 
console.log('총점 = '+ 총점 )
console.log('평균 = '+ 총점/3 )

//문제2
let 반지름 = Number(prompt('반지름 입력'))
const 파이 = 3.141592
console.log ('원넓이 = ' + (반지름*반지름*파이))


//문제3
let 실수1 = prompt('실수1 입력')
let 실수2 = prompt('실수2 입력')
console.log('실수 = ' + ((실수1/실수2)*100)+'%')

// 문자 연산 예시
console.log( 10*3 )
console.log ('10'*3 )



