console.log( 'write.js 실행' )

// 1. 썸머노트 실행할때 사용되는 코드 
$(document).ready(function() {
  // $('#summernote').summernote( {설정객체} );
  $('#summernote').summernote( { 
	lang : 'ko-KR', // 한글 적용 [ 한글.JS CDN 필요]  
	height : 500 , 
	placeholder : '여기에 내용작성'
  });
});
//---------------------------------------//

/* 로그인 아이디 생성*/
let loginId = `blue1234`;

/*
	JS는 HTML에 포함된 문서
		- HTML 새로고침[F4] / 페이지전환 [ a ] 되면 JS도 재호출 => 메모리 휘발성
		- 영구적인 저장[ 서버 담당 = DB ]
			
		
		- 브라우저 저장소 : 1.세선 2.쿠키 [ 저장할 때 문자로만 저장됨 ]
		- 보안이 필요없는 정보만 저장해야함.
			세션 : 모든 브라우저 꺼지면 초기화
			쿠키 : 모든 브라우저/OS 꺼져도 유지	/사용자가 쿠키 삭제전까지 유지
			
		-사용방법 : JS에서 객체 제공 = 키와 값으로 이루어진 객체
			sesstionStorage : 세션
				sessionStorage.setItem( '키' , 값 )	: 해당 값을 '키'라는 이름으로 저장
				sessionStorage.getItem( '키' ) 		: 해당 키를 호출하면 저장된 값 호출
				sessionStorage.clear()				: 세션 삭제
				
			localStorage : 쿠키
				localStorage.setItem( '키' , 값 )
		
	JSON : JS 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 포맷(형식)
		-구조(모양)는 객체/배열인데 포멧[형식/자료형/타입]
		-
			JS : { id : 'qwe' , pwd : '1234' }
			JSON : "{ id : 'qwe' , pwd : '1234' }"
		-사용방법
			1. JSON.parse()		: 문자타입을 객체/배열타입으로 변환
			2. JSON.stringify	: 객체타입을 문자타입으로 변환	

*/


function getContent(){
	let bTitle = document.querySelector('.bTitle').value;
	let bContent = document.querySelector('.bContent').value;
	
		
	let boardList = JSON.parse(localStorage.getItem('boardList'))
	
	if( boardList == null ) { boardList = [] };
	
	let no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1
	
	let boardContent = { title : bTitle,
						content : bContent,
						no : no,
						date : `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
						view : 0,
						like : 0,
						writer : loginId
						}
		
	boardList.push(boardContent)
	localStorage.setItem('boardList', JSON.stringify(boardList))
	
	console.log(JSON.parse(localStorage.getItem('boardList')))
	alert('글쓰기 성공');
		// 페이지 전환 방법
		// HTML : <a href="경로">
		// JS  : locantion.href="경로"
	location.href = "list.jsp"
	
	/*
		함수{ }안에 선언된 배열 : 지역변수
		함수{ }밖에 선언된 배열 : 전역변수
		세션(서버PC) / 쿠키(사용자PC) : JS 무관하게 저장 가능. 새로고침 되도 유지
	*/
/*	sessionStorage.setItem('세션',1)
	localStorage.setItem('쿠키',2 )
	
	console.log(1)
	console.log(parseInt(sessionStorage.getItem('세션')))
	console.log(parseInt(localStorage.getItem('쿠키')))*/
	
}




