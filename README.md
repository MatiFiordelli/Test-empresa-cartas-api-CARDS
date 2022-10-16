Projeto criado com Next.js utilizando a API de http://deckofcardsapi.com/ para mostrar naipes aleatoriamente. 
O projeto pode ser testado por exemplo com NPM colocando npm run dev e assim ver o webapp no browser, na url http://localhost:3000
os estilos CSS a modo de demonstracion foram feitos de varias maneiras. Utilizando a Metodologia BEM, Css Inline, Css External Stylesheets, e o Css Modules.

Tem duas pages, index.js e naipes.js. Assim como o arquivo _app.js qu serve de Component Layout.
utilizei dois estados globais com Context API, eles são nome (userName) e dadosNaipes(as informações referentes a cada naipe).

https://test-cartas-k6svgn5nn-matifiordelli.vercel.app/






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
