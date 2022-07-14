import Image from "next/image";
import { siteSettings } from "@settings/site.settings";
import { formatPrice } from "@utils/numeral";

type UserHeaderProps = {
  id: string;
  totalUsdValue: number;
};

const UserHeader: React.FC<UserHeaderProps> = (props) => {
  const { id, totalUsdValue } = props;
  return (
    <div className="h-full md:flex items-center">
      <div className="flex-1 flex items-center">
        <div className="w-4 h-4 md:w-20 md:h-20 mr-2 md:mr-6 relative rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-200">
          <Image src={siteSettings.avatar.placeholder} layout="fill" alt="" />
        </div>
        <div className="flex-1 flex items-center md:block max-w-40 md:max-w-none">
          <h3 className="text-xl font-bold mb-2 whitespace-nowrap mr-2 md:mr-0">--</h3>
          <p className="text-ellipsis overflow-hidden text-sm text-gray-500">{id}</p>
        </div>
      </div>
      <div className="text-3xl font-bold">{formatPrice(totalUsdValue)}</div>
    </div>
  );
};
export default UserHeader;
