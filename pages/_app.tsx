import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import '../styles/globals.css'

function MyApp( { Component, pageProps } ) {
  return (
    <>
      <Head>
        <link rel="icon" href="/pokemon_icon.svg" />
      </Head>
      <NavBar />
      <Component { ...pageProps } />
      <Footer />
    </>
  )
}

export default MyApp
