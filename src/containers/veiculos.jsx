import React, { useState, useEffect } from 'react';
import { listVeiculos } from '../api/rt'



function Veiculos() {
    const [Veiculo, setData] = useState([]);

    useEffect(() => {
        listVeiculos().then(Veiculo => {
            setData(Veiculo);
        });
    }, []);
    console.log(Veiculo);
    //console.log(Veiculo[0]);
    return (
        <ul>
            {Veiculo.map(item => <li key={item.id}>{item.placa}, {item.empresa}</li>)}
        </ul>
    );
}

export default Veiculos