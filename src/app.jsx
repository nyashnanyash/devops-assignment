import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import { embed2 } from 'react-icons-kit/icomoon/embed2';
import { briefcase } from 'react-icons-kit/icomoon/briefcase';
import { folderOpen } from 'react-icons-kit/icomoon/folderOpen';
import { books } from 'react-icons-kit/icomoon/books';
import { envelop } from 'react-icons-kit/icomoon/envelop';
import { mobile } from 'react-icons-kit/icomoon/mobile';
import { phone } from 'react-icons-kit/icomoon/phone';

const portfolioItems = [
  {
    title: 'About Me',
    summary: 'A developer, trainer, and practical technology problem-solver.',
    content: (
      <>
        <p>UMUTONIWASE Florence is a software developer and networking professional who enjoys turning technical challenges into dependable, approachable solutions. She combines programming knowledge with hands-on infrastructure experience, allowing her to see both the application a user interacts with and the systems that keep it connected.</p>
        <p>Florence is equally comfortable learning independently and sharing what she knows with others. Her experience across public service, STEM education, and technical support has shaped her into a patient communicator who listens carefully, troubleshoots methodically, and stays curious as technology evolves.</p>
        <p>She is particularly interested in opportunities where software, networks, and people meet: building useful digital tools, strengthening technical operations, and helping teams or learners feel confident with technology.</p>
      </>
    ),
    icon: user,
  },
  {
    title: 'Technical Skills',
    summary: 'Software development and networking tools for real-world systems.',
    content: (
      <>
        <p>Florence develops software with Python and JavaScript, works with MySQL databases, and uses GitHub and VS Code to organize, version, and improve her work. She is also familiar with XAMPP for creating and testing local web development environments.</p>
        <p>Her networking toolkit includes Cisco technologies, Fortinet and FortiGate, TCP/IP, VLANs, VPNs, DNS and DHCP. She can also work across Windows Server, Linux, Microsoft 365, and MySQL environments, giving her a broad foundation for diagnosing issues that cross application and infrastructure boundaries.</p>
        <p>This combination supports a practical, end-to-end approach: Florence can think through code, data, device configuration, connectivity, user access, and support instead of treating each area in isolation.</p>
      </>
    ),
    icon: embed2,
  },
  {
    title: 'Experience',
    summary: 'Network administration, robotics training, and help desk support.',
    content: (
      <>
        <p>In 2024, Florence worked with MINECOFIN as a Network Administration Assistant. The role strengthened her understanding of connected workplace systems and the careful, organized support required to keep users and infrastructure operating reliably.</p>
        <p>In 2025, she joined Stempower as a Robotics Trainer, translating technical ideas into clear, engaging lessons. Guiding learners through practical activities developed her public speaking, mentoring, patience, and ability to adapt explanations to different levels of experience.</p>
        <p>In 2026, Florence expanded her support experience through a help desk role at RMS. Working close to users sharpened her troubleshooting process and reinforced a simple principle: a strong technical solution should not only fix the issue, but also leave the person feeling heard and supported.</p>
      </>
    ),
    icon: briefcase,
  },
  {
    title: 'Projects',
    summary: 'Practical work connecting code, databases, networks, and learning.',
    content: (
      <>
        <p>Florence approaches projects as opportunities to solve a clear human problem. Her development interests include useful web applications backed by MySQL, Python-based tools, and interactive JavaScript experiences that remain simple for people to understand and use.</p>
        <p>Her networking and support background also influences how she builds: she considers configuration, connectivity, maintainability, and troubleshooting alongside the visible interface. GitHub provides a place to manage revisions and develop each idea through small, traceable improvements.</p>
        <p>She is continuing to build a portfolio that demonstrates both technical range and thoughtful execution, with future work focused on combining software development, network operations, and technology education.</p>
      </>
    ),
    icon: folderOpen,
  },
  {
    title: 'Education',
    summary: 'Continuous learning through development, networking, and teaching.',
    content: (
      <>
        <p>Florence treats learning as an active practice. She strengthens her software development skills by writing code, working with databases, using version control, and testing ideas in local development environments rather than relying on theory alone.</p>
        <p>Her networking knowledge spans core protocols, network segmentation, security appliances, server environments, and productivity platforms. Applying these topics in professional settings has helped her connect foundational concepts with the decisions required during day-to-day technical work.</p>
        <p>Teaching robotics has become another important part of that education. Explaining concepts to learners tests understanding in a powerful way, encouraging Florence to keep refining both her technical knowledge and her ability to communicate it clearly.</p>
      </>
    ),
    icon: books,
  },
  {
    title: 'Contact',
    summary: 'Available by telephone or email for professional opportunities.',
    content: (
      <>
        <p>Florence welcomes conversations about software development, networking, technical support, robotics education, and opportunities that bring these disciplines together. She values clear communication and is ready to discuss how her practical experience can contribute to a team.</p>
        <div className="contact-methods" aria-label="Contact methods">
          <a className="contact-method" href="tel:+250782982809">
            <span className="contact-method-icon" aria-hidden="true">
              <Icon size={'100%'} icon={mobile}/>
            </span>
            <span>
              <strong>Mobile</strong>
              <small>0782 982 809</small>
            </span>
          </a>
          <a className="contact-method" href="tel:+250722616611">
            <span className="contact-method-icon" aria-hidden="true">
              <Icon size={'100%'} icon={phone}/>
            </span>
            <span>
              <strong>Telephone</strong>
              <small>0722 616 611</small>
            </span>
          </a>
          <a className="contact-method" href="mailto:Florenceumutoniwase18@gmail.com">
            <span className="contact-method-icon" aria-hidden="true">
              <Icon size={'100%'} icon={envelop}/>
            </span>
            <span>
              <strong>Email</strong>
              <small>Florenceumutoniwase18@gmail.com</small>
            </span>
          </a>
        </div>
        <p className="contact-note">Choose any contact method above to begin a conversation about professional opportunities or collaboration.</p>
      </>
    ),
    icon: envelop,
  },
];

function PortfolioCard({ item, onOpen }) {
  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(item, event.currentTarget);
    }
  }

  return (
    <article
      className="card side-card"
      tabIndex="0"
      role="button"
      aria-haspopup="dialog"
      onClick={(event) => onOpen(item, event.currentTarget)}
      onKeyDown={handleKeyDown}
    >
      <h2 className="portfolio-card-title">{item.title}</h2>
      <p className="portfolio-card-body">{item.summary}</p>
    </article>
  );
}

function PortfolioModal({ item, isClosing, onClose }) {
  const closeButtonRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  function trapFocus(event) {
    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = [closeButtonRef.current, bodyRef.current];
    const currentIndex = focusableElements.indexOf(document.activeElement);
    const direction = event.shiftKey ? -1 : 1;
    const nextIndex = (currentIndex + direction + focusableElements.length) % focusableElements.length;

    event.preventDefault();
    focusableElements[nextIndex].focus();
  }

  return (
    <div className={`portfolio-modal${isClosing ? ' is-closing' : ''}`} onKeyDown={trapFocus}>
      <div className="portfolio-modal-backdrop" onClick={onClose}></div>
      <section
        className="portfolio-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-modal-title"
      >
        <header className="portfolio-modal-header">
          <div className="portfolio-modal-title-wrap">
            <span className="portfolio-modal-icon" aria-hidden="true">
              <Icon size={'100%'} icon={item.icon}/>
            </span>
            <h2 id="portfolio-modal-title">{item.title}</h2>
          </div>
          <button
            className="portfolio-modal-close"
            ref={closeButtonRef}
            type="button"
            aria-label="Close dialog"
            title="Close"
            onClick={onClose}
          >
            &times;
          </button>
        </header>
        <div className="portfolio-modal-body" ref={bodyRef} tabIndex="0">
          {item.content}
        </div>
      </section>
    </div>
  );
}

function App() {
  const [activeItem, setActiveItem] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const triggerRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape' && activeItem) {
        closeModal();
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [activeItem, isClosing]);

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(activeItem));
    return () => document.body.classList.remove('modal-open');
  }, [activeItem]);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  function openModal(item, trigger) {
    window.clearTimeout(closeTimerRef.current);
    triggerRef.current = trigger;
    setIsClosing(false);
    setActiveItem(item);
  }

  function closeModal() {
    if (!activeItem || isClosing) {
      return;
    }

    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveItem(null);
      setIsClosing(false);
      triggerRef.current?.focus();
    }, 200);
  }

  return (
    <>
      <div className="portfolio-page">
        <header className="portfolio-heading">
          <p>UMUTONIWASE Florence</p>
          <h1>My Portfolio</h1>
        </header>
        <main className="container layout-container">
          <div className="row align-items-center layout-row">
            <div className="col-md-4 layout-column side-column side-column-left">
              {portfolioItems.slice(0, 3).map((item) => (
                <PortfolioCard key={item.title} item={item} onOpen={openModal}/>
              ))}
            </div>
            <div className="col-md-4 intro-column layout-column">
              <div className="intro-square">
                <img src="images/profile.jpeg" alt="UMUTONIWASE Florence"/>
              </div>
            </div>
            <div className="col-md-4 layout-column side-column side-column-right">
              {portfolioItems.slice(3).map((item) => (
                <PortfolioCard key={item.title} item={item} onOpen={openModal}/>
              ))}
            </div>
          </div>
        </main>
        <footer className="portfolio-footer">
          <p>Software Development | Networking | Robotics Education</p>
          <small>&copy; 2026 UMUTONIWASE Florence</small>
        </footer>
      </div>
      {activeItem && (
        <PortfolioModal item={activeItem} isClosing={isClosing} onClose={closeModal}/>
      )}
    </>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));