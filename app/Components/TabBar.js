import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import LocalBar from 'material-ui/svg-icons/maps/local-bar';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {Link} from 'react-router-dom';
import Search from './Containers/Search.js'; 

export default class TabBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value){  
    this.setState({
      path: value
    });
  }
  componentDidMount(){
    const path = this.props.location.pathname;
    const val = path.replace('/', '');
    this.setState({
      path: val
    });
  }
  render(){
    return(
      <Tabs
      value={this.state.path}
      onChange={this.handleChange}
      >
        <Tab
          containerElement={<Link to='/' />}
          icon={<AccountCircle/>}
          value=''
        />
        <Tab
          icon={<ActionSearch/>}
          containerElement={<Link to='/search' />}
          value='search'
        />
        <Tab
          icon={<LocalBar />}
          containerElement={<Link to='/saved' />}
          value='saved'
        />
      </Tabs>
    );
  }
};