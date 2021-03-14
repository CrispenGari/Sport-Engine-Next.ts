# Sport Engine

This is a simple `Next.js` application that searches for sports players and sports teams.

## This application is using:

- Next.js
- React.js
- TypeScript
- Material-ui
- React-icons
- The Sports Db API
- axios
- React Custom Hooks

### This application covers the following major Next sections

- Next routing
- CSS
- React Custom Hooks
- Hosting using firebase

### Firebase Hosting using firebase

- Create a project in firebase and activate hosting then:

#### Step 1:

```shell
firebase login
```

#### Step 2:

```shell
firebase init
```

- Make you choose the following as the public directory during the `firebase init` process

```
? What do you want to use as your public directory? build/out
```

#### Step 2:

- before running the following command make sure the `scripts` looks like this in `package.json`

```
  "scripts": {
    "dev": "next",
    "build": "next build && next export",
    "start": "next start"

  },
```

```shell
npm run build
```

#### Step 4:

- Before running the following command move the `out` folder in the `build` folder

```shell
firebase deploy
```

#### URL to the search Engine

- [Sport Engine](https://sportengine-3411c.web.app/)

### Demo

<img alt="demo" align="center" src="https://github.com/CrispenGari/Sport-Engine-Next.ts/blob/main/bandicam%202021-03-14%2010-56-25-558.jpg">

## API Docs

- [The Sports Db](https://www.thesportsdb.com/api.php)

## Credits

- [Next Docs](https://nextjs.org/docs/)
- [StackOver Flow](https://stackoverflow.com/)
