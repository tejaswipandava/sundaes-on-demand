import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";

export default function Options({ optionType }) {
    const [items, setItem] = useState([]);

    //optionsType is 'scoop' or 'topping' comming from server    
    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
            .then(response => setItem(response.data))
            .catch(error => {
                //todo error handling
            })
    }, [optionType]);

    //Todo: need to replace null with toppings
    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions;

    const optionItems = items.map(item => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));

    return <Row>{optionItems}</Row>;
}