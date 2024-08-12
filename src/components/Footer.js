import { linkList, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {linkList.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.linkName}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <>
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            </>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
