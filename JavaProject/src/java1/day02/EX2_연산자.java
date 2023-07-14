package java1.day02;	// 현재 패키지 경로

public class EX2_연산자 { // 현재 클래스 시작

	public static void main(String[] args) { // 메인 함수 시작
		
		// [ p.78 ] 연산자
		int x = +10; // + 생략 가능
		int y = -10;
		
		System.out.println("x : " + x);
		System.out.println("y : " + y);
		
		// 1. 산술 연산자
		System.out.println( "x + y : "+ (x + y));
		System.out.println( "x - y : "+ (x - y));
		System.out.println( "x * y : "+ (x * y));
		System.out.println( "x / 3 : "+ (x /3));
		System.out.println( "x / 3 실수로 표현 : "+ (float)((float)x /(float)3));
		System.out.println( "x & 3 : "+ (x & 3));
		
		//2. 비교 연산자
		System.out.println(" x == y : " + ( x==y ));
		System.out.println(" x != y : " + ( x!=y ));
		System.out.println(" x > y : " + ( x>y ));
		System.out.println(" x < y : " + ( x<y ));
		
		
		
		
		
	} // 메인 함수 종료

} // 현재 클래스 종료
