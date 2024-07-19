import React  , { useState} from "react";

const BuyStore = ({book}) => {
    const [quantity, setQuantity] = useState(1)

  return (
    <>
    <div>
        <h1>
            Reviews
           

        </h1>
        <form>
        <h3>Give ur review</h3>
            <textarea rows={5} />
            <button>Post review</button>
        </form>
        <div>
            <h3>All reviews</h3>
        </div>
    </div>
      <div>

        <h6>Quantity</h6>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((v, i) => (
            <option value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default BuyStore;
