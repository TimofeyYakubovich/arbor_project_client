import React from 'react';
import { RoteNames, publicRoutes } from '../router';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Events from '../pages/Events';

const AppRouter = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/arbor1" replace />} />
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} Component={route.component}/>
            )}
            {/* <Route path="*" element={<Events />} /> */}
            <Route path="*" element={<Navigate to="/arbor1" replace />} />
        </Routes>
    );
};

export default AppRouter;