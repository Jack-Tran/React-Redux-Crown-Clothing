import React from "react";
import MenuItem from "./MenuItem";
import directory from "../data/directory";
import "./Directory.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: directory,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
