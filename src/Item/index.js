import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {ItemWrapper} from "./index.style";
import classnames from "classnames";
import Randomize from "randomatic";
import Button from '../Button'

class Item extends Component {
    renderItem = (content, status) => {
        const {keyword} = this.props;
        return (
            <li className={classnames(status)} onClick={this.handleClick}>
                {keyword ? this.splitContent(content, keyword) : content}
            </li>
        );
    };

    renderDeleteButton = () => {
        return <Button
            type={'transparent'}
            onClick={e => this.handleDeleteClick(e)}>
            {'❌'}
        </Button>
    };

    handleClick = e => {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    };

    handleDeleteClick = e => {
        if (this.props.onDeleteClick) {
            this.props.onDeleteClick(e);
        }
    };

    splitContent = (content, keyword) => {
        let contentList = content
            .split(keyword)
            .map(atom => <span key={Randomize("a0", 10)}>{atom}</span>)
            .reduce((prev, current) => [prev, this.renderKeyword(keyword), current]);
        return <Fragment>{contentList}</Fragment>;
    };

    renderKeyword = keyword => {
        return (
            <span className="highlight" key={Randomize("a0", 10)}>
        {keyword}
      </span>
        );
    };

    render() {
        const {children, status} = this.props;
        return (
            <ItemWrapper>
                {this.renderItem(children, status)}
                {this.renderDeleteButton()}
            </ItemWrapper>
        );
    }
}

Item.propTypes = {
    status: PropTypes.string,
    keyword: PropTypes.string,
    onClick: PropTypes.func,
    onDeleteClick: PropTypes.func
};

Item.defaultProps = {
    status: "incomplete"
};

export default Item;
