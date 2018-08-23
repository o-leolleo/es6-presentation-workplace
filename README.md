## Quick setup (é, isso é um script, ou colinha)

1. Inicializando o projeto

```shell-session
npm init -y
```

2. Instalando o webpack

```shell-session
npm i webpack webpack-cli --save-dev
```

3. Após setup, exemplo com a importação
do lodash

```shell-session
npm i --save lodash
```

4. Exemplo de configuração do webpack

```shell-session
npx webpack --config webpack.config.js
npx webpack
```

5. construção do script de build

```shell-session
npm run build
```

6. instação do babel-loader e "amigos" para posterior configuração

```shell-session
npm install "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env webpack
npm install @babel/plugin-proposal-object-rest-spread
```
