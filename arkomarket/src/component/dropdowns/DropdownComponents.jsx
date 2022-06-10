import { Form } from "react-bootstrap";
export const LocationComponent = () => {
  return (
    <>
      <div className="sort-section">
        <Form.Select aria-label="Default select " className="mdb-select">
          <option selected> State </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <input type="text" placeholder="Type City, Address" />
      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const PriceRange = () => {
  return (
    <>
      <input className="price-range" type="text" placeholder="Price From" />
      <input type="text" placeholder="Price to" />
      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};
export const Condition = () => {
  return (
    <>
      <Form>
        {["radio"].map((type) => (
          <div key={`default-${type}`} className="check-btn">
            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Used</p>
            </div>

            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Like New</p>
            </div>
            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Not working</p>
            </div>
            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Brand new</p>
            </div>
          </div>
        ))}
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const FuelType = () => {
  return (
    <>
      <Form>
        {["radio"].map((type) => (
          <div key={`default-${type}`} className="check-btn">
            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Petrol</p>
            </div>

            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Diesel</p>
            </div>
            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Electric</p>
            </div>
            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Other</p>
            </div>
          </div>
        ))}
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const GearType = () => {
  return (
    <>
      <Form>
        {["radio"].map((type) => (
          <div key={`default-${type}`} className="check-btn">
            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Manual</p>
            </div>

            <div className="check-btn-component">
              <Form.Check aria-label="option 1" />
              <p> Automatic</p>
            </div>
          </div>
        ))}
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const ManufactureYear = () => {
  return (
    <>
      <input className="price-range" type="text" placeholder="From 2004" />
      <input type="text" placeholder="to 2010" />
      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const KMDriven = () => {
  return (
    <>
      <input className="price-range" type="text" placeholder="From 500KM" />
      <input type="text" placeholder="to 700KM" />
      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};
export const CarBrand = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Hyundai</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Toyota</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Maruti Suzuki</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Mahindra</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Ford</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Kia</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Volkswagen</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Tata</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Honda</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Chevrolet</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Nissan</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Renault</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Skoda</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Datsun</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Mitsubishi</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Fiat</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Land Lover</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Jeep</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Mercedes Benz</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> BMW</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Audi</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Tesla</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Jaguar</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Chevrolet</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Mazda</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Volvo</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Peugeot</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Force Motors</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> MG</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Ashok Leyland</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other Brands</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};
export const MotercycleBrand = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Super Bikes</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Mountain Bikes</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Bajaj</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Yamaha</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Hero Honda</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> CF MOTO</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> KTM</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Honda</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> BMW</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> TVS</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Hero</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Suzuki</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Royal Enfield</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Benelli</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Yatri</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Ducati</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Motor head</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Kawasaki</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Aprilia</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other Brands</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const ScooterBrand = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Suzuki</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Vespa</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Bajaj</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> TVS</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Mahinda</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Honda</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Hero</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Aprilia</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other Brands</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const MobileBrand = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Nokia</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Samsung</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Apple / iPhone</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Mi / Xiaomi</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Oneplus</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Google Pixel</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Sony</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> LG</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Huawei</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Vivo</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Oppo</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Realme</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Blackberry</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Motorola</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Honor</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Asus</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> HTC</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Lenovo</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Gionee</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Micromax</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Lava</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Intex</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Karbonn</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Infinix</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Techno</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other Brands</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const MobileBrands = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Samsung</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Apple / iPhone</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Mi / Xiaomi</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Huawei</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Lenovo</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other Brands</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};
export const WearablesBrand = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Samsung</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Apple / iPhone</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Mi / Xiaomi</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Huawei</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Google</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other Brands</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const WomenSelecStuff = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Jewelry</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Perfumes</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Wallets</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Bags</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Watches</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Hats</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Glasses</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Shoes</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Clothings</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Tradtional Clothings</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other women stuffs</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const MenSelecStuff = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Wallets</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Bags</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Watches</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Hats</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Glasses</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Shoes</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Clothings</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Tradtional Clothings</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other men stuffs</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const KidSelecStuff = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Kids Games</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Stroller</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Beds</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Shoes</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Bags</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Clothings</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Tradtional Clothings</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other kids stuffs</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};

export const FoodsSelecStuff = () => {
  return (
    <>
      <Form>
        <div className="check-btn brand-components">
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Vegetables</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Fruits</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Milk & Yogurts</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Ice Cream</p>
          </div>
          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Cake</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Restaurant Foods</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Street Foods</p>
          </div>

          <div className="check-btn-component">
            <Form.Check aria-label="option 1" />
            <p> Other Foods</p>
          </div>
        </div>
      </Form>

      <div className="show-cancle-btn">
        <button className="cancel-btn">Cancel</button>
        <button className="show-btn">Show results </button>
      </div>
    </>
  );
};