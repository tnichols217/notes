# index.tsx
```js
import {start} from "./express/resolve"

start()
```

# express/resolve.tsx
```js
// I built this myself (you can see it on npmjs)
import React from "basicjsx"
// Express http server for running the web server
import express, { RequestHandler, Request, Response } from "express";
// Http for using the http protocol (because theres no need for https for this project)
import http from "http";
import { resolve as main } from "./routes/main"

const app = express()

export type dirList = string[]
export type resolveTreeFunction = (dir: dirList, q: any, res: Response) => void
export type resolveTreeItem = resolveTreeFunction | resolveTree
export type resolveTree = [resolveTreeFunction, { [key: string]: resolveTreeItem }]

const resTreeTup = {
    Func: 0,
    ResTreeItem: 1
} as const

const a: resolveTreeFunction = (req, q, res) => {
    if (req.length == 1) {
        console.log(req)
        res.sendFile(`${__dirname}/${req[0]}`)
    } else {
        res.send("Failed to find file")
    }
}

const b: resolveTreeItem = (req, q, res) => {
    res.send(JSON.stringify(q))
}

const mainWrapper: resolveTreeFunction = (req, q, res) => {
    console.log(req)
    if (req.length == 0) {
        return main(req, q, res)
    } else {
        console.log(req)
        return a(req, q, res)
    }
}

const mapDirs: resolveTree = [
    mainWrapper,
    {
        a: a,
        b: [
            a,
            {
                c: a,
                d: a
            }
        ]
    }
]

const resolveDir = async (dir: dirList, mD: resolveTree = mapDirs) => {
    return new Promise<[resolveTreeFunction, dirList]>((resolve, reject) => {
        if (dir.length == 0) {
            return resolve([mD[resTreeTup.Func], []])
        }
        let newDir = mD[resTreeTup.ResTreeItem][dir[0]]
        let newPath = dir.slice(1)
        if (newDir == null) {
            return resolve([mD[resTreeTup.Func], dir])
        }
        if (typeof newDir == "function") {
            return resolve([newDir, newPath])
        } else {
            return resolveDir(newPath, newDir).then(resolve).catch(reject)
        }
    })
}

const resolve = async (req: Request, res: Response) => {
    let args = req.params['0'].split("/").slice(1)
    let q = req.query

    if (args.length > 1 && args[args.length - 1] == "") {
        res.redirect(req.params['0'].slice(0, -2))
        return
    } else if (args.length == 1 && args[0] == "") {
        args = []
    }

    resolveDir(args).then(([func, args]) => func(args, q, res)).catch(console.error)
}

export const start = () => {
    app.get("*", resolve)
    http.createServer(app).listen(8080)
}
```

# express/routes/main.tsx
``