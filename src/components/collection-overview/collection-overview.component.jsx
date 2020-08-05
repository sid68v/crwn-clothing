import React from "react";
import "./collection-overview.styles.scss";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";



import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = (props) => {
  return (
    <div className="collection-overview">
      {props.collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
