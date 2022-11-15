import React from 'react';
import Header from '../components/ignites/layout/Header';
import Footer from '../components/ignites/layout/Footer';
// import Banner from '../components/layout/partials/Banner';

const LayoutIgnites = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutIgnites;  