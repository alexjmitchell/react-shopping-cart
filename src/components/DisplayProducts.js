import React from "react"

export default function DisplayProducts(props) {
  return (
    <div className="products-container">
      {props.goods.map(product => (
        <div>
          <p className={(product.isFreeShipping = true ? "free" : "not-free")}>
            Free Shipping
          </p>
          <img src={`/assets/${product.sku}_1.jpg`} alt={product.title} />
          <p>{product.title}</p>
          <p>
            {product.currencyFormat}&nbsp;{product.price}
          </p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}
