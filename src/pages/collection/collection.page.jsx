import React from "react";
import "./collection.styles.scss";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = (props) => {
  console.log(props);
  return (
    <div className="collection">
      <h1>COLLECTION PAGE</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)( CollectionPage);
