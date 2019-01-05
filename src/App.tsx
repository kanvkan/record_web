import * as React from 'react';
import { Layout, Menu } from 'antd';
import Record from 'src/Components/Record/Record'
import './App.less';
const {
  Header, Content, Sider,
} = Layout;

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo"><span>家庭健康</span></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">血糖</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['_record']}
                style={{ height: '100%' }}
              >
                <Menu.Item key="_record">血糖记录</Menu.Item>
                <Menu.Item key="_record_history">血糖趋势</Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Record />
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default App;