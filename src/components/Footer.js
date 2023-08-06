import React from "react";

const linkedin = ('   Linkedin   ');
const github = ('   Github   ') 
const facebook = ('   Facebook   ')


function Footer() {
    return (
        <div className="footer">
            <a class="social-icon" href="https://www.linkedin.com/in/dianamcastillo/ ">|{linkedin}</a>
            <a class="social-icon" href="https://github.com/Dcastillomar">|{github}|</a>
            <a class="social-icon" href="https://www.facebook.com/castillo.diana.m">{facebook}|</a>
        </div>

    );
}

export default Footer;