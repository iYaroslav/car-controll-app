import Head from 'next/head'
import { Button } from '@iq/iq-ui-kit'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Car Control</title>
      </Head>

      <main>
        <Button title={'Hello!'} />
      </main>

      <style jsx>{ `
        
      ` }</style>
    </div>
  )
}
