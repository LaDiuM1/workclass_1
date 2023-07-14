

// 1. 산술연산자
console.log ('더하기 : ' + 10+3)		//103
console.log ('더하기 : ' + (10+3))	//	13
console.log ('빼기 : ' + (10-3))		//7
console.log ('곱하기 : ' + (10*3))	//30
console.log ('나누기 : ' + (10/3))	//3.33....
console.log ('몫 : ' + (10%3))		//1

//문제

//문제1
/*let 국어 = +prompt('국어 점수')
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
console.log('실수 = ' + ((실수1/실수2)*100)+'%')*/

/*// 문자 연산 예시
console.log( 10*3 )
console.log ('10'*3 )

//2. 비교연산자
console.log( '초과 : ' + (10>3)) //true
console.log( '미만 : ' + (10<3)) //false
console.log( '이상 : ' + (10>=3)) //true
console.log( '이하 : ' + (10<=3)) //false
console.log( '같다 : ' + (10==3)) //false
console.log( '같지않다 : ' + (10!=3)) //true

//3. 관계연산자
console.log( '이면서 : ' + (10>3 && 20>15 )) // 10은 3보다 크면서 20은 15보다 크다.
console.log( '이면서 : ' + (10>3 && 20>30 )) // true and false => flase
console.log( '이거나 : ' + (10>3 || 20>15 )) // true or true => true
console.log( '이거나 : ' + (10>3 || 20>30 )) // true or false => true
console.log( '부정 : ' + !(10>3)) // true => false

*/
/*//문제4
let 정수1 = Number(prompt('짝수 여부'))
console.log('짝수 여부 : ' + (정수1 % 2 == 0))

//문제5
let 정수2 = Number(prompt('7배수 여부 입력'))
console.log('7배수 여부 : ' + (정수2 % 7 == 0))

//문제6
let 금액 = Number(prompt('금액 입력'))
let 십만원 = parseInt(금액/100000)
let 만원 = parseInt(((금액-(십만원*100000))/10000))
let 천원 = parseInt(((금액-(십만원*100000)-(만원*10000)))/1000)



console.log('십만원 : ' + 십만원 + '장')
console.log('만원 : ' + 만원 + '장')
console.log('천원 : ' + 천원 + '장')

//문제7
let 아이디 = prompt('아이디 입력')
let 비밀번호 = prompt('비밀번호 입력')
console.log('아이디 비밀번호 일치 여부 : ' + (아이디=='admin' && 비밀번호=='1234'))

//문제8
let 정수4 = Number(prompt('정수 입력'))
console.log('7배수의 홀수 여부 : ' + (정수4 % 2 == 1) && (정수4 % 7 == 0))

*/


//4. 대입연산자
let 데이터1 = 10 //let 키워드(변수)로 '데이터1' 이라는 변수를 저장한다.
console.log( 데이터1 )
데이터1 += 10 // 1. 10+10 => 20 , 20 대입
console.log( 데이터1 )
데이터1 -= 5	// 2. 20-5 => 15 , 15대입
console.log( 데이터1 )
데이터1 *=2 //3. 15*2 ==> 30 , 30대입

	//예제1
	let html = '<h3> JS에서 작성된 HTML 입니다</h3>'	// html언어를 문자열 안에서 작성한다.
	html += '<p> 문단 추가 했습니다. </p>'
	document.write(html); // document.write() // document:html문서 , write : 쓰다
	
/*

//5.증감 연산자 [ data +1, data += 1, data++]
let 데이터2 = 10; 
console.log( 'data : ' + 데이터2); //10	
console.log( 'data : ' + (데이터2++)) // 후위증가 : 10
console.log( 'data : ' + (데이터2)) // 후위 증가로 data 11출력
console.log( 'data : ' + (++데이터2)) // 선위 증가로 data 12 출력

console.log( 'data : ' + (데이터2--)) //후위 감소로 12 출력
console.log( 'data : ' + (데이터2)) //후위 감소로 11 출력
console.log( 'data : ' + (--데이터2)) //선위 감소로 10 출력


//6.삼항 연산자 [ 조건 ? 참 : 거짓 (만약에 조건이 true이면 참코드 실행 false이면 거짓코드 실행)]
let 나이 = 38; // '나이' 변수에 38 저장.
let 연령구간 =  나이<=19 ? '청소년' : '성인'
			//조건 (true/false 결과 갖는 연산)
console.log ( 나이 + '의 연령구간 : ' + 연령구간 )

	//예제2 [ 조건1 ? 참 : 조건2 ? 참2 : 조건3 ? 참3 : 거짓]
let 점수 = 78;
let 등급 = 점수 >= 90 ? 'A등급' : 점수>=80 ? 'B등급' : 점수>=70 ? 'C등급' : F등급

//문제9

let 정수1 = Number(prompt('정수1 입력하세요'))
let 정수2 = Number(prompt('정수2 입력하세요'))
console.log(정수1>정수2 ? 정수1 : 정수2>정수1 ? 정수2 : 정수1)

//문제10
let 정수4 = Number(prompt('정수4 입력하세요'))
let 정수5 = Number(prompt('정수5 입력하세요'))
let 정수6 = Number(prompt('정수6 입력하세요'))
console.log(정수4>=정수5&&정수4>=정수6 ? 정수4 : 정수5>=정수4&&정수5>=정수6 ? 정수5 : 정수6>=정수4&&정수6>=정수5 ? 정수6 : 정수4)

//문제11
let 정수7 = Number(prompt('정수7 입력하세요'))
let 정수8 = Number(prompt('정수8 입력하세요'))
let 정수9 = Number(prompt('정수9 입력하세요'))

let rank1 = 정수7>=정수8&&정수9 ? 정수7




*/


/*
//문제 1
let 국어 = Number(prompt('국어 점수를 입력하세요'))
let 영어 = Number(prompt('영어 점수를 입력하세요'))
let 수학 = Number(prompt('수학 점수를 입력하세요'))
console.log('총점 : ' + (국어+영어+수학))
console.log('평균 : ' + ((국어+영어+수학))/3)

//문제2
let 반지름 = Number(prompt('반지름을 입력하세요.'))
console.log(반지름*반지름*3.14)

//문제3
let 실수1 = Number(prompt('실수1을 입력하세요'))
let 실수2 = Number(prompt('실수2를 입력하세요'))
let 실수3 = parseInt(실수1/실수2)

console.log('실수의 ' + (실수3*100) + '%')
*/
// prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기 
         //356789      결과 : 십만원3장 만원5장 천원6장 

let 금액 = Number(prompt('금액을 입력하세요'))
let 십만원 = parseInt(금액/100000)
let 만원 = parseInt((금액-(십만원*100000))/10000)
let 천원 = parseInt((금액-(십만원*100000)-(만원*10000))/1000)

console.log('십만원 : ' + 십만원 + '장')
console.log('만원 : ' + 만원 + '장')
console.log('천원 : ' + 천원 + '장')

//문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]

let 정수1 = Number(prompt('정수를 입력하세요'))
let 정수2 = Number(prompt('정수를 입력하세요'))
let 정수3 = Number(prompt('정수를 입력하세요'))


let max1 = 정수1>=정수2 ? 정수1 : 정수2
let max2 = max1>=정수3 ? max1 : 정수3
max4 = max1>=정수3 ? 정수3 : max1

let max5 = 정수1<=정수2 ? 정수1 : 정수2
let max6 = max5<=정수3 ? max5 : 정수3 


console.log(max6 + ' ' + max4 + ' '+ max2)

   /*문제12 : [ 가위바위보 게임 ] 
   - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
   - 승리자 판단과 무승부 경우의수를 출력하시오.
   [입력]
      플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
      플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   [경우의수 판단]
      플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
      플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
      비겼을경우 '무승부' 출력*/

let player1 = Number(prompt('플레이어 1 : 0~2 입력'))+1
let player2 = Number(prompt('플레이어 2 : 0~2 입력'))+1

let rank1 = player1 >= player2 ? player1 : player2
let rank2 = player1 >= player2 ? player2 : player1

let win1 = player1 == rank1 ? '플레이어1 승리' : '플레이어2 승리'
let win2 = player2 == rank1 ? '플레이어2 승리' : '플레이어1 승리'

let result = player1 == player2 ? '무승부' : player1 + player2 == 5 ? win1 : player1 + player2 == 3 ? win1 : win2

console.log(result)











