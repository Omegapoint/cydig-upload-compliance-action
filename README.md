# Upload Compliance State Action

This repository contains the upload compliance state action.

## Development on upload-compliance-state

To start development, create a branch named **feature/your-branch-name**.

Run the command below from the root.

```bash
npm install
```

By first running `npm install` in the root you get the linting and format rules downloaded. So, every time you make a commit, a pre-hook will run to validate the rules. If there are any violation you will se an error or a warning in the terminal. Read more [here](/LinitingAndFormat.md) To fix format warnings run the following command from the **root**:

```bash
npm run format:write
```

Start developing and create tests, to run your test run: `npm run test`. When pushing the code the repository the workflow will build and push your code to the repository. 

### Testing upload-compliance-state to dev-environment

### How to log the badge
The UrlBody class contains all the badges/controls that will be logged in the workflow. The UrlBodyBuilder class is responsible for building the UrlBody. To add a badge for logging in the workflow, follow these steps:
1. Create a corresponding field in the UrlBody.
2. Add a corresponding method to the UrlBodyBuilder class.
3. In the BodyBuilder class where UrlBodyBuilder is called, ensure that you add your newly created method to the method chain, this will include your badge in the logs.

### How to upload the badge/value of control to the database
The ResponseBody class holds all the badges/controls that will be uploaded to the comp-state database. The ResponseBodyBuilder class is responsible for building the ResponseBody. To add a new value to the database, follow these steps:
1. Add a field in the ResponseBody.
2. Implement a method in the ResponseBodyBuilder to add the value to the ResponseBody.
3. Add your newly created method to the method chain in the BodyBuilder under ResponseBodyBuilder.

*NOTE!* Make sure to change function url for 