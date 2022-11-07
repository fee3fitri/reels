import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, loadProduct } from "../../store/products";
import { Accordion, AccordionDetails } from "@mui/material/";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";


const ProductAccordion = () => {
  const {productId} = useParams();
  const dispatch = useDispatch;
  const product = useSelector(loadProduct(productId));


  if (!product) return null;

  return (
    <div className="product_accordion">
      <Accordion disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} 
          id="panel1_header"
        >
          <p className="accordion_title">Details</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion_details">
            <p>Cushy EVA midsoles Incredibly light and flexible to move all day (and night)</p>
            <p>Canvas and leather linings keep your feet cool and dry, you can ditch the socks</p>
            <p>Foot hugging internal elastic Snug perfect fit, no tight laces</p>
            <p>Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit</p>
            <p>Padded back collars No break-in time or ankle rubs for instant happy wears</p>
            <p>3M Reflective Strip Jump on your bike and be seen after dark</p>
            <p>Australian designed using cutting-edge innovation, originality and extreme attention to detail</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} 
          id="panel1_header"
        >
          <p className="accordion_title">Materials</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion_details">
            <p>Mixed materials</p>
            <p>Made with considered design and premium mixed materials, we craft extreme cushioning and lightness into every shoe.</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} 
          id="panel1_header"
        >
          <p className="accordion_title">Shipping &#38; Returns </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion_details">
            <em classname="shipping_title">Free standard shipping on orders shipped to the United States. (Excludes Hawaii, Alaska, Puerto Rico)</em>
            <p>Standard shipping usually delivers within 3-5 business days to addresses in the  United States. Delivery times are not guaranteed and are subject to several other factors including product availability and credit card authorization. </p>
            <Divider />
            <em classname="shipping_title">Free international express shipping on all orders over $250</em>
            <p>This service is delivered by Fed Ex and typically arrives within 3 - 5 business days. This service provides a tracking number for your package. Please note that the customer is responsible for any brokerage fees, customs duties, or any other fees that may be imposed upon delivery.</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default ProductAccordion;