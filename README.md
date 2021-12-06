# Sample repo to show esbuild-plugin-fileloc does not correctly handle paths on Windows

## Setup

1. npm i
2. npm run package

## Result

```
C:\dev\esbuild-dirname-issue-on-windows (master)>npm run package

> esbuild-dirname-issue-on-windows@1.0.0 package
> node build

X [ERROR] Syntax error "t"

    src/util/index.ts:3:111:
      3 │           filename: "C:\dev\esbuild-dirname-issue-on-windows\src\util\index.ts",
        ╵                                                                   ^

C:\dev\esbuild-dirname-issue-on-windows (master)>
```

## Investigation

Backslash path separator need to be escaped or better replaced by forward slash.

(Sample only fails because the path contains a `util` folder which then gets rendered as **\u**til without 4-digit unicode following.)   
