import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center">
      <div className="row">
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h3 className="text-uppercase">Tech Vault</h3>
          <p>
            A place where you can grab the rarest tech finds in excellent
            condition.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2024 Copyright:
      <a
        href="https://www.linkedin.com/in/joshuaecapito/"
        target="_blank"
        rel="noreferrer"
      >
        Joshua Capito
      </a>
    </div>
  </footer>
);

export default Footer;
