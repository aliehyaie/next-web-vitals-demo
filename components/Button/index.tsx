import React, {PropsWithChildren} from 'react';
import classes from './style.module.css';

const Button = ({children,onClick}:PropsWithChildren & {onClick?:()=>void}) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {children}
        </button>
    );
};

export default Button;