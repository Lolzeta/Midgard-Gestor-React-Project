import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './Home.css';



export class Home extends Component{
    render(){
        return(
            <div className="home">
                <div class="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <h2>Las armas que quieres.</h2>

                            
                            <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeOut={10000} transitionEnter={false} transitionLEave={false}>
                            <h2>Cuando quieres.</h2>
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;