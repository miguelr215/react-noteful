import React from 'react';

export default class AddNoteError extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return { hasError: true }
    }

    render(){
        if(this.state.hasError){
            return (
                <h2>Could not bring up form element</h2>
            )
        }
        return this.props.children;
    }
}