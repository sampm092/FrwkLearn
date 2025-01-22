# THE REAL GETTING STARTED 

npx create-react-app reactlrn

and then i got some error 
"Installing template dependencies using npm...
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: reactlrn@0.1.0
npm error Found: react@19.0.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"^18.0.0" from @testing-library/react@13.4.0
npm error node_modules/@testing-library/react
npm error   @testing-library/react@"^13.0.0" from the root project
npm error
npm error
npm error
npm error For a full report see:
npm error C:\Users\ACER\AppData\Local\npm-cache\_logs\2025-01-22T09_18_39_789Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\ACER\AppData\Local\npm-cache\_logs\2025-01-22T09_18_39_789Z-debug-0.log
`npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0` 
failed
"

So stackoverflow recommend me this :
'npm config set legacy-peer-deps true'

which for :
'The --legacy-peer-deps flag was introduced with v7 as a way to bypass peerDependency auto-installation; it tells NPM to ignore peer dependencies and proceed with the installation anyway. This is how things used to be with NPM v4 through v6.'

and then i remove the original project and reinstall:
'npx create-react-app reactlrn'



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

and then i got error again which require stack:
- .\taiLearn\reactlrn\node_modules\ajv-keywords\dist\definitions\typeof.js
- .\taiLearn\reactlrn\node_modules\ajv-keywords\dist\keywords\typeof.js
- .\taiLearn\reactlrn\node_modules\ajv-keywords\dist\index.js
- .\taiLearn\reactlrn\node_modules\schema-utils\dist\validate.js
- .\taiLearn\reactlrn\node_modules\schema-utils\dist\index.js
- .\taiLearn\reactlrn\node_modules\webpack-dev-server\lib\Server.js
- .\taiLearn\reactlrn\node_modules\react-scripts\scripts\start.js

so stackoverflow recommend doing:
'npm install --save-dev ajv@ 


'
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
