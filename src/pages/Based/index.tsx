import React from 'react';
import Footer from '@src/components/molecules/Footer';
import Header from '@src/components/molecules/Header';
import './style.scss';

interface BasedProps {
  children: React.ReactNode;
  hasHeader: boolean;
}

const Based: React.FC<BasedProps> = ({ children, hasHeader = true }) => {
  return (
    <>
      {hasHeader && (
        <div className="header-wrapper">
          <Header isLogin={false} />
        </div>
      )}
      <div className="children-wrapper">{children}</div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
};

export default Based;
