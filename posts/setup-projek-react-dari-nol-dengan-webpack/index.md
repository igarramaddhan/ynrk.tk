---
title: Setup Projek React dari nol dengan Webpack
published: true
tags: #react, #webpack, #javascript
description: Tutorial ReactJS
date: "2018-09-26"
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
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  mode: 'development',
  output: {
    filename: "[name].bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
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
        loader: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
```

Field `entry` merupakan file utama yang diperlukan dalam projek. `Output` sendiri merupakan nama file yang nantinya dibuat setelah project di build ke mode production. Kemudian field `plugins` merupakan plugin yang kita gunakan dalam projek. Disini kita menggunakan plugin `clean-webpack-plugin` yang digunakan untuk membersihkan folder `dist` setiap kali kita melakukan build project dan `html-webpack-plugin` yang digunakan sebagai penentu templete file html yang nantinya akan diiject bundle js hasil build.

Setelah kita melakukan konfigurasi pada webpack, langkah selanjutnya adalah menambahkan field `scripts` pada `package.json`.

```json
...
"scripts": {
    "dev": "webpack-dev-server"
},
...
```

Setelah itu mari kita buat template `index.html` di dalam folder `/src`

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Awesome App</title>
    <style>
      body {
        margin: 0;
        min-height: 100%;
      }

      #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Dapat dilihat di atas terdapat div ber id `root`. Pada tag ini nantinya script javascript akan di-inject.

Setelah itu mari kita buat file `index.js` dan `App.js` di dalam folder `/src` dan tuliskan kode berikut

`index.js`

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));
```

`App.js`

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return <div>Welcome to the Awesome App</div>;
  }
}

export default App;
```

Setelah semua konfigurasi siap, mari kita jalankan app kita menggunakan perintah
```sh
yarn dev
```

Setelah server berhasil berjalan, kita dapat mengakses aplikasi kita pada `localhost:3000`.

Sekian dari tutorial kali ini semoga bermanfaat, salam.

