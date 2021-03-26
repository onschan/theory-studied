# HCI / Human Computer Interaction (or Interface)
사람들이 디지털 제품이나 서비스를 이용해 작업을 수행하거나 문제를 해결하는 과정에서 최적의 경험을 제공하는 것

---

# HTML+CSS+JavaScript
- HTML : 내용 + 구조
- CSS : 시각적 표현
- JavaScript : 동적 상호작용

## HTML
내용 + 구조
- 태그를 통한 구조적 요소 표시
> <p>This is a <em>really</em> interesting paragraph</p>
- 태그 중첩은 계층적 구조 하에서만 허용

## 대표적인 HTML 요소
- !DOCTYPE html
> 이 문서의 타입이 HTML 타입이라는 것을 알려주는 마크업
- html	
> 웹페이지의 시작과 끝
- head
> 문서의 메타데이터, 표시되진 않는 문서의 정보들 포함
- title
> 헤드 영역 속에 기술되는 제목 영역
- body
> 문서가 실제로 전달하고자 하는 표시되는 정보들
- p
> 가장 일반적인 형태의 문장들을 넣는 태그
- ul, ol, li
> 동등한 내용을 같는 정보들의 나열
- em
> 강조하고자 할 때 사용하는 태그 [기본적으로 이탤릭체로 표현됨]
- strong
> 마찬가지로 강조하고자 할 때 사용되는 태그 [굵은 글씨로 표현됨]
- span, div
> 어떠한 영역을 표현하고자 할 때 사용되는 태그

## 예제

![1](https://user-images.githubusercontent.com/62434898/112614171-4f1b6000-8e64-11eb-8916-606c964b4de2.jpg)
![2](https://user-images.githubusercontent.com/62434898/112614176-504c8d00-8e64-11eb-9a0a-af016e5cc630.jpg)
  
## 요소 속성
- 모든 HTML 요소는 ‘속성-값’ 쌍으로 매개화 가능
```
<tagname property=”value”></tagname>
<a href=”http://d3js.org/”>The D3 website</a>
```

## 클래스와 ID
- HTML 문서 일부를 식별할 수 있도록 하는 속성
> CSS와 JavaScript에서 HTML 문서에 접근 할 때 사용
- 클래스(class)
> 하나의 클래스를 여러 요소에 공통적으로 적용 가능
> 
> 하나의 요소에 여러 클래스를 동시에 적용 가능
- ID
> 하나의 ID는 하나의 요소에만 적용 가능

![3](https://user-images.githubusercontent.com/62434898/112614177-50e52380-8e64-11eb-92b1-2519d31901b0.jpg)
 
## DOM (Document Object Model)
- HTML의 계층적 문서 구조
```
<html>
	<body>
		<h1>Breaking News</h1>
		<p></p>
	</body>
</html>
```

![4](https://user-images.githubusercontent.com/62434898/112614179-50e52380-8e64-11eb-90a8-f951fdba33ba.jpg)

크롬의 개발자 도구 옵션등, DOM 구조로 이루어진 웹페이들을 확인할 수 있다.

## 렌더링과 박스 모델
-렌더링 절차
> HTML 문서 파싱 [파싱은 어떤 페이지(문서, html 등)에서 내가 원하는 데이터를 특정 패턴이나 순서로 추출해 가공하는 것]
> 
> DOM 생성
> 
> 시각화 규칙 적용하여 그림 (박스 모델에 기초)
- 박스 모델 : 각 요소를 하나의 사각형 영역에 대응
> 위치
> 
> 너비
> 
> 높이
 
![5](https://user-images.githubusercontent.com/62434898/112614182-517dba00-8e64-11eb-82e0-ec52c7a77d26.jpg)

## CSS (Cascading Style Sheets)
- DOM 요소의 시각적 표현 방식을 규정
```
body {
	background-color : white;
	color : black;
}
```
- 하나 혹은 그 이상의 요소를 식별하는 선택자(selector) + 해당 요소에게 적용하고자 하는 속성-값(property-value) 나열
```
selector {
	property: value;
	property: value;
	property: value;
}
```
- 둘 이상의 선택자에 동일 속성 부여 가능
> 콤마로 구분하여 연결
```
selectorA, 
selectorB, 
selectorC {
	property: value;
	property: value;
	property: value;
}
```
```
p,
li {
	font-size: 12px;
	line-height: 14px;
	color: orange;
}
```

선택자의 종류
- 타입 선택자 (Type selectors)
> 해당 태그 이름을 가진 모든 DOM 요소 선택
> 
> h1, p, strong, em, div [모든 h1, p, strong, em, div에 대해 속성 부여] 
- 자손 선택자 (Descendant selectors)
> 다른 요소의 하위 계층에 속한 요소들을 선택 (상위계층 하위계층)
> 
> h1 em , div p [ h1 태그 속에 포함된 em 태그, div 태그 속에 포함된 p 태그에 대해 속성 부여]
- 클래스 선택자 (Class selectors)
> 특정 클래스로 지정된 요소들을 선택
> 
> .caption, .label, .axis [해당 이름으로 설정된 클래스에 대해 속성 부여]
> 
> 둘 이상의 클래스를 함께 명시할 수 있음
> 
> .bar.highligh, .axis.x, .axis.y [둘 이상의 클래스가 동시에 적용되어있는 요소들을 선택하고자 할 때 사용]
- ID 선택자 (ID selectors)
> 특정 ID로 지정된 요소를 선택
> 
> #header, #nav, #export [유일한 ID를 가진 요소에 대해 속성 부여]
- 여러 종류의 선택자를 결합 가능
> div.sidebar, #button.on [div 중에서도 sidebar를 가진 요소의 속성, button ID를 가진 요소가 on 클래스를 가진 경우의 속성]

## 속성-값
- 선택자마다 일련의 속상-값 나열하여 스타일 지정
```
margin : 10px;
padding : 20px;;
background-color : yellow;
color : pink;
font-family: Helvetica, Arial, sans-serif;
```

## 스타일 지정 방식
1. HTML 문서에 CSS 저장

![6](https://user-images.githubusercontent.com/62434898/112614183-517dba00-8e64-11eb-971f-1868782e9619.jpg)

> head 영역안에 style 태그를 사용하여 속성 값 나열

2. 외부 CSS 파일을 HTML 문서에서 참조 [내용과 형식 구분]

![8](https://user-images.githubusercontent.com/62434898/112614188-52165080-8e64-11eb-839d-87cb1f9f1896.jpg)
 
> head 영역안에 link 태그를 이용하여 style.css 의 속성을 참조하여 적용

3. HTML 태그 안에서 직접 지정 (코드의 이해와 관리를 어렵게 하므로 가능한 배제)
 
![9](https://user-images.githubusercontent.com/62434898/112614191-52aee700-8e64-11eb-872d-9064da1f6296.jpg)

## 스타일의 상속(inheritance)
- 스타일 속성은 계층 구조에 따라 상속됨

![10](https://user-images.githubusercontent.com/62434898/112614193-52aee700-8e64-11eb-98da-79b05962faf4.jpg)

## 스타일의 종속(cascade)
- 선택자는 위에서부터 아래로 내려오며 매칭됨
> 각 요소에 대하여, 그 요소를 선택할 수 있는 가장 *구체적인* 선택자 중 *나중에* 기술된 것을 대응시킴

![11](https://user-images.githubusercontent.com/62434898/112614195-53477d80-8e64-11eb-9f4e-4521e79c5447.jpg)

## JavaScript
- HTML 문서가 웹 브라우저에 적재된 이후에, 동적으로 DOM을 조작할 수 있는 스트립트 언어
> 최신 웹 브라우저는 스크립트 콘솔 지원

## 변수
- 데이터 저장소
> 변수의 자료형은 할당된 값에 따라 결정됨 [동적인 자료형]
> 
> 가장 간단한 변수는 단 하나의 값을 저장
```
var number = 5;	// 인트형
defaultColor = “hot pink”;	// 문자형
var thisMakesSenseSoFar = true;	// Boolean형
```

## 배열
- 여러 개의 값을 함께 저장하고 관리하기 위한 변수
```
var numbers = [ 5, 10, 15, 20, 25 ];
numbers[0] // 5
numbers[4] // 25
```
- 배열 값의 자료형에는 제약이 없음
> 서로 다른 자료형 값들을 하나의 배열에 담을 수도 있음
```
var mishmash = [ 1, 2, 4.5, “oh boy”, true ];
mishmash[0] // 1
mishmash[3] // “oh boy”
mishmash[4] // true
```

## 객체
- 속성-값의 연관 배열
> 여러 속성으로 구성된 복잡한 대상을 표현하기에 적합
```
var fruit = {
	kind : “grape”,
	color: “red”,
	quantity: 12,
	tasty: true
};

fruit.kind // “grape”
fruit.color // “red”
fruit.quantity // 12
fruit.tasty // true
```

- 두 구조를 결합하여 더 복잡한 구조 형성 가능

![12](https://user-images.githubusercontent.com/62434898/112614196-53477d80-8e64-11eb-838a-4532448d5eb9.jpg)

 
## 연산자와 흐름 제어
- C, Java 등의 언어와 유사하기 때문에 같은 방식 적용 가능

## 함수
- JavaScript 함수는 객체
> 변수에 할당하고, 다른 함수의 인자로 전달하고, 속성을 설정하는 등 실행 시간에 조작할 수 있는 대상
```
var calculateGarivity = function(bill) { return bill * 0.2; }; // 함수를 변수에 할당
var tip = calculateGravity(38);
console.log(tip); // 콘솔에 7.6 출력
```
- C언어의 함수와의 차이
> 중첩함수 (nested function)
> 
> 익명함수 (anonymous function)
> 
> 함수 단위 접근범위 (scope)
> 
> 클로저 (closure)
> 
> …

## 스크립트 지정
- HTML 문서에 직접 포함

![13](https://user-images.githubusercontent.com/62434898/112614197-53477d80-8e64-11eb-8135-4bc1f982c94b.jpg)
 
> body 안에 script 태그를 이용하여 포함
- 외부 파일 참조
 
 ![14](https://user-images.githubusercontent.com/62434898/112614199-53e01400-8e64-11eb-99b4-c02ce41e96a2.jpg)
 
> head안에 script 태그를 이용하여 .js 소스 포함

## HTML+CSS+JavaScript 예시 코드

![15](https://user-images.githubusercontent.com/62434898/112614200-53e01400-8e64-11eb-85bb-7d2e4f148685.jpg)
 
---
