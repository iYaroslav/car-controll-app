import Head from 'next/head'
import { Button, Message } from '@iq/iq-ui-kit'

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Car Control</title>
      </Head>

      <main>
        <Button
          title={ 'Hello!' }
          onClick={ () => {
            Message({
              title: 'Hello!',
              type: 'success',
              timeout: 3000,
            })
          } }
        />
      </main>

      <style jsx>{ `

      ` }</style>
    </div>
  )
}
