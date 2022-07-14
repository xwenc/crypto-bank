import Image from "next/image";
import { UserToken } from "@ts-types/generated";
import { Table } from "@components/ui/table";
import { siteSettings } from "@settings/site.settings";
import numeral, { formatPrice, formatAmount } from "@utils/numeral";

type UserTokensProps = {
  list: UserToken[];
};

const UserTokens: React.FC<UserTokensProps> = (props) => {
  const { list } = props;
  const columns = [
    {
      title: "Assets",
      dataIndex: "logo_url",
      key: "logo_url",
      align: "left",
      width: 400,
      render: (logo_url: string, { name }: { name: string }) => (
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
          <div>{name}</div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "left",
      render: (price: number) => formatPrice(price),
    },
    {
      title: "Balance",
      dataIndex: "amount",
      key: "amount",
      align: "left",
      render: (amount: number) => formatAmount(amount),
    },
    {
      title: "Value",
      dataIndex: "price",
      key: "price",
      align: "right",
      render: (price: number, { amount }: { amount: number }) =>
        numeral(price).multiply(amount).format(),
    },
  ];

  return (
    <div className="rounded overflow-hidden shadow mb-6">
      <Table
        //@ts-ignore
        columns={columns} data={list} rowKey="id" scroll={{ x: 900 }} />
    </div>
  );
};
export default UserTokens;
