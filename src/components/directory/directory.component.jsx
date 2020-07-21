import React, { Component } from "react";
import "../directory/directory.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

const Directory = (props) => {
  return (
    <div className="directory-menu">
      {props.sections.map(({ id, ...remainingSectionProps }) => (
        <MenuItem key={id} {...remainingSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
