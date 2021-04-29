import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

// noinspection HtmlRequiredTitleElement
export default class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={ '#58ac30' }/>

          {/*<meta name='application-name' content={APP_NAME} />*/}
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          {/*<meta name='apple-mobile-web-app-title' content={APP_NAME} />*/}
          {/*<meta name='description' content={APP_DESCRIPTION} />*/}
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

          {/*<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />*/}
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />

          {/*<meta name='application-name' content='PWA App' />*/}
          {/*<meta name='apple-mobile-web-app-capable' content='yes' />*/}
          {/*<meta name='apple-mobile-web-app-status-bar-style' content='default' />*/}
          {/*<meta name='apple-mobile-web-app-title' content='PWA App' />*/}
          {/*<meta name='description' content='Best PWA App in the world' />*/}
          {/*<meta name='format-detection' content='telephone=no' />*/}
          {/*<meta name='mobile-web-app-capable' content='yes' />*/}
          {/*<meta name='msapplication-config' content='/static/icons/browserconfig.xml' />*/}
          {/*<meta name='msapplication-TileColor' content='#2B5797' />*/}
          {/*<meta name='msapplication-tap-highlight' content='no' />*/}
          {/*<meta name='theme-color' content='#000000' />*/}

          {/*<link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />*/}
          {/*<link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />*/}
          {/*<link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />*/}
          {/*<link rel='manifest' href='/static/manifest.json' />*/}
          {/*<link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />*/}
          {/*<link rel='shortcut icon' href='/static/icons/favicon.ico' />*/}
          {/*<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />*/}

          {/*<meta name='twitter:card' content='summary' />*/}
          {/*<meta name='twitter:url' content='https://yourdomain.com' />*/}
          {/*<meta name='twitter:title' content='PWA App' />*/}
          {/*<meta name='twitter:description' content='Best PWA App in the world' />*/}
          {/*<meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />*/}
          {/*<meta name='twitter:creator' content='@DavidWShadow' />*/}
          {/*<meta property='og:type' content='website' />*/}
          {/*<meta property='og:title' content='PWA App' />*/}
          {/*<meta property='og:description' content='Best PWA App in the world' />*/}
          {/*<meta property='og:site_name' content='PWA App' />*/}
          {/*<meta property='og:url' content='https://yourdomain.com' />*/}
          {/*<meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' />*/}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

/*
 // `getInitialProps` belongs to `_document` (instead of `_app`),
 // it's compatible with server-side generation (SSG).
 export async function getStaticProps(ctx) {
 // Resolution order
 //
 // On the server:
 // 1. app.getInitialProps
 // 2. page.getInitialProps
 // 3. document.getInitialProps
 // 4. app.render
 // 5. page.render
 // 6. document.render
 //
 // On the server with error:
 // 1. document.getInitialProps
 // 2. app.render
 // 3. page.render
 // 4. document.render
 //
 // On the client
 // 1. app.getInitialProps
 // 2. page.getInitialProps
 // 3. app.render
 // 4. page.render

 // Render app and page and get the context of the page with collected side effects.
 const sheets = new ServerStyleSheets()
 const originalRenderPage = ctx.renderPage

 ctx.renderPage = () => originalRenderPage({
 enhanceApp: (App) => (props) => sheets.collect(<App { ...props } />),
 })

 const initialProps = await Document.getInitialProps(ctx)

 return {
 ...initialProps,
 // Styles fragment is rendered after the app and page rendering finish.
 styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
 }
 }
 */
// Doc.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render
//
//   // Render app and page and get the context of the page with collected side effects.
//   const sheets = new ServerStyleSheets()
//   const originalRenderPage = ctx.renderPage
//
//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) => sheets.collect(<App { ...props } />),
//     })
//
//   const initialProps = await Document.getInitialProps(ctx)
//
//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
//   }
// }
