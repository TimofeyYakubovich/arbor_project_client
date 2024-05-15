import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoteNames } from '../router';

const Navbar: FC = () => {
    const router = useNavigate()
    const location = useLocation();

    const isActive = (route: string) => {
        return location.pathname === route;
    };

    return (
        <Layout.Header>
            <Row justify='start'>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item 
                        onClick={() => router(RoteNames.ARBOR1)}
                        key={1}
                        style={isActive(RoteNames.ARBOR1) ? {color: 'white'} : {}}
                        
                    >
                        Беседка 1
                    </Menu.Item>
                    <Menu.Item 
                        onClick={() => router(RoteNames.ARBOR2)}
                        key={1}
                        style={isActive(RoteNames.ARBOR2) ? {color: 'white'} : {}}
                    >
                        Беседка 2
                    </Menu.Item>
                    <Menu.Item 
                        onClick={() => router(RoteNames.ARBOR3)}
                        key={1}
                        style={isActive(RoteNames.ARBOR3) ? {color: 'white'} : {}}
                    >
                        Беседка 3
                    </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;