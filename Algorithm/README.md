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
