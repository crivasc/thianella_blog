import Link from "next/link";
const NavItem = ({ text, href, icon, active }) => {
    return (
      <Link href={href} className="transition-all delay-5 hover:text-gray-500">
        <span
          className={`flex items-center justify-start gap-3 nav__item ${icon} ${
            active ? "active" : ""
          }`}
        >
        {icon} {text}
        </span>
      </Link>
    );
  };
  
  export default NavItem;