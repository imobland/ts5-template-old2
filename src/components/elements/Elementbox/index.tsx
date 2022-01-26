import React from "react";

interface Props {
  tagName?: string;
}

class ElementBox extends React.Component<Props> {
  render() {
    return React.createElement(this.props.tagName, {}, this.props.children);
  }
}

export default ElementBox;
