import React, { Component } from 'react';
import Nav from '../../components/menu';
import TableDemo from '../../components/table';
import {Layout, Menu, Icon} from 'antd';
const {  Header, Content, Sider,  } = Layout;
class Index extends Component {

    state ={
        collapsed: false,
    }
    toggle= () =>{
        console.log('111')
        this.setState({
            collapsed : !this.state.collapsed,
        })
    }

    render() {
        return (

            <div>
                <Layout>
                    <Sider collapsed={this.state.collapsed}>
                        <Nav></Nav>
                    </Sider>
                    <Layout>
                        <Header className="header">
                            <div className="logo" />
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style = {{
                                    color: '#ffff',
                                    float: 'left',
                                    'marginTop': 20,
                                }}
                            />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' ,width:'100%'}}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280,
                            }}
                        >
                            <TableDemo></TableDemo>
                        </Content>
                    </Layout>
                </Layout>

            </div>
        )
    }
}
export default Index;