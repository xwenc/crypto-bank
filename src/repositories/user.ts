import Base from "./base";

class User extends Base<{}, {}> {
  totalBalance = async (url: string, variables: object) => {
    return this.find(url, variables);
  };

  simpleProtocolList = async (url: string, variables: object) => {
    return this.find(url, variables);
  };

  complexProtocolList = async (url: string, variables: object) => {
    return this.find(url, variables);
  };

  tokenList = async (url: string, variables: object) => {
    return this.find(url, variables);
  };
}

export default new User();
