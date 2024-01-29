import React, {PropsWithChildren} from 'react';
import classes from './style.module.css';
const Grid = ({children}:PropsWithChildren) => {
    return (
        <div className={classes.grid}>
            {children}
        </div>
    );
};

export default Grid;