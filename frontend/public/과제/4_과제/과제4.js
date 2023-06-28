let userData = [];
let click = 0;
let 조회수 = []; 


/*
2. 전역 배열 선언 후 글쓰기 페이지에서 받은 입력값을 글 등록 클릭 시
	배열에 추가하는 함수 구현
	마지막에 3번 refresh 함수 추가
*/

function dataSubmit(){
	//현재시간 구하기 , 구글에서 퍼온 코드
	let today = new Date();   
	
	let year1 = today.getFullYear(); // 년도
	let month1 = today.getMonth() + 1;  // 월
	let date1 = today.getDate();  // 날짜
	let hours1 = today.getHours(); // 시
	let minutes1 = today.getMinutes();  // 분
	let seconds1 = today.getSeconds();  // 초
	
	
	let writer = document.querySelector('.writer').value;
	let password = document.querySelector('.password').value;
	let title = document.querySelector('.title').value;
	let content = document.querySelector('.content').value;
	let time = year1 + '년 ' + month1 + '월 ' + date1 + '일 ' + hours1 + ':' + minutes1 + ':' + seconds1
	let Udata = { 작성자 : writer ,
	비밀번호 : password ,
	제목 : title ,
	내용 : content,
	작성시간 : time,
	조회수 : click
	};
	userData.push(Udata)
	postRead()
	
}
	
/*
3. 저장된 데이터를 각 항목에 맞게 글보기 페이지에서 refresh 하는 함수 구현
	리스트는 버튼으로 감싸서 4번 함수(글보기 페이지)와 연동 */	

function postRead(){
	let tableData = document.querySelector('.table')
	let tableHTML = `<button onclick="postRead()" type="button"
	 					style="background-color:white;border:none;">
	 					<table>
	 					<tr>
	 					<th>번호</th><th>제목</th><th>작성자</th><th>작성일</th><th>조회수</th>
	 					</tr>
	 					
	 				`
	
	for(let i=0; i<=userData.length-1; i++){ 
						
		tableHTML += `<tr>
					<td>${i+1}</td><td>${userData[i].제목}</td><td>${userData[i].작성자}</td>
					<td>${userData[i].작성시간}</td><td>${userData[i].조회수}</td><tr/>`
					
	}
	
		tableHTML += `</table></button>`
		tableData.innerHTML = tableHTML;
		
}




/*
4. 저장된 값을 글보기 페이지로 refresh하는 함수 생성
	생성 시 마지막에 삭제 버튼 구현 후 5번 삭제 함수에 사용될
	인수번호(배열번호와 일치)하게 만드는 함수 구현
*/
	
	
	
	
	
	
	
/*
5. 삭제 버튼 클릭 시 prompt 띄워서 값을 변수에 저장.
	if문으로 인수로 받은 인덱스 객체 번호와 비밀번호 속성 데이터 호출하여
	변수에 저장된 값과 일치하는지 확인
	값이 일치하면 배열에서 받은 인덱스 번호와 일치하는
	배열 객체 삭제 후 3번 리프레쉬 실행
*/
