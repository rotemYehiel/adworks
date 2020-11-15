import React, { PureComponent } from 'react';

export default class Filter extends PureComponent {
    state = {
        term: '',
    };

    onChangeHandler = (ev) => {
        const { value, name } = ev.target;
        this.setState({ [name]: value }, () => {
            this.props.onFilter({ ...this.state });
        });
    };

    render() {
        return (
            <form className="filter">
                <input
                    type="text"
                    placeholder="Filter by title..."
                    onChange={this.onChangeHandler}
                    name="term"
                    value={this.state.term}
                />
            </form>
        );
    }
}
