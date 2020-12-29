import React from "react";
import products from "../data/products";
import CollectionPreview from "../components/CollectionPreview";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: products,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
