import Row from "../../../utils/Row";
import "./Intro.scss";

export default function Intro() {
    return (
        <section id="intro">
            <div className="p-5s jumbotron">
                <div className="container">
                    <Row>
                        <div className="col-md-12">
                            <h1>建北電資</h1>
                            <h2>
                                一個跨越 <span>31</span> 年的大家庭
                            </h2>
                            <a
                                href="#/about"
                                className="btn btn-outline-warning">
                                關於我們
                            </a>
                        </div>
                    </Row>
                </div>
            </div>
        </section>
    );
}
