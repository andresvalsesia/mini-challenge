import React from 'react'

const Table = () => {

const data=[
    {
        nombre: "Pedro",
        edad: 20,
        carrera: "Ingeniería",
        hobbie: "Futbol"
    },
    {
        nombre: "Rodrigo",
        edad: 22,
        carrera: "Arquitectura",
        hobbie: "Bajo eléctrico"
    },
    {
        nombre: "Romina",
        edad: 21,
        carrera: "Abogacía",
        hobbie: "Acrobacia"
    },
    {
        nombre: "Ana",
        edad: 23,
        carrera: "Contadora",
        hobbie: "Astronomía"
    }
];

  return (
    <div className="table-container">
          <table className="table">
                  <thead >
                    <tr className="table-dark">
                        <th>NOMBRE</th>
                        <th>EDAD</th>
                        <th>CARRERA</th>
                        <th>HOBBIE</th>
                    </tr>
                  </thead>
                <tbody >
                  {data.map(item=><tr>
                                <td>{item.nombre}</td>
                                <td>{item.edad}</td>
                                <td>{item.carrera}</td>
                                <td>{item.hobbie}</td>
                    </tr>)}
                </tbody>
            </table>
    </div>
  )
}

export default Table;