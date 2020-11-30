import React from 'react';
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