let sum = 0;

let date = [];
let item = [];
let price = [];

function submit(){
	let dateData = document.querySelector('.dateInput')
	dateValue = dateData.value
	date.push(dateValue)
	
	let itemData = document.querySelector('.itemInput')
	itemValue = itemData.value
	item.push(itemValue)
	
	let priceData = document.querySelector('.priceInput')
	priceValue = priceData.value
	price.push(priceValue)
	
	listAdd()
	
	dateData.value = ``
	itemData.value = ``
	priceData.value = ``

}

function listAdd(){
	let tableDiv = document.querySelector('.tableDiv')
	let tableHTML = `<th> 날짜 </th> <th> 항목 </th> <th> 금액 </th> <th> 비고 </th>`
	for ( let i = 0 ; i <= date.length-1; i++ ){
			tableHTML +=	`<tr>
								<td>${date[i]}</td>
								<td>${item[i]}</td>
								<td>${Number(price[i]).toLocaleString()}원</td>
								<td><button onclick="delPcn(${i})" type="button">삭제</button></td>
								 </tr>`
	}
	if(date.length!=0){tableHTML +=`<td colspan='2'>총합계 : </td><td >${sumPcn()}원</td>`}
				
	tableDiv.innerHTML = tableHTML
	
}

function sumPcn(){
	sum = 0;
	for ( let i = 0 ; i <= price.length-1; i++ ){
				sum +=	Number(price[i]);
				}
				return sum.toLocaleString();
}

function delPcn( x ){
	
	date.splice(x , 1)
	item.splice(x , 1)
	price.splice(x , 1)
	
	listAdd()
	
}







