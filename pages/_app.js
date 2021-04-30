import React, { useEffect, useState, useCallback } from 'react'
import Head from 'next/head'
import useAdBlockDetect from '../hooks/useAdBlockDetect'
import { initUIKit, Window, Header, Button, Keyboard } from '@iq/iq-ui-kit'
import useCarIp from '../hooks/useCarIp'
import noop from '../utils/noop'

import '@iq/iq-ui-kit/lib/iq-ui-kit.css'
import '../index.scss'
import useTheme from '../hooks/useTheme'

// function Alert(props) {
//   // return <MuiAlert elevation={6} variant="filled" {...props} />
// }

if (typeof window !== 'undefined') {
  initUIKit()
}

export default function App(props) {
  const adBlockDetected = useAdBlockDetect()

  const { Component, pageProps } = props
  const [newVersionAvailable, setNewVersionAvailable] = useState(false)
  const [ip, setIp] = useCarIp()
  const [theme, toggleTheme] = useTheme()

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
      window.workbox.addEventListener('controlling', () => window.location.reload())
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

  return <>
    <Head>
      <title>Palladium monitoring</title>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
    </Head>

    <Window
      theme={ theme }
      header={<Header
        title={ 'Car Control' }
        extra={ <>
          <Button
            flat
            icon={ theme === 'light' ? 'dark_mode' : 'light_mode' }
            className={ 'header-settings-button' }
            onClick={ toggleTheme }
          />

          { !adBlockDetected && <Button
            flat
            icon='settings'
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
        </> }
      />}
    >
      <Component { ...pageProps } />
    </Window>

    {/*<ThemeProvider theme={ theme }>*/}
    {/*  /!* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */ }
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
  </>
}
