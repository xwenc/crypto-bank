import { UserToken } from "@ts-types/generated";
import Image from "next/image";
import { total } from "@utils/numeral";
import CardTitle from "@components/common/card-title";

type UserWalletProps = {
  list: UserToken[];
  isTitle?: boolean;
};

const UserWallet: React.FC<UserWalletProps> = (props) => {
  const { list, isTitle } = props;
  const totalPrice = total(list.map((o) => o.price));
  if (isTitle) {
    return (
      <CardTitle logoUrl="/chains/wallet.svg" name="Wallet" total={totalPrice} />
    );
  }
  return (
    <div className="flex items-center relative text-xs p-2 rounded bg-gray-100 hover:bg-red-200 cursor-pointer">
      <Image
        src="/chains/wallet.svg"
        layout="fixed"
        width={20}
        height={20}
        alt=""
      />
      <div className="ml-2">
        <div className="whitespace-nowrap text-ellipsis overflow-hidden text-xs font-medium text-gray-600">
          Wallet
        </div>
        <div className="text-xs font-medium">
          {totalPrice}
        </div>
      </div>
    </div>
  );
};
export default UserWallet;
