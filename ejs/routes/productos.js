const {
    Router
} = require('express');
const router = Router();
const productos = [{
    "title": "Lapiz",
    "price": 1500,
    "thumbnail": "https://www.quieninvento.org/wp-content/uploads/2013/06/Lapiz.jpg",
    "id": 1
},
{
    "title": "Libro 2",
    "price": 1000,
    "thumbnail": "https://staticr1.blastingcdn.com/media/photogallery/2017/1/24/660x290/b_1200x630/firenze-libro-aperto-in-arrivo-il-primo-festival-dedicato-all-firenzetoday-it_1106657.jpg",
    "id": 2
},
{
    "title": "Libro de algun otro",
    "price": 700,
    "thumbnail": "https://www.freejpg.com.ar/asset/900/77/7765/F100004696.jpg",
    "id": 3
}
]
    


//Mostrar productos (GET)
router.get('/', (req, res) => {
    
    try{
        res.render('listado', {productos});
    }catch(error){
        console.log('error al intentar obtener el listado de productos :: ',error)
    }
})



//Agregar producto desde form (POST)
router.post('/', (req, res) => {
    
try {
    const {
        title,
        price,
        thumbnail
    } = req.body
    let ultimo = productos.length - 1;
    let id = productos[ultimo].id + 1;
    productos.push({
        id,
        title,
        price,
        thumbnail
    });
    res.redirect('/')
}catch(error){
    console.log('error al postear', error)
    res.sendStatus(500)
}
})


//Consultar producto (GET)
router.get('/:id', (req, res) => {
    
   try { 
    let encontrado = productos.find(producto => producto.id == req.params.id);
    encontrado ? res.json(encontrado) : res.json({error: 'No existe ese ID'})
    } catch(error) {
        console.log('ocurrio un error desde el metodo GET por id, ', error)
    }
    })






module.exports = router;