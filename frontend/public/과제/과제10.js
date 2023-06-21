/**
 * 
 */

 let id_arr = [ ]
 let password_arr = [ ]
 
 function sign_up(){ //f start
	 
	 // 로그인 정보 받기
	 let id_input = document.querySelector(".login_id")
	 let id_value = id_input.value
	 
	 if(id_arr.indexOf(id_value)!= -1){alert('이미 가입된 회원입니다.')}
	 else{
	 id_arr.push(id_value)
	 id_input.value = ''
	 
	 
	 // 비밀번호 정보 받기
	 let password_input = document.querySelector(".login_password")
	 let password_value = password_input.value
	 password_arr.push(password_value)
	 
	 loginUl = document.querySelector(".login_list")
	 loginUl.innerHTML = '<li>' +'id : '+id_arr+'<br/>'+'password : '+password_arr+'</li>'
	 
	 password_input.value = ''
	 alert('회원가입 완료.')
	 }
	 
 }//f end
