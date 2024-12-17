import { Card } from "@/components/ui/card";
import { Scale, Gavel, FileText, BookOpen, Users, Building } from "lucide-react";

const Services = () => {
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
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      title: "الدراسات القانونية",
      description: "إعداد الدراسات والبحوث القانونية المتخصصة"
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "قضايا الأحوال الشخصية",
      description: "معالجة قضايا الأحوال الشخصية بحساسية وخصوصية تامة"
    },
    {
      icon: <Building className="w-8 h-8 text-gold" />,
      title: "القضايا التجارية",
      description: "حل النزاعات التجارية وتقديم الاستشارات للشركات"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="heading-1 text-center mb-16">خدماتنا القانونية</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card p-8 text-center animate-in hover:shadow-xl transition-all duration-300">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-light">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;