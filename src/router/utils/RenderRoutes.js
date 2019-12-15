import React from 'react';
import { RouteWithSubRoutes } from './RouteWithSubRoutes'

export const RenderRoutes = (
    {routes}) => {
    return (
        routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
        )
    };
