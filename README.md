# nextantd
Repo for minimalist reproduction of issue with antd / less next@9

# Instruction
`git clone ..`

`npm i` will install next@9 and others dependencies

`npm run build` will issue a error saying 
```
> Build error occurred
{ /Users/jb/dev/sandbox/nextantd/node_modules/antd/lib/style/index.less:1
@import './themes/index';
^

SyntaxError: Invalid or unexpected token
```

`npm i next@8` then `npm run build` will work like a charm.

if you see an error during the build simply delete `.next` folder then retry it should pass