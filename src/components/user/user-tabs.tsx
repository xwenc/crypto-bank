import { UserChain } from "@ts-types/generated";

type UserTabsProps = {
  chainList: UserChain[];
};

const UserTabs: React.FC<UserTabsProps> = (props) => {
  const { chainList } = props;
  return (
    <div className="h-full flex items-start flex-wrap">
      <div className="rounded inline-flex px-4 bg-blue-500 text-white cursor-pointer text-sm mr-2 mb-2 leading-8 text-center">
        All Chains
      </div>
      {chainList.map((chain: UserChain, index) => {
        return (
          <div
            key={index}
            className="rounded inline-flex px-4 bg-white cursor-pointer text-sm mr-2 mb-2 leading-8 text-center"
          >
            {chain?.name}
          </div>
        );
      })}
    </div>
  );
};
export default UserTabs;
