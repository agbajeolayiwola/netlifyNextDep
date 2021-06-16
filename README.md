This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Table of Contents
- [Getting Started](#getting-started)
- [Technology Stack](#technology-stack)
- [Installation and Usage](#installation)



# Next PWA BoilerPlate

A platform for users to share their awesome and exciting recipes ideas with the world.

<br />
<br />

<img width="1440" alt="Next-PWA-Boileplate-Deployed-On-Netlfy" src="./Screenshot (124).png">
<br />

## Getting Started
This is a javascript application built with [**NextJs**](https://nextjs.org/) Boilerplate for hosting on netlify  using [**Netlify CLI**](https://www.netlify.com/).

## Technology Stack
**UI & Templates**
1. NextJS
2. JSX
3. Javascript
4. Next-PWA

## Installation

1. Install [**NextJS**](https://nextjs.org/).
1. Install [**Next-Pwa**](https://www.npmjs.com/package/next-pwa) .
1. create manifest.js in public directory
1. create a _document.js file import Document,{head html main nextscript} from next/document 
1. To Clone the Run `npm clone https://github.com/agbajeolayiwola/netlifyNextDep.git`
1. Run `npm install` on the terminal to install Dependecies
1. Run `npm run dev` or `yarn dev`


## Features
Next Pwa consists of the following features:

- Installable in anybrowser that surports PWA (Progressive Web APP) Functions
- Push Notifications
- Safety
- Self Updates
- Discoverability And Easy Installation



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

- Delete generated public/sw.js file
- Manually register service worker in _app.js file
- Publish directory to 'out' build command 'npm run build'
- Create a new public/sw.js file add 'self.addEventListener('fetch', function(event) {})'
- Replace scope value in pages/_app.js with 'netlify-deploy-link'.
- use netlify UI to or nrtlify cli to connect github files to netlify domain (https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/)
- N.B Do not use netlify preview link 

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
