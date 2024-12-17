import { Link, useLocation } from "react-router-dom";
import { Scale } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Scale className="w-8 h-8 text-gold" />
            <Link to="/" className="text-xl font-bold text-gray-dark">
              مكتب المحامي براء معيض السلمي
            </Link>
          </div>
          <div className="flex space-x-6 space-x-reverse">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-gold"
                  : "text-gray-600 hover:text-gold"
              } transition-colors duration-200`}
            >
              الرئيسية
            </Link>
            <Link
              to="/services"
              className={`${
                isActive("/services")
                  ? "text-gold"
                  : "text-gray-600 hover:text-gold"
              } transition-colors duration-200`}
            >
              خدماتنا
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about")
                  ? "text-gold"
                  : "text-gray-600 hover:text-gold"
              } transition-colors duration-200`}
            >
              من نحن
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;