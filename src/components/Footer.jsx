import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Hamza Simsek. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
