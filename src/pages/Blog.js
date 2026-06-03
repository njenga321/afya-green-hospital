import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '../components/animations/FadeIn';

const categories = ['All', 'Preventive Care', 'Child Health', "Women's Health", 'Heart Health', 'Nutrition', 'Mental Health', 'Senior Health'];

const articles = [
  { id: 1, category: 'Preventive Care', title: '10 Simple Habits That Protect Your Heart Health', excerpt: 'Cardiovascular disease is largely preventable. Our cardiologists share the daily practices that make the biggest difference for long-term heart health.', readTime: '5 min', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop', slug: 'heart-health-habits', featured: true },
  { id: 2, category: 'Child Health', title: "Your Child's Vaccination Schedule: A Complete Guide", excerpt: 'Staying current with childhood immunizations is one of the most powerful things you can do for your child\'s long-term health and community wellbeing.', readTime: '7 min', image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop', slug: 'vaccination-schedule', featured: false },
  { id: 3, category: "Women's Health", title: 'Antenatal Care: What to Expect at Each Trimester', excerpt: 'Our OB-GYN specialists walk you through everything you need to know about antenatal visits and staying healthy during pregnancy.', readTime: '8 min', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop', slug: 'antenatal-care-guide', featured: false },
  { id: 4, category: 'Nutrition', title: 'Eating for Energy: A Doctor\'s Guide to African Superfoods', excerpt: 'From Moringa to sweet potatoes — our nutritionist highlights the powerful health benefits of locally available foods you should be eating regularly.', readTime: '6 min', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop', slug: 'african-superfoods', featured: false },
  { id: 5, category: 'Mental Health', title: 'Breaking the Stigma: Mental Health Conversations in Kenya', excerpt: 'Mental health is healthcare. Our counseling team explores why open conversations matter and how to support someone you love through difficult times.', readTime: '9 min', image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=600&h=400&fit=crop', slug: 'mental-health-kenya', featured: false },
  { id: 6, category: 'Senior Health', title: 'Staying Active After 60: Safe Exercises for Seniors', excerpt: 'Regular physical activity is one of the best medicines. Our physiotherapist shares senior-friendly exercises that improve strength, balance, and mobility.', readTime: '5 min', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop', slug: 'senior-exercise', featured: false },
];

const categoryColors = {
  'Preventive Care': 'bg-green-100 text-green-700',
  'Child Health': 'bg-blue-100 text-blue-700',
  "Women's Health": 'bg-pink-100 text-pink-700',
  'Heart Health': 'bg-red-100 text-red-700',
  'Nutrition': 'bg-amber-100 text-amber-700',
  'Mental Health': 'bg-purple-100 text-purple-700',
  'Senior Health': 'bg-teal-100 text-teal-700',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const featured = articles.find((a) => a.featured);
  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'All' || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch && !a.featured;
  });

  return (
    <main>
      <section className="py-24 bg-gradient-to-br from-green-900 to-teal-800">
        <div className="container-custom">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1.5 rounded-full mb-5">Health Blog</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 max-w-3xl leading-tight">Health Insights from Our Experts</h1>
            <p className="text-green-100 text-lg max-w-2xl mb-8">Evidence-based health advice, medical news, and wellness tips from the Afya Green Hospital clinical team.</p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl text-sm focus:outline-none shadow-lg"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {featured && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container-custom">
            <FadeIn>
              <Link to={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 items-center card-premium overflow-hidden">
                <div className="overflow-hidden h-64 md:h-80">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 bg-green-100 text-green-700">Featured</span>
                  <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-green-700 transition-colors leading-snug">{featured.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400"><Clock className="w-3.5 h-3.5" />{featured.readTime} read</span>
                    <span className="text-xs font-semibold text-green-600 flex items-center gap-1 group-hover:gap-2 transition-all">Read article <ArrowRight className="w-3.5 h-3.5" /></span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <FadeIn className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-700'}`}
              >
                {cat}
              </button>
            ))}
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.07}>
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500">No articles found. Try a different category or search term.</p>
              </div>
            ) : (
              filtered.map((article) => (
                <StaggerItem key={article.id}>
                  <Link to={`/blog/${article.slug}`} className="group block card-premium overflow-hidden h-full">
                    <div className="relative overflow-hidden h-48">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>{article.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-snug">{article.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-gray-400"><Clock className="w-3.5 h-3.5" />{article.readTime} read</span>
                        <span className="text-xs font-semibold text-green-600 flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight className="w-3.5 h-3.5" /></span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))
            )}
          </StaggerChildren>
        </div>
      </section>
    </main>
  );
}
