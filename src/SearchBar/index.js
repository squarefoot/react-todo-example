import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SearchBarWrapper } from './index.style'

class SearchBar extends PureComponent {

  state = {
    keyword: this.props.keyword
  }

  setKeyword = async (keyword = '') => {
    await this.setState(() => ({ keyword }))
  }

  handleChange = async e => {
    await this.setKeyword(e.target.value)
    if (this.props.onChange) {
      this.props.onChange(this.state.keyword)
    }
  }

  renderInput = () => {
    const { keyword } = this.state
    return (
      <input value={keyword} onChange={this.handleChange} />
    )
  }

  render() {
    return (
      <SearchBarWrapper>
        {this.renderInput()}
      </SearchBarWrapper>
    )
  }
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  onChange: PropTypes.func,
}

SearchBar.defaultProps = {
  keyword: '',
}

export default SearchBar