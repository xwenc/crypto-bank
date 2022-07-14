import { UserChain } from "@ts-types/generated";
import Image from "next/image";
import { formatPrice, percentages } from "@utils/numeral";

type UserChainsProps = {
  chainList: UserChain[];
  totalUsdValue: number;
};

const UserChains: React.FC<UserChainsProps> = (props) => {
  const { chainList, totalUsdValue } = props;
  const filterList = chainList.filter(
    (chain: UserChain) => chain?.usd_value > 0
  );
  return (
    <div className="flex flex-wrap pb-3">
      {filterList.map((chain: UserChain, index) => {
        return (
          <div
            key={index}
            className="flex mb-4 justify-between items-center mr-6"
          >
            <Image
              src={chain?.logo_url}
              layout="fixed"
              width={32}
              height={32}
              alt=""
            />
            <div className="ml-2">
              <div className="text-xs text-gray-500">
                Assets on {chain?.name}
              </div>
              <div className="">
                <span className="mr-2 font-medium text-sm">
                  {formatPrice(chain?.usd_value)}
                </span>
                <span className="text-gray-500 text-xs">
                  {percentages(chain?.usd_value, totalUsdValue)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UserChains;
