
```java
public static int sum1() {
	int sum = 0;                              //1
	for(int i = 0; i < n; i++) {              //1*
		if(sum < n) {                         //1
			for(int j = 0; j < n; j++) {      //n*
				sum++;                        //1
			}
		}
	}
	return sum;                               //1
}
```

^a

```java
public static int sum2() {
	int sum = 0;                              //1
	for(int i = n; i > 1; i = i/3) {
		sum = sum + 2;
	}
	return sum;
}
```

^b