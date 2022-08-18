
| A     | B                  | C           | D                     | F             | G          | H                |
| ----- | ------------------ | ----------- | --------------------- | ------------- | ---------- | ---------------- |
| Study | Fitness            | APCS        | World Lit + Media Lit | AP Bio        | CnC + Brit | Forens + SpirD   |
| Study | Media Lit + Forens | Cap + SpirD | AP Mandarin           | CnC + Fitness | AP Lit     | Fitness + Adv C. |
| Study | Media Lit + Forens | Cap + SpirD | Fitness               | AP Bio        | CnC        | Adv C            |
| Study | Media Lit + Forens |             |                       |               |            |                  |


> [!def] a
> ```col
> asd
> s
> 
> a
> ```

`````ad-note
````col
```col-md
# line1

line1
- a
- b
- c
```
```col-md
line1
line2
```
````
`````

````col
```col-md
# line1

line1
- a
- v
- x
```
```col-md
line1
line2
```
````

```col
- a
- b
- c
- d

- e
- f
```

# A
<iframe srcdoc="
    <html>
    <head>
    <script type='text/javascript'>
    function load() {
        let p = Array.from(parent.document.styleSheets)
        p.unshift('')
        let pSS = p.reduce(
            (x, i) => {
                let a = Array.from(i.cssRules)
                if (a.length == 0) {
                    return x
                }
                a.unshift('')
                return x + a.reduce(
                    (y, j) => {
                        return y + j.cssText
                    }
                )
            }
        )
        let style = document.createElement('style')
        style.type = 'text/css'
        style.innerHTML = pSS
        document.head.appendChild(style)
        console.log(style)
    }
    window.onload=load
    </script>
    </head>
    <body>
    <h1>A</h1>
    </body>
    </html>
    "></iframe>

```vba
=IFERROR(VLOOKUP(A2,春,2,FALSE),VLOOKUP(A2,夏,2,FALSE))
```
