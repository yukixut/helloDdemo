import React, { Component } from 'react';
import {Menu, Icon, Button} from 'antd';

class Nav extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        return (
            <div>
                <div className="logo" style={{height:'60px'}}/>
                <Menu
                    onClick={this.toggleCollapsed}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme={"dark"}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                </Menu>

            </div>
        )
    }
}
export default Nav;