import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Share,
  Copy,
  Check,
  Twitter,
  Coffee,
  Sparkles,
  ShoppingBag,
  Utensils,
  Star
} from 'lucide-react';

const pageData = {
  name: "meinewelt.idn",
  phone: "6287815254523",
  address: "Palangka Raya, Kalimantan Tengah",
  title: "Modern & Minimalist Coffee Shop ☕",
  description: "#JanganJera | Tempat ternyaman buat ngopi, nugas, dan berbagi cerita di Palangka Raya.",
  profileImg: "image_fc5411.png",
  heroImg: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800&h=1200",
  links: {
    instagram: "https://www.instagram.com/meinewelt.idn/?hl=id",
    menu: "https://drive.google.com/file/d/1FkeUtu5pKt2Nzf031NVt23Cc_-uidTPQ/view?usp=drivesdk",
    grabfood: "https://food.grab.com/id/id/restaurant/meine-welt-langkai-delivery/6-CZNVGZCJERCFJ6",
    gofood: "https://gofood.co.id/palangka-raya/restaurant/meine-welt-rta-milono-813c2675-67d7-458c-ac25-b7c28a6f31c4",
    maps: "https://maps.app.goo.gl/REYqqJmyhM6Zz71JA"
  },
  menuPhotos: [
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400&h=600",
    "https://images.unsplash.com/photo-1461023058943-0708e5c14abc?auto=format&fit=crop&q=80&w=400&h=600",
    "https://images.unsplash.com/photo-1495474472201-315ae27575e9?auto=format&fit=crop&q=80&w=400&h=600",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400&h=600",
    "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=400&h=600",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400&h=600",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600&h=400",
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=600&h=400",
    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600&h=400",
    "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=600&h=400",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=600&h=400",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600&h=400"
  ],
  reviews: [
    {
      name: "Anisa Hanifah",
      stats: "6 ulasan · 3 foto",
      avatar: "https://ui-avatars.com/api/?name=Anisa+Hanifah&background=c92a2a&color=fff",
      date: "3 bulan lalu",
      text: "Makanannya enak-enak (chicken hotplate, ayam kalasan, bebek bumbu hitam, risol mayo, sweet potato rolls ✨ BEST 👌🏻) Kopi susunya jg enak bgt, Lavanilla & Carmella (creamynya pas, cocok buat yg ..."
    },
    {
      name: "Siti Aisah",
      stats: "Local Guide · 125 ulasan · 436 foto",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", 
      date: "2 tahun lalu",
      text: "Cafe nya ga begitu luas, tapi tempat nya cukup nyaman. Ada indoor dan outdoor nya. Outdoor ny kyk tema taman kecil gtu bnyk tumbuhan ny. Menu makan dan minuman harga nya standar, nasi ayam kalasan dan chicken katsu nya enak, rekomended 2 menu itu. Selalu ramai di hari weekend. Termasuk cafe yg rekomen di kota Palangkaraya."
    },
    {
      name: "Ellena Syahlevina",
      stats: "Local Guide · 35 ulasan · 27 foto",
      avatar: "https://ui-avatars.com/api/?name=Ellena+Syahlevina&background=7950f2&color=fff",
      date: "10 bulan lalu",
      text: "Tempatnya enak buat santai, buat ngumpul atau mau sendiri\nMenu kesukaan di sini yg pasti pisang keju, dan Americano, jangan ragu kalau mau main ke sini😌 ☝️ ..."
    },
    {
      name: "Grace",
      stats: "4 ulasan · 5 foto",
      avatar: "https://ui-avatars.com/api/?name=Grace&background=5c940d&color=fff",
      date: "2 tahun lalu",
      text: "Suka bgtt ke sini karena suasananya, makanannya enak2, suka karena cafe nya ga terlalu terang🤩 cocok buat kaum introvert kek saya😁🤡"
    }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const orderType = formData.get('orderType');
    const deliveryMethod = formData.get('deliveryMethod');
    const address = formData.get('address');
    
    const message = `Halo *${pageData.name}*! ☕%0A%0ASaya mau pesan/reservasi nih kak.%0A%0A*Nama:* ${name}%0A*Pesanan/Reservasi:* ${orderType}%0A*Opsi Layanan:* ${deliveryMethod}%0A*Detail / Meja:* ${address}%0A%0ATolong dicek ya kak. #JanganJera 🤎`;
    
    const waUrl = `https://wa.me/${pageData.phone}?text=${message}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;500;600&display=swap');
        
        body {
          background-color: #FAF9F6; 
          color: #2C2C2C; 
          margin: 0;
          font-family: 'Nunito', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        
        .font-elegant {
          font-family: 'Cormorant Garamond', serif;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }

        .soft-shadow {
          box-shadow: 0 10px 40px -10px rgba(139, 90, 43, 0.3); 
        }
      `}</style>

      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#FAF9F6] min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-white/40 backdrop-blur-md rounded-full border border-white/60 text-stone-800 hover:bg-stone-100 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/30 via-[#FAF9F6]/80 to-[#FAF9F6]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-32 h-32 rounded-full p-1.5 bg-white/60 backdrop-blur-md mb-6 shadow-xl border border-stone-200 hover:scale-105 transition-transform duration-500">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-2 border-white bg-black"
                onError={(e) => { e.target.src = 'https://placehold.co/300x300/1e1e1e/d4af37?text=MW' }}
              />
            </div>

            <h1 className="text-4xl font-elegant font-bold text-[#3E2723] mb-3 leading-tight tracking-wide">
              {pageData.name}
            </h1>
            <p className="text-stone-600 font-medium text-sm leading-relaxed mb-8 max-w-[95%] whitespace-pre-line">
              {pageData.description}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
              <a 
                href={pageData.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white border border-stone-200 hover:bg-stone-50 transition-all text-stone-800 shadow-sm text-sm font-semibold"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a 
                href={pageData.links.menu}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white border border-stone-200 hover:bg-stone-50 transition-all text-stone-800 shadow-sm text-sm font-semibold"
              >
                <Coffee size={18} /> Daftar Menu
              </a>
              <a 
                href={pageData.links.grabfood}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white border border-stone-200 hover:bg-stone-50 transition-all text-stone-800 shadow-sm text-sm font-semibold"
              >
                <Utensils size={18} /> GrabFood
              </a>
              <a 
                href={pageData.links.gofood}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white border border-stone-200 hover:bg-stone-50 transition-all text-stone-800 shadow-sm text-sm font-semibold"
              >
                <ShoppingBag size={18} /> GoFood
              </a>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white border border-stone-200 hover:bg-stone-50 transition-all text-stone-800 shadow-sm text-sm font-semibold"
              >
                <MapPin size={18} /> Google Maps
              </a>
            </div>

            <a 
              href={`https://wa.me/${pageData.phone}`}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#8B5A2B] text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-[#6F421D] transition-all shadow-md"
            >
              Hubungi via WA
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>

        {/* SIGNATURE MENU SECTION */}
        <section className="pt-12 pb-8 border-t border-stone-200/50">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Coffee className="text-[#8B5A2B]" size={24} />
              <h2 className="text-2xl font-elegant font-bold text-[#3E2723] tracking-wide">Signature Menu</h2>
            </div>
            <p className="text-stone-500 text-sm ml-8">Kopi pilihan dengan biji premium. Rasakan bedanya di setiap tegukan.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.menuPhotos.slice(0, 5).map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.menuPhotos.slice(0, 5), idx)}
                className="snap-center shrink-0 w-[220px] aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer relative group border border-stone-100 shadow-sm bg-white"
              >
                <img 
                  src={img} 
                  alt={`Menu ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* VIBES & AMBIENCE SECTION */}
        <section className="py-8 bg-stone-100/50">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#8B5A2B]" size={22} />
              <h2 className="text-2xl font-elegant font-bold text-[#3E2723] tracking-wide">Vibes & Ambience</h2>
            </div>
            <p className="text-stone-500 text-sm ml-8">Tempat yang nyaman untuk nugas, nongkrong, atau sekadar me-time.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.gallery.slice(0, 5).map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.gallery.slice(0, 5), idx)}
                className="snap-center shrink-0 w-[280px] aspect-video rounded-[2rem] overflow-hidden cursor-pointer relative group border border-white shadow-sm bg-white"
              >
                <img 
                  src={img} 
                  alt={`Vibes ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="py-8">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Star className="text-[#8B5A2B] fill-[#8B5A2B]" size={22} />
              <h2 className="text-2xl font-elegant font-bold text-[#3E2723] tracking-wide">Kata Mereka</h2>
            </div>
            <p className="text-stone-500 text-sm ml-8">Ulasan jujur dari pelanggan setia kami.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.reviews.map((rev, idx) => (
              <div 
                key={idx} 
                className="snap-center shrink-0 w-[300px] bg-white rounded-3xl p-5 border border-stone-200 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover bg-stone-100" />
                    <div className="flex flex-col">
                      <h4 className="text-sm font-bold text-stone-800 leading-tight">{rev.name}</h4>
                      <p className="text-[10px] text-stone-500 mt-0.5">{rev.stats}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                  <span className="text-[10px] text-stone-400 ml-1.5">{rev.date}</span>
                </div>
                
                <p className="text-xs text-stone-600 leading-relaxed whitespace-pre-line">
                  {rev.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM SECTION */}
        <section id="booking-form" className="py-12 px-6">
          <div className="bg-white/80 backdrop-blur-xl border border-stone-200 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#EAE0D5]/40 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#8B5A2B]/20 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-3xl font-elegant font-bold text-[#3E2723] mb-2">Pesan Sekarang ☕</h2>
              <p className="text-stone-500 text-sm leading-relaxed">Mau ngopi di rumah atau reservasi tempat? Isi form di bawah ya.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest ml-2">Nama</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama kamu"
                  className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-3.5 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest ml-2">Pesanan / Reservasi</label>
                <select 
                  name="orderType" 
                  required
                  defaultValue=""
                  className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-3.5 text-sm text-stone-700 focus:outline-none focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 transition-all appearance-none"
                >
                  <option value="" disabled>Pilih kategori...</option>
                  <option value="Es Kopi Susu / Signature">Es Kopi Susu / Signature</option>
                  <option value="Manual Brew / Black Coffee">Manual Brew / Black Coffee</option>
                  <option value="Non-Coffee / Artisan Tea">Non-Coffee / Artisan Tea</option>
                  <option value="Snack / Pastry">Snack / Pastry</option>
                  <option value="Reservasi Meja / Event">Reservasi Meja / Event</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest ml-2">Opsi Layanan</label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 text-sm text-stone-600 bg-white border border-stone-200 rounded-2xl px-4 py-3 flex-1 cursor-pointer hover:border-[#8B5A2B] transition-all">
                    <input type="radio" name="deliveryMethod" value="Takeaway / Kurir" required className="accent-[#8B5A2B]" /> Takeaway / Kurir
                  </label>
                  <label className="flex items-center gap-2 text-sm text-stone-600 bg-white border border-stone-200 rounded-2xl px-4 py-3 flex-1 cursor-pointer hover:border-[#8B5A2B] transition-all">
                    <input type="radio" name="deliveryMethod" value="Dine-in / Reservasi" required className="accent-[#8B5A2B]" /> Dine-in (Tempat)
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-widest ml-2">Detail Pesanan / Alamat</label>
                <textarea 
                  name="address" 
                  required
                  rows="3"
                  placeholder="Cth: 2 Kopi Susu Aren, less sugar. Alamat: Jl. Yos Sudarso..."
                  className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-3.5 text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full mt-2 bg-[#8B5A2B] text-white font-bold text-sm uppercase tracking-widest py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#6F421D] transition-colors soft-shadow"
              >
                Kirim via WhatsApp
                <MessageCircle size={18} className="fill-white" />
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mb-8"></div>
          
          <img 
            src={pageData.profileImg} 
            alt="Logo" 
            className="w-12 h-12 rounded-full mb-4 opacity-90 border border-stone-200 bg-black" 
            onError={(e) => { e.target.src = 'https://placehold.co/300x300/1e1e1e/d4af37?text=MW' }}
          />
          
          <div className="text-stone-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-elegant font-bold text-[#3E2723] text-base tracking-wide">{pageData.name}</span>
            <span>{pageData.address}</span>
          </div>

          <p className="text-stone-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          <a 
            href="https://www.solusilokal.id"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-stone-400 hover:text-[#8B5A2B] transition-colors text-[9px] mt-2 uppercase tracking-[0.2em] font-bold flex items-center gap-1"
          >
            Powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA (Fixed Bottom) */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-xl border border-stone-200 rounded-2xl text-[#3E2723] shadow-[0_10px_40px_-10px_rgba(139,90,43,0.4)] hover:bg-stone-50 active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm uppercase tracking-widest">Reservasi WhatsApp</span>
            <div className="bg-[#8B5A2B] text-white p-2 rounded-xl">
              <Coffee size={18} className="fill-transparent" />
            </div>
          </button>
        </div>
      </main>

      {/* LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-stone-800/50 rounded-full text-white hover:bg-stone-700 transition-all z-50 border border-stone-600"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          <button 
            className="absolute left-4 p-3 bg-stone-800/50 rounded-full text-white hover:bg-stone-700 transition-all z-50 border border-stone-600"
            onClick={prevImage}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox View" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-lg"
            />
          </div>

          <button 
            className="absolute right-4 p-3 bg-stone-800/50 rounded-full text-white hover:bg-stone-700 transition-all z-50 border border-stone-600"
            onClick={nextImage}
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-stone-800/80 px-5 py-2.5 rounded-full shadow-sm border border-stone-600">
            {lightbox.currentIndex + 1} / {lightbox.images.length}
          </div>
        </div>
      )}

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-[#FAF9F6] sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-[#3E2723] font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-stone-400 hover:text-stone-800 hover:bg-stone-200 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-white rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm border border-stone-200">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-[72px] h-[72px] rounded-full border-2 border-stone-200 mb-4 object-cover bg-black" 
                onError={(e) => { e.target.src = 'https://placehold.co/300x300/1e1e1e/d4af37?text=MW' }}
              />
              <h4 className="text-[#3E2723] font-elegant font-bold text-xl text-center tracking-wide">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-stone-500 text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4 justify-center">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-all shadow-sm border border-stone-200"
                >
                  {copied ? <Check size={26} className="text-[#8B5A2B]" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-stone-500 text-center">
                  {copied ? 'Disalin' : 'Salin Link'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToTwitter}
                  className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-stone-500 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToWhatsApp}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-stone-500 text-center">WhatsApp</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-stone-200 mb-4"></div>
            
            <div className="flex flex-col items-center text-center">
              <h5 className="text-stone-700 font-bold text-[13px] mb-1">Follow {pageData.name}</h5>
              <p className="text-stone-500 text-[11px] mb-4">Jangan sampai kelewatan promo dan menu terbaru kami!</p>
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="w-full py-3.5 bg-[#8B5A2B] text-white text-sm font-bold uppercase tracking-widest rounded-2xl hover:bg-[#6F421D] transition-colors soft-shadow">
                Kunjungi Instagram
              </a>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}
