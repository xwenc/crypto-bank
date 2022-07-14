import { siteSettings } from "@settings/site.settings";
import { ProtocolPortfolioItemDetail } from "@ts-types/generated";
import Image from "next/image";
import numeral, { formatAmount } from "@utils/numeral";
import { Table } from "@components/ui/table";
import isEmpty from "lodash/isEmpty";

type ProtocolLendingProps = {
  data: ProtocolPortfolioItemDetail;
};

const ProtocolLending: React.FC<ProtocolLendingProps> = (props) => {
  const { data } = props;

  const getColumns = (type: string) => [
    {
      title: type === "supply" ? "Supplied" : "Borrowed",
      dataIndex: "logo_url",
      key: "logo_url",
      align: "left",
      width: 400,
      render: (logo_url: string, { symbol }: { symbol: string }) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-2 rounded-full overflow-hidden">
            <Image
              src={logo_url ?? siteSettings.product.placeholder}
              alt=""
              layout="fixed"
              width={20}
              height={20}
              className="rounded overflow-hidden"
            />
          </div>
          <div>{symbol}</div>
        </div>
      ),
    },
    {
      title: "Balance",
      dataIndex: "amount",
      key: "amount",
      align: "left",
      render: (amount: number, { symbol }: { symbol: string }) =>
        `${formatAmount(amount)} ${symbol}`,
    },
    {
      title: "USD Value",
      dataIndex: "price",
      key: "price",
      align: "right",
      render: (price: number, { amount }: { amount: number }) =>
        numeral(price).multiply(amount).format(),
    },
  ];

  return (
    <div className="space-y-4">
      {data?.health_rate ? (
        <div className="flex items-center">
          <span className="text-gray-400 text-sm mr-3">Health Rate</span>
          <span className="text-sm font-medium">
            {formatAmount(data?.health_rate)}
          </span>
        </div>
      ) : null}
      <Table //@ts-ignore
        columns={getColumns("supply")}
        data={data?.supply_token_list}
        rowKey="id"
        scroll={{ x: 900 }}
      />
      {isEmpty(data?.borrow_token_list) ? null : (
        <Table //@ts-ignore
          columns={getColumns("borrow")}
          data={data?.borrow_token_list}
          rowKey="id"
          scroll={{ x: 900 }}
        />
      )}
    </div>
  );
};
export default ProtocolLending;
