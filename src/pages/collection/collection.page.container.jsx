import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectisCollectionsLoaded } from "../../redux/shop/shop.selectors";

import CollectionPage from "./collection.page";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectisCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps, null),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
