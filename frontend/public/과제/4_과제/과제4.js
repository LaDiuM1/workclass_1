let userData = []; let click = 0;

/*
1. 전역 배열 선언 후 글쓰기 페이지에서 받은 입력값을 글 등록 클릭 시
	배열에 추가하는 함수 구현
	마지막에 2번 refresh 함수 추가
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
	// 시간 함수 끝
	
	let writer = document.querySelector('.writer').value;
	let password = document.querySelector('.password').value;
	let title = document.querySelector('.title').value;
	let content = document.querySelector('.content').value;
	let time = year1 + '년 ' + month1 + '월 ' + date1 + '일 ' + hours1 + ':' + minutes1 + ':' + seconds1
	
	if(writer=='' || password=='' || title=='' || content=='' ){ alert('등록 시 공란이 없어야 합니다.'); return; }
	
	let Udata = { 작성자 : writer ,
	비밀번호 : password ,
	제목 : title ,
	내용 : content,
	작성시간 : time,
	조회수 : click
	};
	userData.push(Udata)
	refresh()
	document.querySelector('.writer').value = '';
	document.querySelector('.password').value = '';
	document.querySelector('.title').value = '';
	document.querySelector('.content').value = '';
	alert('게시글이 등록되었습니다.')
}
	
/*
2. 저장된 데이터를 각 항목에 맞게 글보기 페이지에서 refresh 하는 함수 구현
	클릭 이벤트에 3번 함수 인자 받기. */	

function refresh(){
	let tableData = document.querySelector('.table')
	let tableHTML = `
	 					<table>
	 					<tr>
	 					<th>번호</th><th>제목</th><th>작성자</th><th>작성일</th><th>조회수</th>
	 					</tr>
	 				`
	for(let i=0; i<=userData.length-1; i++){ 
						
		tableHTML += `<tr onclick="clickEvent(${i})">
					<td>${i+1}</td><td>${userData[i].제목}</td><td>${userData[i].작성자}</td>
					<td>${userData[i].작성시간}</td><td>${userData[i].조회수}</td><tr/>`
					
	}
		tableHTML += `</table>`
		tableData.innerHTML = tableHTML;
}

/*
3. 저장된 값을 글보기 페이지로 refresh하는 함수 생성
	생성 시 마지막에 삭제 버튼 구현 후 4번 삭제 함수에 사용될
	인수번호 받고 마지막에 2번 refresh 함수 실행
*/

function clickEvent(x){
	let postData = document.querySelector('.readContent')
	let postHTML = ` 제목 : ${userData[x].제목}<br/>
							내용 : ${userData[x].내용}<br/>
							작성자 : ${userData[x].작성자}<br/>
							<button onclick="postDelete(${x})" type="button">삭제</button>
						`
	postData.innerHTML = postHTML;
	userData[x].조회수++
	refresh()
}

/*
5. 삭제 버튼 클릭 시 prompt 띄워서 값을 변수에 저장.
	if문으로 인수로 받은 인덱스 객체 번호의 비밀번호 속성 데이터 호출하여
	변수에 저장된 값과 일치하는지 확인
	값이 일치하면 인수로 받은 배열 인덱스를 삭제.
	마지막에 3번 리프레쉬 실행
*/

function postDelete(x){
	let userPassword = prompt('비밀번호를 입력해주세요.')
	if(userPassword != userData[x].비밀번호) {alert('비밀번호가 틀렸습니다.'); return;}
	
	userData.splice(x,1);
	refresh()
	alert('게시글이 삭제되었습니다.')
	document.querySelector('.readContent').innerHTML = ``;
	
}

	

