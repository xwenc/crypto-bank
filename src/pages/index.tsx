import AdminLayout from "@components/layouts/admin/index";
import Card from "@components/common/card";
import UserHeader from "@components/user/user-header";
import UserTabs from "@components/user/user-tabs";
import UserChains from "@components/user/user-chains";
import UserSimpleProtocol from "@components/user/user-simple-protocol";
import UserComplexProtocol from "@components/user/user-complex-protocol";
import UserWallet from "@components/user/user-wallet";
import UserTokens from "@components/user/user-tokens";
import { useTotalBalanceQuery } from "@data/user/use-total-balance.query";
import { useComplexProtocolListQuery } from "@data/user/use-complex-protocol-list.query";
import { useSimpleProtocolListQuery } from "@data/user/use-simple-protocol-list.query";
import { useTokenListQuery } from "@data/user/use-token-list.query";
export default function Dashboard() {
  const id = "0x5dd596c901987a2b28c38a9c1dfbf86fffc15d77";
  const { data: total } = useTotalBalanceQuery({ id });
  const { data: protocols } = useComplexProtocolListQuery({ id });
  const { data: simpleProtocols } = useSimpleProtocolListQuery({ id });
  const { data: tokens } = useTokenListQuery({ id });

  return (
    <>
      <Card>
        <UserHeader id={id} totalUsdValue={total?.total_usd_value ?? 0} />
      </Card>
      <div className="py-6">
        <UserTabs chainList={total?.chain_list ?? []} />
      </div>
      <Card>
        <UserChains
          chainList={total?.chain_list ?? []}
          totalUsdValue={total?.total_usd_value ?? 0}
        />
        <div className="grid grid-cols-2 md:grid-cols-5 2xl:grid-cols-6 gap-2">
          <UserWallet list={tokens ?? []} />
          <UserSimpleProtocol list={simpleProtocols ?? []} />
        </div>
      </Card>
      <div>
        <UserWallet list={tokens ?? []} isTitle={true} />
        <Card>
          <UserTokens list={tokens ?? []} />
        </Card>
      </div>
      <UserComplexProtocol data={protocols ?? []} />
    </>
  );
}

Dashboard.Layout = AdminLayout;
