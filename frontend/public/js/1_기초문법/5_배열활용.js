
//1. 배열선언 : '학생리스트' 배열명으로 비어 있는 배열 선언
let 학생리스트 = [ ] // * 초기에는 배열에 아무것도 없다.

//2. 이벤트 : 무엇인가가 실행/일어 났음
		// onclick : 온클릭 이벤트 [ 클릭했을 때 이벤트 실행 ]
		// 이벤트 함수( 코드들이 모여있는 공간 )
			//함수 형태 : fuction 함수명( 매개변수 ){ }
			// 함:상자 : 수:숫자 => 숫자들이 들어있는 상자 => 미리 정의된 코드
function 추가함수(){ // function start
	alert('함수 실행')
	
	//1. input에서 입력받은 데이터 가져오기
	let snameInput = document.querySelector(".sname")
		// document : HTML문서(DOM 객체)
		// query : 쿼리(질의)	
		// Selector : 선택	자 ( id, class 마크업 등)
			/* 
			1. document.querySelector(".sname") : same 이라는 class명
			가진 input 객체 호출 
			2. 호출된 input 객체를 'sname' 변수에 담았다.
	//2. 입력받은 데이터 가져오기 */
	let name = snameInput.value
		//3. 변수명.value : 입력된 값 호출
		학생리스트.indexOf(name) != -1 ? alert('list에 이미 있습니다.')
		: 학생리스트.push( name )
	
		//* 유효성검사 : 	배열에 이미 존재하면 push 안함 , 존재하지 않으면 push	

	//3. 입력받은 데이터를 배열에 추가
	
			//4. 배열명.push(데이터) : 해당 데이터를 배열에 추가
	//4. 배열 출력
		// document.write(학생리스트)	// 문서의 해당 데이터를 쓰기 [ 기존데이터 사라짐 ]
		// 1. ul 객체 호출
	let slistUl = document.querySelector(".slist")
		// 2. 해당 'Ul' 객체에 쓰기
	slistUl.innerHTML = '<li>' +학생리스트+ '</li>'
		// innerHTML : <> (inner) </>
	//* 현재 <input> 객체 입력값 초기화
	snameInput.value = ' '
	
			
} // function end


//3. 삭제 함수
function 삭제함수(){ // f start
	//1. <input> 객체 호출
	let snameInput = document.querySelector(".sname")
	//2. <input> 객체의 value 속성 호출
	let name = snameInput.value
	// * 삭제하려면 인덱스 필요하지만 번호를 모름 -> 인덱스 찾아야 함
	// 3. 삭제할 데이터의 인덱스(저장된 순번) 찾자
	let index = 학생리스트.indexOf(name)
		//해당 데이터가 배열에 존재하면 0~찾을번호 없으면 -1
		//4. 배열내 인덱스를 이용한 데이터 삭제
		index != -1 ? 학생리스트.splice( index , 1) : alert('list에 없습니다.')
		// * 유효성검사 : 개발자가 원하는 데이터인지 검사
	// 결과물 출력
	let slistUl = document.querySelector(".slist")
	slistUl.innerHTML = '<li>' +학생리스트+ '</li>'
	//* 현재 <input> 객체 입력값 초기화
	snameInput.value = ' '
	
} // f end

