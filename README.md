# React + TypeScript + Webpack

This is a "barebone" setup for developing a single page React application with TypeScript bundled by webpack.

Stack:

- `ts-loader` for transpiling TypeScript and JSX
- `fork-ts-checker-webpack-plugin` for type-checking in a separate process
- `css-loader` and `mini-css-extract-plugin` for bundling CSS and CSS modules
- `webpack-dev-server` with `react-refresh` enabled (via `react-refresh-typescript`)

There are a lot more optimizations you could make for production.

Check out webpack's documentation on [best practices for production](http://webpack.js.org/guides/production/).
