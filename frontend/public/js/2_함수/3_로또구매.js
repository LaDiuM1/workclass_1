/*

주제 : 로또구매 프로그램
요구사항
   1. 로또구매 버튼 클릭해서 실행
   2. 1~45개 버튼 화면에 표시 
   3. 6개 버튼 선택 ( 중복 불가능 ) / 구매취소 
   4. 6개 숫자 모두 선택시 추첨결과 버튼 활성화 / 유효성검사 
   5. 당첨번호 = 자동 난수(랜덤) 6개
   6. 선택한 6개 숫자와 당첨번호6개와 비교해서 결과
   
 */




function 로또구매(){
	console.log('로또구매() 실행')
	// 1. 1~45개의 button 실행
	let buttonHTML=``;
		for(let i=1; i<=45; i++){
		// i는 1부터 45까지 1씩증가 반복
	 	buttonHTML += `<button 
	 					onclick="숫자버튼( ${i} )">
	 					${i}
	 					</button>` // 숫자버튼 클릭 시 i함수를 실행하여 인수에 저장/
	 								// 인수를 숫자버튼 함수에 저장하여 해당 함수 실행
		 if(i%5==0){ buttonHTML += `<br/>`}
		}
	document.querySelector('.버튼목록구역').innerHTML = buttonHTML;
	
} // f end


//2. 숫자(선택) 버튼 함수 정의
function 숫자버튼( 선택된번호 ){
	console.log(선택된번호+'숫자버튼을 클릭했군요')
	
}


 
