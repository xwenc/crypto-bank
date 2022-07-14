import { ROUTES } from "@utils/routes";

export const siteSettings = {
  name: "Crypto Wallet",
  description: "",
  logo: {
    url: "",
    alt: "",
    href: "/",
    width: 0,
    height: 0,
  },

  currency: {
    code: "USD",
    symbol: "$",
  },
  sidebarLinks: {
    admin: [
      {
        href: ROUTES.DASHBOARD,
        label: "Profile",
        icon: "UserIcon",
      }
    ],
  },
  product: {
    placeholder: "/product-placeholder.svg",
  },
  avatar: {
    placeholder: "/avatar-placeholder.svg",
  },
};
