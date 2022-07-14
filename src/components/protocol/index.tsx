import {
  ProtocolPortfolioItem,
  ProtocolPortfolioName,
} from "@ts-types/generated";
import Card from "@components/common/card";
import CardTag from "@components/common/card-tag";

import ProtocolDeposit from "./protocol-deposit";
import ProtocolFarming from "./protocol-farming";
import ProtocolGovernance from "./protocol-governance";
import ProtocolInsuranceBuyer from "./protocol-insurance-buyer";
import ProtocolInsuranceSeller from "./protocol-insurance-seller";
import ProtocolLending from "./protocol-lending";
import ProtocolLeveragedFarming from "./protocol-leveraged-farming";
import ProtocolLiquidityPool from "./protocol-liquidity-pool";
import ProtocolLocked from "./protocol-locked";
import ProtocolRewards from "./protocol-rewards";
import ProtocolStaked from "./protocol-staked";
import ProtocolYield from "./protocol-yield";
import ProtocolVesting from "./protocol-vesting";

type ProtocolProps = {
  data: ProtocolPortfolioItem;
};

const Protocol: React.FC<ProtocolProps> = (props) => {
  const { data } = props;

  const renderProtocol = (data: ProtocolPortfolioItem) => {
    switch (data?.name) {
      case ProtocolPortfolioName.Deposit:
        return <ProtocolDeposit data={data?.detail} />;
      case ProtocolPortfolioName.Farming:
        return <ProtocolFarming data={data?.detail} />;
      case ProtocolPortfolioName.Governance:
        return <ProtocolGovernance data={data?.detail} />;
      case ProtocolPortfolioName.InsuranceBuyer:
        return <ProtocolInsuranceBuyer data={data?.detail} />;
      case ProtocolPortfolioName.InsuranceSeller:
        return <ProtocolInsuranceSeller data={data?.detail} />;
      case ProtocolPortfolioName.Lending:
        return <ProtocolLending data={data?.detail} />;
      case ProtocolPortfolioName.LeveragedFarming:
        return <ProtocolLeveragedFarming data={data?.detail} />;
      case ProtocolPortfolioName.LiquidityPool:
        return <ProtocolLiquidityPool data={data?.detail} />;
      case ProtocolPortfolioName.Locked:
        return <ProtocolLocked data={data?.detail} />;
      case ProtocolPortfolioName.Rewards:
        return <ProtocolRewards data={data?.detail} />;
      case ProtocolPortfolioName.Staked:
        return <ProtocolStaked data={data?.detail} />;
      case ProtocolPortfolioName.Yield:
        return <ProtocolYield data={data?.detail} />;
      case ProtocolPortfolioName.Vesting:
        return <ProtocolVesting data={data?.detail} />;
      default:
        return "Not found portfolio";
    }
  };

  return (
    <Card>
      <CardTag name={data?.name} />
      <div className="mt-4">{renderProtocol(data)}</div>
    </Card>
  );
};

export default Protocol;
