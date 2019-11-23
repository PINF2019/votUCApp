# votUCApp

## Description

This repository is for a project of the subject _Informatic Projects_, that is about a digitatilzation of elections and votes.

In the University of Cadiz, we have differents kind of votes, and we will provide an application that allow us to vote online.

## Requeriments

- [Node.js](https://nodejs.org/en/) >= 12 LTS
- [yarn](https://yarnpkg.com/lang/en/)

## Run our dev app

You can run the application on your mobile or on your computer emulating a device with Android studio SDK

First install dependencies using `yarn install`

After this use `yarn start` to run the application

### Runnig on your mobile

If you want to see your application on your mobile follow [this guide](https://facebook.github.io/react-native/docs/running-on-device)

### Runnig on your computer

If you want to virtualize and android/iOS device on your computer install the following:

- Android SDK - [Android Studio](https://developer.android.com/studio/hl=es-419)

Now pass to create AVD, in Android Studio go to Configure>AVD Manager and click on Create Virtual Device...

After this we can run our virtual device and run de application here.

## Code style

This project use [standardjs](https://standardjs.com/) code style

### Formatting

This project has configured `eslint + prettier` to follow the standardjs code style

If you use VSCode add the following to your settings to autoformat on save

```
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
```

## How to commit

This project is going to use [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) as commit format to help us create changelogs

#### Example

```
git commit -m "chore: update dependencies"
```

#### If you don't know the coventionalcommits syntax:

Install commitizen as global utility

```
yarn global add commitizen cz-conventional-changelog
```

Create a `.czrc` file in your home directory, with `path` referring to cz-conventional-changelog

```
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

On windows copy the following line to the PowerShell:

```
write-output '{ "path": "cz-conventional-changelog" }'  | out-file $env:HOME/.czrc
```

Commiting with commitizen prompt

<p align="center">
<img src="https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png">
<p>

> with this approach use always the terminal
>
> If the commands doesn't work add the following line `export PATH="$PATH:$(yarn global bin)"` to your .bashrc or .zshrc

## Built With

### [TypeScript](http://www.typescriptlang.org/)

TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces

### [GraphQL](https://graphql.org/learn/)

GraphQL is a syntax that describes how to ask for data, and is generally used to load data from a server to a client

### [Apollo Client](https://www.apollographql.com/docs/react/)

Apollo Client is a complete state management library for JavaScript apps. Simply write a GraphQL query, and Apollo Client will take care of requesting and caching your data, as well as updating your UI.

### [React Navigator](https://reactnavigation.org/)

Routing and navigation for your React Native apps

### [Async Storage](https://github.com/react-native-community/async-storage)

An asynchronous, persistent, key-value storage system for React Native.
