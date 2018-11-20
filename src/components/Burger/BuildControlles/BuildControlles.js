import React from 'react';

import classes from './BuildControlles.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},

];

const buildControlles = (props) => (
    <div className={classes.BuildControlles}> 
        {controls.map(ctrl => (
            <BuildControl 
            key = {ctrl.label} 
            label = {ctrl.label} 
            added = {() => props.ingredientAdded(ctrl.type)} 

            />
        ))}
    </div>
)

export default buildControlles;