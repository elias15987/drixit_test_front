import React from "react";

import '../../Content/Css/Site.css';

const Footer = () => {
    const version =  require('../../../package.json');
    return (
        <footer className="footer text-center justify-content-center container mt-3 fixed-bottom bg-white">
            <span className="row border-top text-center text-muted p-3 justify-content-center">
                Challenge Drixit © Challenge test - Versión {version.version}
            </span>
        </footer>
    )
};

export default Footer;