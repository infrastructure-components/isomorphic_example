import * as React from 'react';

import {
    IsomorphicApp,
    WebApp,
    Route,
    Link,
    Environment
} from "infrastructure-components";



export default (
    <IsomorphicApp
        stackName = "my-isomorphic-app"
        buildPath = 'build'
        assetsPath = 'assets'
        region='eu-west-1'>

        <Environment
            name="staging"
            offlinePort={3001}
        />

        <Environment
            name="prod"
            domain="www.infrastructure-components.com"
        />

        <WebApp
            id="main"
            path="*"
            method="GET">

            <Route
                path='/'
                name='My Serverless Isomorphic React App'
                render={(props) => <div>Hello World</div>}
            />

            <Route
                path='/test'
                name='My Serverless Isomorphic React App'
                render={(props) => <Link to="/">Back to Home</Link>}
            />

        </WebApp>
</IsomorphicApp>);