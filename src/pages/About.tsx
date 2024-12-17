import { Card } from "@/components/ui/card";
import { Scale, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Scale className="w-8 h-8 text-gold" />,
      title: "خبرة قانونية",
      description: "نمتلك خبرة واسعة في مختلف مجالات القانون"
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "احترافية عالية",
      description: "نقدم خدماتنا بأعلى معايير الاحترافية والمهنية"
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "فريق متخصص",
      description: "فريق من المحامين المؤهلين لخدمة موكلينا"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-1 mb-8">من نحن</h1>
          <p className="paragraph">
            مكتب المحامي عبدالله عمر عطار للمحاماة والاستشارات القانونية هو مكتب متخصص في تقديم الخدمات القانونية الشاملة. نسعى دائماً لتحقيق العدالة وحماية حقوق موكلينا من خلال تقديم حلول قانونية فعالة ومبتكرة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card p-8 text-center animate-in hover:shadow-xl transition-all duration-300">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-light">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-8">رؤيتنا</h2>
          <p className="paragraph mb-12">
            نسعى لأن نكون الخيار الأول في تقديم الخدمات القانونية في المملكة العربية السعودية، من خلال الالتزام بأعلى معايير المهنية والشفافية في تقديم الاستشارات والحلول القانونية.
          </p>
          
          <h2 className="heading-2 mb-8">رسالتنا</h2>
          <p className="paragraph">
            تقديم خدمات قانونية متميزة تلبي احتياجات عملائنا وتحمي مصالحهم، مع الالتزام بالقيم المهنية والأخلاقية في جميع تعاملاتنا.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;