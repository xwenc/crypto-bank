import { siteSettings } from "@settings/site.settings";
import { ProtocolPortfolioItemDetail } from "@ts-types/generated";
import Image from "next/image";
import numeral, { formatAmount } from "@utils/numeral";
import { Table } from "@components/ui/table";
import dayjs from "dayjs";

type ProtocolLendingProps = {
  data: ProtocolPortfolioItemDetail;
};

const ProtocolLending: React.FC<ProtocolLendingProps> = (props) => {
  const { data } = props;

  const columns = [
    {
      title: "Description",
      align: "left",
      width: 300,
      render: () => data?.description
    },
    {
      title: "Expired Time",
      dataIndex: "time_at",
      key: "time_at",
      align: "left",
      render: () =>
        dayjs
          .unix(data?.expired_at ?? 0
          )
          .format("DD MMM YYYY HH:mmA"),
    },
    {
      title: "USD Value",
      dataIndex: "price",
      key: "price",
      align: "right",
      render: () =>
        numeral(data?.usd_value ?? 0).format(),
    },
  ];

  return (
    <Table //@ts-ignore
      columns={columns}
      data={[{}]}
      rowKey="id"
      scroll={{ x: 900 }}
    />
  );
};
export default ProtocolLending;
