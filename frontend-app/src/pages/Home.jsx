import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Feature from '../components/features/Features';
import iconChat from '../assets/img/icon-chat.webp';
import iconMoney from '../assets/img/icon-money.webp';
import iconSecurity from '../assets/img/icon-security.webp';

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
           <section className="features">
        <Feature
          icon={iconChat}
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          icon={iconMoney}
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          icon={iconSecurity}
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
      </main>
      <Footer />
    </>
  )
}

export default Home