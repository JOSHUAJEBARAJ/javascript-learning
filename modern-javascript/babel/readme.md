## Babel 

converts the new feature use the old feature which helps to support the old browser

## Babel install
```
npm init
```

```
npm install --save-dev @babel/core @babel/cli
```

```
npm install @babel/preset-env --save-dev
```

```
touch .bablerc
```
```
{
  "presets": ["@babel/preset-env"]
}
```


## Bable CLI

```
node_modules/.bin/babel before.js -o after.js
```

### Npm install

```
npm install
```

The above command will all packages in the **package.json**


## NPM scripts


```
src --> contains the source files
dist --> contains the converted javascript file
```

### Scripts

*Creating the src folder*
```
mkdir src
touch src/index.js
```
*creating the detstination folder*

```
mkdir dist
mkdir -p dist/assets
touch dist/assets/bundle.js 
touch dist/index.html
```

Add the below line in the `package.json`

```
npm run babel
```
```
"scripts": {
    "babe;": "node_modules/.bin/babel src/index.js -w  -o dist/assets/bundle.js"
  },
```

## Wepack

- Webpack is a module bundler
- Works well with babel
- Local development server

## Setting up the Webpack file

```
touch webpack.config.js
``` 

## Install webpack


```
npm install --save-dev webpack-cli

```

```
node_modules/.bin/webpack
```

## Automating the workflow

Add the below in the package.json
```
"webpack" : "node_modules/.bin/webpack"
```
Run the below command

```
npm run webpack
```

## Default export 