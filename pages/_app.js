import React, { useEffect, useState, useCallback } from 'react'
import { Fragment } from 'react'
import Head from 'next/head'
// import useAdBlockDetect from '../src/hooks/useAdBlockDetect'
import initUiKit, { Window, Header, Footer, Button, Modal, Keyboard } from '@iq/iq-ui-kit'
import '@iq/iq-ui-kit/lib/iq-ui-kit.css'
import useCarIp from '../hooks/useCarIp'
import noop from '../utils/noop'

// function Alert(props) {
//   // return <MuiAlert elevation={6} variant="filled" {...props} />
// }

try {
  initUiKit()
} catch (ignored) {
  // Crashes on server side rendering
}

export default function App(props) {
  // useAdBlockDetect()
  const { Component, pageProps } = props
  const [newVersionAvailable, setNewVersionAvailable] = useState(false)
  const [ip, setIp] = useCarIp()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const reloadApp = useCallback(() => {
    setNewVersionAvailable(false)

    if (window.workbox) {
      window.workbox.addEventListener('controlling', () => window.location.reload(false))
      window.workbox.messageSkipWaiting()
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      // More examples https://github.com/shadowwalker/next-pwa/blob/master/examples/lifecycle/pages/index.js
      const wb = window.workbox

      const promptNewVersionAvailable = event => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        if (!event.wasWaitingBeforeRegister) return
        setNewVersionAvailable(true)
      }

      wb.addEventListener('waiting', promptNewVersionAvailable)
      wb.register()
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Palladium monitoring</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>

      <Window
        theme={ 'light' }
        header={<Header
          title={ 'Car Control' }
          extra={ <Button
            flat
            icon='edit'
            className={ 'header-settings-button' }
            onClick={ () => {
              Keyboard.IP
                .show({
                  title: 'Enter car IP address',
                  value: ip,
                })
                .then(setIp)
                .catch(noop)
            } }
          /> }
        />}
      >
        <Component { ...pageProps } />
      </Window>

      {/*<ThemeProvider theme={ theme }>*/}
      {/*  /!* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */ }*/}
      {/*  <CssBaseline/>*/}
      {/*  <div className={ classes.root } >*/}
      {/*    <Component { ...pageProps } />*/}
      {/*  </div>*/}

      {/*  <Snackbar open={newVersionAvailable} autoHideDuration={15000} onClose={reloadApp}>*/}
      {/*    <Alert onClose={reloadApp} severity="success">*/}
      {/*      New version available!*/}
      {/*    </Alert>*/}
      {/*  </Snackbar>*/}
      {/*</ThemeProvider>*/}

      <style jsx global>{`
        html {
          font-size: 62.5%;
        }

        header.iq-layout-header {
          padding: 0.8rem;
        }

        header.iq-layout-header .header-button {
          margin-right: 0.8rem;
        }

        header.iq-layout-header .header-button .header-settings-button {
          margin-left: 0.8rem;
        }

        header.iq-layout-header .iq-header-extra {
          flex: none;
          flex-direction: row;
        }

        header.iq-layout-header .iq-header-title p {
          color: var(--iq-color);
          font-weight: 400;
        }
      `}</style>
    </Fragment>
  )
}
