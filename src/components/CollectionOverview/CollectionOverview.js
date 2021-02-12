import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/selectors/shopSelector";

import CollectionPreview from "../CollectionPreview/CollectionPreview";

import "./CollectionOverview.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

/* 
const mapStateToProps = (state) => ({
  collections: state.shop.collections,
}); 
*/

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
