// La funcion toma el año que el usuario le esté pasando y lo resta al año actual para obtener la diferencia.
export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

// Calcula el total a pagar segun la marca.
export const calcularMarca = (marca) => {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
};

// Calcula el tipo de seguro y su incremento (20% o 50%)
export const obtenerPlan = (plan) => {
  return plan === "basico" ? 1.2 : 1.5;
};

// Muestra primer letra como mayuscula
export const primerMayuscula = (texto) => {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
};
