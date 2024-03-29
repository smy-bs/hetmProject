import React from "react";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <p className="footer-texte">
        Le contenu de ce site est protégé par les droits d'auteur et demeure la propriété de H & M Hennes & Mauritz AB.
        </p>
      
        <div className="footer-logo">
          <img
            width={60}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3BBxUp3DXQkiEtLbjnWcBPWYRy7DdAZhtRC1ZkKqQg&s"
          />
        </div>
        <p className="footer-info">
        Entrainement | Miyoung
        </p>
      </div>
    </div>
  );
};

export default Footer;


