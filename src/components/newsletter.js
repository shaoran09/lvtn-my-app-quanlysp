import React, { Component } from 'react'

class Newsletter extends Component {
    render() {
        return (
            <div>
                {/* Newsletter */}
                <div className="newsletter">
                    <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/newsletter.jpg" data-speed="0.8" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="newsletter_content text-center">
                                    <div className="newsletter_title_container">
                                        <div className="newsletter_title">subscribe to our newsletter</div>
                                        <div className="newsletter_subtitle">we won't spam, we promise!</div>
                                    </div>
                                    <div className="newsletter_form_container">
                                        <form action="#" id="newsletter_form" className="newsletter_form">
                                            <input type="email" className="newsletter_input" placeholder="your e-mail here" required="required" />
                                            <button className="newsletter_button">submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsletter