# simple-gl-sandbox
Repo for running an example of simple-gl

```bash
#From simple-gl-sandbox
cd ..
git clone https://github.com/bobjamin/simple-gl.git
cd simple-gl
npm install
npm run build
cd ../simple-gl-sandbox
npm install
npm link ../simple-gl
npm run build -- --watch
#open index.html in browser with webGL support
```