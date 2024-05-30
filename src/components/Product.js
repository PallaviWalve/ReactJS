function Product(props){ //component
    function myfunction(){ //function
        // alert();
        props.price = 9000;
    }
   console.log(props);
   return (
    <div>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <p><button onClick={myfunction}>Add to Cart</button></p>
    </div>
   );
}
export default Product;