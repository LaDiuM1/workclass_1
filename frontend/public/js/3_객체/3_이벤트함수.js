/*

	함수	: 미리 정의된 코드의집합
		1. 내장함수 : 해당 언어에 기본적으로 내장되어 있는 함수
			console.log, alert() 등등
		
		
		2. 내장객체 : 해당 언어에 기본적으로 내장되어 있는 객체
			console, document 등등
			
	
		
		3. 정의함수 : 개발자가 정의해서 사용하는 함수
			function 함수명(){} =====> 함수명();
			
			
	DOM 객체 : document objenct model : 문서 객체 모델
			- HTML은 정적언어 (메모리X 이벤트X)
			- JS는 동적언어 (메모리O 이벤트O)
			1. 정의 : HTML문서의 각 항목을 계층으로 표현된 JS 객체
		

 */
// 1. 현재 js가 포함된 HTML 문서의 전체
 console.log( document )
 console.log( document.body )
 console.log( document.head )
 console.log( document.div )
 console.log( document.querySelector('div')) // <div> 태그 1개 호출
 let div변수 = document.getElementsByClassName('div')
 
 
 console.log( document.querySelector('.box1'))// <div> 태그 1개 호출
 console.log( document.querySelector('#box2'))// <div> 태그 1개 호출
 console.log( document.querySelectorAll('div'))// all을 사용하면 배열로 저장
 let div배열 = document.querySelectorAll('div');
 console.log(div배열[2]) // [0] 안녕하세요1. [1] 안녕하세요2. [2] 안녕하세요3.
 	// 2. innerHTML 속성 : <태그> innerHTML </태그>
 div배열[2].innerHTML = '안녕하세요3 수정 HTML'
 // = 대입, 기존데이터 사라짐
 document.body.innerHTML = ''; // body내 모든 html 지우기
 document.body.innerHTML += '<h3> 추가 HTML </h3>';
 
 let html = '<p> 변수로 작성한 HTML 형식의 문자열 데이터 </p>';
 //모양/형식은 HTML이고 자료형/타입 '문자열'
 
 document.body.innerHTML = html;
 
 // 3. style 속성 : <태그 style="CSS 작성"> </태그>
 document.body.style =`background-color : lightblue; font-size:20px;`
 
 // 4 addEventListener( '이벤트명' , 함수);
 	/*
 		1.function 함수명(){}
 			addEventListener( '이벤트명' , 함수명)
 		
 		2. - 익명함수 [ 이름이 없는 함수 (인수)=>{실행코드}]를 이용한 이벤트 추가
 			addEventListener( '이벤트명' , ()->{ } )
 	*/
 	/*
 		이벤트명
 			1. DOMContentLoaded : HTML이 완전히 열렸을때[모두 로드되었을때] 실행되는 이벤트
 			2. window.onload	: 해당 객체가 호출 되었을 때
 	*/
 	
 
 //1. HTML이 완전히 열렸을 때
 document.addEventListener( 'DOMContentLoaded', () => {
	 console.log('JS에서 이벤트 실행')
 })
 	
 //2. 해당 객체가 호출 되었을때
 window.onload = () => { console.log('JS에서 이벤트 실행2')}
 
 //3. js 열렸을때 이벤트 1번 실행
 console.log('JS에서 이벤트 실행3')
 
 //4. 
 let p = document.querySelector('p'); console.log(p)
 p.addEventListener( 'click', () => {
	 console.log('p태그 클릭')
 })
 
 
 
 
 