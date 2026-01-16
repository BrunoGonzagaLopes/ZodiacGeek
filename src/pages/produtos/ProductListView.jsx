import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";

export default function ProductListView() {

  let { id } = useParams()
  
  
  if (id) {
    
    return (
      <main>
        <ProductCard filter={id}/>
      </main>
    )
  } else {
    
    return (
      <main>
        <ProductCard/>
      </main>
    )
  }
  
}