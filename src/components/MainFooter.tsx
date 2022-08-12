import AppleIcon from "../assets/img/companies-logo/apple.svg";
import GoogleIcon from "../assets/img/companies-logo/google-store.svg";

export const MainFooter = () => {
  return (
    <footer className="footer-container flex justify-center">
      <section className="footer-content">
        <div className="footer-info-container flex space-between align-center align-end">
          <div>
            <h1 className="footer-about-us">ABOUT US :</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum no eu ipsum. Cras porta
              malesuada eros.
            </p>
          </div>
          <div className="flex align-center">
            <img
              className="logo"
              src={require("../assets/img/about-logo.png")}
              alt=""
            />
          </div>
        </div>
        <div className="downloads-container flex align-center">
          <div className="download-container flex justify-center align-center">
            <img src={AppleIcon} alt="" />
            <div className="download-text">
              <p>Download on the</p>
              <span>App Store</span>
            </div>
          </div>
          <div className="download-container flex justify-center align-center">
            <img src={GoogleIcon} alt="" />
            <div className="download-text">
              <p>Get it on</p>
              <span>Google Play</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
