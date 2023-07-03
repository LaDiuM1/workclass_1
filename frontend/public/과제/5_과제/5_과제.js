/**
 * 
 */

let wrap = document.querySelector('.wrap')
let char = document.querySelector('.charBox')

char.style.position = `absolute`;
wrap.style.position = `relative`;


let x = 10; let block = 30;

 
 function charMove(){
	 char.style.left = `${x * block}px`
	 
}
x = 0;

document.body.addEventListener('keydown', (e)=>{
	char.style.backgroundImage = `url("img/char.png")`;
	let key = e.keyCode;
	
	// 상 : 38 하 : 40 좌 : 37 우 : 39

	if(key==37){
		char.style.backgroundImage = `url("img/charMove.png")`;
		if(x > 0){x--;}
	} // 왼쪽으로 이동
		
	else if(key == 39){ // 오른쪽으로 이동
			char.style.backgroundImage = `url("img/charMove.png")`;
			if(x < 37){x++;}
	}
	else if(key == 65){ // 공격
		char.style.backgroundImage = `url("img/charAttack.png")`;}
	charMove()
})
 
document.body.addEventListener('keyup', (e)=>{
	char.style.backgroundImage = `url("img/char.png")`;
})


 
 
 
 