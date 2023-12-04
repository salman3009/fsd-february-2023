import './Product.css';

function Product(props){
    //destructuring of object
    const {name,price} = props;
    return (<div className="box">
        <h1>Product Name:{name}</h1>
        <h1>Product Price:{price}</h1>
    </div>)
}

export default Product;