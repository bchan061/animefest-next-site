import Head from 'next/head'
import {Container} from 'react-bootstrap'


export default function Rules() {
  return (
    <>
      <Head>
        <title>Animefest 2022</title>
        <meta name="description" content="February 12 at UC San Diego's Price Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="p-5 text-center landing">
        <h1 className="display-4">Rules</h1>
      </Container>

      <Container fluid className="p-5 mt-4 section">
        Coming Soon!
      </Container>
    </>
  )
}