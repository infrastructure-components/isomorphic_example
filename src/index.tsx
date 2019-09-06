import React from 'react';
import "@babel/polyfill";
import {
    Environment,
    IsomorphicApp,
    Middleware,
    Route,
    WebApp,
} from "infrastructure-components";

export default (
    <IsomorphicApp
        stackName = "my-isomorphic-app"
        buildPath = 'build'
        assetsPath = 'assets'
        region='eu-west-1'>

        <Environment name="dev"/>

        <WebApp
            id="main"
            path="*"
            method="GET">

            <Middleware
                callback={(req, res, next) => {
                    console.log("this middleware runs on the server");
                    next();
                }}
            />

            <Route
                path='/'
                name='My Isomorphic App'
                render={(props) => <div>I support server side rendering!</div>}
            />

        </WebApp>
    </IsomorphicApp>
);