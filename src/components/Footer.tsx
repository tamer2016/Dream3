import { PhoneCall, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-gold transition-colors">الرئيسية</Link>
              <Link to="/services" className="hover:text-gold transition-colors">خدماتنا</Link>
              <Link to="/about" className="hover:text-gold transition-colors">من نحن</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
            <div className="flex flex-col space-y-2">
              <a href="tel:0532299686" className="flex items-center hover:text-gold transition-colors">
                <PhoneCall className="w-4 h-4 ml-2" />
                0532299686
              </a>
              <a href="mailto:info@attar-law.com" className="flex items-center hover:text-gold transition-colors">
                <Mail className="w-4 h-4 ml-2" />
                info@attar-law.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">العنوان</h3>
            <div className="flex items-start">
              <MapPin className="w-4 h-4 ml-2 mt-1" />
              <p>شارع ثوبان النبوي، بطحاء قريش، مكة 24352</p>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-600" />
        <div className="text-center text-sm text-gray-400">
          جميع الحقوق محفوظة © {new Date().getFullYear()} مكتب المحامي عبدالله عمر عطار
        </div>
      </div>
    </footer>
  );
};

export default Footer;