export const getJewelry=()=>{
    return fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
};

export const getElectronics=()=>{
    return fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
};
 
export const getBooks=()=>{
    return fetch('http://localhost:8000/books')
            .then(res=>res.json())
            
};