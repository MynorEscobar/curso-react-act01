import React from "react";
export const Libros = ()=>{
    const libros = [
        {
          nombre: "Cien Años de Soledad",
          autor: "Gabriel García Márquez",
          editorial: "Editorial Sudamericana",
          edicion: "Primera"
        },
        {
          nombre: "1984",
          autor: "George Orwell",
          editorial: "Secker & Warburg",
          edicion: "Primera"
        },
        {
          nombre: "Don Quijote de la Mancha",
          autor: "Miguel de Cervantes",
          editorial: "Francisco de Robles",
          edicion: "Primera"
        },
        {
          nombre: "El Principito",
          autor: "Antoine de Saint-Exupéry",
          editorial: "Reynal & Hitchcock",
          edicion: "Primera"
        },
        {
          nombre: "Crónica de una Muerte Anunciada",
          autor: "Gabriel García Márquez",
          editorial: "Editorial Oveja Negra",
          edicion: "Primera"
        },
        {
          nombre: "Orgullo y Prejuicio",
          autor: "Jane Austen",
          editorial: "T. Egerton",
          edicion: "Primera"
        },
        {
          nombre: "Fahrenheit 451",
          autor: "Ray Bradbury",
          editorial: "Ballantine Books",
          edicion: "Primera"
        },
        {
          nombre: "Matar a un Ruiseñor",
          autor: "Harper Lee",
          editorial: "J.B. Lippincott & Co.",
          edicion: "Primera"
        },
        {
          nombre: "La Odisea",
          autor: "Homero",
          editorial: "Desconocida",
          edicion: "Primera"
        },
        {
          nombre: "La Metamorfosis",
          autor: "Franz Kafka",
          editorial: "Kurt Wolff Verlag",
          edicion: "Primera"
        }
      ];

    return (
        <div>
            <h1>Listado de Libros</h1>
            <ul>
                {libros.map((libro, index) => (
                <li key={index}>
                    <h2>{libro.nombre}</h2>
                    <p><strong>Autor:</strong> {libro.autor}</p>
                    <p><strong>Editorial:</strong> {libro.editorial}</p>
                    <p><strong>Edición:</strong> {libro.edicion}</p>
                </li>
                ))}
            </ul>
        </div>
    )

};