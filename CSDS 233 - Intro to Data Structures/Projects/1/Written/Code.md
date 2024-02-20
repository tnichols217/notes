
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