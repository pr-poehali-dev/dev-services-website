import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import SEOHead from '@/components/SEOHead';
import { solutionsData } from '@/data/solutionsData';
import SolutionHero from '@/components/solutions/SolutionHero';
import SolutionContent from '@/components/solutions/SolutionContent';
import SolutionSidebar from '@/components/solutions/SolutionSidebar';

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !solutionsData[slug]) {
    return <Navigate to="/solutions" replace />;
  }

  const solution = solutionsData[slug];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${solution.title} под ключ — ${solution.subtitle} | Scalper.io`}
        description={`⭐ ${solution.description} Разработка под ключ с гарантией. 50+ проектов. Консультация 24/7.`}
        image={solution.image}
        url={`/solutions/${slug}`}
        keywords={`${solution.keywords}, разработка ПО, разработка программного обеспечения, заказать разработку, IT решения под ключ`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": solution.title,
          "description": solution.description,
          "provider": {
            "@type": "Organization",
            "name": "Scalper.io",
            "url": "https://scalperio.ru",
            "logo": "https://cdn.poehali.dev/projects/9a06e4ed-8cca-48bd-ad24-fd25071007e8/files/bc31747b-408b-4bc7-bf3e-d26ccd97296f.jpg"
          },
          "areaServed": "RU",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `https://scalperio.ru/solutions/${slug}`
          },
          "image": solution.image,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "RUB"
            }
          }
        }}
      />
      <Navbar />
      
      <main className="pt-20 sm:pt-24 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-8">
          <Button variant="ghost" asChild className="mb-6 hover:scale-105 transition-transform duration-300">
            <a href="/solutions" className="gap-2">
              <Icon name="ArrowLeft" size={18} />
              Все решения
            </a>
          </Button>
        </div>

        <SolutionHero solution={solution} />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <SolutionContent solution={solution} />
            <SolutionSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionDetail;
