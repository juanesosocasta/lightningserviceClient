import React from "react";
import { Layout, Tabs } from "antd";

import Login from "./components/Login";
//import Register from "./Components/Register";entre los tab pane hay un register
import Logo from "./img/lightning_Service__2_-removebg-preview.png";
function App() {
  const { Content } = Layout;
    const { TabPane } = Tabs;
  return (
    
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="u de caldas" />
        </h1>

        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              <Login />
            </TabPane>
            <TabPane tab={<span>Nuevo usuario</span>} key="2">
             
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
