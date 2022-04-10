import React, { FC, Fragment, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Swiping from "../components/Swiping/Swiping";

export interface ProductsProps {}

const ProductWrapper = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - 93.5px);
`;

const Products: FC<ProductsProps> = ({ ...props }) => {
  const [swipers, setSwipers] = useState([]);

  return (
    <Fragment>
      <Header />
      <ProductWrapper {...props}>
        <Swiping />
      </ProductWrapper>
    </Fragment>
  );
};

export default Products;
