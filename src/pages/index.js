// import Callout from '../components/callout/callout'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import catunicorn from '../public/sample.png'
import styles from '../styles/Home.module.scss'
export default function Home() {
  return (
    <div>
      <Head>
        <title className={styles.title}>Catppuccin</title>
        <meta content="Catppuccin website" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <div className={styles.grid}>
          <h3 className={styles.title}>
            <span className={styles.wrblink}>Catppuccin Theme</span>
          </h3>
          <Row className={styles.rowabout}>
            <Col></Col>
            <Col className={styles.about}>
              <h4 className={styles.just}>
                Catppuccin is a community-driven pastel theme that aims to be
                the middle ground between low and high contrast themes. It
                consists of a soothing warm palette with 22 eye-candy colors
                perfect for coding, designing, and much more!
              </h4>
            </Col>
            <Col className={styles.banner}>
              <br />

              <Image alt="cat" src={catunicorn} />
            </Col>
          </Row>
        </div>
        <div></div>
      </main>
    </div>
  )
}
