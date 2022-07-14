import { siteSettings } from "@settings/site.settings";
import {
  ProtocolPortfolioItemDetail,
  ProtocolToken,
} from "@ts-types/generated";
import Image from "next/image";
import numeral, { formatAmount } from "@utils/numeral";
import { Table } from "@components/ui/table";
import cx from "classnames";

type ProtocolLendingProps = {
  data: ProtocolPortfolioItemDetail;
};

const ProtocolLending: React.FC<ProtocolLendingProps> = (props) => {
  const { data } = props;

  const getTotal = (list: ProtocolToken[]) => {
    let res: number | string | null = 0;
    let subTotal = list.map((o: ProtocolToken) => {
      return numeral(o.price).multiply(o.amount).value();
    });
    subTotal.map((value) => {
      res = numeral(res).add(value).value();
    });
    return formatAmount(res);
  };

  const _data: {
    logo_url: string[];
    symbol: string[];
    balance: string[];
    rewards: string[];
    usd_value: string;
  }[] = [
    {
      logo_url:
        data?.supply_token_list?.map((o: ProtocolToken) => o.logo_url) ?? [],
      symbol:
        data?.supply_token_list?.map((o: ProtocolToken) => o.symbol) ?? [],
      balance:
        data?.supply_token_list?.map(
          (o: ProtocolToken) => `${formatAmount(o?.amount)} ${o?.symbol}`
        ) ?? [],
      rewards:
        data?.reward_token_list?.map(
          (o: ProtocolToken) => `${formatAmount(o?.amount)} ${o?.symbol}`
        ) ?? [],
      usd_value: getTotal(data?.supply_token_list ?? []),
    },
  ];

  const columns = [
    {
      title: "Pool",
      dataIndex: "logo_url",
      key: "logo_url",
      align: "left",
      width: 400,
      render: (logo_url: string[], { symbol }: { symbol: string[] }) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-2 rounded-full overflow-hidden flex items-center relative">
            {logo_url.map((url, index) => (
              <div
                key={index}
                className={cx("w-5 h-5 relative", {
                  "left-0": index === 0,
                  "-left-2": index != 0,
                })}
              >
                <Image
                  src={url ?? siteSettings.product.placeholder}
                  alt=""
                  layout="fixed"
                  width={20}
                  height={20}
                  className="rounded overflow-hidden"
                />
              </div>
            ))}
          </div>
          <div>{symbol.join(" + ")}</div>
        </div>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      align: "left",
      render: (balance: string[]) =>
        balance.map((value, index) => <div key={index}>{value}</div>),
    },
    {
      title: "USD Value",
      dataIndex: "usd_value",
      key: "usd_value",
      align: "right",
    },
  ];

  return (
    <Table
      //@ts-ignore
      columns={columns}
      data={_data}
      rowKey="id"
      scroll={{ x: 900 }}
    />
  );
};
export default ProtocolLending;
