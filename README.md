# Olympus API For NextJS Frontend

## From Frontend App

Check version of ReactJS API and Frontend APP :

```jsx
"react": "^17.0.2",
 "react-dom": "^17.0.2",
```

Add API in **package.json** since the **devDependencies** :

```json
"@samuelgoumaz/olympus.api": "0.0.4"
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

And for use the package in **Production** :

```jsx
// Production Development.
import {Header, Button, International} from "@samuelgoumaz/olympus.api"
```

## Components Status

| Name       |     |     |
| ---------- | --- | --- |
| Banner     |     |     |
| Button     |     |     |
| Cart       |     |     |
| CartPrice  |     |     |
| CartResume |     |     |
|            |     |     |
|            |     |     |
|            |     |     |
|            |     |     |
|            |     |     |
|            |     |     |
