import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import helpers from './../utils/helpers.js';
import RemoveIng from './RemoveIng.js';

export default class IngList extends React.Component{
  render(){
  let data = this.props.data;
    return(
    <MobileTearSheet>
      <List>
      <Subheader>Indredients</Subheader>
        {
          data.map((item)=>{
            return(
              <ListItem
              key={item}
              value={item}
              primaryText={item}
              rightIcon={<RemoveIng removeIngredient={this.props.removeIngredient} item={item}/>}
              />
            )
          })
        }
      </List>
    </MobileTearSheet>
    );
  }
};