import React from "react";
import Container from "react-bootstrap/esm/Container";
import Context from "./Context";

const HomeSecOne = () => {
  return (
    <Context.Consumer>
      {({ homeSecOneProductsContext }) => (
        <Container>
          <div className="sec-1 row mb-5">
            {homeSecOneProductsContext.map((e) => (
              <div key={e.id} className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <img src={e.imgSrc} />
                <div className="details mt-3">
                  <h4>{e.type}</h4>
                  <h4>{e.availability} Items</h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      )}
    </Context.Consumer>
  );
};

export default HomeSecOne;
