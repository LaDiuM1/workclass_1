
 let id_arr = [ ]
 let password_arr = [ ]
 
 function sign_up(){ //f start
	 

	 let id_input = document.querySelector(".login_id")
	 let id_value = id_input.value

	 let password_input = document.querySelector(".login_password")
	 let password_value = password_input.value
	 
	if (id_value =='') {alert('Enter your user id and password.')} 
		else if(id_arr.indexOf(id_value)!= -1){alert('This account is already in use. Please try again.')}
		else if(id_value.length<8 || password_value.length<8) {alert('id and password must have at least 8 characters. try again.')}
	 	else{
	
	 id_arr.push(id_value)
	 password_arr.push(password_value)
	 
	 id_input.value = ''
	 password_input.value = ''
	 alert('register successfully')
	
	 }
	 
 }//f end

function sign_in(){ //f start
	 

	 let id_input = document.querySelector(".login_id2")
	 let id_value = id_input.value

	 let password_input = document.querySelector(".login_password2")
	 let password_value = password_input.value
	 
	 if (id_value =='') {alert('Enter your user id and password.')}
		 else if(id_arr.indexOf(id_value)!= -1 && password_arr.indexOf(password_value)!= -1){alert('Login successfully.')
			 id_input.value = ''
			 password_input.value = ''}
		 else {alert('Login failed.')}
	 
 }//f end