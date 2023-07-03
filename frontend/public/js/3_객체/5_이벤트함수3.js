// 1. select 목록상자에서 변경 될 때 선택된 value 가져오기

let selectBox = document.querySelector('.selectBox');

	// * 이벤트 등록[ addEventListner vs 마크업 onchage=""]
selectBox.addEventListener('change', ()=>{
	console.log('목록상자 변경')
	console.log(selectBox.value)
});

// 2. 라디오, 체크박스에서 체크 여부 가져오기

let checkbox = document.querySelector('.checkBox')
checkbox.addEventListener('change' , ()=>{
	
	console.log(checkbox.checked); // 체크여부
	
})

// 3. 타이머 예제
	//1. 해당 태그 호출
let timer = document.querySelector('.timer');
let timerBox = document.querySelector('.timerBox');

	//2. 시간 함수에 필요한 변수
let time = 0; //  타이머 시간
let timerId = 0; // 타이머 함수[setInterval가 저장되는 전역 변수

	

	// *이벤트 등록
timer.addEventListener('change',()=>{
	
	if(timer.checked){
		setInterval( ()=>{
			time++
			timerBox.innerHTML = time +'초'
		} , 1000 )
		
	
	}else{
		clearInterval ( timerId )
		
		
	}
})

/*
	setInterval( 함수 , 시간 ) : 특정 시간마다 선택한 함수를 재호출
	함수
		1. 기존함수명			function 함수명() {}	[기존함수]
		2. () => {}			() => {}			[람다식 함수]
		3. function(){}		function () {}		[익명 함수]
		
		시간 : 밀리초	
*/



