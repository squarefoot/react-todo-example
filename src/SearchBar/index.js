import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {SearchBarWrapper} from "./index.style";
import Button from '../Button'

class SearchBar extends Component {
    state = {
        keyword: this.props.keyword
    };

    setKeyword = (keyword = "") => {
        this.setState({keyword});
    };

    handleKeywordChanged = e => {
        const keyword = e.target.value;
        this.setKeyword(keyword);
        if (this.props.keywordChanged) {
            this.props.keywordChanged(keyword);
        }
    };

    handleAddEvent = e => {
        const keyword = this.state.keyword;
        if (keyword) {
            if (this.props.addTodo) {
                this.props.addTodo(keyword);
            }
            this.setKeyword();
            if (this.props.keywordChanged) {
                this.props.keywordChanged('');
            }
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.keyword) {
            this.setKeyword(nextProps.keyword);
        }
    }

    renderInput = () => {
        const {keyword} = this.state;
        return <input value={keyword} onChange={this.handleKeywordChanged}/>;
    };

    renderAddButton = () => {
        return <Button
            type={'primary'}
            onClick={e => this.handleAddEvent(e)}>
            {'Add'}
        </Button>
    };

    renderSearchBar = () => {
        return (
            <Fragment>
                {this.renderInput()}
                {this.renderAddButton()}
            </Fragment>

        )
    };

    render() {
        return (
            <SearchBarWrapper>
                {this.renderSearchBar()}
            </SearchBarWrapper>
        );
    }
}

SearchBar.propTypes = {
    keyword: PropTypes.string,
    keywordChanged: PropTypes.func,
    addTodo: PropTypes.func
};

SearchBar.defaultProps = {
    keyword: ""
};

export default SearchBar;
