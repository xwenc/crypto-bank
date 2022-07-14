import User from "@repositories/user";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchSimpleProtocolList = async (variables: object) => {
  const { data } = await User.simpleProtocolList(
    API_ENDPOINTS.USER_SIMPLE_PROTOCOL_LIST,
    variables
  );
  return data;
};

export const useSimpleProtocolListQuery = (variables: object) => {
  return useQuery<any, Error>([API_ENDPOINTS.USER_SIMPLE_PROTOCOL_LIST], () =>
  fetchSimpleProtocolList(variables)
  );
};
