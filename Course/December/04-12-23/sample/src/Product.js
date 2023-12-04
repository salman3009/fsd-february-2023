import './Product.css';

function Product(props){
    //destructuring of object
    const {name,price} = props;
    return (<div className="box">
        <h1 id={name} style={{color:"red"}}>Product Name:{name}</h1>
        <h1 style={{color:"blue"}}>Product Price:{price}</h1>
    </div>)
}

export default Product;