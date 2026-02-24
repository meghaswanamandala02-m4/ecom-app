

import { useNavigate } from "react-router-dom";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import Footer from "./Footer";
import Header from "./Header";

function Products() {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn=="true") {
      navigate("/cart");
    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };
  return (
    <>
    <Header/>
    <section className="products">
      <div className="product">
        <img src={img1} alt="iPhone" />
        <h3>iPhone</h3>
        <p>Rs: 1,00,000</p>
       <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div className="product">
        <img src={img2} alt="Samsung" />
        <h3>Samsung</h3>
        <p>Rs: 25,000</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div className="product">
       <img src={img3} alt="Moto" />
        <h3>Moto</h3>
        <p>Rs: 15,000</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </section>
     <Footer/>
    </>
   
  );
}

export default Products;
