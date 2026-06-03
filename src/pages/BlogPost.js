import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, ArrowLeft, Calendar, Tag, ChevronRight, ArrowRight, Share2, BookOpen, Phone } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

const articles = [
  {
    id: 1,
    slug: 'heart-health-habits',
    category: 'Preventive Care',
    title: '10 Simple Habits That Protect Your Heart Health',
    excerpt: 'Cardiovascular disease is largely preventable. Our cardiologists share the daily practices that make the biggest difference for long-term heart health.',
    readTime: '5 min',
    date: 'May 15, 2025',
    author: 'Dr. Amara Osei',
    authorRole: 'Cardiologist, Afya Green Hospital',
    authorImage: '/doctors/dr-amara-osei.png',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=600&fit=crop',
    featured: true,
    content: [
      {
        type: 'intro',
        text: "Cardiovascular disease remains one of the leading causes of death worldwide — yet the majority of cases are preventable through lifestyle changes. As a cardiologist, I've seen patients reverse early-stage disease through consistent, simple habits. Here are the ten I recommend most strongly.",
      },
      {
        type: 'section',
        heading: '1. Walk for 30 Minutes Every Day',
        text: "Walking is one of the most underrated forms of cardiovascular exercise. Studies consistently show that 30 minutes of brisk walking, five days a week, significantly reduces the risk of heart disease, high blood pressure, and stroke. You don't need a gym membership — just a good pair of shoes and commitment.",
      },
      {
        type: 'section',
        heading: '2. Know Your Numbers',
        text: "Blood pressure, cholesterol, blood sugar, and BMI — these numbers tell the story of your cardiovascular risk. Many people walk around with dangerously high blood pressure for years without knowing it. Annual check-ups with your doctor, including a basic blood panel, are essential preventive medicine.",
      },
      {
        type: 'section',
        heading: '3. Quit Smoking — Today',
        text: "Smoking is the single most modifiable risk factor for heart disease. Within just one year of quitting, your risk of heart attack drops by 50%. No amount of smoking is safe for your heart. Our team at Afya Green Hospital can connect you with cessation support.",
      },
      {
        type: 'section',
        heading: '4. Eat a Heart-Healthy Diet',
        text: "Increase your intake of vegetables, fruits, whole grains, legumes, and healthy fats like those found in avocado and fish. Reduce ultra-processed foods, saturated fats, and excess salt — these are the biggest dietary contributors to high blood pressure and arterial plaque.",
      },
      {
        type: 'section',
        heading: '5. Manage Your Stress Actively',
        text: "Chronic stress elevates cortisol and adrenaline, which over time damage blood vessels and raise blood pressure. Find your outlet — whether it's prayer, exercise, time with family, or a hobby. Stress is inevitable; how you manage it is a choice.",
      },
      {
        type: 'section',
        heading: '6. Prioritise Sleep',
        text: "Adults need 7–9 hours of quality sleep. Chronic sleep deprivation is independently associated with a 48% higher risk of heart disease. If you snore heavily or wake up exhausted, ask about sleep apnoea — a treatable condition that puts significant strain on the heart.",
      },
      {
        type: 'section',
        heading: '7. Limit Alcohol Intake',
        text: "Excessive alcohol raises blood pressure and contributes to irregular heartbeats. If you drink, limit yourself to no more than one drink per day for women and two for men. Many patients find that eliminating alcohol entirely dramatically improves their blood pressure within weeks.",
      },
      {
        type: 'section',
        heading: '8. Maintain a Healthy Weight',
        text: "Obesity puts additional mechanical strain on the heart and promotes inflammation, hypertension, and insulin resistance — all precursors to heart disease. Even modest weight loss of 5–10% of body weight produces measurable cardiovascular benefit.",
      },
      {
        type: 'section',
        heading: '9. Stay Socially Connected',
        text: "Loneliness and social isolation are now recognised as cardiovascular risk factors comparable to smoking. Maintaining meaningful relationships, community participation, and social engagement protects both heart and mental health.",
      },
      {
        type: 'section',
        heading: '10. Take Prescribed Medications Consistently',
        text: "If you're on blood pressure, cholesterol, or diabetes medication, take it exactly as prescribed. Many patients stop medications when they feel better — but these drugs work precisely because they're taken consistently. Never stop without discussing with your doctor.",
      },
      {
        type: 'callout',
        text: "Heart disease doesn't announce itself — it builds silently over decades. The habits you build today are investments in the decades ahead. Our cardiology team at Afya Green Hospital is here to help you assess your risk and build your personal heart health plan.",
      },
      {
        type: 'cta',
        text: "Ready to take control of your heart health?",
        action: "Book a cardiology consultation",
        href: "/appointments?service=cardiology",
      },
    ],
  },
  {
    id: 2,
    slug: 'vaccination-schedule',
    category: 'Child Health',
    title: "Your Child's Vaccination Schedule: A Complete Guide",
    excerpt: "Staying current with childhood immunizations is one of the most powerful things you can do for your child's long-term health.",
    readTime: '7 min',
    date: 'April 28, 2025',
    author: 'Dr. Fatima Njeri',
    authorRole: 'Pediatrician, Afya Green Hospital',
    authorImage: '/doctors/dr-fatima-njeri.png',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=600&fit=crop',
    featured: false,
    content: [
      {
        type: 'intro',
        text: "Vaccines are one of the most successful public health tools ever created. As a pediatrician, I see firsthand the difference between immunised and unimmunised children — and the evidence is clear. Following the Kenya Expanded Programme on Immunisation (KEPI) schedule gives your child the best protection against serious, potentially life-threatening diseases.",
      },
      {
        type: 'section',
        heading: 'At Birth',
        text: "The BCG vaccine (against tuberculosis) and the first dose of OPV (oral polio vaccine) are given at birth. BCG is especially important in regions where TB is endemic, and it also provides protection against some other severe infections in young infants.",
      },
      {
        type: 'section',
        heading: '6 Weeks of Age',
        text: "At 6 weeks, your baby receives the Pentavalent vaccine (protecting against diphtheria, tetanus, whooping cough, hepatitis B, and Hib), the second dose of OPV, the Pneumococcal Conjugate Vaccine (PCV), and the first dose of Rotavirus vaccine — protecting against the leading cause of severe diarrhoea in infants.",
      },
      {
        type: 'section',
        heading: '10 and 14 Weeks',
        text: "The 10- and 14-week visits repeat Pentavalent, OPV, PCV, and Rotavirus. These multiple doses are necessary because the immune system of a young infant doesn't respond with sufficient strength to a single dose — each dose strengthens and extends protection.",
      },
      {
        type: 'section',
        heading: '9 Months',
        text: "At 9 months, your child receives the first dose of the Measles/Rubella (MR) vaccine. Measles remains a leading cause of childhood death globally. The Vitamin A supplement given at this visit also supports immune function and reduces infection severity.",
      },
      {
        type: 'section',
        heading: '18 Months',
        text: "The second MR dose is given at 18 months, completing primary immunisation and boosting long-term immunity. This is also a good time for a comprehensive developmental check with your pediatrician.",
      },
      {
        type: 'callout',
        text: "Vaccines do not cause autism — this myth has been thoroughly and repeatedly disproven by decades of research involving millions of children. The risks of the diseases we vaccinate against are far greater than any rare side effect of vaccination.",
      },
      {
        type: 'section',
        heading: 'What About Side Effects?',
        text: "Mild side effects — a low-grade fever, fussiness, or soreness at the injection site — are common and a sign that the immune system is responding. They typically resolve within 24–48 hours. Serious reactions are extremely rare. Always inform your pediatrician of any unusual symptoms after vaccination.",
      },
      {
        type: 'cta',
        text: "Is your child's vaccination schedule up to date?",
        action: "Book a child health consultation",
        href: "/appointments?service=pediatrics",
      },
    ],
  },
  {
    id: 3,
    slug: 'antenatal-care-guide',
    category: "Women's Health",
    title: 'Antenatal Care: What to Expect at Each Trimester',
    excerpt: "Our OB-GYN specialists walk you through everything you need to know about antenatal visits and staying healthy during pregnancy.",
    readTime: '8 min',
    date: 'April 10, 2025',
    author: 'Dr. Wanjiku Kamau',
    authorRole: 'Obstetrician & Gynaecologist, Afya Green Hospital',
    authorImage: '/doctors/dr-wanjiku-kamau.png',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop',
    featured: false,
    content: [
      {
        type: 'intro',
        text: "Antenatal care — the health care you receive during pregnancy — is one of the most important factors in ensuring a healthy outcome for both mother and baby. The World Health Organization recommends at least 8 antenatal visits, beginning as early as possible in the first trimester. Here's what to expect at each stage.",
      },
      {
        type: 'section',
        heading: 'First Trimester (Weeks 1–12): The Foundation',
        text: "Your first visit ideally happens before 10 weeks. At this booking appointment, we complete a comprehensive health assessment including blood tests (blood group, haemoglobin, HIV, syphilis, hepatitis B, rubella immunity), urine tests, blood pressure measurement, and early ultrasound. We also calculate your expected due date and identify any risk factors requiring specialist input.",
      },
      {
        type: 'section',
        heading: 'Second Trimester (Weeks 13–28): Growth and Screening',
        text: "The second trimester typically includes visits at 20 and 26 weeks. The 20-week anomaly scan is a detailed ultrasound examining your baby's anatomy and development. We check placenta position, amniotic fluid, and the baby's growth. Blood tests continue, including screening for gestational diabetes. Most women feel their best during this trimester.",
      },
      {
        type: 'section',
        heading: 'Third Trimester (Weeks 29–40): Preparing for Birth',
        text: "Visits increase in frequency during the third trimester — typically at 28, 32, 36, 38, and 40 weeks. We closely monitor fetal growth, baby's position, maternal blood pressure, and signs of complications such as pre-eclampsia or gestational diabetes. Birth planning discussions take place, covering your preferences, pain relief options, and emergency planning.",
      },
      {
        type: 'callout',
        text: "Warning signs to report immediately: severe headache, visual disturbances, swelling of hands or face, reduced fetal movement, vaginal bleeding, or abdominal pain. Don't wait for your next appointment — call us or come to our Emergency Department immediately.",
      },
      {
        type: 'section',
        heading: 'Nutrition During Pregnancy',
        text: "Folate (folic acid) supplementation should ideally start before conception and continue through the first trimester to prevent neural tube defects. Iron and calcium supplementation are standard throughout pregnancy. Eat a varied diet rich in vegetables, protein, and whole grains. Avoid raw fish, undercooked meat, unpasteurised cheese, and excessive caffeine.",
      },
      {
        type: 'section',
        heading: 'What About High-Risk Pregnancies?',
        text: "If you have pre-existing conditions such as hypertension, diabetes, a previous caesarean section, or are carrying multiples, you will be classified as high-risk and seen more frequently. Our team coordinates with specialists to ensure the safest possible outcome for you and your baby.",
      },
      {
        type: 'cta',
        text: "Book your antenatal care at Afya Green Hospital",
        action: "Book an OB-GYN appointment",
        href: "/appointments?service=maternity",
      },
    ],
  },
  {
    id: 4,
    slug: 'african-superfoods',
    category: 'Nutrition',
    title: "Eating for Energy: A Doctor's Guide to African Superfoods",
    excerpt: "From Moringa to sweet potatoes — our doctors highlight the powerful health benefits of locally available foods you should be eating regularly.",
    readTime: '6 min',
    date: 'March 22, 2025',
    author: 'Dr. Miriam Achieng',
    authorRole: 'Internist, Afya Green Hospital',
    authorImage: '/doctors/dr-miriam-achieng.png',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop',
    featured: false,
    content: [
      {
        type: 'intro',
        text: "Some of the world's most powerful health foods grow right here in East Africa — and many of us walk past them every day. As a physician specialising in chronic disease management, I've seen what dietary changes can do for patients with diabetes, hypertension, and metabolic syndrome. Here are the African foods I prescribe most.",
      },
      {
        type: 'section',
        heading: 'Moringa (The Miracle Tree)',
        text: "Moringa oleifera, commonly called 'Mlonge' in Swahili, is extraordinarily nutrient-dense. The leaves contain 7 times more vitamin C than oranges, 4 times more calcium than milk, and significant amounts of iron, potassium, and protein. Studies show moringa can help lower blood sugar and reduce inflammation. Add dried moringa powder to porridge, soups, or tea daily.",
      },
      {
        type: 'section',
        heading: 'Sweet Potatoes (Viazi Vitamu)',
        text: "Orange-fleshed sweet potatoes are among the richest plant sources of beta-carotene (vitamin A precursor), which supports immune function, eye health, and skin integrity. They have a lower glycaemic index than regular potatoes, making them a better choice for diabetics. Boiling or steaming preserves more nutrients than frying.",
      },
      {
        type: 'section',
        heading: 'Amaranth (Terere)',
        text: "Amaranth leaves are a traditional Kenyan green vegetable that rivals expensive imported superfoods in nutritional value. Rich in iron, calcium, folate, and antioxidants, terere is particularly valuable for pregnant women and those with anaemia. It costs very little and is widely available in local markets.",
      },
      {
        type: 'section',
        heading: 'Cowpeas and Black-Eyed Beans (Kunde)',
        text: "Legumes are the cornerstone of a heart-healthy diet. Cowpeas are an excellent source of plant protein, dietary fibre, folate, and magnesium. Regular legume consumption is associated with lower cholesterol, better blood sugar control, and reduced cardiovascular risk. Aim for legumes in at least four meals per week.",
      },
      {
        type: 'section',
        heading: 'Pumpkin (Malenge)',
        text: "Every part of the pumpkin is edible and nutritious — flesh, seeds, and leaves. The seeds are particularly rich in zinc (immune function), magnesium (blood pressure), and healthy fats. Pumpkin flesh is high in fibre and low in calories, making it ideal for weight management.",
      },
      {
        type: 'callout',
        text: "You don't need to buy expensive imported superfoods. A diet built on local vegetables, legumes, whole grains, and fresh fruit provides exceptional nutritional density at a fraction of the cost. Eating well in Kenya has never been easier.",
      },
      {
        type: 'cta',
        text: "Want a personalised nutrition plan for your health goals?",
        action: "Book a general medicine consultation",
        href: "/appointments?service=general-medicine",
      },
    ],
  },
  {
    id: 5,
    slug: 'mental-health-kenya',
    category: 'Mental Health',
    title: 'Breaking the Stigma: Mental Health Conversations in Kenya',
    excerpt: "Mental health is healthcare. Our team explores why open conversations matter and how to support someone you love through difficult times.",
    readTime: '9 min',
    date: 'March 5, 2025',
    author: 'Dr. Amina Yusuf',
    authorRole: 'Psychiatrist, Afya Green Hospital',
    authorImage: '/doctors/dr-amina-yusuf.png',
    image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=1200&h=600&fit=crop',
    featured: false,
    content: [
      {
        type: 'intro',
        text: "In Kenya, approximately 1 in 4 people will experience a mental health condition at some point in their lifetime. Yet the majority will never seek help — held back by stigma, cost, limited services, or the belief that mental suffering is simply part of life. As a psychiatrist, I believe we are at a turning point. The conversation is changing — and lives depend on it.",
      },
      {
        type: 'section',
        heading: 'What Is Mental Health Stigma?',
        text: "Stigma is the social disapproval attached to mental illness. In many Kenyan communities, mental health problems are misattributed to witchcraft, spiritual failure, or personal weakness. This prevents people from seeking help and causes immense additional suffering — the shame and isolation of hiding one's pain.",
      },
      {
        type: 'section',
        heading: 'The Real Toll',
        text: "Untreated depression reduces immune function, increases the risk of cardiovascular disease, and dramatically impairs work, relationships, and quality of life. Suicide — the tragic endpoint of untreated mental illness — claimed over 800,000 lives globally last year. In Kenya, suicide rates have risen significantly, particularly among young men.",
      },
      {
        type: 'section',
        heading: 'How to Support Someone You Love',
        text: "Listen without judgement. Say 'I hear you' rather than 'You should feel grateful' or 'Just pray.' Encourage professional help without forcing it. Offer practical support — accompanying them to an appointment, checking in regularly. Remove access to means of self-harm if you're concerned about safety. Never dismiss suicidal thoughts as attention-seeking.",
      },
      {
        type: 'callout',
        text: "Mental health conditions are not character flaws. They are medical conditions — as real as diabetes or heart disease — with evidence-based treatments that work. Seeking help is an act of courage, not weakness.",
      },
      {
        type: 'section',
        heading: 'What Treatment Looks Like',
        text: "Modern psychiatric care includes psychotherapy (such as Cognitive Behavioural Therapy), medication management, and lifestyle support. Many patients achieve full remission with appropriate treatment. The first step — and often the hardest — is making that first appointment.",
      },
      {
        type: 'section',
        heading: 'Breaking the Silence in Your Community',
        text: "Talk about mental health as you would any physical illness. Share your own experiences if you are comfortable doing so. Correct misconceptions when you hear them. Support organisations and services that expand access to care. Change begins in individual conversations.",
      },
      {
        type: 'cta',
        text: "Mental health care is available at Afya Green Hospital",
        action: "Book a confidential consultation",
        href: "/appointments?service=mental-health",
      },
    ],
  },
  {
    id: 6,
    slug: 'senior-exercise',
    category: 'Senior Health',
    title: 'Staying Active After 60: Safe Exercises for Seniors',
    excerpt: "Regular physical activity is one of the best medicines. Our team shares senior-friendly exercises that improve strength, balance, and mobility.",
    readTime: '5 min',
    date: 'February 18, 2025',
    author: 'Dr. Samuel Kipkoech',
    authorRole: 'Orthopaedic Surgeon, Afya Green Hospital',
    authorImage: '/doctors/dr-samuel-kipkoech.png',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=600&fit=crop',
    featured: false,
    content: [
      {
        type: 'intro',
        text: "As an orthopaedic surgeon, I often hear from patients in their 60s and 70s: 'I'm too old to exercise.' Nothing could be further from the truth. Regular physical activity is among the most powerful interventions we have for reducing falls, maintaining independence, managing chronic pain, and extending healthy life years. Here's how to do it safely.",
      },
      {
        type: 'section',
        heading: 'Walking: Your Foundation',
        text: "Walking remains the safest, most accessible, and most evidence-supported exercise for seniors. Aim for 150 minutes per week — about 20–30 minutes per day. Use a supportive shoe with good grip. If balance is a concern, a walking stick provides security and confidence.",
      },
      {
        type: 'section',
        heading: 'Chair-Based Strength Exercises',
        text: "Muscle mass naturally declines with age — a process called sarcopaenia. Resistance exercise counters this. Chair stands (sitting and standing repeatedly without using hands), seated leg lifts, and wall press-ups are effective and safe for most seniors. Aim for two sessions per week.",
      },
      {
        type: 'section',
        heading: 'Balance Training Prevents Falls',
        text: "Falls are the leading cause of injury in older adults. Simple daily balance exercises dramatically reduce fall risk. Stand on one foot for 10–30 seconds, holding a chair for safety. Heel-to-toe walking (like a tightrope) builds balance and proprioception. Practice these daily.",
      },
      {
        type: 'section',
        heading: 'Swimming and Water Exercise',
        text: "Water-based exercise is ideal for seniors with arthritis, joint replacements, or back pain. The buoyancy of water reduces joint loading by up to 90%, allowing full-range movement with minimal pain. Our recommendation: water aerobics 2–3 times per week.",
      },
      {
        type: 'callout',
        text: "Before starting a new exercise programme, especially if you have heart disease, high blood pressure, or recent surgery, consult your doctor. We can provide a personalised exercise prescription that is safe and effective for your specific health status.",
      },
      {
        type: 'section',
        heading: 'What to Avoid',
        text: "High-impact activities (running on hard surfaces), exercises with sudden jarring movements, and anything that causes pain beyond mild muscle fatigue should be avoided. Pain is a signal — respect it. Stop any exercise that causes sharp joint pain, chest pain, dizziness, or shortness of breath and consult your doctor.",
      },
      {
        type: 'cta',
        text: "Want a personalised exercise plan for your age and condition?",
        action: "Book an orthopaedics consultation",
        href: "/appointments?service=orthopedics",
      },
    ],
  },
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

function ContentBlock({ block }) {
  if (block.type === 'intro') {
    return <p className="text-lg text-gray-700 leading-relaxed font-medium border-l-4 border-green-500 pl-5 bg-green-50 py-4 pr-4 rounded-r-xl">{block.text}</p>;
  }
  if (block.type === 'section') {
    return (
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-3">{block.heading}</h2>
        <p className="text-gray-600 leading-relaxed">{block.text}</p>
      </div>
    );
  }
  if (block.type === 'callout') {
    return (
      <div className="bg-green-700 text-white rounded-2xl p-6">
        <BookOpen className="w-6 h-6 text-green-300 mb-3" />
        <p className="text-green-50 leading-relaxed font-medium italic">"{block.text}"</p>
      </div>
    );
  }
  if (block.type === 'cta') {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
        <p className="font-semibold text-gray-900 mb-3">{block.text}</p>
        <Link
          to={block.href}
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors"
        >
          <Calendar className="w-4 h-4" />
          {block.action}
        </Link>
      </div>
    );
  }
  return null;
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">📰</div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">Article Not Found</h1>
          <p className="text-gray-500 mb-6">We couldn't find this article.</p>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </main>
    );
  }

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-green-700">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-green-700">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium truncate max-w-48">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-8 md:pb-12">
            <FadeIn>
              <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                {article.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-black text-white max-w-3xl leading-tight">{article.title}</h1>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="w-11 h-11 rounded-xl object-cover"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&size=80&background=16a34a&color=fff&bold=true`; }}
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{article.author}</p>
                    <p className="text-xs text-gray-500">{article.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400 ml-auto">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime} read</span>
                </div>
              </div>

              {/* Article Body */}
              <div className="space-y-8">
                {article.content.map((block, i) => (
                  <FadeIn key={i} delay={i * 0.03}>
                    <ContentBlock block={block} />
                  </FadeIn>
                ))}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => navigate('/blog')}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-green-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </button>
                <button
                  onClick={() => navigator.share?.({ title: article.title, url: window.location.href })}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-green-700 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              {/* Author Bio */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6 flex gap-4">
                <img
                  src={article.authorImage}
                  alt={article.author}
                  className="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
                  onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&size=100&background=16a34a&color=fff&bold=true`; }}
                />
                <div>
                  <p className="font-black text-gray-900">{article.author}</p>
                  <p className="text-xs text-green-600 font-semibold mb-2">{article.authorRole}</p>
                  <p className="text-sm text-gray-600">A specialist at Afya Green Hospital, committed to evidence-based patient education and community health.</p>
                  <Link to="/doctors" className="inline-flex items-center gap-1 text-xs text-green-600 font-semibold mt-2 hover:text-green-700">
                    View all doctors <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book CTA */}
              <FadeIn>
                <div className="bg-green-700 text-white rounded-2xl p-6">
                  <h3 className="font-black text-lg mb-2">Ready to prioritise your health?</h3>
                  <p className="text-green-100 text-sm mb-5">Book an appointment with our expert team today.</p>
                  <Link
                    to="/appointments"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Link>
                </div>
              </FadeIn>

              {/* Categories */}
              <FadeIn delay={0.1}>
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                  <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2 text-sm">
                    <Tag className="w-4 h-4 text-green-600" />
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Preventive Care', 'Child Health', "Women's Health", 'Nutrition', 'Mental Health', 'Senior Health'].map((cat) => (
                      <Link
                        key={cat}
                        to="/blog"
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[cat] || 'bg-gray-100 text-gray-700'} hover:opacity-80 transition-opacity`}
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Related Articles */}
              <FadeIn delay={0.15}>
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                  <h3 className="font-black text-gray-900 mb-4 text-sm">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((a) => (
                      <Link key={a.id} to={`/blog/${a.slug}`} className="flex gap-3 group">
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-gray-900 group-hover:text-green-700 transition-colors leading-snug line-clamp-2">{a.title}</p>
                          <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock className="w-3 h-3" />{a.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link to="/blog" className="flex items-center gap-1 text-xs text-green-600 font-semibold mt-4 hover:text-green-700">
                    View all articles <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>

              {/* Emergency */}
              <FadeIn delay={0.2}>
                <div className="bg-gray-900 text-white rounded-2xl p-5">
                  <h3 className="font-bold text-sm mb-1">Medical Emergency?</h3>
                  <p className="text-gray-400 text-xs mb-3">Our Emergency Department is open 24/7.</p>
                  <a href="tel:+254719073000" className="flex items-center gap-2 text-red-400 font-bold hover:text-red-300 text-sm">
                    <Phone className="w-4 h-4" /> 0719 073 000
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
