import { useState } from "react";
import { sidebarLinks } from "./Data";
import NavItem from "./NavItem";
import { HiMenu, HiX } from "react-icons/hi";
import profile from "../../assets/profile.jpeg";
import MusicPlayer from "./MusicPlayer";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
 const closeSidebar = () => {
    if (window.innerWidth < 768) setOpen(false); // close only on mobile
  };
  return (
    <>
      {/* Mobile Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 md:hidden fixed top-0 left-0 right-0 bg-gray-50 z-50 ">
        {/* Profile (mobile only) */}
        <div className="flex items-center gap-3">
          <img src={profile} alt="Mohamed Oueslati - Web Developer" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">Mohamed Oueslati</h2>
            <p className="text-xs text-gray-500">Web Developer</p>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-primary text-white p-2 rounded-lg"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar (slides from left on mobile, static on desktop) */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-100 border-r border-gray-200 flex flex-col justify-between z-50 transform transition-transform duration-300
        md:static md:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          {/* Profile (desktop only) */}
          <div className="hidden md:flex flex-col items-start px-6 py-8">
            <img
              src={profile}
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <h2 className="mt-4 text-lg font-semibold">Mohamed Oueslati</h2>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>

          {/* Navigation */}
   <nav className="flex flex-col gap-4 px-4 mt-20 md:mt-0">
  {sidebarLinks.map((link) => (
    <NavItem key={link.label} {...link} closeSidebar={closeSidebar} />
  ))}
</nav><div className="p-4">
  <MusicPlayer />


</div>
        </div>

        {/* Footer CTA */}
        <div className="p-4">
          <Link to= "/contact"  className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition" >
            Hire Me <span>→</span>
          </Link>
        
          <div className="text-center mt-2 text-sm text-gray-500">
            Available Now
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
