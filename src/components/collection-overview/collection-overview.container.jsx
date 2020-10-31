import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsFetchingCollections } from "../../redux/shop/shop.selectors";

import CollectionOverview from "./collection-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCollections,
});

const CollectionOverViewContainer = compose(
  connect(mapStateToProps, null),
  WithSpinner
)(CollectionOverview);

export default CollectionOverViewContainer;
