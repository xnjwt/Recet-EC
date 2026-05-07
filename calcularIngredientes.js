const form = document.getElementById('calcular_ingredientes');
const inputPorciones = document.getElementById('porciones');
const divResultado = document.getElementById('resultado');

const ingredientesBase = [
    { nombre: "mililitros de agua", cantidad: 125 },
    { nombre: "mililitros de leche", cantidad: 125 },
    { nombre: "g de avena", cantidad: 20 },
    { nombre: "g de panela", cantidad: 60 },
    { nombre: "g de canela", cantidad: 3 },
    { nombre: "granos de pimienta dulce", cantidad: 2 },
    { nombre: "clavos de olor", cantidad: 1 },
    { nombre: "aniz estrellado", cantidad: 0.25 }
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const porciones = parseInt(inputPorciones.value);

    if (!(porciones > 0)) {
        divResultado.innerHTML = "<p>Por favor, ingrese una cantidad de porciones válida. </p>";
        return;
    }

    let htmlIngredientes = "";

    ingredientesBase.forEach(ing => {
        let total = ing.cantidad * porciones;

        if (ing.nombre === "aniz estrellado" && total > 1) {
            nombreDisplay = "anices estrellados";
        }

        htmlIngredientes += `<li>${total} ${ing.nombre}</li>`;
    });

    divResultado.innerHTML = `
        <h3>Receta Personalizada</h3>
        <div id="ingredientes">
            <ul>
                ${htmlIngredientes}
            </ul>
        </div>
    `;
});