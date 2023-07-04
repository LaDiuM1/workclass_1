

// 1. 광고이미지 변경
	// 1. 광고이미지 어러개 = 배열
let bimgList = [ 'himg1.png', 'himg2.png',
				'himg3.jpg', 'himg4.png',
				'himg5.png'];
	// 2. 특정시간마다 이미지의 src 변경 하기
		// - setInterval ( 함수 , 밀리초 )
		/*함수 정의하는 방법.
			1. function 함수(){} <- 이벤트 안에서는 정의 불가
			2. function (){}
			3. () => {}
		
		
		
		*/
let x=0;
		
setInterval(()=>{
	x++
	//1. 어디에
	let himg = document.querySelector('.headderImg')
	//2. 속성 변경
	himg.src = `../img/${ bimgList[x] }`
	console.log(himg.src)
	if(x==bimgList.length-1){x=0}
	
},2000)


// 2. 카테고리 출력 [어디에 무엇을 대입] 이벤트
	// 1. 카테고리 여러개 저장하는 배열
	let categoryList = ['스패셜&할인팩', '신제품(NEW)',
						'프리미엄', '와퍼&주니어',
						'치킨&슈림프버거', '올데이킹&킹모닝'
						]

	// 2. 카테고리 출력 함수 정의 [ 실행 조건 : 1. 페이지[JS] 열렸을때 ]
	
	categoryPrint( 0 );
	
	function categoryPrint( selectNo ){
		//1.어디에 
		let categoryMenu = document.querySelector('.categoryMenu')
		//2. 무엇을
		let html = ``;
			// HTML 구성 : 배열내 모든 데이터( for ) 를 li 형식으로 출력 
		for(let i=0; i<categoryList.length-1; i++){
			if(i==selectNo){ html += `<li onclick="categorySelect( ${ i })"
							class="categorySelect">${categoryList[i]}</li>`;
			}
			else { html += `<li onclick="categorySelect( ${ i })">
							${categoryList[i]}</li>`}
			
		}
		//3. 구성된 html 출력
		categoryMenu.innerHTML = html;
	}
	
	

// 3. 카테고리 클릭 함수 [ 실행 조건 : 1. li에서 클릭했을때]
	function categorySelect( selectNo ){
		// <li> 여러개 존재 하는데 무엇을 선택했는지 식별
		console.log( selectNo )
		// 0. 카테고리의 모든 li 호출 [ querySelector 1개 호출 vs querySelectorAll 모두 호출]
		let categoryli =  document.querySelectorAll('.categoryMenu li');
		console.log( categoryli );
		
		// 1. 해당 선택된 인덱스의 class 추가 // js에서 class 에서 추가/삭제  가능
		for( let i=0; i<categoryList.length; i++){
			if(selectNo == i){
				//해당 li에 class 추가		DOM객체명.classList.add( '새로운클래스명' )
				categoryli[i].classList.add('categorySelect')
			}else{
				//해당 li에 class 삭제		DOM객체명.classList.remove( '삭제할클래스명' )
				categoryli[i].classList.remove('categorySelect')
			}
			
		}
	}
		
		
		
		
	
	


