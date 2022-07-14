import {
  UserComplexProtocol,
  ProtocolPortfolioItem,
} from "@ts-types/generated";
import CardTitle from "@components/common/card-title";
import Protocol from "@components/protocol";
import { total } from "@utils/numeral";

type useComplexProtocolProps = {
  data: UserComplexProtocol[];
};

const UserComplexProtocol = (props: useComplexProtocolProps) => {
  const { data } = props;

  return (
    <>
      {data.map((protocol: UserComplexProtocol, index: number) => {
        const totalPrice = total(
          protocol?.portfolio_item_list.map((o) => o?.stats.net_usd_value)
        );
        return (
          <div key={index}>
            <CardTitle
              logoUrl={protocol?.logo_url}
              linkUrl={protocol?.site_url}
              name={protocol?.name}
              total={totalPrice}
            />

            <div className="space-y-5">
              {protocol?.portfolio_item_list.map(
                (o: ProtocolPortfolioItem, index) => (
                  <Protocol data={o} key={index} />
                )
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default UserComplexProtocol;
