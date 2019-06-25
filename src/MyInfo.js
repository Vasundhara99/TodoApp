import React from "react"
import productData from "./productData"
import Product from "./Product"
import "./App.css"
function MyInfo() {
    const data = productData.map(prod => <Product key={prod.id} product={prod.product} price={prod.price} />)
    return (<div>
        {data}
    </div>
    )
}
export default MyInfo