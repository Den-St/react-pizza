import React from "react";
import {useParams} from "react-router-dom";
import data from '../assets/db.json';


export const Category = () => {
    const params = useParams();
    const type = params?.type;
    console.log(data.items.length);

    return <div>{type}</div>
}