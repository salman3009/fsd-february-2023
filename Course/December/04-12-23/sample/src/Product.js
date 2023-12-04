import './Product.css';

function Product(props){
    //destructuring of object
    const {name,price} = props;

    let styleObject = {color:"red",marginTop:"40px"};
    
    return (<div className="box">
        <h1 id={name} style={styleObject}>Product Name:{name}</h1>
        <h1 style={{color:"blue",backgroundColor:"grey"}}>Product Price:{price}</h1>
        <h3>{name ==="sony"?"40% discount":"20% discount"}</h3>
    </div>)
}

export default Product;