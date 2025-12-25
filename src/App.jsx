import { useState, useEffect, useRef } from 'react'
import './App.css'

// ============ HEADER COMPONENT ============
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1A1A1A] shadow-lg' : 'bg-[#1A1A1A]/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6B00] rounded-full flex items-center justify-center">
              <span className="text-white text-lg md:text-xl">🐔</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-lg leading-tight">O'PAPA POULET</span>
              <span className="text-[#FFB800] text-xs font-medium">Ça Crousty !</span>
            </div>
            <span className="ml-2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded font-semibold">HALAL</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('accueil')} className="text-white hover:text-[#FF6B00] transition-colors font-medium">Accueil</button>
            <button onClick={() => scrollToSection('menu')} className="text-white hover:text-[#FF6B00] transition-colors font-medium">Menu</button>
            <button onClick={() => scrollToSection('commander')} className="text-white hover:text-[#FF6B00] transition-colors font-medium">Commander</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#FF6B00] transition-colors font-medium">Contact</button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('commander')}
            className="hidden md:block bg-[#FF6B00] hover:bg-[#E55D00] text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Commander
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A1A] border-t border-gray-700 py-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('accueil')} className="text-white hover:text-[#FF6B00] transition-colors font-medium text-left px-4">Accueil</button>
              <button onClick={() => scrollToSection('menu')} className="text-white hover:text-[#FF6B00] transition-colors font-medium text-left px-4">Menu</button>
              <button onClick={() => scrollToSection('commander')} className="text-white hover:text-[#FF6B00] transition-colors font-medium text-left px-4">Commander</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#FF6B00] transition-colors font-medium text-left px-4">Contact</button>
              <div className="px-4 pt-2">
                <button
                  onClick={() => scrollToSection('commander')}
                  className="w-full bg-[#FF6B00] hover:bg-[#E55D00] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Commander maintenant
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      {/* Brick texture overlay */}
      <div className="absolute inset-0 brick-pattern opacity-30" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '5rem 1rem 0',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Animated chicken icon */}
        <div className="animate-[bounce-soft_2s_ease-in-out_infinite]" style={{ fontSize: '5rem', marginBottom: '2rem' }}>
          🐔
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
          fontWeight: '800',
          color: 'white',
          marginBottom: '1.5rem',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
          O Papa Poulet
        </h1>

        <p style={{
          fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
          color: '#FFB800',
          fontWeight: '600',
          marginBottom: '1rem'
        }}>
          Ça Crousty !
        </p>

        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '3rem'
        }}>
          Le poulet qui croustille, à Marly-la-Ville
        </p>

        {/* Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.25rem',
          marginBottom: '3.5rem'
        }}>
          <span style={{
            background: '#16a34a',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            fontWeight: '600',
            fontSize: '1rem',
            boxShadow: '0 4px 15px rgba(22,163,74,0.4)'
          }}>
            ✓ 100% HALAL
          </span>
          <span style={{
            background: '#FF6B00',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            fontWeight: '600',
            fontSize: '1rem',
            boxShadow: '0 4px 15px rgba(255,107,0,0.4)'
          }}>
            🚗 Livraison gratuite dès 15€
          </span>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1.25rem',
          justifyContent: 'center'
        }}>
          <a
            href="#menu"
            style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #E55D00 100%)',
              color: 'white',
              fontWeight: '700',
              padding: '1rem 2.5rem',
              borderRadius: '3rem',
              fontSize: '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(255,107,0,0.4)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
          >
            Voir le menu
          </a>
          <a
            href="#commander"
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid white',
              color: 'white',
              fontWeight: '700',
              padding: '1rem 2.5rem',
              borderRadius: '3rem',
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'background 0.3s, color 0.3s'
            }}
          >
            Commander maintenant
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

// ============ MENU SECTION ============
function MenuSection() {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  const menus = [
    { name: 'Menu Poulet', price: '7,50€', description: '1 accompagnement + 1 cuisse de poulet + 1 boisson', image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', emoji: '🍗' },
    { name: 'Menu Donuts', price: '7,50€', description: '1 accompagnement + 1 donuts + 1 boisson', image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', emoji: '🍩' },
    { name: 'Menu Saucisse', price: '7,50€', description: '1 accompagnement + 2 saucisses + 1 boisson', image: 'https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', emoji: '🌭' },
    { name: 'Menu Nem', price: '7,50€', description: '1 accompagnement + 3 nems + 1 boisson', image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', emoji: '🥟' },
    { name: 'Papa Crousty', price: '10€', description: 'Papa crousty + 1 boisson', badge: 'BEST-SELLER', image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', emoji: '🍗' },
    { name: 'Menu Famille', price: '31€', description: '2 poulets entiers + 4 accompagnements + 4 boissons', badge: 'À PARTAGER', image: 'https://images.pexels.com/photos/5836649/pexels-photo-5836649.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', emoji: '🍴' },
  ]

  const poulets = [
    { name: 'Poulet entier', price: '7,50€' },
    { name: 'Demi poulet', price: '4€' },
    { name: 'Cuisse de poulet', price: '2,50€' },
    { name: 'Donuts', price: '2,50€' },
    { name: '1 Saucisse', price: '2€' },
    { name: '3 Saucisses', price: '5€' },
    { name: '1 Nem', price: '1,50€' },
    { name: '3 Nems', price: '4€' },
    { name: '1 Brick', price: '2,50€' },
  ]

  const accompagnements = [
    { name: 'Riz thaï', price: '4€' },
    { name: 'Pâtes curry', price: '4€' },
    { name: 'Pomme de terre', price: '4€' },
  ]

  const boissons = [
    { name: 'Coca, Lipton, 7Up, Oasis', price: '1,50€' },
    { name: 'Tiramisu', price: '3,50€' },
    { name: 'Sauce verte / Sauce oignon', price: '0,50€' },
  ]

  return (
    <section id="menu" style={{
      padding: '8rem 0 6rem',
      background: 'linear-gradient(180deg, #FFFAF5 0%, #FFF5E6 50%, #FFFAF5 100%)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', boxSizing: 'border-box' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          {/* Decorative badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
            padding: '0.5rem 1.25rem',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
          }}>
            <span style={{ fontSize: '1rem' }}>🔥</span>
            <span style={{ color: '#FFB800', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Menu du restaurant</span>
            <span style={{ fontSize: '1rem' }}>🔥</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: '800',
            color: '#1A1A1A',
            marginBottom: '1rem',
            lineHeight: '1.1'
          }}>
            Notre Carte
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: '#666',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Des saveurs authentiques, du poulet qui croustille
          </p>

          {/* Decorative line */}
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #FF6B00, #FFB800)',
            margin: '1.5rem auto 0',
            borderRadius: '2px'
          }} />
        </div>

        {/* Nos Menus */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{ height: '2px', width: '60px', background: 'linear-gradient(90deg, transparent, #FF6B00)' }} />
            <h3 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#1A1A1A',
              margin: 0
            }}>
              <span>🍗</span> Nos Menus
            </h3>
            <div style={{ height: '2px', width: '60px', background: 'linear-gradient(90deg, #FF6B00, transparent)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {menus.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(255,107,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,107,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden',
                  background: '#FFF5E6'
                }}>
                  {imageErrors[index] ? (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{item.emoji || '🍗'}</span>
                      <span style={{ color: '#FF6B00', fontWeight: '600', fontSize: '0.9rem' }}>{item.name}</span>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={() => handleImageError(index)}
                      crossOrigin="anonymous"
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  )}
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)',
                    pointerEvents: 'none'
                  }} />
                  {item.badge && (
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.4rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'white',
                      background: item.badge === 'BEST-SELLER'
                        ? 'linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)'
                        : 'linear-gradient(135deg, #8B2500 0%, #A52A2A 100%)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                      {item.badge === 'BEST-SELLER' ? '⭐ ' : '👨‍👩‍👧‍👦 '}{item.badge}
                    </span>
                  )}
                  {/* Price badge on image */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'linear-gradient(135deg, #FF6B00 0%, #E55D00 100%)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '2rem',
                    fontWeight: '800',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 15px rgba(255,107,0,0.4)'
                  }}>
                    {item.price}
                  </div>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    marginBottom: '0.5rem'
                  }}>{item.name}</h4>
                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* La Carte Complète - New stylish design */}
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{ height: '2px', width: '60px', background: 'linear-gradient(90deg, transparent, #FF6B00)' }} />
            <h3 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#1A1A1A',
              margin: 0
            }}>
              <span>📋</span> La Carte Complète
            </h3>
            <div style={{ height: '2px', width: '60px', background: 'linear-gradient(90deg, #FF6B00, transparent)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Nos Poulets & Viandes */}
            <div style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '2rem' }}>🐔</span>
                <h4 style={{ color: 'white', fontWeight: '700', fontSize: '1.25rem', margin: 0 }}>Nos Poulets & Viandes</h4>
              </div>
              <div style={{ padding: '1.5rem' }}>
                {poulets.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 0',
                    borderBottom: index < poulets.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                  }}>
                    <span style={{ color: '#FFFAF5', fontSize: '0.95rem' }}>{item.name}</span>
                    <span style={{
                      color: '#FFB800',
                      fontWeight: '700',
                      fontSize: '1rem',
                      background: 'rgba(255,184,0,0.15)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '2rem'
                    }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accompagnements & Boissons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Accompagnements */}
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '2px solid #FF6B00'
              }}>
                <div style={{
                  background: '#FF6B00',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>🍚</span>
                  <h4 style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>Accompagnements</h4>
                </div>
                <div style={{ padding: '1rem 1.5rem' }}>
                  {accompagnements.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.6rem 0',
                      borderBottom: index < accompagnements.length - 1 ? '1px solid #f0f0f0' : 'none'
                    }}>
                      <span style={{ color: '#1A1A1A', fontSize: '0.95rem' }}>{item.name}</span>
                      <span style={{ color: '#FF6B00', fontWeight: '700' }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boissons & Desserts */}
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '2px solid #FFB800'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #FFB800 0%, #FF6B00 100%)',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>🥤</span>
                  <h4 style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>Boissons & Desserts</h4>
                </div>
                <div style={{ padding: '1rem 1.5rem' }}>
                  {boissons.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.6rem 0',
                      borderBottom: index < boissons.length - 1 ? '1px solid #f0f0f0' : 'none'
                    }}>
                      <span style={{ color: '#1A1A1A', fontSize: '0.95rem' }}>{item.name}</span>
                      <span style={{ color: '#FF6B00', fontWeight: '700' }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ ORDER SECTION ============
function OrderSection() {
  const [orderType, setOrderType] = useState('clickCollect')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    time: '',
    comment: ''
  })
  const [selectedItems, setSelectedItems] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const menuCategories = [
    {
      title: 'Nos Menus',
      icon: '🍗',
      color: '#FF6B00',
      items: [
        { id: 'menu-poulet', name: 'Menu Poulet', price: 7.50, desc: '1 accompagnement + 1 cuisse + 1 boisson' },
        { id: 'menu-donuts', name: 'Menu Donuts', price: 7.50, desc: '1 accompagnement + 1 donuts + 1 boisson' },
        { id: 'menu-saucisse', name: 'Menu Saucisse', price: 7.50, desc: '1 accompagnement + 2 saucisses + 1 boisson' },
        { id: 'menu-nem', name: 'Menu Nem', price: 7.50, desc: '1 accompagnement + 3 nems + 1 boisson' },
        { id: 'papa-crousty', name: 'Papa Crousty', price: 10.00, desc: 'Papa crousty + 1 boisson', badge: '⭐ BEST' },
        { id: 'menu-famille', name: 'Menu Famille', price: 31.00, desc: '2 poulets + 4 accomp. + 4 boissons', badge: '👨‍👩‍👧‍👦' },
      ]
    },
    {
      title: 'Poulets & Viandes',
      icon: '🐔',
      color: '#1A1A1A',
      items: [
        { id: 'poulet-entier', name: 'Poulet entier', price: 7.50 },
        { id: 'demi-poulet', name: 'Demi poulet', price: 4.00 },
        { id: 'cuisse', name: 'Cuisse de poulet', price: 2.50 },
        { id: 'donuts', name: 'Donuts', price: 2.50 },
        { id: 'saucisse-1', name: '1 Saucisse', price: 2.00 },
        { id: 'saucisse-3', name: '3 Saucisses', price: 5.00 },
        { id: 'nem-1', name: '1 Nem', price: 1.50 },
        { id: 'nem-3', name: '3 Nems', price: 4.00 },
        { id: 'brick', name: '1 Brick', price: 2.50 },
      ]
    },
    {
      title: 'Accompagnements',
      icon: '🍚',
      color: '#FF6B00',
      items: [
        { id: 'riz', name: 'Riz thaï', price: 4.00 },
        { id: 'pates', name: 'Pâtes curry', price: 4.00 },
        { id: 'pomme-terre', name: 'Pomme de terre', price: 4.00 },
      ]
    },
    {
      title: 'Boissons & Desserts',
      icon: '🥤',
      color: '#FFB800',
      items: [
        { id: 'boisson', name: 'Boisson (Coca, Fanta...)', price: 1.50 },
        { id: 'tiramisu', name: 'Tiramisu', price: 3.50 },
      ]
    },
    {
      title: 'Sauces',
      icon: '🥫',
      color: '#16a34a',
      items: [
        { id: 'sauce-verte', name: 'Sauce verte', price: 0.50 },
        { id: 'sauce-oignon', name: 'Sauce oignon', price: 0.50 },
      ]
    }
  ]

  const allItems = menuCategories.flatMap(cat => cat.items)

  const timeSlots = [
    '11h30', '12h00', '12h30', '13h00', '13h30', '14h00',
    '18h00', '18h30', '19h00', '19h30', '20h00', '20h30', '21h00', '21h30', '22h00'
  ]

  const handleItemChange = (itemId, quantity) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: Math.max(0, quantity)
    }))
  }

  const calculateTotal = () => {
    return Object.entries(selectedItems).reduce((total, [itemId, quantity]) => {
      const item = allItems.find(i => i.id === itemId)
      return total + (item ? item.price * quantity : 0)
    }, 0)
  }

  const getCartItems = () => {
    return Object.entries(selectedItems)
      .filter(([_, qty]) => qty > 0)
      .map(([itemId, qty]) => {
        const item = allItems.find(i => i.id === itemId)
        return { ...item, quantity: qty }
      })
  }

  const getTotalItems = () => {
    return Object.values(selectedItems).reduce((sum, qty) => sum + qty, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', address: '', time: '', comment: '' })
      setSelectedItems({})
      setShowCart(false)
    }, 3000)
  }

  return (
    <section id="commander" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #1A1A1A 0%, #2D2D2D 100%)', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,107,0,0.15)',
            padding: '0.5rem 1.25rem',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            border: '1px solid rgba(255,107,0,0.3)'
          }}>
            <span style={{ fontSize: '1rem' }}>🛒</span>
            <span style={{ color: '#FFB800', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Commander en ligne</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '1rem'
          }}>
            Composez votre commande
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
            Sélectionnez vos articles et validez votre panier
          </p>

          {/* Decorative line */}
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #FF6B00, #FFB800)',
            margin: '1.5rem auto 0',
            borderRadius: '2px'
          }} />
        </div>

        {/* Order Type Selection */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
          <button
            type="button"
            onClick={() => setOrderType('clickCollect')}
            style={{
              padding: '1.25rem',
              borderRadius: '1rem',
              border: orderType === 'clickCollect' ? '2px solid #FF6B00' : '2px solid rgba(255,255,255,0.1)',
              background: orderType === 'clickCollect' ? 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)' : 'rgba(255,255,255,0.05)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏃</div>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'white', marginBottom: '0.25rem' }}>Click & Collect</h3>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>Prêt en 15-20 min</p>
          </button>
          <button
            type="button"
            onClick={() => setOrderType('livraison')}
            style={{
              padding: '1.25rem',
              borderRadius: '1rem',
              border: orderType === 'livraison' ? '2px solid #FF6B00' : '2px solid rgba(255,255,255,0.1)',
              background: orderType === 'livraison' ? 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)' : 'rgba(255,255,255,0.05)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚗</div>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'white', marginBottom: '0.25rem' }}>Livraison</h3>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>Gratuite dès 15€</p>
          </button>
        </div>

        {/* Menu Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {menuCategories.map((category) => (
            <div key={category.title} style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              {/* Category Header */}
              <div style={{
                background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`,
                padding: '1rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                <h3 style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>{category.title}</h3>
              </div>

              {/* Items Grid */}
              <div style={{
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1rem'
              }}>
                {category.items.map((item) => (
                  <div key={item.id} style={{
                    background: selectedItems[item.id] > 0 ? 'rgba(255,107,0,0.1)' : 'rgba(255,255,255,0.03)',
                    borderRadius: '1rem',
                    padding: '1rem',
                    border: selectedItems[item.id] > 0 ? '2px solid #FF6B00' : '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}>
                    {item.badge && (
                      <span style={{
                        position: 'absolute',
                        top: '-0.5rem',
                        right: '0.75rem',
                        background: '#FFB800',
                        color: '#1A1A1A',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.5rem'
                      }}>{item.badge}</span>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ color: 'white', fontWeight: '600', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.name}</h4>
                        {item.desc && <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', lineHeight: '1.3' }}>{item.desc}</p>}
                      </div>
                      <span style={{
                        background: 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)',
                        color: 'white',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '2rem',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        marginLeft: '0.5rem',
                        whiteSpace: 'nowrap'
                      }}>{item.price.toFixed(2)}€</span>
                    </div>

                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                      <button
                        type="button"
                        onClick={() => handleItemChange(item.id, (selectedItems[item.id] || 0) - 1)}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          border: 'none',
                          background: 'rgba(255,255,255,0.1)',
                          cursor: 'pointer',
                          fontSize: '1.25rem',
                          fontWeight: '700',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background 0.2s'
                        }}
                      >
                        −
                      </button>
                      <span style={{
                        width: '40px',
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: '1.25rem',
                        color: selectedItems[item.id] > 0 ? '#FFB800' : 'rgba(255,255,255,0.5)'
                      }}>{selectedItems[item.id] || 0}</span>
                      <button
                        type="button"
                        onClick={() => handleItemChange(item.id, (selectedItems[item.id] || 0) + 1)}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          border: 'none',
                          background: 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)',
                          cursor: 'pointer',
                          fontSize: '1.25rem',
                          fontWeight: '700',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 15px rgba(255,107,0,0.4)',
                          transition: 'transform 0.2s'
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Cart Button */}
        {getTotalItems() > 0 && (
          <button
            type="button"
            onClick={() => setShowCart(true)}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              background: 'linear-gradient(135deg, #FF6B00 0%, #E55D00 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '1rem',
              padding: '1rem 1.5rem',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(255,107,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              zIndex: 100,
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '1.5rem' }}>🛒</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '700', fontSize: '1rem' }}>Voir mon panier</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>{getTotalItems()} article{getTotalItems() > 1 ? 's' : ''} • {calculateTotal().toFixed(2)}€</div>
            </div>
          </button>
        )}

        {/* Cart Modal */}
        {showCart && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }} onClick={() => setShowCart(false)}>
            <div style={{
              background: 'white',
              borderRadius: '1.5rem',
              width: '100%',
              maxWidth: '500px',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }} onClick={(e) => e.stopPropagation()}>
              {/* Cart Header */}
              <div style={{
                background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
                padding: '1.5rem',
                position: 'sticky',
                top: 0,
                zIndex: 10
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>🛒</span>
                    <h3 style={{ color: 'white', fontWeight: '700', fontSize: '1.25rem', margin: 0 }}>Mon Panier</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCart(false)}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: 'none',
                      color: 'white',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      fontSize: '1.25rem'
                    }}
                  >×</button>
                </div>
              </div>

              {/* Success Message in Cart */}
              {isSubmitted ? (
                <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1A1A1A', marginBottom: '0.5rem' }}>Commande envoyée !</h3>
                  <p style={{ color: '#666' }}>Nous vous contacterons rapidement pour confirmer.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Cart Items */}
                  <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee' }}>
                    {getCartItems().map((item) => (
                      <div key={item.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 0',
                        borderBottom: '1px solid #f5f5f5'
                      }}>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontWeight: '600', color: '#1A1A1A' }}>{item.name}</span>
                          <span style={{ color: '#666', marginLeft: '0.5rem' }}>×{item.quantity}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ fontWeight: '700', color: '#FF6B00' }}>{(item.price * item.quantity).toFixed(2)}€</span>
                          <button
                            type="button"
                            onClick={() => handleItemChange(item.id, 0)}
                            style={{
                              background: '#fee2e2',
                              border: 'none',
                              color: '#ef4444',
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              cursor: 'pointer',
                              fontSize: '0.8rem'
                            }}
                          >×</button>
                        </div>
                      </div>
                    ))}

                    {/* Total */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '2px solid #1A1A1A'
                    }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1A1A1A' }}>Total</span>
                      <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: '#FF6B00'
                      }}>{calculateTotal().toFixed(2)}€</span>
                    </div>

                    {orderType === 'livraison' && calculateTotal() < 15 && (
                      <div style={{
                        marginTop: '0.75rem',
                        padding: '0.75rem',
                        background: '#FFF5E6',
                        borderRadius: '0.5rem',
                        textAlign: 'center'
                      }}>
                        <span style={{ color: '#FF6B00', fontSize: '0.9rem' }}>
                          🚗 Ajoutez {(15 - calculateTotal()).toFixed(2)}€ pour la livraison gratuite
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Customer Info Form */}
                  <div style={{ padding: '1.5rem' }}>
                    <h4 style={{ fontWeight: '700', color: '#1A1A1A', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>📝</span> Vos informations
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="👤 Votre nom"
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          borderRadius: '0.75rem',
                          border: '2px solid #e5e5e5',
                          fontSize: '1rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="📱 Téléphone"
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          borderRadius: '0.75rem',
                          border: '2px solid #e5e5e5',
                          fontSize: '1rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      {orderType === 'livraison' && (
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                          placeholder="📍 Adresse de livraison"
                          style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            borderRadius: '0.75rem',
                            border: '2px solid #e5e5e5',
                            fontSize: '1rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      )}
                      <select
                        required
                        value={formData.time}
                        onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          borderRadius: '0.75rem',
                          border: '2px solid #e5e5e5',
                          fontSize: '1rem',
                          outline: 'none',
                          background: 'white',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="">🕐 Heure souhaitée</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      <textarea
                        value={formData.comment}
                        onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                        placeholder="💬 Commentaire (optionnel)"
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          borderRadius: '0.75rem',
                          border: '2px solid #e5e5e5',
                          fontSize: '1rem',
                          outline: 'none',
                          resize: 'none',
                          minHeight: '80px',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        padding: '1.25rem',
                        borderRadius: '1rem',
                        border: 'none',
                        background: 'linear-gradient(135deg, #FF6B00 0%, #E55D00 100%)',
                        color: 'white',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        boxShadow: '0 10px 30px rgba(255,107,0,0.4)',
                        marginTop: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem'
                      }}
                    >
                      <span>🚀</span> Valider ma commande
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginTop: '1rem' }}>
                      💳 Paiement sur place ou à la livraison
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// ============ FOOTER ============
function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, #0D0D0D 100%)' }}>
      {/* Gradient separator */}
      <div style={{
        height: '4px',
        background: 'linear-gradient(90deg, #FF6B00 0%, #FFB800 50%, #FF6B00 100%)'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        {/* Main footer content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(255,107,0,0.4)'
              }}>
                <span style={{ fontSize: '1.75rem' }}>🐔</span>
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: '800', fontSize: '1.25rem', lineHeight: '1.2' }}>O'PAPA POULET</div>
                <div style={{ color: '#FFB800', fontSize: '0.875rem', fontWeight: '600' }}>Ça Crousty !</div>
              </div>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Le meilleur poulet rôti HALAL de Marly-la-Ville. Saveurs authentiques et qualité garantie.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              boxShadow: '0 4px 15px rgba(22,163,74,0.3)'
            }}>
              <span style={{ fontSize: '0.875rem' }}>✓</span>
              <span style={{ color: 'white', fontWeight: '600', fontSize: '0.8rem' }}>100% HALAL CERTIFIÉ</span>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '1rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '2px solid #FF6B00',
              display: 'inline-block'
            }}>Navigation</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Accueil', id: 'accueil' },
                { label: 'Notre Carte', id: 'menu' },
                { label: 'Commander', id: 'commander' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#9CA3AF',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '0.25rem 0',
                    transition: 'color 0.2s, transform 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#FF6B00'
                    e.target.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#9CA3AF'
                    e.target.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ color: '#FF6B00' }}>›</span> {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4 style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '1rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '2px solid #FF6B00',
              display: 'inline-block'
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#FF6B00', fontSize: '1.1rem' }}>📍</span>
                <div>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: '500' }}>7 Square Dalibard</p>
                  <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>95670 Marly-la-Ville</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#FF6B00', fontSize: '1.1rem' }}>📞</span>
                <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: '500' }}>07 53 38 02 56</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#FF6B00', fontSize: '1.1rem' }}>🕐</span>
                <div>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: '500' }}>Mar - Sam : 11h30 - 22h30</p>
                  <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Dim : 18h00 - 22h30</p>
                  <p style={{ color: '#EF4444', fontSize: '0.85rem', fontWeight: '500' }}>Lundi : Fermé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social column */}
          <div>
            <h4 style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '1rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '2px solid #FF6B00',
              display: 'inline-block'
            }}>Suivez-nous</h4>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Restez connectés pour nos offres et nouveautés !
            </p>
            <a
              href="https://instagram.com/opapapoulet95"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #E1306C 0%, #F77737 50%, #FCAF45 100%)',
                padding: '0.75rem 1.25rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(225,48,108,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(225,48,108,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(225,48,108,0.3)'
              }}
            >
              <svg style={{ width: '20px', height: '20px', fill: 'white' }} viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>@opapapoulet95</span>
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div id="contact" style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              height: '1px',
              flex: 1,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.3) 100%)'
            }} />
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.25rem',
              background: 'rgba(255,107,0,0.1)',
              borderRadius: '2rem',
              border: '1px solid rgba(255,107,0,0.2)'
            }}>
              <span style={{ fontSize: '1.25rem' }}>📍</span>
              <span style={{ color: '#FFB800', fontWeight: '600', fontSize: '0.9rem' }}>Nous trouver</span>
            </div>
            <div style={{
              height: '1px',
              flex: 1,
              background: 'linear-gradient(90deg, rgba(255,107,0,0.3) 0%, transparent 100%)'
            }} />
          </div>

          <div style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            border: '3px solid rgba(255,107,0,0.3)',
            position: 'relative'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.8397845447!2d2.4951!3d49.0786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e63f3e5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s7%20Square%20Dalibard%2C%2095670%20Marly-la-Ville!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
              style={{
                width: '100%',
                height: '250px',
                border: 'none',
                display: 'block'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay gradient */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(26,26,26,0.8) 100%)',
              pointerEvents: 'none'
            }} />
            {/* Address overlay */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(26,26,26,0.9)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ color: '#FF6B00' }}>🐔</span>
              <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: '500' }}>7 Square Dalibard, Marly-la-Ville</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>© 2025 O Papa Poulet</span>
            <span style={{ color: '#4B5563' }}>•</span>
            <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Tous droits réservés</span>
            <span style={{ color: '#4B5563' }}>•</span>
            <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Fait avec</span>
            <span style={{ color: '#EF4444' }}>❤️</span>
            <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>à Marly-la-Ville</span>
          </div>
          <p style={{ color: '#6B7280', fontSize: '0.75rem' }}>
            🐔 Le poulet qui croustille depuis 2025
          </p>
        </div>
      </div>
    </footer>
  )
}

// ============ MAIN APP ============
function App() {
  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <OrderSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
