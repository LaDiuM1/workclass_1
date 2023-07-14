console.log('list js 호출')

// 1. 쿠키에 있는 배열 호출 [ 페이지[JS] 열리면 ]
let boardList = JSON.parse( localStorage.getItem('boardList'))
	// 쿠키/세션에 저장된 객체/배열 호출시 JSON.parse()
	// 쿠키/세션에 저장된 객체/배열 호출시 JSON.stringify()
console.log(boardList)
if(boardList == null) {boardList = []};

boardPrint()
// 1. 게시물 출력 함수 [ 페이지[JS] 열리면 ]
function boardPrint(){
	// 1. 어디에
	let tcontent = document.querySelector('.tcontent')
	// 2. 무엇을
	
	let html =``;
			// HTML 구성 : 쿠키에서 꺼내온 배열을 반복문해서 HTML 누적 더하기
			for(let i=0; i<boardList.length; i++){
				let board = boardList[i]; // i번째 게시물 호출
				html += `<tr>
							<td>${board.no}</td> <td onclick="onViewLoad(${board.no})">${board.title}</td> <td>${board.writer}</td>
							<td>${board.date}</td> <td>${board.view}</td> <td>${board.like}</td>
						</tr>
				`
			}
	
	// 3. 대입
	tcontent.innerHTML = html;
	
}


/*<tr>
					<td>1</td> <td>상대성이론</td> <td>아인슈타인</td>
					<td>1915-11-25</td> <td>155,820,454,358</td> <td>6,820,454,358</td>
				</tr>*/

// 2. 상세페이지로 이동 [ 실행조건 : 클릭한 게시물 제목 ]
function onViewLoad( no ){
	console.log('현재 클릭된 게시물 번호 :' + no)
	// 클릭된 결과를 다른페이지로 옮기는 방법
		// JS는 페이지가 전환/새로고침 초기화 -> // 세션/쿠키
	sessionStorage.setItem('no',no) // 게시물 번호 저장
	
	for(let i=0; i<boardList.length; i++){
		if(no==boardList[i].no){
		boardList[i].view++;
		}
	}
	localStorage.setItem('boardList',JSON.stringify(boardList))
	location = "view.jsp"
	boardPrint()
}



	











