import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"

// Action Names/Variables -----------------------------//

const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS"
const SIZES = "SIZES"
const ADD_TO_CART = "cart/ADD_TO_CART"
const DISPLAY_CART_PRODUCTS = "DISPLAY_CART_PRODUCTS"

// Reducer ----------------------------------------//

const initialState = {
  products: [],
  selectedShirtSize: "M",
  cartProducts: []
}

export default function tshirtReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_PRODUCTS:
      return { ...state, products: action.payload }
    case SIZES:
      return { ...state, selectedShirtSize: state }
    case DISPLAY_CART_PRODUCTS:
      return { ...state, cartProducts: action.payload }
    case ADD_TO_CART:
      return { ...state, cartProducts: [...state.cartProducts, action.payload] }
    default:
      return state
  }
}

// Action Creators ------------------------//

function getProductData() {
  return action => {
    Axios.get("/products").then(response => {
      action({
        type: DISPLAY_PRODUCTS,
        payload: response.data
      })
    })
  }
}

function getCartProductData() {
  return action => {
    Axios.get("/cartProducts").then(response => {
      action({
        type: DISPLAY_CART_PRODUCTS,
        payload: response.data
      })
    })
  }
}

export const addCartItem = payload => {
  return action => {
    Axios.post("/cartProducts", {
      title: payload.title,
      sku: payload.sku,
      price: payload.price,
      currencyFormat: payload.currencyFormat,
      description: payload.description,
      style: payload.style,
      productId: payload.id
    }).then(response => {
      action({
        type: ADD_TO_CART,
        payload
      })
    })
  }
}

// Custom Hook -----------------------------------//

export function useDataHook() {
  const dispatch = useDispatch()
  const items = useSelector(appState => appState.tshirtReducer.products)
  const shirtSize = useSelector(
    appState => appState.tshirtReducer.selectedShirtSize
  )
  const cartItems = useSelector(appState => appState.tshirtReducer.cartProducts)

  useEffect(() => {
    const fetch = () => dispatch(getProductData(), dispatch(getCartProductData()))
    fetch()
  }, [dispatch])

  return { items, shirtSize, cartItems }
}
