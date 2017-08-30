import React from 'react';
import Clear from 'material-ui/svg-icons/content/clear';

const styles = {
  float: "right"
};
export default class RemoveIng extends React.Component{
  removeIng(event){
    const item = this.props.item;
    this.props.removeIngredient(item);
  }
  render(){
    return(
      <Clear style={styles} onClick={this.removeIng.bind(this)}/>
    );
  }
}