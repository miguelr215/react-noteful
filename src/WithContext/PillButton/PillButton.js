import React from 'react';
import { Link } from 'react-router-dom';
import './PillButton.css';

export default function PillButton(props){
    const { tag, className, children, ...otherProps } = props;

    return React.createElement(
        Link,
        {
            className: ['NavPillButton', props.className].join(' '),
            ...otherProps
        },
        props.children
    )

    // return(
    //     <Link
    //         to='/add-folder'
    //         className='NavPillButton'>
    //         Add Folder
    //     </Link>
    // )
}

PillButton.defaultProps = {
    tag: 'a'
}