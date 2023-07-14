	let 강수량 = Number(prompt('강수량 기입'));
	let 수위 = 0;
	let 방류여부= false
	
	function 댐( 강수량 ){
			수위 += 강수량;
			if(수위>=500){방류여부 = true}
			else{방류여부 = false}
			return 방류여부
	}
	
	댐(강수량)
	console.log('방류여부 : ' + 방류여부)