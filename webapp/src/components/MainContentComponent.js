import React, {Component} from 'react';
import { Media } from 'reactstrap';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div id="carouselControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div className="carousel-item active">
                                <Media className="d-block w-100" object src="assets/images/jumbotron1200.jpg" alt="First slide"></Media>
                            </div>
                            <div className="carousel-item active">
                                <Media className="d-block w-100" object src="assets/images/jumbotron1200.jpg" alt="Second slide"></Media>
                            </div>
                            <div className="carousel-item active">
                                <Media className="d-block w-100" object src="assets/images/jumbotron1200.jpg" alt="Third slide"></Media>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;