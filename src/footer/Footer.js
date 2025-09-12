import "./Footer.scss";
import Brand from "./components/Brand";

export default function Footer() {
  return (
    <footer>
      <div className="footer-copyright"><small>Copyright © {new Date().getFullYear()} CKEFGISC 建北電資 30th</small></div>
      <div className="footer-brands">
        <Brand
          title="建中電研 45th Linktree"
          href="https://linktr.ee/ckeisc_45th"
          brandSeries="solid"
          brandName="link"
          brandSize="lg"
        />
        <Brand
          title="北一資研 39th Linktree"
          href="https://linktr.ee/fgisc39th"
          brandSeries="solid"
          brandName="link"
          brandSize="lg"
        />
        <Brand 
          title="建中電研 45th Instagram"
          href="https://www.instagram.com/ckeisc_45th/"
          brandName="instagram"
        />
        <Brand 
          title="北一資研 39th Instagram"
          href="https://www.instagram.com/fgisc39th/"
          brandName="instagram"
        />
        {/*
        <Brand 
          title="本站 GitHub 頁面"
          href="https://github.com/ckefgisc/29th-website"
          brandName="github"
        />
        */}
        <Brand 
          title="建北電資 30th Email"
          href="mailto:ckefgisc30th@gmail.com"
          brandSeries="regular"
          brandName="envelope"
          brandSize="lg"
        />
      </div>
    </footer>
  );
}
