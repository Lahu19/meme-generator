import "./style.css"

import React from "react"

export default function Footer() {
  return (
    <footer className="footer">
        Developed by{" "}
        <a
          className="footer-link underline-animation" 
          href="https://www.linkedin.com/in/mbmilitao/" target="_blank">
          Matheus Benevides Militão
        </a>
    </footer>
  )
}