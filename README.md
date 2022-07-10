# 0.1.2 — Olympus API For NextJS Frontend

## 1. Getting Started

Check version of ReactJS API and Frontend APP :

```jsx
"react": "^18.2.0",
"react-dom": "^18.2.0",
```

Add API in **package.json** since the **devDependencies** :

```json
"@samuelgoumaz/olympus.api": "0.1.0"
```

Add a **.npmrc** file on the *root* and generate a application token for your library (change name ) :

```
registry=https://registry.npmjs.org/
@NAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=TOKEN
```

First import the library for **Development** :

```jsx
// Local Development.
import {Header, Button, International} from "../../../olympus.api/dist/esm"
```

```json
../../../olympus.api/dist/esm
```

And for use the package in **Production** :

```jsx
// Production Development.
import {Header, Button, International} from "@samuelgoumaz/olympus.api"
```

```json
@samuelgoumaz/olympus.api
```

## 2. Components

[Banner](./support/banner.md)
