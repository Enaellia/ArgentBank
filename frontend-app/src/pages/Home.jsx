import React from 'react'
import chatIcon from '../assets/img/icon-chat.png';
import moneyIcon from '../assets/img/icon-money.png';
import securityIcon from '../assets/img/icon-security.png';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Features from '../components/features/Features'

function Home() {
  return (
    <>
      
     <Header />
      <main className="page-content" style={{ flex: 1 }}>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
          <Features />
      </main>
      <Footer />
    </>
  )
}

export default Home