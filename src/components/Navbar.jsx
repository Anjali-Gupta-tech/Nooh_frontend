
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  const location = useLocation();

  // --------------------------------------------------
  // SCROLL EFFECT
  // --------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --------------------------------------------------
  // CLOSE MENUS WHEN ROUTE CHANGES
  // --------------------------------------------------

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileSubmenuOpen(null);
  }, [location.pathname]);

  // --------------------------------------------------
  // PREVENT BACKGROUND SCROLL ON MOBILE MENU
  // --------------------------------------------------

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // --------------------------------------------------
  // NAVIGATION ITEMS
  // --------------------------------------------------

  const navItems = [
    {
      name: 'Home',
      path: '/',
    },

    {
      name: 'About',
      submenu: [
        {
          name: 'About NOOH',
          path: '/about',
        },
        {
          name: 'Know Our Team',
          path: '/know-our-team',
          external: true,
        },
      ],
    },

    {
      name: 'Products',
      path: '/services',
    },

    {
      name: 'FRANCHISE',
      path: '/franchise',
    },

    {
      name: 'Projects',
      path: '/projects',
    },

    {
      name: 'SHOP BY CATEGORY',
      submenu: [
        {
          name: 'CEILING ART',
          path: '/ceiling-solutions',
        },
        {
          name: 'WALL ART',
          path: '/wall-solutions',
        },
        {
          name: 'FLOOR ART',
          path: '/floor-solutions',
        },
        {
          name: 'HOME DECOR',
          path: '/',
        },
      ],
    },

    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  // --------------------------------------------------
  // RENDER A SUBMENU LINK
  // Supports React Router and standalone HTML pages.
  // --------------------------------------------------

  const renderSubmenuLink = (subItem, index, mobile = false) => {
    const className = mobile
      ? 'block py-3 pl-6 pr-3 text-white/80 hover:text-luxury-gold hover:bg-luxury-gold/10 rounded-md smooth-transition text-sm border-b border-white/5'
      : 'block px-4 py-3 text-white hover:text-luxury-gold hover:bg-luxury-gold/20 rounded-lg smooth-transition text-sm';

    if (subItem.external) {
      return (
        <a
          key={`${subItem.name}-${index}`}
          href={subItem.path}
          onClick={() => {
            setIsOpen(false);
            setActiveDropdown(null);
            setMobileSubmenuOpen(null);
          }}
          className={className}
        >
          {mobile && <span className="mr-2">→</span>}
          {subItem.name}
        </a>
      );
    }

    return (
      <Link
        key={`${subItem.name}-${index}`}
        to={subItem.path}
        onClick={() => {
          setIsOpen(false);
          setActiveDropdown(null);
          setMobileSubmenuOpen(null);
        }}
        className={className}
      >
        {mobile && <span className="mr-2">→</span>}
        {subItem.name}
      </Link>
    );
  };

  // --------------------------------------------------
  // NAVBAR
  // --------------------------------------------------

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3'
          : 'bg-black/20 py-4 sm:py-5 md:py-6'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER ROW */}

        <div className="flex items-center justify-between w-full">

          {/* ------------------------------------------
              NOOH LOGO
          ------------------------------------------ */}

          <Link
            to="/"
            className="flex items-center flex-shrink-0"
            aria-label="NOOH Home"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative flex items-center"
            >
              <Logo
                className="
                  h-9
                  sm:h-10
                  md:h-12
                  w-auto
                  text-white
                "
              />
            </motion.div>
          </Link>

          {/* ------------------------------------------
              DESKTOP NAVIGATION
          ------------------------------------------ */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-4
              xl:gap-6
              ml-auto
            "
          >
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group flex-shrink-0"
                onMouseEnter={() => {
                  if (item.submenu) {
                    setActiveDropdown(item.name);
                  }
                }}
                onMouseLeave={() => {
                  if (item.submenu) {
                    setActiveDropdown(null);
                  }
                }}
              >
                {/* ITEMS WITH DROPDOWNS */}

                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                      onClick={() => {
                        setActiveDropdown((current) =>
                          current === item.name ? null : item.name
                        );
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'Escape') {
                          setActiveDropdown(null);
                        }
                      }}
                      className="
                        text-white
                        hover:text-luxury-gold
                        smooth-transition
                        flex
                        items-center
                        gap-1
                        uppercase
                        text-[11px]
                        xl:text-xs
                        font-semibold
                        tracking-wider
                        animated-underline
                        whitespace-nowrap
                      "
                    >
                      {item.name}

                      <FaChevronDown
                        className={`text-[10px] transition-transform duration-200 ${
                          activeDropdown === item.name
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>

                    {/* DROPDOWN MENU */}

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="
                            absolute
                            top-full
                            left-0
                            mt-3
                            w-56
                            xl:w-64
                            glass-gold
                            rounded-lg
                            shadow-2xl
                            p-3
                            z-50
                          "
                        >
                          {item.submenu.map((subItem, subIndex) =>
                            renderSubmenuLink(subItem, subIndex)
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (

                  /* NORMAL NAVIGATION LINKS */

                  <Link
                    to={item.path}
                    className={`
                      uppercase
                      text-[11px]
                      xl:text-xs
                      font-semibold
                      tracking-wider
                      smooth-transition
                      animated-underline
                      whitespace-nowrap
                      ${
                        location.pathname === item.path
                          ? 'text-luxury-gold'
                          : 'text-white hover:text-luxury-gold'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* ----------------------------------------
                LOGIN BUTTON
            ---------------------------------------- */}

            <button
              type="button"
              onClick={() =>
                window.open(
                  'https://www.noohadmin.com/login',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="
                btn-luxury
                text-[11px]
                xl:text-xs
                whitespace-nowrap
                flex-shrink-0
                ml-1
                px-4
                py-2
                xl:px-5
                xl:py-3
              "
            >
              Login
            </button>
          </div>

          {/* ------------------------------------------
              MOBILE MENU BUTTON
          ------------------------------------------ */}

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="
              lg:hidden
              text-white
              text-xl
              sm:text-2xl
              p-2
              focus:outline-none
              flex-shrink-0
            "
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <FaBars />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* --------------------------------------------
            MOBILE NAVIGATION
        -------------------------------------------- */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="
                lg:hidden
                mt-3
                glass-gold
                rounded-lg
                overflow-hidden
              "
            >
              <div className="p-4 sm:p-6 overflow-y-auto max-h-[75vh]">

                {navItems.map((item) => (
                  <div key={item.name} className="mb-1">

                    {/* MOBILE DROPDOWNS */}

                    {item.submenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileSubmenuOpen((current) =>
                              current === item.name ? null : item.name
                            )
                          }
                          aria-expanded={mobileSubmenuOpen === item.name}
                          className="
                            w-full
                            flex
                            items-center
                            justify-between
                            py-3
                            px-2
                            text-white
                            font-semibold
                            text-sm
                            sm:text-base
                            border-b
                            border-white/10
                          "
                        >
                          {item.name}

                          <motion.span
                            animate={{
                              rotate:
                                mobileSubmenuOpen === item.name ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="text-luxury-gold text-xs" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {mobileSubmenuOpen === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              {item.submenu.map((subItem, subIndex) =>
                                renderSubmenuLink(
                                  subItem,
                                  subIndex,
                                  true
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (

                      /* NORMAL MOBILE LINKS */

                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                          block
                          py-3
                          px-2
                          text-sm
                          sm:text-base
                          smooth-transition
                          border-b
                          border-white/10
                          ${
                            location.pathname === item.path
                              ? 'text-luxury-gold font-semibold'
                              : 'text-white hover:text-luxury-gold'
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* MOBILE CONSULTATION BUTTON */}

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="
                    btn-luxury
                    mt-4
                    block
                    text-center
                    text-sm
                    whitespace-nowrap
                  "
                >
                  Get Consultation
                </Link>

                {/* MOBILE LOGIN BUTTON */}

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);

                    window.open(
                      'https://www.noohadmin.com/login',
                      '_blank',
                      'noopener,noreferrer'
                    );
                  }}
                  className="
                    mt-3
                    w-full
                    rounded-lg
                    border
                    border-luxury-gold/40
                    px-4
                    py-3
                    text-sm
                    text-white
                    hover:text-luxury-gold
                    smooth-transition
                  "
                >
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

