import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import LocalBar from 'material-ui/svg-icons/maps/local-bar';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {Link} from 'react-router-dom';
import Search from './Containers/Search.js'; 

const TabBar = () => (
  <Tabs>
    <Tab
      containerElement={<Link to='/home' />}
      icon={<AccountCircle/>}
    />
    <Tab
      icon={<ActionSearch/>}
      containerElement={<Link to='/search' />}
    />
    <Tab
      icon={<LocalBar />}
      containerElement={<Link to='/saved' />}
    />
  </Tabs>
);

export default TabBar;