import React from 'react';

class ErrorBoundry extends React.Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="book-item">
                    <div className="book-item__block">
                        <div className="book-item__image" style={{
                            background: 'black',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }} >

                        </div>
                    </div>
                    <div className="book-item__title">Error</div>
                    <div className="book-item__authors">Error</div>
                </div>

            )
        }
        return this.props.children;
    }
}

export default ErrorBoundry;