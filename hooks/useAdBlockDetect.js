import { useEffect, useState } from 'react'
import Router from 'next/router'
import { singletonHook } from 'react-singleton-hook'
import adDetect from 'just-detect-adblock'
import noop from '../utils/noop'

function useAdBlockDetectImpl() {
  if (!process.browser) return

  const [adBlockDetected, setAdBlockDetected] = useState(false)
  console.log('Initializing ad block detector')

  useEffect(() => {
    adDetect.detectAnyAdblocker().then(setAdBlockDetected)

    new Promise((resolve) => {
      const request = new XMLHttpRequest
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request)
        }
      }

      request.open(
        'GET',
        'https://getmygeo.com',
        false
      )

      request.send()
    })
      .then((response) => {
        if (response.status !== 200 || !response.responseText) {
          setAdBlockDetected(true)
        }
      })
      .catch(noop)
  }, [])

  useEffect(() => {
    if (adBlockDetected) {
      if (Router.pathname !== '/ad-block') {
        Router.push('/ad-block').catch(console.error)
      }
    } else if (Router.pathname === '/ad-block') {
      Router.push('/').catch(console.error)
    }
  }, [adBlockDetected])
}

const useAdBlockDetect = singletonHook(undefined, useAdBlockDetectImpl)
export default useAdBlockDetect
