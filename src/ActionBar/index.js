import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ActionBarWrapper } from './index.style'

import Button from '../Button'

class ActionBar extends PureComponent {

  getClassByActionType = (buttonType, actionType) => {
    return actionType === buttonType ? 'primary' : 'default'
  }

  renderActionButton = (content, buttonType, actionType) => {
    return (
      <Button
        type={this.getClassByActionType(buttonType, actionType)}
        onClick={e => this.handleChanged(buttonType)}>
        {content}
      </Button>
    )
  }

  handleChanged = buttonType => {
    if (this.props.onChange) {
      this.props.onChange(buttonType)
    }
  }

  renderActionBar = actionType => {
    return (
      <Fragment>
        {this.renderActionButton('All', 'all', actionType)}
        {this.renderActionButton('Completed', 'completed', actionType)}
        {this.renderActionButton('Incompleted', 'incompleted', actionType)}
      </Fragment>
    )
  }

  render() {
    const { type } = this.props
    return (
      <ActionBarWrapper>
        {this.renderActionBar(type)}
      </ActionBarWrapper>
    )
  }
}

ActionBar.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
}

ActionBar.defaultProps = {
  type: 'all'
}

export default ActionBar