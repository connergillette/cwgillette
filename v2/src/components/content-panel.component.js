import React, { Component } from "react";
import profile_image from "../profile.jpg";

class ContentPanel extends Component {
    constructor(props) {
        super(props);

        let about_content = (<div className="content row about">
            <div className="col-lg-6 col-md-12">
                <p className="small-content">
                    I am a full-stack web and software developer currently living in Seattle,
                    Washington. I'm currently in my fourth and final year at the University of
                    Washington Seattle, and am currently looking for full-time developer positions
                    in the United States.</p><p>I am mostly self-taught, and have experience with
                    <strong> JavaScript (client and server-side), Java, NodeJS, MongoDB, React,
                        Angular, MongoDB, HTML/CSS, and Heroku.</strong>
                </p>
                <div className="row small-content">
                    <div className="col-6">
                        <a href="mailto:connerwgillette@gmail.com">
                            <div className="opal opal-awake opal-outline opal-react">
                                <div className="opal-soften">Email Me</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6">
                        <a href="https://linkedin.com/in/connergillette">
                            <div className="opal opal-awake opal-outline opal-react">
                                <div className="opal-soften">LinkedIn</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center"><img src={profile_image} alt="Smiling young man wearing glasses." /></div>
        </div>);

        let resume_content = (<div className="content row resume">
            <div className="col-lg-6 col-md-12">
                <h2 className="font-weight-bold">Education</h2>
                <p><span className="font-weight-bold">University of Washington Seattle</span><br />Geographic Information Systems, Minor in Informatics (September 2019)</p>

                <h2 className="font-weight-bold">Work Experience</h2>
                <h3><span className="font-weight-bold">Software Development Intern</span><br />Knowledge Anywhere: December 2017 - Present</h3>
                <p>Developed <a href="https://getquickquiz.com"><span className="font-weight-bold">QuickQuiz</span></a>, a Slack integration that allows you to create, administer, and take quizzes. Installed by 1100 teams and counting. Featured on Slack's New and Noteworthy list.</p>
                <h3><span className="font-weight-bold">Software Development Intern</span><br />Icertis: June 2018 - August 2018</h3>
                <p>Developed an Angular front-end for a configuration key manager. </p>
                <h3><span className="font-weight-bold">Content Manager</span><br />efelle creative: July 2016 - June 2017</h3>
                <p>Created, organized, and edited client web content using a CMS, web QA tools, and content management spreadsheets.</p>
                <h3><span className="font-weight-bold">Software Development Intern</span><br />Microsoft: June 2014 - August 2014</h3>
                <p>Helped develop additional functionality for a live data analysis tool with a team at Microsoft Research.</p>
            </div>
            <div className="col-lg-6 col-md-12">
                <h2 className="font-weight-bold">Technical Skills</h2>
                <ul>
                    <li>
                        <div className="opal opal-awake opal-d20">
                            <div className="opal-soften">JavaScript / TypeScript</div>
                        </div>
                    </li>
                    <li><div className="opal opal-awake opal-d20">
                        <div className="opal-soften">NodeJS / ExpressJS</div>
                    </div></li>
                    <li><div className="opal opal-awake opal-d20">
                        <div className="opal-soften">AngularJS</div>
                    </div></li>
                    <li><div className="opal opal-awake opal-d20">
                        <div className="opal-soften">ReactJS</div>
                    </div></li>
                    <li><div className="opal opal-awake opal-d20">
                        <div className="opal-soften">Java</div>
                    </div></li>
                    <li><div className="opal opal-awake opal-d20">
                        <div className="opal-soften">HTML / CSS / Bootstrap</div>
                    </div></li>
                    <li><div className="opal opal-awake opal-d20">
                        <div className="opal-soften">MongoDB</div>
                    </div></li>
                    <li><div className="opal opal-awake opal-d20">
                        <div className="opal-soften">Heroku</div>
                    </div></li>
                    <li><div className="opal opal-awake opal-d20">
                        <div className="opal-soften">Python</div>
                    </div></li>
                </ul>
            </div>
        </div >);

        let projects_content = (<div className="content row projects"><div className="col-lg-6 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec efficitur diam. Nullam at varius magna, at pulvinar felis. Mauris sed fermentum tortor. Sed eros urna, mollis sed venenatis nec, pretium eget elit. Curabitur sodales lectus sed volutpat faucibus. Pellentesque consectetur neque urna, ut lobortis orci pharetra ut. Integer hendrerit ante justo, vel iaculis purus fringilla in. Donec iaculis justo quis ex molestie dictum. Fusce dictum mollis est, ac blandit velit sagittis sed. Suspendisse ut imperdiet ligula, eget vehicula elit. Donec ligula quam, ultricies a posuere ut, rutrum in lacus. Aenean tempor enim nec elit convallis laoreet. Donec malesuada molestie nisl et egestas.</div>
            <div className="col-lg-6 col-md-12">[PROJECTS] Etiam aliquam fringilla urna, sed tempus enim commodo eleifend. Donec non commodo leo. Fusce lobortis non diam eu tempus. Vestibulum et sapien ac velit commodo vehicula in et dui. Phasellus ac pharetra tortor. Cras laoreet, nisi vestibulum condimentum fermentum, odio magna consequat justo, sit amet volutpat mi ante sed urna. Ut venenatis leo eget odio rutrum, sit amet finibus lectus porta. Donec in urna ac libero vestibulum luctus nec congue velit. Phasellus porttitor iaculis quam et ullamcorper. Morbi dignissim pretium ante, quis finibus lectus ornare eu. Suspendisse volutpat mollis suscipit. In non pellentesque velit, vitae aliquet lectus. Etiam dapibus varius augue, et molestie lectus semper id. Pellentesque tristique auctor leo nec gravida.</div></div>);

        this.state = {
            selection: props.selection,
            about_content,
            resume_content,
            projects_content
        }
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.selection !== this.state.selection
        ) {
            this.setState({ selection: nextProps.selection });
        }
    }


    render() {
        switch (this.state.selection) {
            case 'About':
                return (
                    <div className="container">
                        {this.state.about_content}
                    </div>
                );
            case 'Resume':
                return (
                    <div className="container">
                        {this.state.resume_content}
                    </div>
                );
            case 'Projects':
                return (
                    <div className="container">
                        {this.state.projects_content}
                    </div>
                );
            default:
                return (
                    <div className="container">

                    </div>
                );
        }

    }
}

export default ContentPanel;