console.log( 'modify.js 실행' )
let loginId = `blue1234`;

//썸머노트 실행할때 사용되는 코드 
$(document).ready(function() {
  // $('#summernote').summernote( {설정객체} );
  $('#summernote').summernote( { 
	lang : 'ko-KR', // 한글 적용 [ 한글.JS CDN 필요]  
	height : 500 , 
	placeholder : '여기에 내용작성'
  });
});


//list.js에서 클리된 게시물 번호 호출 [ 세션 ]
let no = sessionStorage.getItem('no')
let boardList = JSON.parse(localStorage.getItem('boardList'))
console.log(sessionStorage.getItem('no'))

let listNo = 0;
modify()
function modify(){
let mTitle = document.querySelector('.mTitle')
let mContent = document.querySelector('.mContent')
	
	for(let i=0; i<boardList.length; i++){
		if(boardList[i].no == no){
		mTitle.value = boardList[i].title;
		mContent.value = boardList[i].content;
		listNo = i;
		}	
	}
}

function modiComplete(){
	let mTitle = document.querySelector('.mTitle').value;
	let mContent = document.querySelector('.mContent').value;
	
		
	let boardList = JSON.parse(localStorage.getItem('boardList'))
	

	for(let i=0; i<boardList.length; i++){
		if(boardList[i].no == no){
		boardList[i].content = mContent
		boardList[i].title = mTitle
		}	
	}		

	localStorage.setItem('boardList', JSON.stringify(boardList))
	
	console.log(JSON.parse(localStorage.getItem('boardList')))
	alert('수정이 완료되었습니다.');
		// 페이지 전환 방법
		// HTML : <a href="경로">
		// JS  : locantion.href="경로"
	location = "../board/view.jsp"
}

