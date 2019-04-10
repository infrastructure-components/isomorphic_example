# Infrastructure-Components: Isomorphic Example

**Create Your Serverless Isomorphic React App**

This project serves as a minimum example of how to create a **Serverless Isomorphic React App** with
[infrastructure-components](https://github.com/infrastructure-components/infrastructure-components).

## Getting started

### Installation

Fork or clone [this repository](https://github.com/infrastructure-components/isomorphic_example) and run `npm install`.

### Develop Your App

The file `src/index.tsx` serves as entry point of your app. It exports a `IsomorphicApp` component as default.
This component contains all the configuration you need:

- stackName: the (arbitrary) name of your app, please use only lower case characters and hyphens for the name serves as identifier
within AWS
- buildPath: the relative path to the folder within your project, where to put the build-resources, e.g. "build". You may
want to add this name to your .gitignore file to keep your repository free from compiled files.
- assetsPath: the relative path at runtime, where to find binary files, e.g. "assets"
- region: the AWS-region you want your infrastructure to reside after deployment, e.g. 'us-east-1'

Your `IsomorphicApp` should contain at least one `WebApp`. This is the equivalent to a `React-Router` plus `Switch`.

- id: the (arbitrary) name of the webapp, please use only lower case characters
- path: an placeholder for the paths that this app will serve, use "*" as placeholder for "all". See `Express.js` paths.
- method: the http-method that this app will work with, e.g. "GET", "POST", "PUT", "DELETE"

Within a `WebApp` component, you can specify `Route`(s). This is the equivalent to a `Route` in `React-Router`.

- path: the path (relative to your url) to serve
- name: the arbitrary name of the route
- render: function that receives (props) and must return your React-Component.
- component: (alternative to render) provide a React-Component to be rendered

### Build

Simply use `npm run build` to build your app. Your `package.json` defines this command (`scripts build src/index.tsx`).
As you can see, this points the entry-point of your app.

**NOTE**: Running the `build`-command adds further scripts to your `package.json`: `${webapp-id}`, `start`, `deploy`.

### Run your WebApp in Hot-Development-Mode

When you develop a React-App, you may want to see your changes directly, without the need of triggering the build+start
commands manually every time.

Use the script `npm run ${webapp-id}` with the `id` you specified in the `WebApp`-component. This starts the
webpack-hot-middleware.

Open your the url `localhost:3000` in a browser.

Your changes become effective once you reload the browser-page. Have a look at the output of
your console to not miss any error messages.


**NOTE:**: In this mode, the WebApp runs as a Single-Page-App without a backend!

### Run Your Isomorphic React App Offline

The script `npm run start` starts the serverless stack locally. Open your the url `localhost:3000` in a browser.
Changes at your source code require running `npm run build` before they become effective in this mode!

### Deploy your App to AWS

The script `npm run deploy` deploys the whole application stack (CloudFormation, Lambda, S3, Api-Gateway, IAM) to AWS.
The `id` of your `IsomorphicApp` serves as basis for the resource-names within AWS.

You must specify the credentials of a programmatic AWS account in your `.env` file, like:

```
AWS_ACCESS_KEY_ID=****
AWS_SECRET_ACCESS_KEY=****
```

This account needs to have at least the permissions of the following policy:

```
{
    "Statement": [
        {
            "Action": [
                "s3:*",
                "apigateway:*",
                "lambda:*",
                "logs:*",
                "cloudformation:*",
                "iam:CreateRole",
                "iam:DeleteRole",
                "iam:DeleteRolePolicy",
                "iam:GetRole",
                "iam:PassRole",
                "iam:PutRolePolicy",
                "execute-api:ManageConnections",
                "cloudfront:UpdateDistribution"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ],
    "Version": "2012-10-17"
}
```

## Help and Support

Infrastructure-Components are under active development. If you find a bug or need support of any kind,
please have a look at our [Spectrum-Chat](https://spectrum.chat/infrastructure).

Further, we frequently publish descriptions and tutorials on new features on [Medium.com](https://medium.com/@fzickert).