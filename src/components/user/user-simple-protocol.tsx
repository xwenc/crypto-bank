import { UserSimpleProtocol } from "@ts-types/generated";
import Image from "next/image";
import { siteSettings } from "@settings/site.settings";
import { formatPrice } from "@utils/numeral";

type UserSimpleProtocolProps = {
  list: UserSimpleProtocol[];
};

const UserSimpleProtocol = (props: UserSimpleProtocolProps) => {
  const { list } = props;
  return (
    <>
      {list.map((protocol: UserSimpleProtocol, index) => {
        return (
          <div
            key={index}
            className="flex items-center relative text-xs p-2 rounded bg-gray-100 hover:bg-red-200 cursor-pointer"
          >
            <Image
              src={protocol?.logo_url ?? siteSettings.product.placeholder}
              layout="fixed"
              width={20}
              height={20}
              alt=""
            />
            <div className="ml-2 truncate">
              <div className="whitespace-nowrap text-ellipsis overflow-hidden text-xs font-medium text-gray-600">
                {protocol?.name} (
                <span className=" uppercase">{protocol?.chain}</span>)
              </div>
              <div className="text-xs font-medium">
                {formatPrice(protocol?.net_usd_value)}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default UserSimpleProtocol;
