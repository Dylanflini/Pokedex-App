import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import '../styles/globals.css'
import styled from '@emotion/styled'

const Main = styled.main`
  padding-top: 70px;
`

function MyApp( { Component, pageProps } ) {
  return (
    <>
      <Head>
        <link rel="icon" href="/pokemon_icon.svg" />
      </Head>
      <NavBar />
      <Main>
        <Component { ...pageProps } />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
