
// 1. list.js에서 클리된 게시물 번호 호출 [ 세션 ]
let no = sessionStorage.getItem('no')
let boardList = JSON.parse(localStorage.getItem('boardList'))
console.log(sessionStorage.getItem('no'))

// 2. 클릭된 게시물 번호로 게시물 출력

let listNo = 0;


onView()
function onView(){
	// 어디에
	let title = document.querySelector('.title')
	let writedate = document.querySelector('.writedate')
	let content = document.querySelector('.content')
	
	// 식별자 : 인덱스 , 게시물번호=인덱스찾기
	// 해당하는 게시물번호의 게시물찾기
	for( let i = 0; i<boardList.length; i++){
		let b = boardList[i] // i번째 게시물을 꺼내기
		if(b.no == no){
			//대입
			title.innerHTML = b.title;
			writedate.innerHTML = b.writer + ' ' + b.date;
			content.innerHTML = b.content;
			listNo = b.no;
			break; //반복문 종료
		}
	}
}

function viewDelete(){
	let comp = prompt('삭제하시겠습니까? 예,아니오')
	if(comp=='예'){
	
	for(let i=0; i<boardList.length; i++){
	if(no==boardList[i].no){
	boardList.splice(i,1);}
	}
	localStorage.setItem('boardList',JSON.stringify(boardList))
	
	location = "list.jsp";
	}
}




