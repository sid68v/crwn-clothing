import React, { Component } from "react";
import "../shoppage/shoppage.styles.scss";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.page";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshotTomap,
} from "../../firebase/firebase.utils.js";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsSnapshotTomap(snapshot);
      this.props.updateCollections(collections);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={this.state.isLoading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.state.isLoading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (data) => dispatch(updateCollections(data)),
  };
};
export default connect(null, mapDispatchToProps)(ShopPage);
