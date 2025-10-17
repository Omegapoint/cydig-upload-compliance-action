# Upload Compliance State Action

This repository contains the upload compliance state action.

## Development on upload-compliance-state

To start development, create a branch named **feature/your-branch-name**.

Run the command below from the root.

```bash
npm install
```

By first running npm install in the root you get the linting and format dependencies downloaded. To enable so that every time you make a commit, a pre-hook will run to validate the rules read more [here](/LinitingAndFormat.md). To fix format warnings manually run the following command from the **root**:

```bash
npm run format:write
```

Start developing and create tests, to run your test run: `npm run test`. When pushing the code to the repository and creating a pull request a workflow will automatically be triggered and all the cydig actions (compliance-action, azure-compliance-action and upload-compliance-action) and all the tests will be executed in the test.yml workflow.

### How to trigger the dev-function for upload-compliance-state in the test workflow
1. Ensure that the following secrets have been created with values from the dev environment:

* AZURE_CLIENT_ID_DEV
* AZURE_SUBSCRIPTION_ID_DEV
* AZURE_TENANT_ID
* URL_UPLOAD_DEV

2. Make sure these secrets are called in the workflow you are using.
For example:

```
- name: 'Az CLI login'
  uses: azure/login@v1
  with:
    client-id: ${{ secrets.AZURE_CLIENT_ID_DEV }}
    tenant-id: ${{ secrets.AZURE_TENANT_ID }}
    subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID_DEV }}
```

[Read more here on how to create a GitHub secret.](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)

### How to upload the compliance state of control to the database
The ResponseBody class holds all the compliance state that will be uploaded to the comp-state database. The ResponseBodyBuilder class is responsible for building the ResponseBody. To add a new value to the database, follow these steps:
1. Add a field in the ResponseBody.
2. Implement a method in the ResponseBodyBuilder to add the value to the ResponseBody.
3. Add your newly created method to the method chain in the BodyBuilder under ResponseBodyBuilder.

## Creating a release for the action
At cydig, we follow [Semantic Versioning](https://semver.org/) for our action releases. Practically, this means that when you're developing and creating a pull request (PR), you can assign one of three labels to the PR: Major, Minor, or Patch. These labels correspond to version numbers in the format vX.Y.Z, where X is the major version, Y is the minor version, and Z is the patch version.For example, if you add the "Patch" label to your PR, and it's approved and merged, a workflow will automatically run to create a release for the action. Here's an illustration of how the version number would change before and after the PR:
* Version before PR: v1.0.1
* Version after PR: v1.0.2
