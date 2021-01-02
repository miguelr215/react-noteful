import React from 'react';
// import { Link } from 'react-router-dom';
import './PillButton.css';

export default function PillButton(props){
    const { tag, className, children, ...otherProps } = props;

    return React.createElement(
        props.tag,
        {
            className: ['NavPillButton', props.className].join(' '),
            ...otherProps
        },
        props.children
    )
}

PillButton.defaultProps = {
    tag: 'a'
}