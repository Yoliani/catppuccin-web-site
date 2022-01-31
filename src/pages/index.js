// import Callout from '../components/callout/callout'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import catunicorn from '../public/catunicorn.png'
export default function Home () {
  return (
    <div>
      <Head>
        <title className={styles.title}>Catppuccin</title>

        <meta content="Catppuccin website" name="description" />

        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <Container>
          <Row>
            <Col className={styles.about}>
              <h3>Catppuccin is a community-driven pastel theme that aims to be the middle ground between low and high contrast themes. It consists of a soothing warm palette with 22 eye-candy colors perfect for coding, designing, and much more!</h3>

            </Col>
            <Col>

              <Image alt="cat" src={catunicorn} />
            </Col>
          </Row>
        </Container>
      </main>

    </div>
  )
}
