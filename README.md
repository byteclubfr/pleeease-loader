# Pleeease for Webpack

[Pleeease] loader for [webpack] to postprocesses your CSS.

## Install

`npm install pleeease-loader --save-dev`

## Usage

Within webpack config :

```js
module.exports = {
    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: "style!css!pleeease"
            }
        ]
    }
}
```

Now your CSS files requirements will be processed by [Pleeease].

## Options

Add a pleeease section in webpack config :

```js
module.exports = {
    module: {
        loaders: [
            {
                test:   /\.styl$/,
                loader: "style!css!pleeease"
            }
        ]
    },
    pleeease: {
        stylus: true,
        autoprefixer: { browsers: ["last 4 versions", "ios 6"]},
        minifier: true,
        mqpacker: true
    }
}

```
