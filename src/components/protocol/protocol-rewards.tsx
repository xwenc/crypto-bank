import { siteSettings } from "@settings/site.settings";
import { ProtocolPortfolioItemDetail } from "@ts-types/generated";
import Image from "next/image";
import numeral, { formatAmount } from "@utils/numeral";
import { Table } from "@components/ui/table";

type ProtocolLendingProps = {
  data: ProtocolPortfolioItemDetail;
};

const ProtocolLending: React.FC<ProtocolLendingProps> = (props) => {
  const { data } = props;

  const columns = [
    {
      title: "Pool",
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
    <Table //@ts-ignore
      columns={columns}
      data={data?.token_list}
      rowKey="id"
      scroll={{ x: 900 }}
    />
  );
};
export default ProtocolLending;
