import User from "@repositories/user";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchTokenList = async (variables: object) => {
  const { data } = await User.tokenList(
    API_ENDPOINTS.USER_TOKEN_LIST,
    variables
  );
  return data;
};

export const useTokenListQuery = (variables: object) => {
  return useQuery<any, Error>([API_ENDPOINTS.USER_TOKEN_LIST], () =>
  fetchTokenList(variables)
  );
};
