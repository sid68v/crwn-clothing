import React, { useEffect } from "react";
import "../shoppage/shoppage.styles.scss";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionOverViewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.page.container";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};
export default connect(null, mapDispatchToProps)(ShopPage);
