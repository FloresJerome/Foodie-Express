import React, {useState} from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
// import Category from '../components/UI/category/Category.jsx';
import guyImg from "../assets/images/hero-banner.gif";
import "../styles/hero-section.css";
import "../styles/home.css";

import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";





const Home = () => {


  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products;

  const productPerPage = 6;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  


  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Cuisine
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/allfoods">
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>

          <Row>
          <Col lg='12' className="text-center">
              <h2>All Time Favorites</h2>
            </Col>

          {displayPage.map((item) => (
            <Col
              lg="4"
              md="6"
              sm="6"
              xs="6"
              key={item.id}
              className="mb-4 mt-4"
            >
              <ProductCard item={item} />
            </Col>
          ))}
          <div className="d-flex justify-content-center my-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"<"}
              nextLabel={">"}
              containerClassName="paginationBttns"
            />
          </div>
        </Row>
        </Container>
      </section>

      

    </Helmet>
  );
};

export default Home;
