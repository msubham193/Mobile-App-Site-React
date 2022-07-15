import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="overflow-hidden">{children}</main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
