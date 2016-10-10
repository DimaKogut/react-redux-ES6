import React from 'react';

export default class UserList extends React.Component {
  render() {
    const { author } = this.props;
    return (

      <li>
        <h2>
          {author}
        </h2>
      </li>

    );
  }
}