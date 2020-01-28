
const fs = require('fs');

let listadoNotas = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoNotas);

  fs.writeFile('./db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo guardar', err);
    console.log('The file has been saved');
  });
};

const cargarDB = () => {
  try {
    listadoNotas = require('../db/data.json');
  } catch (error) {
    listadoNotas = [];
  }
}

const crear = (descripcion) => {
  cargarDB();

  let nota = {
    descripcion,
    completado: false,
  }

  listadoNotas.push(nota);
  guardarDB();
  return nota;
};

const getListado = () => {
  cargarDB();
  return listadoNotas;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoNotas.findIndex(nota => nota.descripcion === descripcion);
  if(index >= 0) {
    listadoNotas[index].completado = completado;
    guardarDB();
    return true
  }
  return false;
}

const borrar = (descripcion) => {
  cargarDB();
  let newlistadoNotas = listadoNotas.filter(nota => nota.descripcion !== descripcion);
  if(listadoNotas.length === newlistadoNotas.length) {
    return false;
  }
  listadoNotas = newlistadoNotas;
  guardarDB();
  return true;
}


module.exports = { crear, getListado, actualizar, borrar }