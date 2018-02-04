import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { ItemWrapper } from "./index.style";
import classnames from "classnames";
import Randomize from "randomatic";

class Item extends Component {
  renderItem = (content, status) => {
    const { keyword } = this.props;
    return (
      <li className={classnames(status)} onClick={this.handleClick}>
        {keyword ? this.splitContent(content, keyword) : content}
      </li>
    );
  };

  handleClick = e => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  splitContent = (content, keywrod) => {
    let contentList = content
      .split(keywrod)
      .map(atom => <span key={Randomize("a0", 10)}>{atom}</span>)
      .reduce((prev, current) => [prev, this.renderKeywrod(keywrod), current]);
    return <Fragment>{contentList}</Fragment>;
  };

  renderKeywrod = keyword => {
    return (
      <span className="highlight" key={Randomize("a0", 10)}>
        {keyword}
      </span>
    );
  };

  render() {
    const { children, status } = this.props;
    return <ItemWrapper>{this.renderItem(children, status)}</ItemWrapper>;
  }
}

Item.propTypes = {
  status: PropTypes.string,
  keyword: PropTypes.string,
  onClick: PropTypes.func
};

Item.defaultProps = {
  status: "incompleted"
};

export default Item;
