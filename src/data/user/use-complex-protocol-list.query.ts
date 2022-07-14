import User from "@repositories/user";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchComplexProtocolList = async (variables: object) => {
  const { data } = await User.complexProtocolList(
    API_ENDPOINTS.USER_COMPLEX_PROTOCOL_LIST,
    variables
  );
  return data;
};

export const useComplexProtocolListQuery = (variables: object) => {
  return useQuery<any, Error>([API_ENDPOINTS.USER_COMPLEX_PROTOCOL_LIST], () =>
  fetchComplexProtocolList(variables)
  );
};
