## Modules

Modules helps to import the function

### Steps
- create the file 
- import it 


Now run 

```
npm run webpack
```
### To call it in the parent 
- export the function in the child

```

export const stylebody = ()=>{

    body.style.background = 'green'
}
```

or 
Add the below in the end of child
```
export {stylebody}
```
- import it in the parent 

```
import  {stylebody} from './dom.js'
```

## Default export

- we can have one default export


```
export default users
```

```
import data from './data'
```

> we can use the different name

### Combination of default+ export


```
export {print,users as default }
```

```
import data,{print } from './data'
```

### Watching the file change

```
"webpack" : "node_modules/.bin/webpack -w"
```

## Webpack dev server 


```
npm install webpack-dev-server --save-dev
```

Add the below script in the webpackconfig


```
 devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        publicPath: '/assets/'

    }
```

Add the below in the package.json

```
 "serve": "webpack-dev-server"
```
> THe above code doesnt create the files it create the virtual vile 
### Production code 
 
Modify the **package.json**  with the below
```
"build": "node_modules/.bin/webpack ",
```

## Babel + Webapack

```
--save-dev
```