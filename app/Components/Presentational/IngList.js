import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Clear from 'material-ui/svg-icons/content/clear';
import Divider from 'material-ui/Divider';
import helpers from './../utils/helpers.js';

const IngList = (props) => {
  let data = props.data;
  return(
  <MobileTearSheet>
    <List>
    <Subheader>Indredients</Subheader>
      {
        data.map((item)=>{
          return(
            <ListItem
            key={item}
            primaryText={item}
            rightIcon={<Clear onClick={helpers.removeIng}/>}
            />
          )
        })
      }
    </List>
  </MobileTearSheet>
  );
};

export default IngList;