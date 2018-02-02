import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { TodoWrapper } from './index.style'

import SearchBar from '../SearchBar'
import Item from '../Item'
import ActionBar from '../ActionBar'

class Todo extends Component {

  state = {
    keyword: this.props.keyword,
    list: this.props.list,
    showType: this.props.showType,
  }

  renderSearchBar = keyword => {
    return (
      <SearchBar keyword={keyword} onChange={this.updateKeyward} />
    )
  }

  renderTodoList = (list, showType, keyword) => {
    let renderList
    switch (showType) {
      case 'all':
        renderList = list
          .filter(item => item.content.includes(keyword))
          .map(item => this.renderItem(item))
        break
      case 'completed':
        renderList = list
          .filter(item => item.status === 'completed' && item.content.includes(keyword))
          .map(item => this.renderItem(item))
        break
      case 'incompleted':
        renderList = list
          .filter(item => item.status === 'incompleted' && item.content.includes(keyword))
          .map(item => this.renderItem(item))
        break
      default:
        renderList = list
          .filter(item => item.content.includes(keyword))
          .map(item => this.renderItem(item))
    }
    return <ul>{renderList}</ul>
  }

  renderEmptyContainer = () => 'No Items'

  renderActionBar = type => {
    return <ActionBar type={type} onChange={this.updateShowType} />
  }

  renderItem = item => (
    <Item
      key={item.id}
      status={item.status}
      onClick={() => this.handleItemClicked(item.id)}
      keyword={this.state.keyword}>
      {item.content}
    </Item>
  )

  handleItemClicked = id => {
    const { list } = this.state
    let clickedItem = list.find(item => item.id === id)
    let itemStatus = clickedItem.status
    clickedItem.status = itemStatus === 'completed' ? 'incompleted' : 'completed'
    this.setState({ list })
  }

  updateKeyward = keyword => {
    this.setState(() => ({ keyword }))
  }

  updateShowType = showType => {
    this.setState(() => ({ showType }))
  }

  render() {
    const { keyword, showType, list } = this.state
    const { width } = this.props
    return (
      <TodoWrapper width={width}>
        {list.length > 0 && this.renderSearchBar(keyword)}
        {list.length > 0 ? this.renderTodoList(list, showType, keyword) : this.renderEmptyContainer()}
        {list.length > 0 && this.renderActionBar(showType)}
      </TodoWrapper>
    )
  }
}

Todo.propTypes = {
  list: PropTypes.array,
  keyword: PropTypes.string,
  showType: PropTypes.string,
  width: PropTypes.string,
}

Todo.defaultProps = {
  list: [],
  showType: 'all',
  keyword: '',
  width: '300px'
}

export default Todo