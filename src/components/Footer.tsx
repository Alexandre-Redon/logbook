const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">ALexandre Redon</h1>

        <h2>Contact</h2>

        <address>
          112 rue de la République, 33000 Bordeaux, France
          <a className="footer__btn" href="mailto:example@gmail.com">
            Contactez-nous
          </a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Links</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Shop</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </li>

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Help</h2>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="#">Payment Options</a>
            </li>

            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policies</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Newsletter</h2>

          <ul className="nav__ul">
            <li>
              <input
                type="text"
                className="input__newsletter"
                placeholder="Entrez votre adresse mail"
              />
            </li>
            <li>
              <a className="btn__newletter" href="#">
                Souscrire
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2023 Alexandre Redon. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
