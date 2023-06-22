/*
	변수
		지역변수 : 지역{ }에서 태어났으면 지역 밖으로 못나감
			-	{ } 에서 사용된 변수는 { } 밖에서 사용 불가
		전역변수 : 지역{ }밖에서 태어났으면 자유롭게 이동 가능
			-	{ } 밖에서 선언된 변수는 { } 안으로 이동 가능

	문자열내 변수/배열/객체 포함하는 방법 [ JS안에서 HTML 작성시 문자처리 ]
		1. 작은따음표(연결연산자) '<td>'+변수명/배열명+'</td>'
		2. 백틱( ${}) = `<td>#{ 함수명()/변수명/배열명 }</td>`
	
	
	
*/



// 4. 배열 선언
let 방문록배열 = []; // 1. 여러 함수에서 사용하기 위해 밖에서 선언
	// 인덱스 = 배열내 저장된 순서 번호
let 방문록배열2 = []; // 작성자 배열



// 1. 이벤트 함수 만들기
function 등록(){ // p start

	// 1. 함수가 잘 작동하는지 체크
	console.log(' 등록함수 실행 ')
	
	// 2. <input 태그 호출>
	let content_input = document.querySelector('.content')
	console.log(content_input);
	
	// 3. 입력받은 값 호출
	let value = content_input.value;
	console.log( value );
	
	// 4. 배열 등록
	방문록배열.push( value );
	console.log( 방문록배열 );
	방문록배열2.push( document.querySelector('.writer').value)
	
	// 5. HTML에 배열 출력
		// 1. <table> 호출
		let content_table = document.querySelector('.content_table')
		console.log(content_table)
		// 2.
		// 3. innerHTML 내용 (+=) 추가
		// * 배열내 존재하는 인덱스까지만 출력
		// * 반복문 이용한 0번 인덱스부터 마지막 인덱스까지 출력
		// 반복문 0번부터 마지막 인덱스까지 1개씩 출력
		// 0버부터(초기값) ; 마지막인덱스까지(조건); 1개씩(증감식)
		// 방법 1. 반복문을 이용한 출력
		let tableHTML = `<tr><th>내용</th><th>작성자</th></tr>`
		for ( let i = 0 ; i <= 방문록배열.length-1; i++ ){
				tableHTML +=	`<tr>
									<td>${방문록배열[i]}</td>
									<td>${방문록배열2[i]}</td>
								 </tr>`
			
		}
		
		/*// 방법 2. 마지막인덱스[최근 등록된 요소] = 배열.length-1
		tableHTML += `<tr><td>${방문록배열[방문록배열.length-1]}</td><td></td></tr>`*/
		
		
		
		//tableHTML += '<tr><td></td><td></td></tr>'
		
		// 4. 추가된 HTML 내용 ( = ) 대입
		content_table.innerHTML = tableHTML
		
		
} // p end