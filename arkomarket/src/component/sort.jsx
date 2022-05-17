import React from "react";
import { Container } from "react-bootstrap";
import "../css/sort.css";
import "../scss/sort.scss";
import eye from "../Asset/eye.svg"

const Sort = () => {
  return (
    <>
      <Container>
        <div className="sort-container">
            <Container>
          <div className="top-section">
            <div className="filter-buttons">
              <button className="Sale">Sale</button>
              <button className="Exchange">Exchange</button>
              <button className="Required">Required</button>
            </div>
            <div className="sort-section">
              <select className="Sort">
                <option value selected>
                  Sort By
                </option>
                <option value="Instagram">Instagram</option>
                <option value="FaceBook">FaceBook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Google">Google</option>
                <option value="Articles">Articles</option>
                <option value="Word of Mouth">Word of Mouth</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          </Container>
          <Container>
            <div class="row">
            <div class="card">
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="card-title"><h5>The Codes and Conventions of TV Serial Dramas</h5></div>
                <div class="lower-text">
                <div class="card-price">
                 <p> Rs.13,000</p>
                </div>
                <div class="card-space">
                <div class="card-age">
                   <p>Brand New</p> 
                  
                </div>
                <div class="card-seen">
                    <img src={eye} alt=".seen" />
                    <p>20000000</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="card-title"><h5>The Codes and Conventions of TV Serial Dramas</h5></div>
                <div class="lower-text">
                <div class="card-price">
                 <p> Rs.13,000</p>
                </div>
                <div class="card-space">
                <div class="card-age">
                   <p>Brand New</p> 
                  
                </div>
                <div class="card-seen">
                <img src={eye} alt=".seen" />
                    <p>20000000</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="card-title"><h5>The Codes and Conventions of TV Serial Dramas</h5></div>
                <div class="lower-text">
                <div class="card-price">
                 <p> Rs.13,000</p>
                </div>
                <div class="card-space">
                <div class="card-age">
                   <p>Brand New</p> 
                  
                </div>
                <div class="card-seen">
                <img src={eye} alt=".seen" />
                    <p>20000000</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="card-title"><h5>The Codes and Conventions of TV Serial Dramas</h5></div>
                <div class="lower-text">
                <div class="card-price">
                 <p> Rs.13,000</p>
                </div>
                <div class="card-space">
                <div class="card-age">
                   <p>Brand New</p> 
                  
                </div>
                <div class="card-seen">
                <img src={eye} alt=".seen" />
                    <p>20000000</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="card-title"><h5>The Codes and Conventions of TV Serial Dramas</h5></div>
                <div class="lower-text">
                <div class="card-price">
                 <p> Rs.13,000</p>
                </div>
                <div class="card-space">
                <div class="card-age">
                   <p>Brand New</p> 
                  
                </div>
                <div class="card-seen">
                <img src={eye} alt=".seen" />
                    <p>20000000</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="card-title"><h5>The Codes and Conventions of TV Serial Dramas</h5></div>
                <div class="lower-text">
                <div class="card-price">
                 <p> Rs.13,000</p>
                </div>
                <div class="card-space">
                <div class="card-age">
                   <p>Brand New</p> 
                  
                </div>
                <div class="card-seen">
                    <img src={eye} alt=".seen" />
                    <p>20000000</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="page-container">
              <div class="page-box"></div>
              <button class="">1</button>
              <button class="">2</button>
              <button class="">3</button>
          </div>
          </div>
        
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Sort;
