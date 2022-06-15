const pizzas=[{
    id: 1,
    nombre:'Fugazzeta',
    ingredientes: ['cebolla', 'muzzarella', 'aceituna'],
    precio: 500,
    imagen: 'https://img-global.cpcdn.com/recipes/973aa4b925d605e7/400x400cq70/photo.jpg',
},{
    id: 2,
    nombre:'Calabresa',
    ingredientes: ['longaniza', 'muzzarella'],
    precio: 800,
    imagen: 'https://www.recetas-argentinas.com/base/stock/Recipe/43-image/43-image_web.jpg'
},{
    id: 3,
    nombre:'Napolitana',
    ingredientes: ['tomate','aceite de oliva','ajo','muzzarella'],
    precio: 700,
    imagen: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/La-pizza-napolitana-es-declarada-patrimonio-de-la-humanidad.jpg'
},{
    id: 4,
    nombre:'Especial',
    ingredientes: ['jamon','morron','muzzarella'],
    precio: 800,
    imagen: 'https://admin.daskalos.com.ar/Content/Images/Shop/Productos/95CED0BB-BD0E-40B2-AA36-FB3225D99348/producto_b2731cd8-c63f-4905-b952-d35e8018d22e_64_734392fb-3f12-486f-a003-6019ad8a5d00.jpg'
},{
    id: 5,
    nombre:'Muzzarella',
    ingredientes: ['muzzarella','aceitunas'],
    precio: 600,
    imagen: 'https://quem.com.ar/wp-content/uploads/2018/05/Pizza-e1584547627773.jpg'
},{
    id: 6,
    nombre:'con Huevo duro',
    ingredientes: ['huevo','muzzarella', 'aceitunas'],
    precio: 700,
    imagen: 'https://images.deliveryhero.io/image/pedidosya/products/471112-1d01ed49-ac49-4636-bf4b-dbcb1f5eb6e3.jpg?quality=90&width=248'
},
];

const parsePizzas= localStorage.setItem('pizzas', JSON.stringify(pizzas));

const containerCard= document.getElementById('container-card');
const divCard= document.getElementById('card');
const imgCard= document.getElementById('img-pizza');
const nameCard= document.getElementById('nombre-pizza');
const ingredientesCard= document.getElementById('ingredientes-pizza');
const precioCard= document.getElementById('precio-pizza');
const inputCard= document.querySelector('input'); 
const btn= document.querySelector('button'); 

btn.addEventListener('click', (e) =>{
    const inputValue= inputCard.value;
    pizzaFind = pizzas.find((pizza) => pizza.id == inputValue)
    if(!pizzaFind){
        alert('Ingresa un valor valido')
    }else{
        const imagen= document.createElement('img');
        imagen.setAttribute('src',pizzaFind.imagen);
        imgCard.appendChild(imagen);
        imgCard.removeChild(imgCard.firstChild);
        nameCard.innerText = `Pizza "${pizzaFind.nombre}"`;
        ingredientesCard.innerText = (`Ingredientes: ${pizzaFind.ingredientes}`);
        precioCard.innerText = (`Precio: $${pizzaFind.precio}`);
        inputCard.value= '';
    };
})
