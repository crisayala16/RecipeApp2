import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import axios from 'axios';

const styles = {
  display: 'inline-block',
  float: 'left'
}

export default class IngAutoComplete extends React.Component{
  ComponentDidMount(){
    this.props.setListOfIngredients();
  }
  render() {
    console.log(this.props.listOfIngredients)
    return (
      <div style={styles}>
        <AutoComplete
          searchText={this.props.searchText}
          name='ingredient'
          animated={true}
          dataSource={this.props.listOfIngredients}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        />
      </div>
    );
  }
}