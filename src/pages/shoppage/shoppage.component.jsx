import React, { Component } from "react";
import "../shoppage/shoppage.styles.scss";

import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionOverViewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.page.container";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};
export default connect(null, mapDispatchToProps)(ShopPage);
