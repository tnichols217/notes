```````col
``````col-md
flexGrow=1
===
> [!info] Callouts
>  Stuff inside the callout
>  More stuff inside.
>> [!ERROR] Error description
>>  Nested callout
>>  `````col-md
>>  - example MD code
>>  - more stuff
>>  `````
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

``````ad-example
title: Home and Kanban
collapse: open
color:  250,250,1

`````col

````ad-example
title: home
collapse: open
color: 1,200,20

```dataview
list 
from "" 
where contains(file.name,"home-1") 
where file.name != this.file.name
sort file.ctime asc
limit 120
```
````

````ad-example
title: kanban
collapse: open

```dataview
list 
from "" 
where contains(file.name,"kanban") 
sort file.ctime asc 
limit 120
```
````
`````

``````
