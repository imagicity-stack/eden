'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const statsData = [
  { label: 'Learners Reached', value: 1250, suffix: '+' },
  { label: 'Learning Hubs', value: 18, suffix: '' },
  { label: 'Volunteers Mobilized', value: 140, suffix: '+' },
  { label: 'Scholarships Awarded', value: 320, suffix: '+' }
];

const impactData = [
  {
    title: 'Digital Learning Labs',
    description:
      'Modern spaces in Hazaribagh that connect students to curated STEM content and mentorship.'
  },
  {
    title: 'Community Literacy Drives',
    description:
      'Neighborhood reading circles designed to uplift first-generation learners with confidence.'
  },
  {
    title: 'Career Readiness',
    description:
      'Workshops in communication, finance, and leadership for adolescent learners.'
  }
];

export default function HomePage() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounts(
        statsData.map((stat) => Math.floor(stat.value * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="logo-group">
            <Image className="logo" src="/LOGO.png" alt="Edenwoods Eduhub Foundation logo" width={80} height={80} />
            <div>
              <div>Edenwoods Eduhub Foundation</div>
              <small>Hazaribagh, Jharkhand</small>
            </div>
          </div>
          <nav className="nav">
            <a href="#mission">Mission</a>
            <a href="#programs">Programs</a>
            <a href="#impact">Impact</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p>Education • Equity • Empowerment</p>
              <h1>Lighting pathways for every learner in Hazaribagh.</h1>
              <p>
                Edenwoods Eduhub Foundation is an educational NGO supporting young minds with
                community learning hubs, scholarships, and mentorship that lead to lasting change.
              </p>
              <div className="cta-row">
                <a className="button" href="#contact">Join the mission</a>
                <a className="button" href="#programs">Explore programs</a>
              </div>
            </div>
            <div className="hero-card">
              <Image className="logo" src="/LOGO.png" alt="Edenwoods Eduhub Foundation" width={90} height={90} />
              <div className="image-frame">
                <Image
                  src="/photos/pexels-roman-odintsov-12719334.jpg"
                  alt="Students learning together"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <p>
                We collaborate with schools, families, and local leaders to deliver inclusive learning
                experiences for every child in Jharkhand.
              </p>
            </div>
          </div>
        </section>

        <section id="mission" className="section">
          <div className="container">
            <h2 className="section-title">Our Mission</h2>
            <div className="impact-grid">
              <div className="program-card">
                <Image className="logo" src="/LOGO.png" alt="Logo" width={60} height={60} />
                <h3>Access</h3>
                <p>Ensure every learner in Hazaribagh can access quality educational resources.</p>
              </div>
              <div className="program-card">
                <Image className="logo" src="/LOGO.png" alt="Logo" width={60} height={60} />
                <h3>Support</h3>
                <p>Provide mentorship, life skills, and wellness support to empower students.</p>
              </div>
              <div className="program-card">
                <Image className="logo" src="/LOGO.png" alt="Logo" width={60} height={60} />
                <h3>Growth</h3>
                <p>Build long-term pathways to higher education and meaningful careers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Impact Numbers</h2>
            <div className="stats">
              {statsData.map((stat, index) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-number">
                    {counts[index]}{stat.suffix}
                  </div>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="section">
          <div className="container">
            <h2 className="section-title">Programs</h2>
            <div className="programs-grid">
              {impactData.map((program) => (
                <div className="program-card" key={program.title}>
                  <Image className="logo" src="/LOGO.png" alt="Logo" width={52} height={52} />
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className="image-frame">
                    <Image
                      src={
                        program.title === 'Digital Learning Labs'
                          ? '/photos/pexels-made-by-lyzoo-2157704947-34978369.jpg'
                          : program.title === 'Community Literacy Drives'
                            ? '/photos/pexels-ahmed-akacha-3313934-6757958.jpg'
                            : '/photos/pexels-rohan-dewangan-2844320-10146961.jpg'
                      }
                      alt={`${program.title} program`}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="section">
          <div className="container">
            <h2 className="section-title">Stories of Change</h2>
            <div className="impact-grid">
              <div className="program-card">
                <Image className="logo" src="/LOGO.png" alt="Logo" width={52} height={52} />
                <p>
                  "My daughter now leads her class and dreams of becoming a scientist."
                </p>
                <p>- Parent, Hazaribagh</p>
              </div>
              <div className="program-card">
                <Image className="logo" src="/LOGO.png" alt="Logo" width={52} height={52} />
                <p>
                  "The learning hub helped me prepare for state-level exams with confidence."
                </p>
                <p>- Student Scholar</p>
              </div>
              <div className="program-card">
                <Image className="logo" src="/LOGO.png" alt="Logo" width={52} height={52} />
                <p>
                  "We are proud to support the foundation’s digital literacy mission."
                </p>
                <p>- Community Partner</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <Image className="logo" src="/LOGO.png" alt="Logo" width={64} height={64} />
                <h3>Connect with us</h3>
                <p>Hazaribagh, Jharkhand</p>
                <p>Email: contact@edenwoods.org</p>
                <div className="image-frame">
                  <Image
                    src="/photos/pexels-ron-lach-10638220.jpg"
                    alt="Community workshop"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
              <div className="contact-card">
                <form>
                  <label>
                    Full Name
                    <input type="text" name="name" placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" placeholder="Your email" />
                  </label>
                  <label>
                    Message
                    <textarea name="message" placeholder="Tell us about your interest" />
                  </label>
                  <button className="button" type="submit">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <Image className="footer-logo" src="/LOGO.png" alt="Edenwoods Eduhub Foundation" width={72} height={72} />
          <p>Edenwoods Eduhub Foundation • Hazaribagh, Jharkhand</p>
          <p>contact@edenwoods.org</p>
        </div>
      </footer>
    </>
  );
}
