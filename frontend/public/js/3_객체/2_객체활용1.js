// 1. 등록 함수 [ 실행조건 : 회원가입 버튼을 클릭했을때 ]

console.log('js 함수 실행')	
let 회원리스트 = [];

//* 모든 함수에 접근할 수 있는 배열 ( member객체 여러개를 저장하는 ) 선언
function 등록(){
	console.log('등록함수 실행')	
	// 1. 입력값 가져오기
		// document.querySelector('.class')
		// document.querySelector('#id')
	let mid = document.querySelector('#mid').value;
	let mpwd = document.querySelector('#mpwd').value;
	
	// * 유효성 검사1
	if(mid == '' || mpwd== '' ){
		alert('회원가입 실패. 아이디와 비밀번호를 모두 입력해 주세요.')
	}
	else{ // 
	
	// * 유효성 검사2
	if(mid.length<8 || mpwd.length<8 ){
		alert('아이디와 비밀번호는 8자리 이상으로 입력해주세요.')
	}
	else{
	//2. 객체 담기 // 입력된 데이터를(mid,mpwd) 를 { } 안에서 속성명(아이디,비밀번호) 붙여서 저장
	let member = { 아이디 : mid , 비밀번호 : mpwd }
	
	//3. 등록할때 ( 함수 실행됨 ) 마다 객체 생성되고 '}' 끝나면 다 사라짐
	// 밖에 전역변수 만들어서 거기에 저장하기. 객체 여러개(배열) = 전역변수
	// * {} 안에서 선언된 객체를 전역 배열에 저장하자
	회원리스트.push( member );
		} // else end
	} // else end
	
} // f end // mid,mpwd,membere 초기화/사라짐

/* ( 상기 코드를 줄인 코드 )
	회원리스트.push(
		let mid = document.querySelector('#mid').value;
		let mpwd = document.querySelector('#mpwd').value;
		et member = { 아이디 : mid , 비밀번호 : mpwd }
	)
*/

// 2. 로그인 [ 실행조건 : 로그인 버튼을 클릭했을때 ]

function 로그인(){
	//1. 입력된 값을 가져오기.
	let mid2 = document.querySelector('#mid2').value;
	let mpwd2 = document.querySelector('#mpwd2').value;
	
	//2. 입력된 값이 존재하는지 검사
		// - 회원리스트(전체) 중에서 1개씩 꺼내서 아이디와 비밀번호가 일치하는지 검사
		
	
	for( let i=0; i<=회원리스트.length-1; i++ ){
		if(회원리스트[i].아이디==mid2){
			if(회원리스트[i].비밀번호==mpwd2){alert('로그인 성공'); break; }
			alert('비밀번호가 틀렸습니다.'); break; // 반복분 종료 방법1 조건을 false로 만들기. 
													 // 방법2 break 사용 ( 가장 가까운 반복문만 종료됨. )
		}
		alert('가입된 회원이 없습니다.')
	}

}
