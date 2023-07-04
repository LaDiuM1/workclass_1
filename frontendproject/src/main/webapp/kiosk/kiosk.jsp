<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<link href="/frontendproject/css/kiosk.css" rel="stylesheet">
</head>
<body>
	
	<%@include file="../header.jsp"%>
	
	<div class="kioskwrap"> <!-- 키오스크 전체 -->
		<div> <!-- 헤더 : 광고이미지 표시되는 구역 -->
			<!-- 광고이미지  -->
			<img class="headderImg" src="../img/headder_img1.png" >
		</div> 
			<ul class="categoryMenu"><!-- 카테고리 -->
				<li class="categorySelect">스패셜&할인팩</li>
				<li>신제품(NEW)</li>
				<li>프리미엄</li>
				<li>와퍼&주니어</li>
				<li>치킨&슈림프버거</li>
				<li>올데이킹&킹모닝</li>
			</ul>
			
			
			
		<div class="kioskContent"> <!-- 본문 : 제품출력/카트출력 구역 -->
			<div class="productBox"> <!-- 제품 구역 -->
				
				<div class="product"><!-- 제품 1개 기준 -->
					<img src="../img/헬로디아블로와퍼.png">
					<div class="pinfo">
						<div class="pname">헬로 디아블로 와퍼</div>
						<div class="pprice">15,000원</div>		
					</div>
				</div>

		
			</div>
			
			
			
			<div class="cartBox">	<!-- 카트 구역 -->
				<div class="cartContent">  <!-- 제품 개수 , 제품정보 출력 -->
					
					<div class="cartTop">  <!-- 제품개수/총가격 출력 구역-->
							<div> 카트 <span class="cCount">3</span></div>
							<div>총 주문금액 : <span class=cTotal>25,000</span>원</div>
					</div>
						
					<div class="cartBottom"> <!-- 제품정보 출력 구역-->
						<div class="cItem">
							<div class="iName">더블불고기버거</div> <!-- 제품명 -->
							<div class="iPrice">12,000원</div> <!-- 제품가격 -->
							<span class="iCencle">X</span> <!-- 제품 개별 취소 -->
						</div>
					</div> 
				</div>	
					
					<div class="cartButton">
						<button class="cencleBtn">주문하기</button>
						<button class="orderBtn">취소하기</button>
					</div>
					
				
				
				
			
			</div>
		
		
		</div> 
	
	
	</div>
	
	<%@include file="../footer.jsp"%>
	
	
	<script src="/frontendproject/js/kiosk.js" type="text/javascript"></script>
</body>
</html>