import React, { Component } from "react";

class ContentPanel extends Component {
    constructor(props) {
        super(props);

        let about_content = (<div className="content row"><div className="col-lg-6 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec efficitur diam. Nullam at varius magna, at pulvinar felis. Mauris sed fermentum tortor. Sed eros urna, mollis sed venenatis nec, pretium eget elit. Curabitur sodales lectus sed volutpat faucibus. Pellentesque consectetur neque urna, ut lobortis orci pharetra ut. Integer hendrerit ante justo, vel iaculis purus fringilla in. Donec iaculis justo quis ex molestie dictum. Fusce dictum mollis est, ac blandit velit sagittis sed. Suspendisse ut imperdiet ligula, eget vehicula elit. Donec ligula quam, ultricies a posuere ut, rutrum in lacus. Aenean tempor enim nec elit convallis laoreet. Donec malesuada molestie nisl et egestas.</div>
            <div className="col-lg-6 col-md-12">[ABOUT] Etiam aliquam fringilla urna, sed tempus enim commodo eleifend. Donec non commodo leo. Fusce lobortis non diam eu tempus. Vestibulum et sapien ac velit commodo vehicula in et dui. Phasellus ac pharetra tortor. Cras laoreet, nisi vestibulum condimentum fermentum, odio magna consequat justo, sit amet volutpat mi ante sed urna. Ut venenatis leo eget odio rutrum, sit amet finibus lectus porta. Donec in urna ac libero vestibulum luctus nec congue velit. Phasellus porttitor iaculis quam et ullamcorper. Morbi dignissim pretium ante, quis finibus lectus ornare eu. Suspendisse volutpat mollis suscipit. In non pellentesque velit, vitae aliquet lectus. Etiam dapibus varius augue, et molestie lectus semper id. Pellentesque tristique auctor leo nec gravida.</div></div>);

        let resume_content = (<div className="content row"><div className="col-lg-6 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec efficitur diam. Nullam at varius magna, at pulvinar felis. Mauris sed fermentum tortor. Sed eros urna, mollis sed venenatis nec, pretium eget elit. Curabitur sodales lectus sed volutpat faucibus. Pellentesque consectetur neque urna, ut lobortis orci pharetra ut. Integer hendrerit ante justo, vel iaculis purus fringilla in. Donec iaculis justo quis ex molestie dictum. Fusce dictum mollis est, ac blandit velit sagittis sed. Suspendisse ut imperdiet ligula, eget vehicula elit. Donec ligula quam, ultricies a posuere ut, rutrum in lacus. Aenean tempor enim nec elit convallis laoreet. Donec malesuada molestie nisl et egestas.</div>
            <div className="col-lg-6 col-md-12">[RESUME] Etiam aliquam fringilla urna, sed tempus enim commodo eleifend. Donec non commodo leo. Fusce lobortis non diam eu tempus. Vestibulum et sapien ac velit commodo vehicula in et dui. Phasellus ac pharetra tortor. Cras laoreet, nisi vestibulum condimentum fermentum, odio magna consequat justo, sit amet volutpat mi ante sed urna. Ut venenatis leo eget odio rutrum, sit amet finibus lectus porta. Donec in urna ac libero vestibulum luctus nec congue velit. Phasellus porttitor iaculis quam et ullamcorper. Morbi dignissim pretium ante, quis finibus lectus ornare eu. Suspendisse volutpat mollis suscipit. In non pellentesque velit, vitae aliquet lectus. Etiam dapibus varius augue, et molestie lectus semper id. Pellentesque tristique auctor leo nec gravida.</div></div>);

        let projects_content = (<div className="content row"><div className="col-lg-6 col-md-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec efficitur diam. Nullam at varius magna, at pulvinar felis. Mauris sed fermentum tortor. Sed eros urna, mollis sed venenatis nec, pretium eget elit. Curabitur sodales lectus sed volutpat faucibus. Pellentesque consectetur neque urna, ut lobortis orci pharetra ut. Integer hendrerit ante justo, vel iaculis purus fringilla in. Donec iaculis justo quis ex molestie dictum. Fusce dictum mollis est, ac blandit velit sagittis sed. Suspendisse ut imperdiet ligula, eget vehicula elit. Donec ligula quam, ultricies a posuere ut, rutrum in lacus. Aenean tempor enim nec elit convallis laoreet. Donec malesuada molestie nisl et egestas.</div>
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
        console.log(this.state.selection);
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