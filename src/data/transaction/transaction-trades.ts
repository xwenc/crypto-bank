import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const useTransactionTradesQuery = () => {
  return useQuery<any, Error>([API_ENDPOINTS.TRANSACTION_TRADES], () => {});
};
