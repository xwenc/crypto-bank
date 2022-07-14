import User from "@repositories/user";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchTotalBalance = async (variables: object) => {
  const { data } = await User.totalBalance(
    API_ENDPOINTS.USER_TOTAL_BALANCE,
    variables
  );
  return data;
};

export const useTotalBalanceQuery = (variables: object) => {
  return useQuery<any, Error>([API_ENDPOINTS.USER_TOTAL_BALANCE], () =>
    fetchTotalBalance(variables)
  );
};
