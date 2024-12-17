import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhoneCall, MapPin, Mail, Scale, Gavel, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <Scale className="w-8 h-8 text-gold" />,
      title: "استشارات قانونية",
      description: "نقدم استشارات قانونية شاملة في مختلف المجالات القانونية مع حلول عملية وفعالة"
    },
    {
      icon: <Gavel className="w-8 h-8 text-gold" />,
      title: "الترافع أمام المحاكم",
      description: "نمثل موكلينا في جميع درجات التقاضي بكفاءة واحترافية عالية"
    },
    {
      icon: <FileText className="w-8 h-8 text-gold" />,
      title: "صياغة العقود",
      description: "إعداد وصياغة كافة أنواع العقود والاتفاقيات القانونية بدقة واحترافية"
    }
  ];

  const handleContactClick = () => {
    const phoneNumber = "0545666714";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[url('/law-background.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/50">
        <div className="container mx-auto px-4 text-center animate-fade-up relative z-10">
          <h1 className="heading-1 text-white mb-6">
            مكتب المحامي براء معيض السلمي
          </h1>
          <h2 className="text-gold text-3xl md:text-4xl font-semibold mt-8">
            للمحاماة والاستشارات القانونية
          </h2>
          <p className="paragraph text-white max-w-2xl mx-auto my-12">
            نقدم خدمات قانونية احترافية تلبي احتياجاتكم بكفاءة وموثوقية عالية
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={handleContactClick}
              className="bg-gold hover:bg-gold-dark text-white text-lg px-8 py-6 rounded-lg transition-all duration-300"
            >
              تواصل معنا الآن
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Link to="/services">
              <Button 
                variant="outline"
                className="text-white border-gold hover:bg-gold hover:text-white text-lg px-8 py-6 rounded-lg transition-all duration-300"
              >
                خدماتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="heading-2 text-center mb-6">خدماتنا القانونية</h2>
          <p className="paragraph text-center mb-16 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات القانونية لتلبية احتياجاتكم
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card p-8 text-center animate-in hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-light">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-gold hover:bg-gold-dark text-white">
                عرض جميع الخدمات
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="heading-2 text-center mb-16">تواصل معنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center animate-in hover:shadow-lg transition-all duration-300">
              <PhoneCall className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">اتصل بنا</h3>
              <Button 
                variant="link" 
                className="text-gray-light hover:text-gold"
                onClick={handleContactClick}
              >
                0545666714
              </Button>
            </Card>
            <Card className="glass-card p-8 text-center animate-in hover:shadow-lg transition-all duration-300">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">موقعنا</h3>
              <p className="text-gray-light">شارع ثوبان النبوي، بطحاء قريش، مكة 24352</p>
            </Card>
            <Card className="glass-card p-8 text-center animate-in hover:shadow-lg transition-all duration-300">
              <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">البريد الإلكتروني</h3>
              <a href="mailto:info@attar-law.com" className="text-gray-light hover:text-gold">
                info@attar-law.com
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;