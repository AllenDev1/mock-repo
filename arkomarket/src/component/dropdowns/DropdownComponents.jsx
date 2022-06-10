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
