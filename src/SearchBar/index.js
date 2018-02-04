import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchBarWrapper } from "./index.style";

class SearchBar extends Component {
  state = {
    keyword: this.props.keyword
  };

  setKeyword = (keyword = "") => {
    this.setState(() => ({ keyword }));
  };

  handleKeywordChanged = e => {
    const keyword = e.target.value;
    this.setKeyword(keyword);
    if (this.props.keywordChanged) {
      this.props.keywordChanged(keyword);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword) {
      this.setKeyword(nextProps.keyword);
    }
  }

  renderInput = () => {
    const { keyword } = this.state;
    return <input value={keyword} onChange={this.handleKeywordChanged} />;
  };

  render() {
    return <SearchBarWrapper>{this.renderInput()}</SearchBarWrapper>;
  }
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordChanged: PropTypes.func
};

SearchBar.defaultProps = {
  keyword: ""
};

export default SearchBar;
