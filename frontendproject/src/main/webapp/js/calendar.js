console.log('calandar.js')

// 0. 현재 연도/월 [ 초기값 ]
	// new Date() : 현제 시간을 반환해주는 클래스
	// new Date(연도, 월, 일) : 사용자 정의 날짜로 반환해주는 값
		// new Date().getFullYear() 현재 년도 호출
		// new Date().getMonth()	현재 월 호출
		// new Date().getDay()	현재 날짜 호출
	
let year = new Date().getFullYear(); // 현재 년도
let month = new Date().getMonth()+1; //현재 월 호출 (기본값 0)
console.log(year); console.log(month);
let int = month;
//1 현재 년도도/월 기준으로 달력 출력 하는 함수
calPrint()
function calPrint(x){
	
	if( x != null ){
	if(int+1 > 12){int = 0}
	if(int+1 < 1){int = 11}
	else{int += x}
	}
	
	/*else {month = +x }*/
	
	
	let currDate = new Date(year,int-1, 1)
	let startWeek = currDate.getDay()
	let lastDate = new Date(year,month, 0).getDate()
	
	
	
	// 1. 현재 연도와 월을 해당 구역에 출력하기
	document.querySelector('.caldate').innerHTML = `${year}년 ${int}월`
	
	// 1. 요일과 일 출력
	let calendar = document.querySelector('.calendar')
	let html=''
	
	/* 시작 요일과 끝 날짜 필요*/
	
	//요일
	html += `<div class="week sunday"> 일 </div> <div class="week"> 월 </div>
			<div class="week"> 화 </div> <div class="week"> 수 </div>
			<div class="week"> 목 </div> <div class="week"> 금 </div>
			<div class="week"> 토 </div>
			`
	// 2.일수
	// 현재 보고있는 캘린더의 날짜

	for( let day=1-startWeek; day<=lastDate; day++){
		if(day<1){ html += `<div></div>`
		}else{
		html += `<div onclick="openModal()"> ${day} </div>`
		}
		
	}
	calendar.innerHTML = html;
}



// 3. 모달 열기 // 날짜 구역 클릭했을때
function openModal(){
	document.querySelector('.modalwrap').style.display = 'flex';
}
// 4. 모달 닫기 // 닫기 버튼 클릭했을때
function closeModal(){
	document.querySelector('.modalwrap').style.display = 'none';
}



