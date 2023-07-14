package java1.과제.과제2;

import java.util.Scanner;

public class 연산20문제 {
	
	public static void main(String[] args) {
	Scanner scanner = new Scanner(System.in);
		/*
		//------ 문제1 여기에 풀이-------//
		System.out.println("	|\\_/|\r\n"
				+ "	|q p|   /}\r\n"
				+ "	( 0 )\"\"\"\\\r\n"
				+ "	|\"^\"`    |\r\n"
				+ "	||_/=\\\\__|");
		
		//------ 문제2 여기에 풀이-------//
		System.out.print("작성자 입력 : "); String writer = scanner.nextLine();
		System.out.print("내용 입력 : ");String content = scanner.nextLine();
		System.out.print("날짜 : ");String date = scanner.nextLine();
		
		System.out.println("--------------방문록--------------------\n"
				+ "|	순번	|	작성자	|	내용	|	날짜	|\n"
				+ "|	 1	|	"+writer+"	|	"+content+"	|	"+date+"	|");
		
		//------ 문제3 여기에 풀이-------//
		System.out.print("기본급 입력 : "); int 기본급 = scanner.nextInt();
		System.out.print("수당 입력 : "); int 수당 = scanner.nextInt();
		
		float 실수령액 = (float)기본급+(float)수당-((float)기본급*(float)0.1);
		System.out.println((int)실수령액);
		
		//------ 문제4 여기에 풀이-------//
		System.out.print("금액 입력 : "); int 금액 = scanner.nextInt();
		
		int 십만원 = 금액/100000;
		int 만원 = (금액-(십만원*100000))/10000;
		int 천원 = (금액-(십만원*100000)-(만원*10000))/1000;
		
		System.out.println("십만원 "+십만원+"장");
		System.out.println("만원 "+만원+"장");
		System.out.println("천원 "+천원+"장");
		
		//------ 문제5 여기에 풀이-------//
		System.out.print("정수 입력 : "); int 정수 = scanner.nextInt();
		
		String 검증 = 정수%7==0 ? "O" : "X";
		System.out.println(검증);
		
		//------ 문제6 여기에 풀이-------//
		System.out.print("정수 입력 : "); int 정수1 = scanner.nextInt();
	
		String 검증1 = 정수1%2!=0 ? "O" : "X";
		System.out.println(검증1);
		
		//------ 문제7 여기에 풀이-------//
		System.out.print("정수 입력 : "); int 정수2 = scanner.nextInt();
	
		String 검증2 = (정수2%7==0 && 정수2%2==0) ? "O" : "X";
		System.out.println(검증2);
		
		//------ 문제8 여기에 풀이-------//
		System.out.print("정수 입력 : "); int 정수3 = scanner.nextInt();
		
		String 검증3 = (정수3%7==0 && 정수3%2!=0) ? "O" : "X";
		System.out.println(검증3);
		
		//------ 문제9 여기에 풀이-------//
		System.out.print("정수1 입력 : "); int 정수4 = scanner.nextInt();
		System.out.print("정수2 입력 : "); int 정수5 = scanner.nextInt();
		
		int max = 정수4>=정수5 ? 정수4 : 정수5;
		
		System.out.println(max);
		
		//------ 문제10 여기에 풀이-------//
		System.out.print("반지름 입력 : "); int 반지름 = scanner.nextInt();
		System.out.println(반지름*반지름*(float)3.14);
		
		//------ 문제11 여기에 풀이-------//
		System.out.print("실수1 입력 : "); float 실수1 = scanner.nextFloat();
		System.out.print("실수2 입력 : "); float 실수2 = scanner.nextFloat();
		
		System.out.println((실수1/실수2)*100+"%");
		
		//------ 문제12 여기에 풀이-------//
        System.out.print("윗변 : "); float 윗변 = scanner.nextFloat();
        System.out.print("밑변 : "); float 및변 = scanner.nextFloat();
        System.out.print("높이 : "); float 높이 = scanner.nextFloat();
        
        float 넓이 = (윗변 + 및변) * 높이/2;
    
        System.out.println(넓이);
		
		//------ 문제13 여기에 풀이-------//
		System.out.print("키 입력 : "); int 키 = scanner.nextInt();
	    
	    double 표준체중 = (키 - 100) * 0.9;
	    System.out.println(표준체중);
		
		//------ 문제14 여기에 풀이-------//
	    System.out.print("키 입력: "); double 키1 = scanner.nextDouble();
	    System.out.print("몸무게 입력: "); double 몸무게 = scanner.nextDouble();
	    
	    double bmi = 몸무게 / ((키1/100)*(키1/100));
	    System.out.println((int)bmi);
	    
		//------ 문제15 여기에 풀이-------//
		 System.out.print("인치 입력: "); double 인치 = scanner.nextDouble();
	     
	     double 인치단위 = 인치*2.54;
	     System.out.println(인치단위 + "cm");
	     */
		//------ 문제16 여기에 풀이-------//
		System.out.print("중간고사 점수: "); double 중간고사 = scanner.nextDouble();
	    System.out.print("기말고사 점수: ");  double 기말고사 = scanner.nextDouble();
	    System.out.print("수행평가 점수: "); double 수행평가 = scanner.nextDouble();
	    
	    
	    double 평가점수 = 중간고사 * 0.3 + 기말고사 * 0.3 + 수행평가 * 0.4;
	    System.out.printf("%.2f", 평가점수);
		
		//------ 문제17 여기에 풀이-------//
	    int x = 10;
	    int y = x-- + 5 + --x;
	    System.out.printf(" x의 값 : %d , y의값 :  %d ", x, y);
			
		// x값에 10 대입
		// y 변수 선언 후 
		// x값(10) 계산 후 후위식으로 x값 1 감소,
		// x값 9에 전위 감소식 연산 후 x값 8을
		// 계산 완료 된 10에 더하고 5를 더해서 y값 23 출력
		// 최종 계산 순서 : 10+((10-1)(9-1)=8)+5
			
	    //------ 문제18 여기에 풀이-------//
	    System.out.print("나이 입력: ");  int 나이 = scanner.nextInt();
	    
	    String 연령대 = (나이 >= 40) ? "중년" :
		    	  				(나이 >= 20) ? "성인" :
		    	  					(나이 >= 10) ? "학생" : "미성년자";

	    System.out.println(연령대);
		
	    //------ 문제19 여기에 풀이-------//
	    System.out.print("국어 점수 : "); int 국어 = scanner.nextInt();
	    System.out.print("영어 점수 : "); int 영어 = scanner.nextInt();
	    System.out.print("수학 점수 : "); int 수학 = scanner.nextInt();
		    
	    int 총점 = 국어+영어+수학;
	    double 평균 = (double)총점/3;
		    
	    System.out.println("총점: " + 총점);
	    System.out.printf("평균: %.2f", 평균);
		 
		//------ 문제20 여기에 풀이-------//
	    System.out.print("아이디 입력: "); String id = scanner.nextLine();
	    System.out.print("비밀번호 입력: "); String password = scanner.nextLine();
	    String 로그인결과 = (id.equals("admin") && password.equals("1234")) ? "로그인 성공" : "로그인 실패";

	    System.out.println(로그인결과);
		    
		//------ 문제21 여기에 풀이-------//
	    System.out.print("정수1 : "); int 정수11 = scanner.nextInt();
	    System.out.print("정수2 : "); int 정수22 = scanner.nextInt();
	    System.out.print("정수3 : "); int 정수33 = scanner.nextInt();
	        
	    int max1 = (정수11 > 정수22) ? 
	    		((정수11 > 정수33) ? 정수11 : 정수33) 
	    		: ((정수22 > 정수33) ? 정수22 : 정수33);
	        
	    System.out.println("가장 큰 수: " + max1);
	    
	}
}
/*

문제1 : 강아지 console 출력
	|\_/|
	|q p|   /}
	( 0 )"""\
	|"^"`    |
	||_/=\\__|

문제2 : 입력받은 3개 데이터를 이용한 표 만들기 
	[입력변수]
		1. 작성자[문자열] , 내용[문자열] , 날짜[문자열] 입력받아 각 변수에 저장 
	[출력 예]
		   --------------방문록--------------------
		   | 순번  | 작성자  | 	내용 	| 날짜       |
		   |  1   | 강호동  |안녕하세요  |  09-28    |
		  ----------------------------------------
	
문제3 : 급여 계산
	[입력조건]
		기본급[정수] , 수당[정수]
	[ 조건 ] 
		 실수령액 = 기본급 + 수당 - 세금[기본급10%] 
	[출력조건] 
		실수령액 출력[ 소수점 없이  ]

문제4 : 지폐 세기 
	 [입력조건 ] 
		금액 
	 [조건 ] 
		 십만원 부터 백원 까지의 개수 세기 
	[ 출력조건 ]
		예) 356789 입력시 
		 십만원 3장 
		 만원 5장
		 천원 6장 
		 백원 7개

문제5 : 하나의 정수를 입력받아 7의 배수인지 출력[ 'O' 혹은 'X' 로 출력]

문제6 : 하나의 정수를 입력받아 홀수 인지 출력 [ 'O' 혹은 'X' 로 출력]

문제7 : 하나의 정수를 입력받아 7의 배수 이면서 짝수 인지 출력 [ 'O' 혹은 'X' 로 출력 ]

문제8 : 하나의 정수를 입력받아 7의 배수 이거나 홀수 인지 출력 [ 'O' 혹은 'X' 로 출력 ]

문제9 : 두개의 정수를 입력받아 더 큰수 출력 

문제10 : 반지름을 입력받아 원 넓이 출력하기 
	계산식) 원 넓이 공식 => 반지름 * 반지름 * 원주율[3.14]

문제11 : 두 실수를 입력받아 앞실수의 값이 뒤의 값의 몇% 인지 출력하기 
	예) 54.5   84.3 실수 2개입력시 결과는   64.285714%

문제12 : 사다리꼴 넓이 구하기[윗변과 밑변 높이를 입력받아 출력하기 
	계산식) 사다리꼴 계산식 = > (윗변 + 밑변) * 높이 / 2

문제13: 키를 정수를 입력받아 표준체중 출력하기 
	계산식) 표준체중 계산식 = > (키 - 100) * 0.9

문제14: 키와 몸무게를 입력받아 BMI 출력하기 
	계산식) BMI 계산식 = > 몸무게 / ((키 / 100) * (키 / 100))

문제15: inch 를 입력받아 cm 로 변환하기 
	계산식) 1 inch -> 2.54cm

문제16:  중간고사, 기말고사, 수행평가를 입력받아 반영비율별 계산하여 소수 둘째자리까지 점수 출력하시오 
	계산식 반영비율)  중간고사 반영비율 => 30 %  / 기말고사 반영비율 => 30 %   / 수행평가 반영비율 => 40 %

문제17 :  연산 순서 나열 하고 printf() 에 출력되는 x 와 y 값을 예측하시오.
	int x = 10;
	int y = x-- + 5 + --x;
	printf(" x의 값 : %d , y의값 :  %d ", x, y)

문제18 : 나이를 입력받아 나이가 10세이상이면 학생 , 20세이상이면 성인 , 40세이상이면 중년 으로 출력하기

문제19 : 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점(소수점 0자리) 출력 , 평균(소수점 2자리 까지) 출력

문제20 : 아이디[문자열] 와 비밀번호[문자열] 를 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 와 일치하면 로그인성공 아니면 로그인실패 출력

문제21 : 세 정수를 입력받아 가장 큰수 출력 

  
 */
