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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Animated chicken icon */}
        <div className="text-6xl md:text-8xl mb-6 animate-[bounce-soft_2s_ease-in-out_infinite]">
          🐔
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
          O Papa Poulet
        </h1>
        <p className="text-xl md:text-2xl text-[#FFB800] font-semibold mb-2">
          Ça Crousty !
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Le poulet qui croustille, à Marly-la-Ville
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base shadow-lg">
            ✓ 100% HALAL
          </span>
          <span className="bg-[#FF6B00] text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base shadow-lg">
            🚗 Livraison gratuite dès 15€
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-[#FF6B00] hover:bg-[#E55D00] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Voir le menu
          </a>
          <a
            href="#commander"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300"
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
    { name: 'Menu Poulet', price: '7,50€', description: '1 accompagnement + 1 cuisse de poulet + 1 boisson', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop' },
    { name: 'Menu Donuts', price: '7,50€', description: '1 accompagnement + 1 donuts + 1 boisson', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop' },
    { name: 'Menu Saucisse', price: '7,50€', description: '1 accompagnement + 2 saucisses + 1 boisson', image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop' },
    { name: 'Menu Nem', price: '7,50€', description: '1 accompagnement + 3 nems + 1 boisson', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop' },
    { name: 'Papa Crousty', price: '10€', description: 'Papa crousty + 1 boisson', badge: 'BEST-SELLER', image: 'https://images.unsplash.com/photo-1626645738196-c2a72c105313?w=400&h=300&fit=crop' },
    { name: 'Menu Famille', price: '31€', description: '2 poulets entiers + 4 accompagnements + 4 boissons', badge: 'À PARTAGER', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' },
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
    <section id="menu" className="py-20 bg-[#FFF5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🔥</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">Notre Carte</h2>
            <span className="text-3xl">🔥</span>
          </div>
          <p className="text-lg text-gray-600">Des saveurs authentiques, du poulet qui croustille</p>
        </div>

        {/* Nos Menus */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8 flex items-center justify-center gap-2">
            <span className="text-[#FF6B00]">🍗</span> Nos Menus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menus.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#FF6B00]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative h-[200px] overflow-hidden bg-[#FFF5E6] rounded-t-xl">
                  {imageErrors[index] ? (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <span className="text-4xl mb-2">🍗</span>
                      <span className="text-[#FF6B00] font-semibold text-sm">{item.name}</span>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={() => handleImageError(index)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  {item.badge && (
                    <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white ${item.badge === 'BEST-SELLER' ? 'bg-[#FFB800]' : 'bg-[#8B2500]'}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-[#1A1A1A]">{item.name}</h4>
                    <span className="text-xl font-bold text-[#FF6B00]">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid for smaller items - Centered container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {/* Nos Poulets */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#FF6B00]/10 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center justify-center gap-2">
                <span className="text-[#FF6B00]">🐔</span> Nos Poulets
              </h3>
              <div className="space-y-3">
                {poulets.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-semibold text-[#FF6B00]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accompagnements */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#FF6B00]/10 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center justify-center gap-2">
                <span className="text-[#FF6B00]">🍚</span> Accompagnements
              </h3>
              <div className="space-y-3">
                {accompagnements.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-semibold text-[#FF6B00]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Boissons & Desserts */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#FF6B00]/10 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center justify-center gap-2">
                <span className="text-[#FF6B00]">🥤</span> Boissons & Desserts
              </h3>
              <div className="space-y-3">
                {boissons.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-semibold text-[#FF6B00]">{item.price}</span>
                  </div>
                ))}
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

  const menuCategories = [
    {
      title: 'Nos Menus',
      icon: '🍗',
      items: [
        { id: 'menu-poulet', name: 'Menu Poulet', price: 7.50 },
        { id: 'menu-donuts', name: 'Menu Donuts', price: 7.50 },
        { id: 'menu-saucisse', name: 'Menu Saucisse', price: 7.50 },
        { id: 'menu-nem', name: 'Menu Nem', price: 7.50 },
        { id: 'papa-crousty', name: 'Papa Crousty', price: 10.00 },
        { id: 'menu-famille', name: 'Menu Famille', price: 31.00 },
      ]
    },
    {
      title: 'Poulets & Viandes',
      icon: '🐔',
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
      items: [
        { id: 'riz', name: 'Riz thaï', price: 4.00 },
        { id: 'pates', name: 'Pâtes curry', price: 4.00 },
        { id: 'pomme-terre', name: 'Pomme de terre', price: 4.00 },
      ]
    },
    {
      title: 'Boissons & Desserts',
      icon: '🥤',
      items: [
        { id: 'boisson', name: 'Boisson', price: 1.50 },
        { id: 'tiramisu', name: 'Tiramisu', price: 3.50 },
      ]
    },
    {
      title: 'Sauces',
      icon: '🥫',
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', address: '', time: '', comment: '' })
      setSelectedItems({})
    }, 3000)
  }

  return (
    <section id="commander" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4">Commandez en direct</h2>
          <p className="text-lg text-gray-600">Click & Collect ou Livraison - Évitez les files d'attente</p>
        </div>

        {/* Order Type Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <button
            onClick={() => setOrderType('clickCollect')}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              orderType === 'clickCollect'
                ? 'border-[#FF6B00] bg-[#FF6B00]/5'
                : 'border-gray-200 hover:border-[#FF6B00]/50'
            }`}
          >
            <div className="text-4xl mb-3">🏃</div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">Click & Collect</h3>
            <p className="text-gray-600">Prêt en 15-20 min</p>
          </button>
          <button
            onClick={() => setOrderType('livraison')}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              orderType === 'livraison'
                ? 'border-[#FF6B00] bg-[#FF6B00]/5'
                : 'border-gray-200 hover:border-[#FF6B00]/50'
            }`}
          >
            <div className="text-4xl mb-3">🚗</div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">Livraison</h3>
            <p className="text-gray-600">Gratuite dès 15€</p>
          </button>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-8 p-6 bg-green-100 border border-green-500 rounded-xl text-center">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="text-xl font-bold text-green-700 mb-1">Commande envoyée !</h3>
            <p className="text-green-600">Nous vous contacterons rapidement pour confirmer votre commande.</p>
          </div>
        )}

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="bg-[#FFF5E6] rounded-xl p-6 md:p-8 shadow-lg">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Nom *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Téléphone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                placeholder="06 XX XX XX XX"
              />
            </div>
          </div>

          {/* Address (only for delivery) */}
          {orderType === 'livraison' && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Adresse de livraison *</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                placeholder="Numéro, rue, code postal, ville"
              />
            </div>
          )}

          {/* Menu Items Selection by Category */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-4">Sélectionnez vos articles</label>

            {menuCategories.map((category) => (
              <div key={category.title} className="mb-6">
                <h4 className="flex items-center gap-2 text-md font-semibold text-[#1A1A1A] mb-3 pb-2 border-b border-gray-200">
                  <span>{category.icon}</span> {category.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200 hover:border-[#FF6B00]/30 transition-colors">
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-[#1A1A1A] text-sm">{item.name}</span>
                        <span className="ml-2 text-[#FF6B00] font-semibold text-sm">{item.price.toFixed(2)}€</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => handleItemChange(item.id, (selectedItems[item.id] || 0) - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold text-[#1A1A1A] transition-colors"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-semibold text-sm">{selectedItems[item.id] || 0}</span>
                        <button
                          type="button"
                          onClick={() => handleItemChange(item.id, (selectedItems[item.id] || 0) + 1)}
                          className="w-8 h-8 rounded-full bg-[#FF6B00] hover:bg-[#E55D00] flex items-center justify-center font-bold text-white transition-colors"
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

          {/* Total */}
          {calculateTotal() > 0 && (
            <div className="mb-6 p-4 bg-[#FF6B00]/10 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#1A1A1A]">Total estimé :</span>
                <span className="text-2xl font-bold text-[#FF6B00]">{calculateTotal().toFixed(2)}€</span>
              </div>
              {orderType === 'livraison' && calculateTotal() < 15 && (
                <p className="text-sm text-gray-600 mt-2">
                  Ajoutez {(15 - calculateTotal()).toFixed(2)}€ pour la livraison gratuite
                </p>
              )}
            </div>
          )}

          {/* Time Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Heure souhaitée *</label>
            <select
              required
              value={formData.time}
              onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all bg-white"
            >
              <option value="">Choisir une heure</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          {/* Comment */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Commentaire (optionnel)</label>
            <textarea
              value={formData.comment}
              onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all resize-none"
              rows="3"
              placeholder="Instructions spéciales, allergies, etc."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FF6B00] hover:bg-[#E55D00] text-white font-bold text-lg py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg"
          >
            Envoyer ma commande
          </button>

          {/* Note */}
          <p className="text-center text-sm text-gray-500 mt-4">
            💳 Paiement sur place ou à la livraison
          </p>
        </form>
      </div>
    </section>
  )
}

// ============ CONTACT SECTION ============
function ContactSection() {
  const hours = [
    { day: 'Mardi - Samedi', hours: '11h30 - 22h30' },
    { day: 'Dimanche', hours: '18h00 - 22h30' },
    { day: 'Lundi', hours: 'Fermé', closed: true },
  ]

  return (
    <section id="contact" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Où nous trouver</h2>
          <p className="text-lg text-gray-400">Venez nous rendre visite !</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Adresse</h3>
                <p className="text-gray-300">7 Square Dalibard<br />95670 Marly-la-Ville</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Téléphone</h3>
                <p className="text-gray-300">01 XX XX XX XX</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Horaires</h3>
                <div className="space-y-2">
                  {hours.map((item, index) => (
                    <div key={index} className="flex justify-between gap-8">
                      <span className="text-gray-300">{item.day}</span>
                      <span className={item.closed ? 'text-red-400 font-semibold' : 'text-[#FFB800] font-semibold'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Suivez-nous</h3>
                <a
                  href="https://instagram.com/opapapoulet95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFB800] hover:text-[#FF6B00] transition-colors font-medium"
                >
                  @opapapoulet95
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-80 lg:h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.8397845447!2d2.4951!3d49.0786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e63f3e5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s7%20Square%20Dalibard%2C%2095670%20Marly-la-Ville!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
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
    <footer className="bg-[#1A1A1A] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🐔</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm leading-tight">O'PAPA POULET</span>
              <span className="text-[#FFB800] text-xs font-medium">Ça Crousty !</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <button onClick={() => scrollToSection('menu')} className="text-gray-400 hover:text-[#FF6B00] transition-colors">Menu</button>
            <button onClick={() => scrollToSection('commander')} className="text-gray-400 hover:text-[#FF6B00] transition-colors">Commander</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-[#FF6B00] transition-colors">Contact</button>
            <a
              href="https://instagram.com/opapapoulet95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF6B00] transition-colors"
            >
              Instagram
            </a>
          </nav>

          {/* Social & Badge */}
          <div className="flex items-center gap-4">
            <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">HALAL</span>
            <a
              href="https://instagram.com/opapapoulet95"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-[#FF6B00] rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 O Papa Poulet - Fait avec ❤️ à Marly-la-Ville
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
