import $ from "jquery";
import "./Icon.scss";

function onIconClick() {
    if (window.location.hash === "#/")
        $(".main-wrapper")[0].scrollTo({ top: 0 });
    else window.location.assign("#/");
}

export default function Icon() {
    return (
        <span className="navbar-brand" onClick={onIconClick}>
            <div className="icon px-0">
                <div className="icon-text">
                    <img
                        src="/images/chicken_thick.png"
                        alt="chicken"
                        className="logo hover-to-hide"
                    />
                    <img
                        src="/images/ckeisc_mouse.png"
                        alt="ckeisc_mouse"
                        className="logo hover-to-show"
                    />
                    <span>&nbsp;CKE</span>
                    <span className="hover-to-show long">
                        ISC 45
                        <sup>
                            <small>th</small>
                        </sup>
                    </span>
                    <img
                        src="/images/x.png"
                        alt="x"
                        className="logo hover-to-show"
                    />
                    <span>FGISC&nbsp;</span>
                    <span className="hover-to-show">
                        39
                        <sup>
                            <small>th</small>
                        </sup>
                    </span>
                    <img
                        src="/images/fgisc_star.png"
                        alt="fgisc_star"
                        className="logo hover-to-show"
                    />
                    <span className="hover-to-hide">
                        31
                        <sup>
                            <small>th</small>
                        </sup>
                        &nbsp;
                    </span>
                </div>
            </div>
        </span>
    );
}
