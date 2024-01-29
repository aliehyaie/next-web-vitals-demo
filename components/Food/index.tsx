import React from 'react';
import Card from "@/components/Card";
import classes from './style.module.css';
import Button from "@/components/Button";

interface FoodProps {
    image: string;
    title:string;
    creator:string;
    summary:string;
}
const Food = ({
    image,
    title,
    creator,
    summary
              }:FoodProps) => {
    return (
        <Card>
            <div>
                <div className={classes.image}>
                    <img src={image} alt={title}/>
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </div>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <Button>
                    View Details
                </Button>
            </div>
        </Card>
    );
};

export default Food;