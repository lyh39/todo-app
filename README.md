# Todo React App

## Table of Contents
* [Intro and General Requirements](#intro-and-general-requirements)
* [Quick Start](#quick-start)
* [Adding New Libraries](#adding-new-libraries)
* [Styling](#styling-with-tailwindcss)
* [Files and folders](#files-and-folders)

## Intro and General Requirements
This Application has a few basic requirements for local development:
- [Node version 14+](https://github.com/nvm-sh/nvm)

### Prerequisite
[Install NodeJS on macOS, Linux, Windows](https://nodejs.org/en/download/)

Install using command line:
- On macOS (using brew): `brew install node`
- On Linux (using snap): `sudo snap install node --classic`

### Quick Start
- Install all packages: `npm install`
- Run in terminal `npm start`
- To create tailwind.css file `npm run tailwind:build`
- Navigate to https://localhost:3000

### Adding New Libraries
```
npm install <dependency>
```

### Language:
[ES7 / Javascriprt](https://www.javascript.com/)
### Framework:
[ReactJs](https://reactjs.org/)
### Styling:
[TailwindCSS 3.0.15](https://www.tailwindcss.com)
### Form:
[Formik](https://formik.org/docs/overview)
### Form Schema Management
[Yup](https://github.com/jquense/yup)
### Icons
[Material Icons](https://mui.com/components/material-icons/)

## State Management
[Hooks](https://reactjs.org/docs/hooks-intro.html)

## Files and Folders
```js
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── README.md
├── src
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── components
│ │ └── TodoScreen.js
│ ├── FormShema
│ │ └── WorkToDo.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ ├── reportWebVitals.js
│ ├── setupTests.js
│ └── styles
│    ├── main.css
│    └── tailwind.css
├── package.json
├── package-lock.json
├── postcss.config.js
└── tailwind.config.js

