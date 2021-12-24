# contract-generator
Web para cumplimentar y descargar de forma gratuita contratos y documentación legal en distintos formatos (PDF, html). Todo se realiza desde el cliente sin almacenar ningún dato personal.
www.creamicontrato.es

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


For dockerize image
- docker build -t contract-generator:1.0 .
- docker run -p 8080:8080 -d --name contract-generator contract-generator:1.0
