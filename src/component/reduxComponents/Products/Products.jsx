import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InputField from '../../common/InputField'
import { useState } from 'react'
import { addProduct, removeProduct } from '../../../redux/Slices/productSlice/productSlice'
import { Button } from '@mui/material'


const Products = () => {
    const productItems= useSelector((state)=>state.productSlice.product) 
    const dispatch= useDispatch()
    console.log("products",productItems)
    const [text, setText]= useState("")
    const[url, setUrl] = useState("")
    const[quantity, setQuantity]= useState('')
    const handleSubmit=()=>{
        const formData = { text, url, quantity }
        console.log(formData)
        dispatch( addProduct(formData) )
        clear();
    }
    const clear= ()=>{
        setText("")
        setUrl("")
        setQuantity("")
    }
  return (
    <div>
      
      {productItems.length >0 ? <h1>  Products {productItems.length} </h1>:<h6>please Add thr Product</h6> }
      <div className="container-form">
        <InputField name="text" label="Product-Name"  value={ text }  setValue={setText}/>
        <InputField name="url" label="Product-image" value={ url } setValue={ setUrl }/>
        <InputField name="quantity" label="Product-Quantity"  value={ quantity } setValue={ setQuantity } />
        <Button onClick={()=>{handleSubmit()}} variant="outlined">Submit</Button>
      </div>
   {
    productItems?.map((item, index)=>{
      return(<>
      <h1>The Name Is { item?.text }</h1>
      <h3> the url is { item?.url  }</h3>
      <h3> the url is { item?.quantity  }</h3>
      <Button onClick={()=>{dispatch(removeProduct(index))}} variant="outlined">Submit</Button>
      </>)
    })
   }
    </div>
  )
}

export default Products
