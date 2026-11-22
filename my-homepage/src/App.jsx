import { useState, useEffect } from "react";
import "./App.css";


import logoImg from "./assets/ph7-header-zoom.webp";
import banner1 from "./assets/banner-1.png";
import banner2 from "./assets/banner-2.png";
import banner3 from "./assets/banner-3.png";
import banner4 from "./assets/banner-4.jpeg";
import banner5 from "./assets/banner-5.jpeg";


import premiumCans from "./assets/ph7-premium-20l.png";
import alkalineCan from "./assets/ph7-plus-alkaline-20l.png";

function Header() {
  const [active, setActive] = useState("Home");

  const topNav = [
    "Home",
    "About",
    "Purification Process",
    "Our Products",
    "Gallery",
    "Reviews",
    "Contact",
  ];

  const subNav = ["Privacy Policy", "Terms & Conditions"];

  return (
    <header className="site-header">
      <div className="top-bar">Free Delivery on All Orders</div>

      <div className="nav-container">
        <a href="#home" className="brand">
          <img src={logoImg} alt="PH7 Logo" className="brand-logo" />
          <div className="brand-info">
            <span className="brand-name">ADITYA MINERALS</span>
            <span className="brand-tag">PH7 PACKAGED DRINKING WATER</span>
          </div>
        </a>

        <nav className="nav-links-wrap">
          <div className="nav-row">
            {topNav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={active === item ? "nav-item active" : "nav-item"}
                onClick={() => setActive(item)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="nav-row">
            {subNav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={active === item ? "nav-item active" : "nav-item"}
                onClick={() => setActive(item)}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="header-cta">
          <a href="tel:+919246633763" className="phone-btn">
            +91 92466 33763
          </a>
          <a
            href="https://wa.me/919246633763"
            target="_blank"
            rel="noreferrer"
            className="wa-btn"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#14c8c8" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroCarousel() {
  const banners = [banner1, banner2, banner3, banner4, banner5];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-card">
        <a href="#our-products" className="hero-slide-link">
          <img
            src={banners[current]}
            alt={`PH7 Banner ${current + 1}`}
            className="hero-banner-img"
          />
        </a>

        {/* Left & Right Arrows */}
        <button
          type="button"
          className="hero-arrow left"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          ‹
        </button>

        <button
          type="button"
          className="hero-arrow right"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          ›
        </button>

        {/* Bottom Pagination Dots */}
        <div className="hero-dots">
          {banners.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={current === idx ? "hero-dot active" : "hero-dot"}
              onClick={() => setCurrent(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
function BrandIntro() {
  return (
    <section className="brand-intro-section" id="about">
      <div className="brand-intro-container">
        <h2 className="brand-intro-title">
          Trusted packaged drinking water for everyday use.
        </h2>
        <p className="brand-intro-desc">
          PH7 delivers clean, hygienically packed drinking water for daily
          needs, retail counters, travel, events, offices, and bulk supply.
          Every bottle is presented with a neat, reliable finish so customers
          can trust the quality, cleanliness, and consistency in every order.
        </p>
        <span className="brand-intro-divider" />
      </div>
    </section>
  );
}
const waterSectionsData = [
  {
    id: "premium-water",
    title: "PH7 Premium Drinking Water with Added Minerals",
    introHeading: "Benefits of Drinking Water with Added Minerals",
    introText:
      "Drinking water enriched with essential minerals such as Calcium, Magnesium, Potassium, and Sodium in appropriate amounts can help support normal bodily functions. However, the benefits depend on the type and quantity of minerals present in the water.",
    mineralsHeading: "Essential Minerals and Their Benefits",
    minerals: [
      {
        name: "Calcium (Ca)",
        points: [
          "Helps maintain healthy bones and teeth.",
          "Supports muscle contraction and proper nerve function.",
        ],
      },
      {
        name: "Magnesium (Mg)",
        points: [
          "Supports healthy muscle and nerve function.",
          "Plays an essential role in the body's energy production processes.",
        ],
      },
      {
        name: "Potassium (K)",
        points: [
          "Helps maintain proper fluid balance in the body.",
          "Supports nerve signaling and muscle function.",
        ],
      },
      {
        name: "Sodium (Na)",
        points: [
          "Helps regulate fluid balance in the body.",
          "Supports normal nerve and muscle function.",
        ],
      },
    ],
    image: premiumCans,
    imageAlt: "PH7 Premium 20 litre and 5 litre drinking water cans",
    generalHeading: "General Benefits of Water with Added Minerals",
    generalBenefits: [
      {
        label: "Proper Hydration:",
        text: "Helps maintain the body's water balance and supports hydration.",
      },
      {
        label: "Supports Bodily Functions:",
        text: "Essential minerals contribute to normal physiological processes.",
      },
      {
        label: "Healthy Bones and Teeth:",
        text: "Adequate calcium intake supports bone and dental health.",
      },
      {
        label: "Muscle and Nerve Function:",
        text: "Minerals such as magnesium and potassium are essential for proper muscle and nerve activity.",
      },
      {
        label: "Fluid Balance:",
        text: "Sodium and potassium play important roles in maintaining the body's fluid and electrolyte balance.",
      },
    ],
  },
  {
    id: "alkaline-water",
    title: "PH7 Plus Alkaline Water",
    introHeading: "Benefits of Drinking PH7 Plus Alkaline Water",
    introText:
      "PH7 Plus Alkaline Water has a pH level of 8.5+ and contains essential minerals such as Calcium, Magnesium, Potassium, and Sodium. These minerals help support normal body functions. Their benefits depend on the amount of each mineral present in the water.",
    mineralsHeading: "Essential Minerals and Their Benefits",
    minerals: [
      {
        name: "Calcium (Ca)",
        points: [
          "Helps keep bones and teeth strong and healthy.",
          "Supports proper muscle and nerve function.",
        ],
      },
      {
        name: "Magnesium (Mg)",
        points: [
          "Helps muscles and nerves work properly.",
          "Supports the body's natural energy production.",
        ],
      },
      {
        name: "Potassium (K)",
        points: [
          "Helps maintain the right balance of water in the body.",
          "Supports healthy muscles and proper nerve function.",
        ],
      },
      {
        name: "Sodium (Na)",
        points: [
          "Helps maintain the body's water and fluid balance.",
          "Supports normal muscle and nerve function.",
        ],
      },
    ],
    image: alkalineCan,
    imageAlt: "Original PH7 Plus 20 litre alkaline water can with green cap and pH 8.5+ label",
    generalHeading: "General Benefits of Drinking PH7 Plus Alkaline Water",
    generalBenefits: [
      {
        label: "Proper Hydration:",
        text: "Helps keep the body hydrated and maintains the right water balance.",
      },
      {
        label: "Supports Body Functions:",
        text: "Essential minerals help the body perform its daily functions properly.",
      },
      {
        label: "Healthy Bones and Teeth:",
        text: "Calcium helps maintain strong bones and healthy teeth.",
      },
      {
        label: "Muscle and Nerve Health:",
        text: "Magnesium, potassium, and calcium support proper muscle and nerve function.",
      },
      {
        label: "Maintains Fluid Balance:",
        text: "Sodium and potassium help maintain the right balance of fluids in the body.",
      },
      {
        label: "Supports Digestion:",
        text: "Drinking enough water helps support normal digestion.",
      },
      {
        label: "Keeps You Active and Refreshed:",
        text: "Proper hydration helps you stay active and refreshed throughout the day.",
      },
      {
        label: "Alkaline pH 8.5+:",
        text: "PH7 Plus provides alkaline drinking water with a pH level of 8.5 or above.",
      },
    ],
  },
];

function WaterFeatureSection({ data }) {
  return (
    <section className="water-feature-wrapper" id={data.id}>
      <div className="water-feature-card">
        {/* Card Header */}
        <div className="water-card-header">
          <h2 className="water-card-title">{data.title}</h2>
          <span className="brand-intro-divider" />
        </div>

        {/* Two-Column Content + Image */}
        <div className="water-card-grid">
          <div className="water-card-left">
            <h3 className="water-sub-heading">{data.introHeading}</h3>
            <p className="water-intro-para">{data.introText}</p>

            <h3 className="water-sub-heading">{data.mineralsHeading}</h3>
            <ul className="mineral-list">
              {data.minerals.map((m) => (
                <li key={m.name} className="mineral-item">
                  <span className="mineral-name">{m.name}</span>
                  <ul className="mineral-sublist">
                    {m.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="water-card-right">
            <div className="water-image-box">
              <img src={data.image} alt={data.imageAlt} />
            </div>
          </div>
        </div>

        {/* Bottom General Benefits */}
        <div className="water-card-bottom">
          <h3 className="water-sub-heading">{data.generalHeading}</h3>
          <ul className="general-benefits-list">
            {data.generalBenefits.map((b, i) => (
              <li key={i}>
                <strong>{b.label}</strong> {b.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
const featuresData = [
  {
    title: "Fresh Daily Hydration",
    subtitle: "Clean and refreshing drinking water",
    desc: "PH7 is presented as a clean and refreshing packaged drinking water choice with a smooth daily drinking experience for everyday hydration.",
  },
  {
    title: "Quality Checked",
    subtitle: "Clean packaging and neat bottle finish",
    desc: "Every bottle is packed with a clean visual presentation that supports customer trust, better shelf display, and reliable daily use.",
  },
  {
    title: "Daily Use Ready",
    subtitle: "For home, office, shop, and travel",
    desc: "PH7 fits regular family use, office supply, retail counters, travel needs, functions, and local delivery requirements.",
  },
  {
    title: "Retail Friendly",
    subtitle: "Designed for display and quick pickup",
    desc: "The PH7 bottle range works well for stores, counters, coolers, and grab-and-go setups where a neat look matters.",
  },
  {
    title: "Event Supply Support",
    subtitle: "Suitable for gatherings and functions",
    desc: "From small events to repeated local supply, PH7 helps support bottle quantity needs with practical and dependable service.",
  },
  {
    title: "Bulk Order Service",
    subtitle: "Useful for larger quantity requirements",
    desc: "For homes, shops, institutions, and workplaces, PH7 focuses on timely response and practical supply support for bigger orders.",
  },
  {
    title: "Trusted Local Brand",
    subtitle: "Supported by Aditya Minerals",
    desc: "The brand is built around dependable local service, cleaner water presentation, and simple direct ordering through phone or WhatsApp.",
  },
  {
    title: "Consistent Bottle Range",
    subtitle: "Multiple sizes for multiple needs",
    desc: "PH7 supports personal, family, retail, and event requirements through a bottle range suited for different usage formats.",
  },
  {
    title: "Reliable Everyday Choice",
    subtitle: "Made for regular customer confidence",
    desc: "PH7 focuses on clean appearance, practical use, and steady local availability so customers can choose it again and again.",
  },
];

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Balanced Mineral Composition</h2>
          <p className="features-subtitle">
            Carefully presented packaged drinking water with a clean, dependable,
            everyday-use PH7 brand identity.
          </p>
          <span className="brand-intro-divider" />
        </div>

        <div className="features-grid">
          {featuresData.map((item) => (
            <div key={item.title} className="feature-card">
              <h3 className="feature-card-title">{item.title}</h3>
              <h4 className="feature-card-subtitle">{item.subtitle}</h4>
              <p className="feature-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const reviewsData = [
  {
    name: "Narasimha Murthy",
    rating: "★★★★★",
    text: "The water quality of PH7 is at best. The water plant maintains high hygiene standards. Deliveries are prompt and the team is always responsive. They are consistently providing excellent services over the years.",
  },
  {
    name: "Dr. N. Santosh Ranganath",
    rating: "★★★★★",
    text: "Aditya Minerals at Srikakulam, Andhra Pradesh could highlight its contribution to public health by supplying essential minerals, the sustainability of its operations through waste reduction and energy efficiency, and its role in the community.",
  },
  {
    name: "koyya vamsi",
    rating: "★★★★★",
    text: "The best ever. I never seen such a hygienic and highly caring on cleanliness of every inch inch filling area of water. I promise you PH7 is the best drinking water in Srikakulam. You are lucky to have it in Srikakulam guys. PH7 is giving very promising service.",
  },
];

function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">Google Reviews</h2>
          <span className="brand-intro-divider" />
        </div>

        <div className="reviews-grid">
          {reviewsData.map((rev) => (
            <div key={rev.name} className="review-card">
              <div className="review-card-top">
                <h3 className="reviewer-name">{rev.name}</h3>
                <span className="review-stars" aria-label="5 out of 5 stars">
                  {rev.rating}
                </span>
              </div>
              <p className="review-text">{rev.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const topPurposeData = [
  {
    icon: "◎",
    title: "Vision",
    desc: "To be a trusted packaged drinking water brand recognised for clean processing, consistent quality, responsible operations, and dependable local service.",
  },
  {
    icon: "◆",
    title: "Mission",
    desc: "To deliver hygienically processed drinking water through controlled purification, disciplined quality checks, clean packaging, and responsive customer support.",
  },
];

const initiativesData = [
  {
    icon: "✦",
    title: "Safe Drinking Water",
    desc: "A structured purification sequence and hygienic filling practices support clean, dependable packaged drinking water.",
  },
  {
    icon: "♥",
    title: "Customer Health",
    desc: "Quality-focused processing and responsible communication are kept at the centre of everyday operations without unsupported medical promises.",
  },
  {
    icon: "✓",
    title: "Quality Assurance",
    desc: "Treatment stages, plant discipline, packaging checks, and monitored production practices support consistency.",
  },
  {
    icon: "≈",
    title: "Responsible Water Management",
    desc: "The plant works to reduce avoidable wastage and use water thoughtfully across treatment and production.",
  },
  {
    icon: "♻",
    title: "Sustainable Practices",
    desc: "Responsible handling, recycling awareness, and careful disposal are encouraged throughout operations.",
  },
  {
    icon: "◌",
    title: "Environmental Responsibility",
    desc: "PH7 promotes cleaner surroundings, sensible resource use, and responsible packaging disposal.",
  },
  {
    icon: "▤",
    title: "Organised Warehouse",
    desc: "Clean storage and orderly stock handling for reliable dispatch readiness.",
  },
  {
    icon: "⌂",
    title: "Distribution Support",
    desc: "Coordinated supply for retailers, dealers, institutions, functions, and regular customers.",
  },
  {
    icon: "▰",
    title: "Delivery Network",
    desc: "Practical local delivery planning for household, business, party, and bulk requirements.",
  },
];

function PurposeSection() {
  return (
    <section className="purpose-section">
      <div className="purpose-container">
        <div className="purpose-header">
          <h2 className="purpose-title">Our Purpose and Initiatives</h2>
          <p className="purpose-subtitle">
            PH7 combines dependable service with quality-focused operations,
            responsible water management, and a customer-first approach.
          </p>
          <span className="brand-intro-divider" />
        </div>

        {/* Top 2-Column Row: Vision & Mission */}
        <div className="purpose-top-grid">
          {topPurposeData.map((item) => (
            <div key={item.title} className="purpose-card purpose-card-large">
              <div className="purpose-icon-badge">{item.icon}</div>
              <h3 className="purpose-card-title">{item.title}</h3>
              <p className="purpose-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom 3x3 Grid: 9 Initiatives */}
        <div className="purpose-bottom-grid">
          {initiativesData.map((item) => (
            <div key={item.title} className="purpose-card">
              <div className="purpose-icon-badge">{item.icon}</div>
              <h3 className="purpose-card-title">{item.title}</h3>
              <p className="purpose-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function DistributionSection() {
  const cities = ["Srikakulam", "Vizianagaram", "Visakhapatnam"];

  return (
    <section className="bottom-banner-wrapper">
      <div className="distribution-card">
        <div className="distribution-icon-box" aria-hidden="true">
          ⌖
        </div>

        <div className="distribution-content">
          <span className="distribution-eyebrow">
            REGIONAL DISTRIBUTION NETWORK
          </span>
          <h2 className="distribution-title">
            Serving North Coastal Andhra Pradesh
          </h2>
          <p className="distribution-desc">
            PH7 packaged drinking water is distributed across Srikakulam,
            Vizianagaram, and Visakhapatnam for households, retailers, offices,
            events, dealers, and bulk-order requirements.
          </p>

          <div className="distribution-pills">
            {cities.map((city) => (
              <span key={city} className="city-pill">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QualityCommitmentSection() {
  return (
    <section className="bottom-banner-wrapper">
      <div className="commitment-card">
        <div className="commitment-left">
          <span className="commitment-badge">Quality Commitment</span>
          <h2 className="commitment-title">
            Continuously working for public health.
          </h2>
        </div>

        <div className="commitment-middle">
          <p>
            Aditya Minerals focuses on hygienic processing, disciplined quality
            control, and dependable supply rather than simply saying that the
            team “works hard.”
          </p>
          <p>
            To support a stable pH7 level, the plant uses a dedicated de-gasser
            system installed at significant investment. Controlled
            air-and-water interaction supports the intended pH balance through a
            carefully monitored process.
          </p>
          <p>
            The company's stated operating target is to keep drinking-water
            pH within the generally accepted 6.5 to 8.5 range while maintaining
            a consistent pH7 brand standard.
          </p>
        </div>

        <div className="commitment-right">
          <a href="#purification-process" className="purification-btn">
            View Purification Process
          </a>
        </div>
      </div>
    </section>
  );
}
export default function App() {
  return (
    <div className="app">
      <Header />
      <HeroCarousel />
      <BrandIntro />
      {waterSectionsData.map((section) => (
        <WaterFeatureSection key={section.id} data={section} />
      ))}
      <FeaturesSection />
      <ReviewsSection />
      <PurposeSection />
      <DistributionSection />
      <QualityCommitmentSection />
    </div>
  );
}