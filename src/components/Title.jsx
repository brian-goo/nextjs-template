import Head from "next/head"
import {tj} from "../common"

export default function Title() {
  return (
    <Head>
      <title>{tj.appTitle}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}