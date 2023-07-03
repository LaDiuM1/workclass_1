/*

	이벤트함수
	HTML 이벤트 적용하는 방법
	
	1. 
		<태그 이벤트속성명="함수명()"> </태그명>
		
	2. 
		1. document.addEventListener('이벤트명' , 함수명 )				// 기존 함수명 이용
		2. document.addEventListener('이벤트명' , ( 이벤트 결과 인수 )=>{})			// 익명 화살표 함수 정의해서 적용
		3. document.addEventListener('이벤트명' , function ( 이벤트 결과 인수 )->{})	//익명 함수 정의해서 사용
		

		이벤트
	 		이벤트명
	 			1. DOMContentLoaded : HTML이 완전히 열렸을때[모두 로드되었을때] 실행되는 이벤트
	 			2. window.onload	: 해당 객체가 호출 되었을 때
	 			3. click			: 해당 객체를 클릭 했을때
	 			4. ketup			: 해당 객체에서 키보드를 누른 뒤 떼는 순간
	 			5. keydown			: 해당 객체에서 키보드를 누르는 순간
	 				- key 상태 확인


 */
let text = document.querySelector('.textBox')
 document.querySelector('.textBox').addEventListener('keyup' , (event)=>{
	 console.log('키보드 누른 뒤 떼는 순간')
	 
	 let h3 = document.querySelector('.h3Box')
	 
	 console.log( text.value.length )
	 
	 h3.innerHTML = `입력된 문자 길이 : ${text.value.length}`;
	 // 1. 키 상태 확인
	 console.log(event);
	 console.log(event.altKey);		
	 console.log(event.ctrlKey);
	 console.log(event.shiftKey);
	 console.log(event.code);
	 console.log(event.key);
	 console.log(event.keyCode);
	 if( event.keyCode == '13'){
		 console.log('게시글 등록')
	 }
 })
 let moving = document.querySelector('.moving');
 moving.style.position = `absolute`;
 	// 1. DOM객체명.style = `속성명 : 값; 속성명 : 값`
 	// 2. DOM객체명.style.css속성명 = `값`;		주의할점 : css속성명 작성시 카멜표기법 사용
 		// DOM객체명.style = `background-color = blue;` // 해당 방법은 문자로 표기되어 - 사용가능
 		// DOM객체명.style.backgroundColor = blue;	//css 속성명을 바로 불러올 경우 - 사용불가하여 카멜표기법 사용
 	
 	// * 버튼 위치의 초기값 x=가로축 y=세로축 block [이동 단위 30px로 설정]
 	let x = 7; let y = 0; let block = 30;
 	// 1. 버튼 위치 출력 함수
 function movingPrint(){ // JS 열렸을 때 최초 1번 실햄
	 moving.style.left = `${x * block}px`
	 moving.style.top = `${y * block}px`
 }
 	// 2. 이동 이벤트 함수 [ 만약에 본문에서 키다운을 누르면 ]
 document.body.addEventListener('keydown',(e)=>{
	 	// e: keydown 이벤트 결과 정보 담고있는 객체
	 	// * 반약에 이동상태가 true인 경우에만 가능
	 	if ( control == true){
	 	// 1. 만약에 key
	 	let key = e.keyCode;		//눌린 코드 번호 반환
	 		console.log(key);
	 		//왼쪽방향키 = 37 위방향키 = 38 오른쪽방향키 =39 아래방향키 = 40
	 	if(key == 37){ x--;}
			 else if ( key == 38 ){
				 y--
			 }
			 else if ( key == 39 ){
				 x++
			 }
			 else if ( key == 40 ){
				 y++
			 }
			movingPrint();
			}
 })	// f end
 let control = true; // 버튼 이동상태를 저장하고 있는 변수
 	// 3. !연산자를 이용해 현재 상태의 반대를 저장 (true<=>false)
 moving.addEventListener('click' , ()=>{ 
	 control = !control;
	 if( control ) {moving.innerHTML='배치하기'}
		else { moving.innerHTML='이동하기'} 	
 })
 
 
 