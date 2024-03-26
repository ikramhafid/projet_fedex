
import { useState } from "react"
import Barcode from 'react-barcode'
 const BarecodeGenerator = () => {

const [text,setText] =useState()
const [barcode,setBarcode] =useState()
const generatecd = () => {
    setBarcode(text)

}

return <>
     
      <h2>  BareCode Generator</h2>
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button className="col-sm mx-2 btn btn-primary" onClick={generatecd}>Generate BareCode</button>
    </div>
    <div>
        <Barcode value={barcode} />
    </div>
        </>
 }
 export default BarecodeGenerator