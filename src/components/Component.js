import React from "react";
import { AiOutlineSearch, AiFillLock } from "react-icons/ai";

const Component = () => {
  return (
    <>
      <div class="container mt-5">
        <div class="row justify-content-md-center">
          <div class="col-sm-5 bg p-5 rounded">
            <div className="light">
              <h1 className="style_font">
                Proin <br /> facilisis <br /> risus mus a.
              </h1>
            </div>
            <div className="light">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis nobis quasi fugiat dicta
              </p>
            </div>
            <div className="light">
              <p className="align-baseline">
                <AiOutlineSearch className="rounded-circle bg-light icon_col fs-4 me-2 p-1 shadow" />
                Amet vitae pellentesque iaculis metus est.
              </p>
              <p className="align-baseline">
                <AiFillLock className="rounded-circle bg-light icon_col fs-4 me-2 p-1 shadow" />
                Orci nunc eu cras amet cursus leo in elit.
              </p>
            </div>
          </div>
          <div class="col-sm-5 p-5 rounded shadow">
            <div className="dark content">
              <div className="d-flex align-items-center align-bottom">
                <AiOutlineSearch className="rounded-circle bg-blue icon_col_light fs-4 me-2 p-1 shadow" />
                <h4 className="ms-3">Features</h4>
              </div>
              <p className="small_text ms-5">
                Lorem iosum dolor sit amet. consectetur adipiscing elit. Sit
                tellus dolor dictum ut tellus oroin. Arcu in sed vitae aliquet
                lobortis.
              </p>
            </div>
            <div className="dark content">
              <div className="d-flex align-items-center align-bottom">
                <AiOutlineSearch className="rounded-circle bg-blue icon_col_light fs-4 me-2 p-1 shadow" />
                <h4 className="ms-3">Features</h4>
              </div>
              <p className="small_text ms-5">
                Lorem iosum dolor sit amet. consectetur adipiscing elit. Sit
                tellus dolor dictum ut tellus oroin. Arcu in sed vitae aliquet
                lobortis.
              </p>
            </div>
            <div className="dark content">
              <div className="d-flex align-items-center align-bottom">
                <AiOutlineSearch className="rounded-circle bg-blue icon_col_light fs-4 me-2 p-1 shadow" />
                <h4 className="ms-3">Features</h4>
              </div>
              <p className="small_text ms-5">
                Lorem iosum dolor sit amet. consectetur adipiscing elit. Sit
                tellus dolor dictum ut tellus oroin. Arcu in sed vitae aliquet
                lobortis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;