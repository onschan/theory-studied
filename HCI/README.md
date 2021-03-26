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

# JavaScript OOP

## 6가지 기본 자료형
- Number 
- String
- Boolean
- Null
- Undefined
- Symbol (ES6)

## Number(수) : 64비트 부동소수점 수
- 정수, 실수의 구분이 없음
```
typeof 17; // “number”
typeof -2.1; // “number”
```
- 범위
> -(2^53 -1) ~ (2^53 -1)
> 
> +0 === -0

- 필요시 묵시적으로 32비트 정수형으로 전환
```
8 | 1;	// 9
(8).toString(2); // “1000”
```

- 정밀도 한계로 인한 부정확성 주의
```
0.1 + 0.2;	// 0.30000000000000004
```

## Null과 Undefined
- Null: “비어 있음”을 의미하는 값
```
var a = null;
```
- Undefined: 선언되었으나 정의되지 않은 변수
```
var b;
var c = undefined;
```
- 거짓을 의미하는 6가지 값
> false
> 
> 0
> 
> “”
> 
> null
> 
> undefined
> 
> NaN (Not A Number)

## 강제 형 변환 (Type Coercion)
- 느슨한 자료형 (Loosely typed)
```
3 + true;	 // 4
“2” + 3;	// “23”
2 + “3”; // “23”
1 + 2 + “3”; // “33”
1 + “2” + 3; // “123”
“8” | “1”; // 9
```

## == vs ===
- == : Equality (강제 형 변환 O)
> 254 == ‘254’	// true
> 
> true == 1	// true
> 
> undefined == null	// true
> 
> ‘abc’ == new String(‘abc’)	// true

- === : Identity (강제 형 변환 X)
> 254 === ‘254’	// false
> 
> true === 1	// false
> 
> undefined === null	// false
> 
> ‘abc’ === new String(‘abc’)	// false
> 
> ‘abc’ === ‘abc’		// true

## 동적 자료형 (Dynamic Typing)
- 변수 선언시 자료형을 명시할 필요 없음
> 실행 시간에 변수에 할당된 값에 따라 자료형이 결정됨
```
var a = 123;
typeof a;	 // number
a = “123”
typeof a;	 // string
a = true;
typeof a;	 // boolean
var b;
typeof b; // undefined
```

## 변수의 참조 범위 (Scope)
- 전역
> 선언되지 않고 사용되는 변수
> 
> 함수 밖에서 선언된 변수
- 지역
> 함수 안에서 선언된 변수
> 
> var : 함수 범위 (hoisting)
> 
> let, const : 블록 범위 (ES6)

## 전역 vs 지역
```
function swap(a, i, j) {
	temp = a[i];	// temp : 전역변수
	a[i] = a[j];
	a[j] = temp;
}
```
```
function swap(a, i, j) {
	var temp = a[i];	// temp : 지역변수
	a[i] = a[j];
	a[j] = temp;
}
```
```
var name = “Richard”;	// name : 전역변수
function showName() {
	name = “Jack”;	// name : 전역변수
	console.log(name); // Jack
}
console.log(name) // 함수 호출 전 Richard, 함수 호출 후 Jack
```
```
var name = “Richard” // name : 전역 변수
function showName() {
	var name = “Jack”	// name : 지역 변수;
	console.log(name)	// Jack
}
console.log(name) 	// Richard
```

## 변수 끌어올리기(Hoisting)
```
function showName() {
	console.log(“First Name: “ + name);	// undefined 오류 x
	var name = “Ford”;	
	console.log(“Last Name: “ + name);	// Ford
}
showName();
```

## 몇 개의 지역 변수?
```
function trimSections(header, body, footer) { 
	for(var i=0, n=header.length; i<n; i++) {
		header[i] = header[i].trim();
	}
	for(var i=0, n=body.length; i<n; i++) {
		body[i] = body[i].trim();
	}
	for(var i=0, n=footer.length; i<n; i++) {
		footer[i] = footer[i].trim();
	}
}
```
> 다른 언어에서는 for 문 속 i와 n이 for문 속 각각 다른 지역 변수로 사용되겠지만 자바스크립트에서는 for문과 아래와 같이 상관없이 같은 지역변수로 사용된다.

```
function trimSections(header, body, footer) {
	var i, n; 
	for(i=0, n=header.length; i<n; i++) {
		header[i] = header[i].trim();
	}
	for(i=0, n=body.length; i<n; i++) {
		body[i] = body[i].trim();
	}
	for(i=0, n=footer.length; i<n; i++) {
		footer[i] = footer[i].trim();
	}
}
```

## var vs let (ES6)
-var i
```
function foo() {
	for(var i=0; i < 5; i++) {
		if ( i%2 == 0) {
			console.log(i);
		}
	} 
	console.log(i);	// 5 출력
}
```
> var i 는 foo 함수에 영향을 미치지는 지역변수로 사용

-let i
```
function foo() {
	for(let i=0; i < 5; i++) {
		if ( i%2 == 0) {
			console.log(i);
		}
	} 
	console.log(i);	// i는 undefined
}
```
> let i 는 for문 외 다른 영역에 영향을 미치지 않음

```
var a = ‘test’;
var a = ‘test2’;	// OK : redefinition 재정의 가능
c = ‘test’; 	// OK : hoisting 변수 끌어올리기 가능
var c;
```

```
let a = ‘test’;
let a = ‘test2’;	// Error : redefinition 재정의 불가
c = ‘test’; 	// Error : undefined 정의되지 않은 변수 c
let c;
```

## 함수 선언 vs 함수 표현식
- 함수 선언(declaration)
```
function add(num1, num2) {
	return num1 + num2;
}
```
> 함수의 타입, 인자의 타입 명시하지 않음

- 함수 표현식 (expression)
```
var add = function(num1, num2) {
	return num1 + num2;
};
```
> 함수를 데이터의 형식의 객체로 바라보며 변수에 할당하여 사용

## 익명 함수(Anonymous Function)
- 이름 없는 함수 객체
```
var numbers = [1,5,8,4,7,10,2,6];

numbers.sort(); // default : lexicographic order (숫자의 오름차순이 아닌 사전순서대로 정렬)
console.log(number);	// “[1,10,2,4,5,6,7,8]”

number.sort(function(first, second) {
	return first – second;
});	// 기존에 정의되어있지 않은 이름없는 함수를 정의하여 바로 사용
console.log(numbers);	// “[1,2,4,5,6,7,8,10]”
```

## 함수 : 일등급 객체 (First-Class Object)
- 함수를 변수에 저장하거나 인자로 전달 가능
```
function sayHi() {
	console.log(“Hi!”);
}
sayHi();	// “Hi!”

var sayHi2 = sayHi;
sayHi2();	 // “Hi!”
```
> 함수를 객체로서 변수에 바로 할당하여 새로운 이름의 함수 생성

## IIFE (Immediately-Invoked Function Expression)
- 정의된 후 즉시 호출되는 함수 표현식
> 별도의 함수 호출 없이 정의와 동시에 호출 가능
```
(function() {
	console.log(“Hello”);
})();
```
```
(function(name) {
	console.log(“Hello” + name);
})(“Jason”);
```
```
(sayHello = function(name) {
	console.log(“Hello” + name);
})(“Jason”);
sayHello(“Rich”);
```
- 전역 영역을 오염시키지 않기 위한 용도로 활용
```
(function() {
	var firstName = “Richard”;
	function init() {
		doStuff(firstName);
		// …
	}
	function doStuff() {
		// …
 	}
	init();
})();
```
