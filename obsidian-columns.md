
```````col
``````col-md
flexGrow=1
===
> [!info] Callouts
>  Stuff inside the callout
>  More stuff inside.
>> [!ERROR] Error description
>>  Nested callout
>>  - example MD code
>>  - more stuff
``````

``````col-md
flexGrow=2.5
===

# Text annotation example:

`````col
````col-md
flexGrow=1
===

1. Function name **a** should be more descriptive

2. Remove **if/else** by using **||**
````

````col-md
flexGrow=2
===

```js
function a(word) {
	if (word != null) {
		console.log(word);
	} else {
		console.log("a");
	}
}
let msg = "Hello, world!";
console.log(msg)
```
````
`````
``````
```````

> [!col]
>> [!info] Callouts
>> Stuff inside the callout
>> More stuff inside.
>>> [!ERROR] Error description
>>> Nested callout
>>> - example MD code
>>> - more stuff
>
>> [!col-md-2.5]
>> # Text annotation example:
>>> [!col]
>>>> [!col-md]
>>>> 1. Function name **a** should be more descriptive
>>>> 2. Remove **if/else** by using **||**
>>> 
>>>> [!col-md-2]
>>>> ```js
>>>> function a(word) {
>>>> 	if (word != null) {
>>>> 			console.log(word);
>>>> 	} else {
>>>> 		console.log("a");
>>>> 	}
>>>> }
>>>> let msg = "Hello, world!";
>>>> console.log(msg)

> [!col]
> A col callout
>
>> [!col-md-3]
>> The second column of the callout
>> 
>> This column is now 3 times the width of the first column

````col
textAlign=right
===
```col-md
textAlign=center
===
AA
```
```col-md
AA
```
````

````col
```col-md
aa
![[loop.png]]
```
```col-md
aa
![loop.png](loop.png)
```
````

aa
![loop.png](loop.png)

aa
![[loop.png]]

> [!col]
> > [!col-md]
> > aa
> > aa
> > 
> > Aaa
> > a
> aa
> 
> aa
> 
> aa
> aa
```col
- a
- b
	- a
	- b
		- a
		- b
```

- a
- b
	- a
	- b
		- a
		- b

````col
```col-md
# aa

aa

bb

cc
```
````

# aa

aa

bb

cc

dd

# List Structure
- !!!col
	- 1
		![](Assets/Attachments/Placeholder-Male.png)
	- 3
		Mr.
		# John Doe
		⚙️ **Head of Department**
		🏢 [Company Link]()
		📧 john.doe@email.com
		☎️ [+1 23 3 23 2 23](tel:+)
# Callout syntax
> [!col]
>> [!col-md-1]
>> ![](Assets/Attachments/Placeholder-Male.png)
> 
>> [!col-md-3]
>> Mr.
>> # John Doe
>> ⚙️ **Head of Department**
>> 🏢 [Company Link]()
>> 📧 john.doe@email.com
>> ☎️ [+1 23 3 23 2 23](tel:+)
# Codeblock 
````col
```col-md
![](Assets/Attachments/Placeholder-Male.png)
```<REMOVE>

```col-md
flexGrow=3
===
Mr.
# John Doe
⚙️ **Head of Department**
🏢 [Company Link]()
📧 john.doe@email.com
☎️ [+1 23 3 23 2 23](tel:+)
```<REMOVE>
````<REMOVE>