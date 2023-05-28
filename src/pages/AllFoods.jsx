import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import guyImg from "../assets/images/hero-banner2.gif";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import "../styles/pagination.css";

const AllFoods = () => {



  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);


  useEffect(() => {
    if(category === 'ALL') {
      setAllProducts(products)
    }

    if(category === 'FILIPINO') {
      const filteredProducts = products.filter(item=> item.category === 'Filipino Food')

      setAllProducts(filteredProducts)
    }

    if(category === 'JAPANESE') {
      const filteredProducts = products.filter(item=> item.category === 'Japanese Food')

      setAllProducts(filteredProducts)
    }

    if(category === 'ITALIAN') {
      const filteredProducts = products.filter(item=> item.category === 'Italian Food')

      setAllProducts(filteredProducts)
    }

  },[category])




  



  return (
    <Helmet title="Foodie Express">
      <section>
        <Container>
          <Row>
          <Col lg="12" md="12" sm="12">
              <div className="hero__img text-center">
                <img src={guyImg} alt="delivery-guy" className="w-50 justify-content-center" />
              </div>
            </Col>

            <Col lg='12' className="text-center">
              <h2>Popular Menu</h2>
            </Col>

            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center">
                <button className="all__btn foodBtnActive py-1" onClick={() => setCategory('ALL') }>All</button>
                <button className="d-flex align-items-center gap-2" onClick={() => setCategory('JAPANESE') }>Japanese</button>
                <button className="d-flex align-items-center gap-2" onClick={() => setCategory('FILIPINO') }>Filipino</button>
                <button className="d-flex align-items-center gap-2" onClick={() => setCategory('ITALIAN') }>Italian</button>
                

              </div>
            </Col>
              {
                allProducts.map(item=>(
                  <Col lg='3' md='4' key={item.id} className="mt-5">
                    <ProductCard item={item}/>
                  </Col>
                ))
              }

            
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default AllFoods;
