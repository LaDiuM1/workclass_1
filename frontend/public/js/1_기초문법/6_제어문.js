/*

	- 제어문 = if = 만약에
	
	1.제어문 :  흐름에 대한 논리적인 제어
	2. if[*] , switch 문법
	3. if 형태
		* 조건 : true or false 결과를 갖는 변수 혹은 연산
		* 조건과 참/거짓의 코드가 이어져야 한다.
		1. if ( 조건 ) 참일경우코드
		2. if ( 조건 ) { 참일경우코드1; 참2일경우코드2 }
		3. if ( 조건 ) { 참일경우 코드 }
			else { 거짓일경우 코드 }
		4. if ( 조건 ) { 참1일경우 코드 }
			else if ( 조건2 ) { 참2일경우 코드 }
			else if ( 조건3 ) { 참3일경우 코드 }
			else if ( 조건4 ) { 참4일경우 코드 }
			else { 거짓 }
			vs
			if ( 조건1 ) { 참 1일경우 코드 }
			if ( 조건2 ) { 참 2일경우 코드 }
			if ( 조건3 ) { 참 3일경우 코드 }
			if ( 조건4 ) { 참 4일경우 코드 }
 */

//1. if 형태1
if( 10>3 ) console.log('참[1] 10이 3보다 크다.') // 조건을 만족하여 console 실행
if( 10>20 ) console.log('참[2] 10이 20보다 크다') // 조건이 false라서 실행x
if( 10>20 ); console.log('참[3] 10이 20보다 크다') // 조건 사이에 세미클론 사용하면 실행 안됨

//2. if 형태2 
if( 10>3 ) console.log('참1'); console.log('참2');
if( 10>20 ) console.log('참3'); console.log('참4'); // 거짓임에도 불구하고 참4가 출력 (의도와 다름)
if( 10>20 ) {console.log('참3'); console.log('참4');} // 거짓이면 둘다 출력 x (의도와 같음)

//3. if 형태3
if (10>3) { console.log('[참] 10 더 크다.');}
	else { console.log ('[거짓] 10 더 작다.')}
	
//4. if 형태4
if ( 10>=20 ) { console.log ( '[참1] 10이 20보다 이상이')}
else if ( 10>= 15 ) { console.log ( '[참2] 10이 15보다 이상이다.')}
else if ( 10>= 10 ) { console.log ( '[참3] 10이 15보다 이상이다.')} // 참이면 실행 후 전체 if 종료
else { console.log('[거짓] 10이 10미만이다.');}

//5. if 중첩
	if ( 조건1 ){
		if ( 조건2 ){   }
		else if ( 조건3 ){  }
	}else{
		if( 조건4 ){  }
		else if ( 조건5) {  }
	}
