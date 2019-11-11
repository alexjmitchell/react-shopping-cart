import React from "react"


export default function DisplayProducts(props) {
  return (
    <div className="products-container">
      {props.goods.map((product, i) => (
        <div key={"product-" + i} className="products">
          <p className={(product.isFreeShipping === true) ? "free" : "not-free"}>
            Free Shipping
          </p>
          <img src={`/assets/${product.sku}_1.jpg`} alt={product.title} />
          <p>{product.title}</p>
          <p>
            {product.currencyFormat}&nbsp;{product.price.toFixed(2)}
          </p>
          <p className={(product.installments === 0) ? "no-installments" : "has-installments" }>{`${product.installments} payments of ${product.currencyFormat} ${(
            product.price / product.installments
          ).toFixed(2)}`}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}
