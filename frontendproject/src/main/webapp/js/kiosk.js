
/* 샘플 데이터 */
// 광고이미지 배열
let bimgList = [ 'himg1.png', 'himg2.png',
				'himg3.jpg', 'himg4.png',
				'himg5.png'];
// 카테고리 배열
let categoryList = ['스패셜&할인팩', '신제품(NEW)',
					'프리미엄', '와퍼&주니어',
					'치킨&슈림프버거', '올데이킹&킹모닝'
					]


// 서로 다른 유형들의 데이터 여러개 저장 = 객체 { }
// 동일한 유형들의 데이터 어러개 저장 = 배열/리스트 [ ]
// 예시) 버거이름, 버거가격, 버거이미지, 버거카테고리 버거이름2, 버거가격2, 버거이미지2, 버거카테고리2
// 예시) {버거이름, 버거가격, 버거이미지, 버거카테고리},{버거이름2, 버거가격2, 버거이미지2, 버거카테고리2}
// 다른 배열이나 객체가 종속관계일 경우 식별키를 저장하는게 유리
// 카테고리(상위) -> 제품(하위) // 카테고리 식별값 ---> 제품에 저장 [ 데이터 베이스 pk ---> fk ]

let bugerList = [
					{ name : '헬로디아블로와퍼', price : 9500, img : '헬로디아블로와퍼.png' , category : 0 } ,
					{ name : '블랙바비큐콰트로치즈와퍼', price : 8000, img : '블랙바비큐콰트로치즈와퍼.png' , category : 1 } ,
					{ name : '블랙바비큐와퍼', price : 8500, img : '블랙바비큐와퍼.png' , category : 2 }
				
				]
	//1. 카트(장바구니) 배열 / 선택 버거들이 저장되는 배열
		// 1. 버거 삭제 2.버거의 배열 
let cartList = [];


// 1. 광고이미지 변경
	// 1. 광고이미지 어러개 = 배열

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

	// 2. 카테고리 출력 함수 정의 [ 실행 조건 : 1. 페이지[JS] 열렸을때 ]
	
	categoryPrint( 0 );
	
	function categoryPrint( selectNo ){
		//1.어디에 
		let categoryMenu = document.querySelector('.categoryMenu')
		//2. 무엇을
		let html = ``;
			// HTML 구성 : 배열내 모든 데이터( for ) 를 li 형식으로 출력 
		for(let i=0; i<categoryList.length; i++){
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
		// 0. 카테고리의 모든 li 호출 [ querySelector 1개 호출 vs querySelectorAll 모두 호출(배열로 저장)]
		let categoryli =  document.querySelectorAll('.categoryMenu li');
		/*console.log( categoryli );*/
		
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
		productPrint( selectNo )
	}

productPrint( 0 )

// 4. 제품 출력 함수 [ 실행 조건 : 1. 카테고리 클릭(변경)화면 ]
function productPrint( categoryNo ) { // 어떤 카테고리의 제품 출력할건지??? 인수 판단
	// 1. 어디에
	let productBox = document.querySelector('.productBox')
	let html =``;
		//html 구성
		for( let i=0; i<bugerList.length; i++){
			
			if( bugerList[i].category == categoryNo ){
				html +=` <div class="product" onclick="productSelect(${i})">
					<img src="../img/${bugerList[i].img}">
					<div class="pinfo">
						<div class="pname">${bugerList[i].name}</div>
						<div class="pprice">${bugerList[i].price}원</div>		
					</div>
				</div>
				`
			}
			productBox.innerHTML = html;
			
		}
}//f end

let sumPrice = 0;
// 5. 제품 선택해서 카트에 담는 함수 [ 실행 조건 : 1.제품 구역 클릭 하면 ]
function productSelect ( productNo ){
	cartList.push({
					name : bugerList[productNo].name ,
					price : bugerList[productNo].price 
					}
					
	
	
	); // 버거 이름 카트에 담음
	console.log(cartList)
	
	let cCount = document.querySelector('.cCount')
	let cTotal = document.querySelector('.cTotal')
	
	sumPrice += bugerList[productNo].price;
	
	cCount.innerHTML = cartList.length;
	cTotal.innerHTML = '총 주문금액 : '+sumPrice.toLocaleString()+'원';
	cartPrint( productNo );
			
}

//6. 선택한 제품 카트에 출력하는 함수

function cartPrint( cartNo ){
	let cartBottom = document.querySelector('.cartBottom')
	let iName = document.querySelector('.iName')
	let iPrice = document.querySelector('.iPrice')
	let iCencle = document.querySelector('.iCencle')
	
	let html = ``;
		for(let i=0; i<cartList.length; i++){
			html += `	<div class="cItem">
							<div class="iName">${cartList[i].name}</div>
							<div class="iPrice">${cartList[i].price}</div>
							<span class="iCencle" onclick="cartCancle(${i})">X</span>
						</div>`
	cartBottom.innerHTML = html;
	}
}

//7. 제품 삭제하는 함수
function cartCancle( cancleNo ){
		let cartBottom = document.querySelector('.cartBottom')
		let cCount = document.querySelector('.cCount')
		let cTotal = document.querySelector('.cTotal')
		
		sumPrice -= cartList[cancleNo].price
		
		cartList.splice(cancleNo,1)
		console.log(cartList)
		
		let html = ``;
		
		for(let i=0; i<cartList.length; i++){
			html += `	<div class="cItem">
							<div class="iName">${cartList[i].name}</div>
							<div class="iPrice">${cartList[i].price}</div>
							<span class="iCencle" onclick="cartCancle(${i})">X</span>
						</div>`
			}
		
		cartBottom.innerHTML = html;
		cCount.innerHTML = cartList.length;
		cTotal.innerHTML = '총 주문금액 : '+sumPrice.toLocaleString()+'원';
}


// 주문 조건 : 주문번호 , 주문날짜 , 결제금액 , 주문제품들 , 상태(주문요청,주문완료,주문취소)

// 8. 주문하기 팝업
let orderNo = 0;

function order(){
	let order = document.querySelector('.order')
	let html =``;
	let name =``;
	
	for(let i=0; i<cartList.length; i++){
		name += `${cartList[i].name} [${cartList[i].price.toLocaleString()}원]`
				if(i!=cartList.length-1){
					name += `</br></br>`
				}
		
		
		
	}
	
	
	html = `<p>${orderNo}</p>
			<p>06/23</p>
			<p>${sumPrice.toLocaleString()}원</p>
			<p>${name}</p>
	`
	
	order.innerHTML = html;
	orderNo++
}










		
		
