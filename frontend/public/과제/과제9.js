//문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]

let 정수1 = Number(prompt('정수를 입력하세요'))
let 정수2 = Number(prompt('정수를 입력하세요'))
let 정수3 = Number(prompt('정수를 입력하세요'))


let max1 = 정수1>=정수2 ? 정수1 : 정수2
let max2 = max1>=정수3 ? max1 : 정수3
max4 = max1>=정수3 ? 정수3 : max1

let max5 = 정수1<=정수2 ? 정수1 : 정수2
let max6 = max5<=정수3 ? max5 : 정수3 


console.log(max6 + ' ' + max4 + ' '+ max2)

   /*문제12 : [ 가위바위보 게임 ] 
   - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
   - 승리자 판단과 무승부 경우의수를 출력하시오.
   [입력]
      플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
      플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   [경우의수 판단]
      플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
      플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
      비겼을경우 '무승부' 출력*/

let player1 = Number(prompt('플레이어 1 : 0~2 입력'))
let player2 = Number(prompt('플레이어 2 : 0~2 입력'))


let result = player1 == player2 ? '무승부' : player1 == 0 && player2 ==2 || player1 == 1 && player2 ==0 
|| player1 == 2 && player2 ==1 ? '플레이어1 승리' : '플레이어2 승리'

console.log(result)

//가위1 바위2 보3

