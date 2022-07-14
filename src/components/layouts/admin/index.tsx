import { Fragment } from "react";
import MobileNavigation from "@components/layouts/navigation/mobile-navigation";
import { siteSettings } from "@settings/site.settings";
import SidebarItem from "@components/layouts/navigation/sidebar-item";

const AdminLayout: React.FC = ({ children }) => {
  const SidebarItemMap = () => (
    <Fragment>
      {siteSettings.sidebarLinks.admin.map(({ href, label, icon }) => (
        <SidebarItem href={href} label={label} icon={icon} key={href} />
      ))}
    </Fragment>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col transition-colors duration-150">
      <MobileNavigation>
        <SidebarItemMap />
      </MobileNavigation>

      <div className="flex flex-1 pt-8">
        <aside className="shadow w-56 xl:w-76 hidden lg:block overflow-y-auto bg-white pl-8 fixed start-0 bottom-0 h-full pt-10">
          <div className="flex flex-col space-y-6 py-3">
            <SidebarItemMap />
          </div>
        </aside>
        <main className="w-full lg:ps-56 xl:ps-76">
          <div className="p-5 pt-0 md:pt-0 md:p-8 overflow-y-auto h-full">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
