export type CyDigConfig = {
  teamName: string;
  usingAzure: boolean;
  threatModeling: {
    date: string;
    boardsTag: string;
  };
  pentest: {
    date: string;
    boardsTag: string;
  };
  github: {
    usingRepos: boolean;
    repos: {
      username: string;
    };
    usingBoards: boolean;
    boards: {
      nameOfBoard: string;
    };
  };
  scaTool: {
    nameOfTool: string;
    owaspDependencyCheck: {
      reportPath: string;
    };
  };
  sastTool: {
    nameOfTool: string;
    semgrep: {
      reportPath: string;
    };
  };
  codeQualityTool: {
    nameOfTool: string;
  };
};
