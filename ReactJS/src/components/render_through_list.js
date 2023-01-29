// This is a JS code to render through a list using map function
import React, { Component } from "react";
import "./render_through_list.css";

const members = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    },
    {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
        ]
    }
]

class hello extends Component {

    render() {
        const data = members.map(item => <li>{item.name}</li>)
        return (
            <ul>{data}</ul>
        )
    }
}

export default hello;
