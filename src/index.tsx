import * as React from 'react';

import {
    IsomorphicApp,
    WebApp,
    Route
} from "infrastructure-components";


export default (
    <IsomorphicApp
        stackName = "my_isomorphic_app"
        buildPath = 'build'
        assetsPath = 'assets'
        region='eu-west-1'>

        <WebApp
            id="main"
            path="*"
            method="GET">

            <Route
                path='/'
                name='My Serverless Isomorphic React App'
                render={(props) => <div>Hello World</div>}
            />

        </WebApp>
</IsomorphicApp>);