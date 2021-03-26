# Chapter 1

## 알고리즘의 정의
- Problem : a question to which we seek an answer 답을 찾고자하는 문제
- Problem Instance : a problem where each parameter is assigned a specific value 값이 할당된 문제의 인자
- Algorithm : 각 problem instance의 솔루션을 찾기 위한 단계적 절차

## Sequential Search Algorithm 순차적 탐색 알고리즘
주어진 리스트를 순서대로 앞에서부터 체크하면서 해당 값을 찾는 알고리즘
```
public static index SeqSearch(int n, keyType[ ] S, keyType x) { 
  index location = 1 ; 
  while (location <= n && S[location] != x) location++ ; 
  if (location > n) location = 0 ; 
  return location ; 
}
```

## Binary Search Algorithm 이진 탐색 알고리즘
증가하도록 정렬되어있는 알고리즘에서만 사용 가능
```
public static index BinSearch(int n, keyType[ ] S, keyType x) { 
  index location, low, high, mid ; 
  low = 1 ; 
  high = n ; 
  location = 0 ; 
  while (low <= high && location == 0) { 
    mid = floor( (low+high) / 2 ) ; 
    if ( x== S[mid]) location = mid ; 
    else if (x < S[mid]) high = mid – 1 ; 
    else low = mid + 1 ; 
  } 
  return location ; 
}
```
## Sequential Search vs Binary Search
![1](https://user-images.githubusercontent.com/62434898/112117825-1b8bcc00-8bff-11eb-8f7e-8c1e7953d1df.jpg)

## Fibonacci Sequence (Recursive Algorithm) [inefficiency]
```
public static int Fib(int n) {
	if (n <= 1) return n;
	else return Fib(n-1) + Fib(n-2);
}
```

## Fibonacci Sequence (Iterative Algorithm)
```  
public static int Fib2(int n) {
	index i; int[] f = new int[n+1];
	f[0] = 0;
	if ( n > 0) {
		f[1] = 1;
		for (i = 2; i <= n; i++)
			f[i] = f[i-1] + f[i-2];
	}
	return f[n];
}
```

## Recursive vs Iterative Fibonacci
![2](https://user-images.githubusercontent.com/62434898/112117832-1cbcf900-8bff-11eb-8b30-610b2add4ee2.jpg)

## Two Parameters for Complexity
- the input size of an algorithm
> size of array
> 
> single number
> 
> number of vertices & number of edges
> 
- the basic operation of an algorithm [보통 반복문 및 재귀]
> the total work : number of times operation excuted

## Time Complexity Analysis
The determination of how many times the basic operation is done for each value of the input size

입력 크기의 각 값에 대해 기본 작업이 수행되는 횟수의 결정

## Type of Time Complexity Analysis

 ![1](https://user-images.githubusercontent.com/62434898/112126280-a2dd3d80-8c07-11eb-99d6-10c6149b783c.jpg)
 
- Every Case Analysis
> 크기 n의 모든 인스턴스에 대해 동일한 횟수만큼 기본 작업이 수행될 때 적용 가능

- Non-Every Case Analysis
> Best Case Analysis : the minimum # of times 
> 
> Wort Case Analysis : the maximum # of times
> 
> Average Case Analysis : the average # of times

## Applying the theory

![2](https://user-images.githubusercontent.com/62434898/112126285-a375d400-8c07-11eb-95cf-3b48b2a48c44.jpg)

Basic Operation 의 소요시간이 1000t , 루프의 횟수가 n 인 Algo1
Basic Operation 의 소요시간이 1t, 루프의 횟수가 n^2 인 Algo2
Input size N의 크기가 1000보다 적은 경우에만 Algo2가 효율적이다.
Input size N의 크기를 충분히 크다고 생각하고 알고리즘의 효율성을 분석하기 때문에 Algo1이 효율적인 알고리즘이라 할 수 있다.

## Order (차수)
- Linear 1차 : ex) (Worst case) Sequential search with n items
- Quadratic 2차 : ex) (Average case) Bubble sort with n items
- Highest-Order Term(최고차항)이 알고리즘의 복잡도를 지배한다.
> ex) n : 10,000 / 0.1n^2 : 10,000,000 / 0.1n2+n+100 : 10,010,100

![3](https://user-images.githubusercontent.com/62434898/112126287-a40e6a80-8c07-11eb-96dc-0af9e3e3def2.jpg)

## Rigorous Introduction to Order 차수에 대한 엄밀한 소개
- Big O		[<=]
- Omega(Ω)	[>=]
- Theta(θ)
- small o

## Big O
“어떤 양의 상수 c, 충분히 큰 양의 실수 N에 대해서 g(n) ≤ c × f(n), for all n ≥ N”

주어진 복잡도 함수 f(n) 에 대하여 O(f(n))은 f(n)과 관련이 있는 복잡도 함수 g(n)을 모아 놓은 집합

![1](https://user-images.githubusercontent.com/62434898/112133979-9b219700-8c0f-11eb-8cb2-062a79cea06f.jpg)


## Proof of Big O
![2](https://user-images.githubusercontent.com/62434898/112133986-9c52c400-8c0f-11eb-8553-604e43659989.jpg)
![3](https://user-images.githubusercontent.com/62434898/112133987-9c52c400-8c0f-11eb-8940-99bb5882442a.jpg)
![4](https://user-images.githubusercontent.com/62434898/112133992-9ceb5a80-8c0f-11eb-9429-bbd10c4d9a4c.jpg)
![5](https://user-images.githubusercontent.com/62434898/112133993-9ceb5a80-8c0f-11eb-847e-bb4ddff76d30.jpg)
  
Trick for proof : 
> ex ) n^2 + 10n 과 O(n^2)
> 
> n^2 + 10n <= c * n^2 에서 상수 c는 왼쪽항의 n^2 의 1보다 클 것
>
> n^2 + 10n <= 2 * n^2 에서 소거
>
> 10 <= n
>
> n >= 10 으로부터 증명 시작

## Omega(Ω)
“어떤 양의 상수 c, 충분히 큰 양의 실수 N에 대해서 g(n) ≥ c × f(n), for all n ≥ N”

Big O 와 부등식의 방향만 다르다.

![6](https://user-images.githubusercontent.com/62434898/112133997-9d83f100-8c0f-11eb-934e-f69ce9854e80.jpg)
 
## Proof of Omega

![7](https://user-images.githubusercontent.com/62434898/112133999-9d83f100-8c0f-11eb-8817-d32b99ec457d.jpg)
![8](https://user-images.githubusercontent.com/62434898/112134003-9e1c8780-8c0f-11eb-86d7-799b97844b7f.jpg)
![9](https://user-images.githubusercontent.com/62434898/112134005-9e1c8780-8c0f-11eb-8156-4c3386c16c47.jpg)

## Theta(θ)
“어떤 양의 상수 c와 d, 충분히 큰 양의 실수 N에 대해서 c × f(n) ≤ g(n) ≤ d × f(n), for all n ≥ N.”

θ(f(n))= O(f(n)) ∩ Ω(f(n)) [최고차항의 차수가 같다]

![1](https://user-images.githubusercontent.com/62434898/112141434-a0371400-8c18-11eb-9269-58abe76e5fa1.jpg)

## Proog of Theta

![2](https://user-images.githubusercontent.com/62434898/112141435-a1684100-8c18-11eb-9a6e-0073c0477e04.jpg)
![3](https://user-images.githubusercontent.com/62434898/112141437-a1684100-8c18-11eb-9be8-bdd66ddc207a.jpg)

## small o
“모든 양의 상수 c, 충분히 큰 양의 실수 N에 대해서 g(n) ≤ c × f(n), for all n ≥ N”

N을 지나는 이후로 f(n)에 어떤 상수 c를 곱해도 g(n)이 같거나 작다.

![5](https://user-images.githubusercontent.com/62434898/112141443-a200d780-8c18-11eb-9f4a-66b6f580183c.jpg)

[small o를 만족하면 Big O를 만족한다.]

![4](https://user-images.githubusercontent.com/62434898/112141440-a200d780-8c18-11eb-8021-8c9208836c2a.jpg)
  

## Proof of small o

![6](https://user-images.githubusercontent.com/62434898/112141444-a2996e00-8c18-11eb-9159-2b8b537c14e1.jpg)
![7](https://user-images.githubusercontent.com/62434898/112141447-a2996e00-8c18-11eb-8715-9944ba5d487e.jpg)
![8](https://user-images.githubusercontent.com/62434898/112141448-a3320480-8c18-11eb-916c-23f7bf990261.jpg)
 
## Properties of Order

![9](https://user-images.githubusercontent.com/62434898/112141450-a3320480-8c18-11eb-908f-46ea0de5994f.jpg)

---

# Chapter 2

## Divide and Conquer 분할 정복
- Step 1 : Divide
> 주어진 문제의 인스턴스를 한 개 혹은 더 작은 인스턴스로 분할한다.
- Step 2 : Conquer
> 분할된 인스턴스를 이용해 솔루션을 얻을 수 있다면 문제를 해결한다. 그렇지 않다면, 재귀를 이용해 보다 더 작은 인스턴스로 분할한다.
- Step 3 : (if necessary) Combine
> 솔루션을 더 작은 인스턴스와 결합한다면 원래의 인스턴스에 대한 솔루션을 얻을 수 있다.

## Binary Search
- Step 0 : if target=S[mid], quit
> 중간 인덱스의 값이 타겟 값과 같다면 종료
- Step 1 : Divide
> 중간 값보다 타겟 값이 작다면 타겟 값 왼쪽의 배열로 인스턴스 분할
> 
> 중간 값보다 타겟 값이 크다면 타겟 값 오른쪽 배열로 인스턴스 분할
- Step 2: Conquer
> 분할된 인스턴스에서 타겟이 어디에 위치한지 결정

## Recursive Binary Search
```
public static index location(index low, index high)
{
	index mid;
	if (low > high) return 0;
	else {
		mid = (low + high) / 2;
		if (x==S[mid]) return mid;
		else if (x<S[mid]) return location(low,mid-1);
		else return location(mid+1,high);
	}
}
```

## Worst-Case Time Complexity of Binary Search
Basic Operation : Compartison of x with S[mid]

Input Size : n, the number of items in array

Assumption : n=2^k for some integer k >= 0

> W(n) = W(n/2) + 1 for n>1, W(1) = 1
>
> = ( W(n/2^2) + 1 ) + 1
> 
> … 
> 
> =  ((… ( W(n/2^k) + 1) + 1) + 1) + … ) + 1
>
> = 1 + k
> 
> = 1 + log n [n=2^k]
> 
> -> θ(log n)

