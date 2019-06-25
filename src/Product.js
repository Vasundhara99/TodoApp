import React from "react"
function Product(props)
{
    return (<div>
    <h1>Product:{props.product}</h1>
    <h2>Price:{props.price}</h2><hr /></div>)
}
export default Product