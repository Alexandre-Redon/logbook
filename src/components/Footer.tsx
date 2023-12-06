import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="ligne1" />
      <div></div>

      <table>
        <tr>
          <th>Alexandre Redon</th>
          <th>Links</th>
          <th>Help</th>
          <th>Newsletter</th>
        </tr>
        <tr>
          <td>400 allée des Bougies, 33500 Bordeaux, France</td>
          <td>Home</td>
          <td>Options de paiement</td>
          <td>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Shop</td>
          <td>Politique de retour</td>
        </tr>
        <tr>
          <td></td>
          <td>About</td>
          <td>Politique privées</td>
        </tr>
        <tr>
          <td></td>
          <td>Contact</td>
        </tr>
      </table>
      <hr className="ligne2" />
    </footer>
  );
};

export default Footer;
