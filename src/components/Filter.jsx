import React, { PureComponent } from 'react';

export default class Filter extends PureComponent {
    state = {
        term: '',
        // filterType: ''
    };
    // handleChange = (event) => {
    //     this.setState(
    //         {
    //             ...this.state,
    //             filterType: event.target.value
    //         })
    // }

    onChangeHandler = (ev) => {
        const { value, name } = ev.target;
        this.setState({ [name]: value }, () => {
            this.props.onFilter({ ...this.state });
        });
    };

    render() {
        return (
            <form className="filter">
                {/* <select value={this.state.filterType} onChange={this.handleChange}>
                    <option value="title">Title</option>
                    <option value="location">Location</option>
                </select> */}
                {(this.state.filterType === "title") ? (<input
                    type="text"
                    placeholder="Filter by title..."
                    onChange={this.onChangeHandler}
                    name="term"
                    value={this.state.term}
                />) : (<input
                    type="text"
                    placeholder="Filter by location..."
                    onChange={this.onChangeHandler}
                    name="term"
                    value={this.state.term}
                />)}
            </form>
        );
    }
}
