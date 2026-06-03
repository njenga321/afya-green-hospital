import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { StaggerChildren, StaggerItem, FadeIn } from '../animations/FadeIn';
import SectionHeader from '../ui/SectionHeader';

const articles = [
  {
    id: 1,
    category: 'Preventive Care',
    title: '10 Simple Habits That Protect Your Heart Health',
    excerpt: 'Cardiovascular disease is largely preventable. Our cardiologists share the daily practices that make the biggest difference.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop',
    slug: 'heart-health-habits',
  },
  {
    id: 2,
    category: 'Child Health',
    title: "Your Child's Vaccination Schedule: A Complete Guide",
    excerpt: 'Staying current with childhood immunizations is one of the most powerful things you can do for your child\'s long-term health.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop',
    slug: 'vaccination-schedule',
  },
  {
    id: 3,
    category: 'Women\'s Health',
    title: 'Antenatal Care: What to Expect at Each Trimester',
    excerpt: 'Our OB-GYN specialists walk you through everything you need to know about antenatal visits and staying healthy during pregnancy.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
    slug: 'antenatal-care-guide',
  },
];

const categoryColors = {
  'Preventive Care': 'bg-green-100 text-green-700',
  'Child Health': 'bg-blue-100 text-blue-700',
  "Women's Health": 'bg-pink-100 text-pink-700',
};

export default function HealthTipsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Health Insights"
            title="Latest Health News & Tips"
            description="Expert health advice and medical insights from the Afya Green Hospital clinical team."
          />
          <Link to="/blog" className="btn-secondary flex-shrink-0 self-start md:self-end">
            All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
          {articles.map((article) => (
            <StaggerItem key={article.id}>
              <Link to={`/blog/${article.slug}`} className="group block card-premium overflow-hidden h-full">
                <div className="relative overflow-hidden h-48 bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-snug">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-green-600 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
