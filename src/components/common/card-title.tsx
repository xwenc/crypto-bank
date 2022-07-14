import Image from "next/image";
import Link from "@components/ui/link";
import { ExternalLinkIcon } from "@components/icons/external-link";
import { siteSettings } from "@settings/site.settings";

type CardTitleProps = {
  logoUrl: string;
  linkUrl?: string;
  name: string;
  total: string;
};

const CardTitle: React.FC<CardTitleProps> = ({
  logoUrl,
  linkUrl,
  name,
  total,
}) => {
  return (
    <div className="flex items-center mb-3 mt-8">
      <Image
        src={logoUrl ?? siteSettings.product.placeholder}
        layout="fixed"
        width={20}
        height={20}
        alt=""
      />
      {linkUrl ? (
        <Link
          href={linkUrl}
          className="ml-2 flex-1 flex items-center space-x-2 text-blue-500"
        >
          <span className="text-xl">{name}</span>
          <ExternalLinkIcon className="w-4 h-4" />
        </Link>
      ) : (
        <span className="ml-2 flex-1 text-xl">{name}</span>
      )}

      <span className="text-base font-medium">{total}</span>
    </div>
  );
};

export default CardTitle;
