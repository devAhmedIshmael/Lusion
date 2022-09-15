import React from "react";
import Container from "react-bootstrap/esm/Container";
import Context from "./Context";

const HomeSecFour = () => {
  return (
    <Context.Consumer>
      {({ homeSecFourContext }) => (
        <Container>
          <div className="sec-4 row mb-5">
            <div className="col-lg-9">
              <div className="row">
                {homeSecFourContext.map((e) => (
                  <div key={e.id} className="col-lg-4">
                    <img src={e.img} />
                  </div>
                ))}
              </div>
            </div>
            <div className="ps-5 col-lg-3">
              <p className="heading1 mb-5 mt-3">Vintage Style</p>
              <p className="mb-5">
                Lurem ibsum is simply dummy text of the printing and
                typesetting. Lorem ibsum has been the industry's standard dummy
                text ever since 1500's when an unknown printer
              </p>
              <p className="heading2">____#Lusiontheme</p>
            </div>
          </div>
        </Container>
      )}
    </Context.Consumer>
  );
};

export default HomeSecFour;
