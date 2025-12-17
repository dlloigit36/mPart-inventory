# Machinary inventory system in React
work in progress

### run local postgres database with docker compose file
```
agu88@MSI MINGW64 /c/01-web-dev/project-docker-postgresql
$ docker compose -f ./postgres-only.yml up -d
```

### npm command
```
agu88@SWMYNB265:/mnt/c/01-web-dev/999-project-sample/mPart-inventory$ npm pack
npm warn gitignore-fallback No .npmignore file found, using .gitignore for file exclusion. Consider creating a .npmignore file to explicitly control published files.
npm notice
npm notice 📦  mlist-v0@0.0.0
npm notice Tarball Contents
npm notice 529B Dockerfile
npm notice 2.5kB Jenkinsfile
npm notice 235B README.md
npm notice 1.3kB db-commands.sql
npm notice 792B eslint.config.js
npm notice 559B index.html
npm notice 10.8kB mlist-v0-0.0.0.tgz
npm notice 731B package.json
npm notice 5.0kB public/styles.css
npm notice 1.5kB public/vite.svg
npm notice 4.1kB src/assets/react.svg
npm notice 5.4kB src/components/App.jsx
npm notice 333B src/components/ButtonShowAll.jsx
npm notice 384B src/components/Client.jsx
npm notice 1.4kB src/components/CreateClient.jsx
npm notice 2.0kB src/components/CreatePart.jsx
npm notice 204B src/components/Footer.jsx
npm notice 197B src/components/Header.jsx
npm notice 389B src/components/Part.jsx
npm notice 1.7kB src/components/SearchClientBox.jsx
npm notice 625B src/components/SearchFormPart.jsx
npm notice 2.2kB src/data/db-data.js
npm notice 224B src/main.jsx
npm notice 168B vite.config.js
npm notice Tarball Details
npm notice name: mlist-v0
npm notice version: 0.0.0
npm notice filename: mlist-v0-0.0.0.tgz
npm notice package size: 23.0 kB
npm notice unpacked size: 43.3 kB
npm notice shasum: 74a86a7adb11d6a55fb6a14a8d399c83c9b8aa29
npm notice integrity: sha512-0OZvmLN+9f4B/[...]SKqhS1QFoydOg==
npm notice total files: 24
npm notice
mlist-v0-0.0.0.tgz
agu88@SWMYNB265:/mnt/c/01-web-dev/999-project-sample/mPart-inventory$
```

```
agu88@SWMYNB265:/mnt/c/01-web-dev/999-project-sample/mPart-inventory$ npm run build

> mlist-v0@0.0.0 build
> vite build

vite v7.1.12 building for production...
✓ 93 modules transformed.
dist/index.html                  0.58 kB │ gzip:  0.36 kB
dist/assets/index-Wu3zkp9A.js  232.92 kB │ gzip: 76.63 kB
✓ built in 3.75s
agu88@SWMYNB265:/mnt/c/01-web-dev/999-project-sample/mPart-inventory$
```

