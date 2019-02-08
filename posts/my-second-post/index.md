---
title: Setup Projek React dari nol dengan Webpack
published: true
tags: #react, #webpack, #javascript
description: This post is related to the gatsbyjs
date: '2018-09-26'
---

Saya telah berkelana di dunia pe-React-an sekitar 2 tahun belakangan ini. Dari yang awalnya menggunakan cara instant untuk mencoba React menggunakan `create-react-app`, hingga bisa setup projek React sendiri. Di post ini saya akan membagikan bagaimana cara untuk setup projek React mulai dari nol.

### Membuat struktur projek

Disini saya menggunakan `yarn` sebagai package manager saya.

Pertama-tama mari kita buat folder dengan nama `awesome-app`

```bash
mkdir awesome-app
cd awesome-app
```

Kemudian lakukan init projek dengan mengetikkan perintah berikut:

```bash
yarn init -y
```

Tambah dependency utama:

```bash
yarn add react react-dom
```

Lalu tambahkan dev dependency:

```bash
yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader clean-webpack-plugin html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server
```

Setelah menambahkan dependency di atas, kita perlu untuk mengonfigurasi webpack. Pertama tama mari kita buat file `webpack.config.json` di root folder projek kita. Setelah itu tuliskan code berikut:

```javascript
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};
```
