<template>
  <div class="min-h-screen bg-[#fff8fa] text-[#4f3b3b] overflow-x-hidden selection:bg-[#ffd1dc] selection:text-[#5d4037]">
    
    <!-- Floating Sparkles & Hearts (Decorative) -->
    <div class="absolute top-20 left-10 text-pink-300 text-3xl animate-float-slow select-none pointer-events-none opacity-40">✨</div>
    <div class="absolute top-96 right-10 text-pink-300 text-2xl animate-float-fast select-none pointer-events-none opacity-40">💖</div>
    <div class="absolute top-[800px] left-5 text-yellow-300 text-3xl animate-float-slow select-none pointer-events-none opacity-40">🧸</div>
    <div class="absolute top-[1600px] right-8 text-pink-300 text-3xl animate-float-fast select-none pointer-events-none opacity-40">🎀</div>
    <div class="absolute top-[2400px] left-12 text-yellow-300 text-2xl animate-float-slow select-none pointer-events-none opacity-40">🌟</div>

    <!-- Navigation Header -->
    <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'glass shadow-cute py-3' : 'bg-transparent py-5']">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group">
          <span class="text-2xl animate-bounce">🧸</span>
          <span class="font-bold text-2xl tracking-wide bg-gradient-to-r from-[#ff758c] to-[#ff7eb3] bg-clip-text text-transparent">HONEY GIFT</span>
        </a>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center gap-8 font-semibold">
          <a href="#" class="hover:text-[#ff758c] transition duration-200">Beranda</a>
          <a href="#produk" class="hover:text-[#ff758c] transition duration-200">Katalog Gemoy</a>
          <a href="#tiktok" class="hover:text-[#ff758c] transition duration-200">TikTok Live</a>
          <a href="#testimoni" class="hover:text-[#ff758c] transition duration-200">Testimoni</a>
          <a href="#faq" class="hover:text-[#ff758c] transition duration-200">FAQ</a>
        </nav>

        <!-- CTA & Mobile Nav Toggle -->
        <div class="flex items-center gap-3">
          <a href="#order" class="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#ff758c] to-[#ff7eb3] text-white font-bold px-6 py-2.5 rounded-full hover:scale-105 transition transform shadow-cute active:scale-95 cursor-pointer">
            <span>Pesan Sekarang</span>
            <i class="pi pi-shopping-cart"></i>
          </a>
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-[#ff758c] focus:outline-none cursor-pointer">
            <i :class="['pi text-2xl', isMobileMenuOpen ? 'pi-times' : 'pi-bars']"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
        <div v-if="isMobileMenuOpen" class="md:hidden glass-pink border-t border-pink-100 py-4 px-6 flex flex-col gap-4 font-semibold text-center shadow-lg">
          <a href="#" @click="isMobileMenuOpen = false" class="py-2 hover:text-[#ff758c] transition">Beranda</a>
          <a href="#produk" @click="isMobileMenuOpen = false" class="py-2 hover:text-[#ff758c] transition">Katalog Gemoy</a>
          <a href="#tiktok" @click="isMobileMenuOpen = false" class="py-2 hover:text-[#ff758c] transition">TikTok Live</a>
          <a href="#testimoni" @click="isMobileMenuOpen = false" class="py-2 hover:text-[#ff758c] transition">Testimoni</a>
          <a href="#faq" @click="isMobileMenuOpen = false" class="py-2 hover:text-[#ff758c] transition">FAQ</a>
          <a href="#order" @click="isMobileMenuOpen = false" class="bg-gradient-to-r from-[#ff758c] to-[#ff7eb3] text-white py-3 rounded-full font-bold shadow-md hover:opacity-90">Pesan Sekarang 🛍️</a>
        </div>
      </transition>
    </header>

    <!-- Hero Section -->
    <section class="pt-28 pb-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-[90vh]">
      <!-- Text Info -->
      <div class="flex-1 space-y-6 text-center lg:text-left">
        <div class="inline-flex items-center gap-2 bg-[#ffeef2] border border-[#ffd1dc] text-[#ff5376] px-4 py-1.5 rounded-full text-sm font-bold animate-pulse-slow">
          <span>🌸 Toko Aksesoris Gemoy Terlengkap!</span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#4a3434] tracking-tight">
          Bikin Harimu Makin <br class="hidden md:inline" />
          <span class="bg-gradient-to-r from-[#ff5376] to-[#ff7eb3] bg-clip-text text-transparent">Gemoy & Estetik</span> ✨
        </h1>
        <p class="text-base md:text-lg text-[#6b5555] leading-relaxed max-w-xl mx-auto lg:mx-0">
          Temukan koleksi pulpen gel lucu, gantungan kunci boneka empuk, pouch beludru gemoy, dan notes estetik di <b>Honey Gift</b>. Kemasan aman dengan bubblewrap & banyak bonus freebies menarik di setiap orderan! 🎀🧸
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
          <a href="#produk" class="w-full sm:w-auto text-center bg-gradient-to-r from-[#ff5376] to-[#ff7eb3] text-white font-bold px-8 py-4 rounded-full shadow-cute shadow-cute-hover hover:scale-105 active:scale-95 transition transform duration-200 cursor-pointer">
            Lihat Katalog Produk 🎁
          </a>
          <a href="#order" class="w-full sm:w-auto text-center bg-white border-2 border-[#ffd1dc] text-[#ff5376] hover:bg-[#fff0f3] font-bold px-8 py-4 rounded-full transition transform hover:scale-105 active:scale-95 duration-200 cursor-pointer">
            Tanya Admin / Custom Order 💬
          </a>
        </div>

        <!-- Social Proof Stats -->
        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-[#ffe0e6]">
          <div class="text-center lg:text-left">
            <h3 class="text-2xl font-bold text-[#ff5376]">100%</h3>
            <p class="text-xs text-gray-500">Real Product Picts</p>
          </div>
          <div class="h-8 w-px bg-[#ffe0e6]"></div>
          <div class="text-center lg:text-left">
            <h3 class="text-2xl font-bold text-[#ff5376]">5.0 ★</h3>
            <p class="text-xs text-gray-500">Rating di Shopee & TikTok</p>
          </div>
          <div class="h-8 w-px bg-[#ffe0e6]"></div>
          <div class="text-center lg:text-left">
            <h3 class="text-2xl font-bold text-[#ff5376]">FREE</h3>
            <p class="text-xs text-gray-500">Aesthetic Sticker Freebies</p>
          </div>
        </div>
      </div>

      <!-- Collage Image Showcase -->
      <div class="flex-1 w-full relative max-w-lg lg:max-w-none">
        <!-- Main Collage Wrapper -->
        <div class="relative w-full aspect-square md:h-[500px] flex items-center justify-center">
          
          <!-- Background pastel blob decoration -->
          <div class="absolute w-[80%] h-[80%] bg-gradient-to-tr from-[#ffe4e9] to-[#ffedf0] rounded-full blur-3xl opacity-80 -z-10 animate-pulse-slow"></div>

          <!-- Main Image (Collage Hero) -->
          <div class="relative w-[70%] h-[70%] rounded-[3rem] overflow-hidden shadow-cute rotate-3 border-4 border-white animate-float-slow hover:rotate-0 transition duration-300">
            <img src="/img/honey_gift_hero.png" alt="Honey Gift Collection" class="w-full h-full object-cover">
          </div>

          <!-- Decorative Floating Thumbnail 1 (Cute Pens) -->
          <div class="absolute top-[5%] right-[5%] w-[32%] aspect-square rounded-2xl overflow-hidden shadow-cute -rotate-6 border-4 border-white hover:rotate-0 transition duration-300 group">
            <img src="/img/cute_pens.png" alt="Cute Pens" class="w-full h-full object-cover group-hover:scale-110 transition duration-300">
            <span class="absolute bottom-1 right-1 bg-pink-100 text-[#ff5376] text-[10px] font-bold px-1.5 py-0.5 rounded">✏️ Pulpen</span>
          </div>

          <!-- Decorative Floating Thumbnail 2 (Keychains) -->
          <div class="absolute bottom-[5%] left-[0%] w-[32%] aspect-square rounded-2xl overflow-hidden shadow-cute rotate-12 border-4 border-white hover:rotate-0 transition duration-300 group">
            <img src="/img/cute_keychain.png" alt="Cute Keychain" class="w-full h-full object-cover group-hover:scale-110 transition duration-300">
            <span class="absolute bottom-1 left-1 bg-pink-100 text-[#ff5376] text-[10px] font-bold px-1.5 py-0.5 rounded">🔑 Gantungan</span>
          </div>

          <!-- Decorative Floating Thumbnail 3 (Pouches) -->
          <div class="absolute bottom-[20%] right-[0%] w-[28%] aspect-square rounded-2xl overflow-hidden shadow-cute -rotate-12 border-4 border-white hover:rotate-0 transition duration-300 group">
            <img src="/img/cute_pouch.png" alt="Cute Pouch" class="w-full h-full object-cover group-hover:scale-110 transition duration-300">
            <span class="absolute bottom-1 right-1 bg-pink-100 text-[#ff5376] text-[10px] font-bold px-1.5 py-0.5 rounded">👛 Pouch</span>
          </div>
        </div>
      </div>
    </section>

    <!-- USP Features Section -->
    <section class="bg-gradient-to-b from-[#fff8fa] to-white py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 class="text-3xl font-extrabold text-[#4a3434]">Kenapa Harus Belanja di Honey Gift? 💖</h2>
          <p class="text-[#846b6b]">Setiap pesanan dijamin dilayani dengan penuh cinta untuk kepuasan bebs!</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- USP 1 -->
          <div class="bg-[#fff9fa] border border-[#ffe5eb] p-6 rounded-2xl space-y-4 hover:translate-y-[-6px] transition transform duration-300 shadow-sm shadow-cute-hover">
            <div class="w-12 h-12 bg-[#ffe5eb] rounded-full flex items-center justify-center text-2xl">
              📦
            </div>
            <h3 class="font-bold text-lg text-[#4a3434]">Bubblewrap Tebal Gratis</h3>
            <p class="text-sm text-[#7e6969] leading-relaxed">Gak perlu checkout bubblewrap tambahan! Honey Gift mengemas semua paket bebs dengan ekstra bubblewrap tebal berlapis-lapis gratis agar aman.</p>
          </div>

          <!-- USP 2 -->
          <div class="bg-[#fffdf8] border border-[#fffaeb] p-6 rounded-2xl space-y-4 hover:translate-y-[-6px] transition transform duration-300 shadow-sm shadow-cute-hover">
            <div class="w-12 h-12 bg-[#fffaeb] rounded-full flex items-center justify-center text-2xl">
              🎁
            </div>
            <h3 class="font-bold text-lg text-[#4a3434]">Banyak Bonus Freebies</h3>
            <p class="text-sm text-[#7e6969] leading-relaxed">Kami senang berbagi keceriaan! Dapatkan freebies stiker estetik lucu, thank you card gemoy, atau permen setiap membeli produk apapun.</p>
          </div>

          <!-- USP 3 -->
          <div class="bg-[#f9fdfd] border border-[#e6f7f7] p-6 rounded-2xl space-y-4 hover:translate-y-[-6px] transition transform duration-300 shadow-sm shadow-cute-hover">
            <div class="w-12 h-12 bg-[#e6f7f7] rounded-full flex items-center justify-center text-2xl">
              💬
            </div>
            <h3 class="font-bold text-lg text-[#4a3434]">Admin Ramah & Fast Respon</h3>
            <p class="text-sm text-[#7e6969] leading-relaxed">Mau tanya warna? Tanya kecocokan untuk kado? Chat admin bebs! Admin kami yang super ramah & fast respon siap membantu keluhan bebs kapanpun.</p>
          </div>

          <!-- USP 4 -->
          <div class="bg-[#faf9ff] border border-[#ece9ff] p-6 rounded-2xl space-y-4 hover:translate-y-[-6px] transition transform duration-300 shadow-sm shadow-cute-hover">
            <div class="w-12 h-12 bg-[#ece9ff] rounded-full flex items-center justify-center text-2xl">
              🚀
            </div>
            <h3 class="font-bold text-lg text-[#4a3434]">Pengiriman Cepat</h3>
            <p class="text-sm text-[#7e6969] leading-relaxed">Kami kirim pesanan secepat kilat! Checkout hari ini langsung kami pickup & kirim di hari yang sama agar cepat sampai di pelukan bebs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Showcase Gallery -->
    <section id="produk" class="py-16 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <span class="text-xs bg-[#ffeef2] text-[#ff5376] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Pilih Produk Favoritmu</span>
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#4a3434]">Katalog Aksesoris Ter-Gemoy 🎀</h2>
        <p class="text-sm md:text-base text-[#846b6b]">Klik filter kategori untuk melihat varian produk terlucu yang siap kamu bawa pulang!</p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto">
        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="['px-5 py-2.5 rounded-full font-bold text-sm transition transform hover:scale-105 active:scale-95 duration-200 cursor-pointer shadow-sm', activeTab === tab.id ? 'bg-gradient-to-r from-[#ff5376] to-[#ff7eb3] text-white shadow-cute' : 'bg-white border border-[#ffd1dc] text-[#6b5555] hover:bg-[#fff0f3]']">
          {{ tab.label }}
        </button>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(product, index) in filteredProducts" :key="index" class="bg-white rounded-2xl overflow-hidden border border-[#ffe3e9] flex flex-col hover:translate-y-[-8px] transition duration-300 shadow-sm shadow-cute-hover group">
          
          <!-- Product Image Container -->
          <div class="relative aspect-square overflow-hidden bg-gray-50">
            <!-- Badge -->
            <span class="absolute top-3 left-3 bg-gradient-to-r from-[#ff5376] to-[#ff7eb3] text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full z-10 shadow-sm uppercase">
              {{ product.badge }}
            </span>
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          </div>

          <!-- Product Details -->
          <div class="p-5 flex flex-col flex-1 justify-between space-y-4">
            <div class="space-y-1">
              <!-- Rating -->
              <div class="flex items-center gap-1 text-yellow-400 text-xs">
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <i class="pi pi-star-fill"></i>
                <span class="text-[#7e6969] ml-1 font-semibold">5.0 ({{ product.reviews }} ulasan)</span>
              </div>
              <h3 class="font-bold text-lg text-[#4a3434] line-clamp-1 group-hover:text-[#ff5376] transition-colors">{{ product.name }}</h3>
              <p class="text-xs text-[#7e6969] line-clamp-2 leading-relaxed">{{ product.description }}</p>
            </div>

            <div class="space-y-3 pt-2">
              <div class="flex justify-between items-center">
                <span class="text-xs text-[#846b6b]">Harga:</span>
                <span class="text-xl font-extrabold text-[#ff5376]">{{ formatPrice(product.price) }}</span>
              </div>
              
              <button @click="selectAndScrollToOrder(product)" class="w-full bg-gradient-to-r from-[#ff758c] to-[#ff7eb3] text-white py-2.5 rounded-full font-bold text-sm shadow-sm hover:scale-105 active:scale-95 transition transform duration-200 cursor-pointer flex items-center justify-center gap-1">
                <span>Pesan Sekarang</span>
                <i class="pi pi-shopping-cart text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TikTok & Live Announcement Section (Matches user screenshot) -->
    <section id="tiktok" class="py-16 px-6 bg-gradient-to-b from-white to-[#fff8fa] scroll-mt-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span class="text-xs bg-[#eef1ff] text-[#536fff] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Ikuti Kami Di Media Sosial</span>
          <h2 class="text-3xl font-extrabold text-[#4a3434]">TikTok Feed & Live Honey Gift 🎬</h2>
          <p class="text-sm text-[#846b6b]">Tonton kemeriahan packing orderan dan flash sale diskon khusus bebs saat kami sedang Live!</p>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-12 bg-white border border-[#ffe3e9] rounded-[2.5rem] p-6 md:p-10 shadow-cute max-w-5xl mx-auto">
          <!-- TikTok Profile Card Mockup -->
          <div class="w-full lg:w-[45%] bg-[#0f0f12] text-white rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between aspect-[9/14] max-w-sm mx-auto">
            
            <!-- TikTok Interface Header -->
            <div class="flex justify-between items-center text-sm opacity-90 mb-4">
              <i class="pi pi-chevron-left text-lg cursor-pointer"></i>
              <span class="font-bold text-sm">honeygift_0</span>
              <div class="flex gap-4">
                <i class="pi pi-search text-lg cursor-pointer"></i>
                <i class="pi pi-ellipsis-h text-lg cursor-pointer"></i>
              </div>
            </div>

            <!-- Profile Info -->
            <div class="flex flex-col items-center text-center space-y-4 my-2">
              <!-- Avatar with blue mascot -->
              <div class="relative w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-400">
                <div class="w-full h-full rounded-full overflow-hidden border-2 border-[#0f0f12] bg-[#3a3b45] flex items-center justify-center">
                  <!-- Custom cute character mascot -->
                  <span class="text-5xl select-none">🦊</span>
                </div>
                <span class="absolute bottom-0 right-1 bg-[#ff5376] w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#0f0f12] text-xs">
                  <i class="pi pi-plus text-[8px] font-bold"></i>
                </span>
              </div>
              
              <!-- Username -->
              <div>
                <h3 class="font-extrabold text-xl flex items-center gap-1 justify-center">
                  <span>HONEY GIFT</span>
                  <i class="pi pi-check-circle text-blue-400 text-sm"></i>
                </h3>
                <p class="text-xs text-gray-400">@honeygift_0</p>
              </div>

              <!-- Stats -->
              <div class="flex items-center gap-5 justify-center pt-2">
                <div class="text-center">
                  <span class="font-bold block text-sm">882</span>
                  <span class="text-[10px] text-gray-400 tracking-wide uppercase">Mengikuti</span>
                </div>
                <div class="h-6 w-px bg-gray-800"></div>
                <div class="text-center">
                  <span class="font-bold block text-sm">237</span>
                  <span class="text-[10px] text-gray-400 tracking-wide uppercase">Pengikut</span>
                </div>
                <div class="h-6 w-px bg-gray-800"></div>
                <div class="text-center">
                  <span class="font-bold block text-sm">67</span>
                  <span class="text-[10px] text-gray-400 tracking-wide uppercase">Suka</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-2 w-full pt-2">
                <a href="https://www.tiktok.com/@honeygift_0" target="_blank" class="flex-1 bg-[#ff5376] text-center hover:bg-[#ff4066] font-bold py-2 rounded-lg text-sm transition">
                  Ikuti
                </a>
                <a href="https://linktr.ee/honeygiftmyshop" target="_blank" class="flex-1 bg-[#2f2f35] text-center hover:bg-[#3f3f45] font-bold py-2 rounded-lg text-sm transition">
                  Pesan
                </a>
                <button class="bg-[#2f2f35] hover:bg-[#3f3f45] px-3 py-2 rounded-lg text-sm">
                  <i class="pi pi-user-plus"></i>
                </button>
              </div>

              <!-- Bio -->
              <div class="pt-2 text-xs text-gray-300 space-y-1">
                <p>📍 Cute Accessories & Stationery Shop</p>
                <a href="https://linktr.ee/honeygiftmyshop" target="_blank" class="text-blue-400 hover:underline block pt-1 flex items-center justify-center gap-1 font-semibold">
                  <i class="pi pi-link text-[10px]"></i>
                  <span>https://linktr.ee/honeygiftmyshop</span>
                </a>
              </div>
            </div>

            <!-- Tab Indicator -->
            <div class="grid grid-cols-3 text-center border-t border-gray-800 text-xs py-3 text-gray-400">
              <span class="text-white font-semibold border-b-2 border-white pb-1"><i class="pi pi-images mr-1"></i> Video</span>
              <span><i class="pi pi-sync mr-1"></i> Repost</span>
              <span><i class="pi pi-heart mr-1"></i> Disukai</span>
            </div>
          </div>

          <!-- Video Showcase and Live Sticky Note (Right Side) -->
          <div class="flex-1 space-y-6 w-full">
            <h3 class="text-2xl font-bold text-[#4a3434]">TikTok Live Alert & Highlight</h3>
            <p class="text-sm text-[#7e6969] leading-relaxed">
              Kami secara rutin menyelenggarakan live packing dan jualan langsung dengan harga promo spesial bebs! Di bawah ini adalah pengumuman jadwal live kami dan beberapa produk unggulan saat siaran.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Sticky Note Live (Replicates "Besok kita live lagi yaa bebs!" from the picture) -->
              <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl relative shadow-md transform rotate-[-1deg] overflow-hidden flex flex-col justify-between min-h-[200px]">
                <!-- Red Tape Effect top center -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#ff6b6b]/35 border border-dashed border-[#ff4f4f]/50 rotate-[2deg] -translate-y-2"></div>
                
                <!-- Icon and Sparkle -->
                <div class="text-right text-yellow-400 text-xl font-bold pt-2">⭐</div>

                <!-- Sticky Text Content -->
                <div class="my-4 text-center">
                  <h4 class="font-extrabold text-2xl text-yellow-800 tracking-tight leading-snug">
                    Besok kita <br/>
                    <span class="bg-[#ff5376] text-white px-2 py-0.5 rounded font-black text-3xl inline-block my-1 animate-pulse-slow">LIVE</span> <br/>
                    lagi yaa bebs! 👋🥺
                  </h4>
                </div>

                <div class="flex justify-between items-center text-xs text-yellow-700 font-bold border-t border-yellow-200/60 pt-3">
                  <span>⏰ Pukul: 19.00 WIB</span>
                  <a href="https://www.tiktok.com/@honeygift_0" target="_blank" class="hover:underline flex items-center gap-1 text-[#ff5376]">
                    <span>Gabung Live</span>
                    <i class="pi pi-chevron-right text-[10px]"></i>
                  </a>
                </div>
              </div>

              <!-- Product Highlight card -->
              <div class="bg-[#ffedf1] border border-[#ffd1dc] p-6 rounded-2xl flex flex-col justify-between min-h-[200px] shadow-sm shadow-cute">
                <div class="flex items-center gap-2">
                  <span class="text-xl">🔥</span>
                  <h4 class="font-bold text-[#ff5376]">Promo Siaran Live!</h4>
                </div>
                <p class="text-xs text-[#846b6b] leading-relaxed my-2">
                  Bebs bisa pilih aksesoris langsung saat kami sedang packing live. Tulis nomor pesanan dan kami panggil nama bebs saat dibungkus gemoy!
                </p>
                
                <div class="bg-white/80 p-2.5 rounded-lg border border-pink-200/50 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-xl">🛒</div>
                  <div class="text-xs">
                    <span class="font-bold block text-[#4a3434]">Diskon Khusus Siaran</span>
                    <span class="text-[#7e6969]">Potongan s/d 30% all items!</span>
                  </div>
                </div>

                <a href="https://www.tiktok.com/@honeygift_0" target="_blank" class="w-full text-center bg-gradient-to-r from-[#ff5376] to-[#ff7eb3] text-white py-2 rounded-xl font-bold text-xs shadow-sm hover:scale-102 active:scale-98 transition transform cursor-pointer">
                  Buka TikTok honeygift_0 🎬
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimoni" class="py-16 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <span class="text-xs bg-[#ffeef2] text-[#ff5376] px-3 py-1 rounded-full font-bold uppercase tracking-wider font-semibold">Testimoni Bebs Cantik</span>
        <h2 class="text-3xl font-extrabold text-[#4a3434]">Komentar Gemoy Pembeli 🌸</h2>
        <p class="text-sm text-[#846b6b]">Simak curhatan bahagia bebs-bebs cantik yang sudah meminang aksesoris Honey Gift!</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <!-- Testimonial 1 -->
        <div class="bg-white border border-[#ffe3e9] p-6 rounded-3xl relative flex flex-col justify-between shadow-sm hover:-translate-y-1 transition duration-300">
          <div class="space-y-4">
            <!-- Stars -->
            <div class="text-yellow-400 text-xs flex gap-0.5">
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
            </div>
            <!-- Text -->
            <p class="text-sm text-[#6b5555] leading-relaxed italic">
              "Pulpennya lucu bangeeet! Tinta hitamnya lancar pol & ga macet sama sekali. Pengemasan super gemoy dapet stiker bonus lagi! Makasih kak bebs 💖"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-6 mt-4 border-t border-pink-50/50">
            <div class="w-10 h-10 rounded-full bg-[#ffd1dc] flex items-center justify-center font-bold text-sm text-[#ff5376]">A</div>
            <div>
              <h4 class="font-bold text-sm text-[#4a3434]">Bebs Amanda</h4>
              <p class="text-[10px] text-gray-400">Jakarta</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-white border border-[#ffe3e9] p-6 rounded-3xl relative flex flex-col justify-between shadow-sm hover:-translate-y-1 transition duration-300">
          <div class="space-y-4">
            <!-- Stars -->
            <div class="text-yellow-400 text-xs flex gap-0.5">
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
            </div>
            <!-- Text -->
            <p class="text-sm text-[#6b5555] leading-relaxed italic">
              "Gantungan kunci boneka birunya gemesin abis, bulunya halus & jahitannya rapih. Dipasang di ransel langsung bikin estetik sekolah hihi. Langganan deh!"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-6 mt-4 border-t border-pink-50/50">
            <div class="w-10 h-10 rounded-full bg-[#ffe4b5] flex items-center justify-center font-bold text-sm text-yellow-600">S</div>
            <div>
              <h4 class="font-bold text-sm text-[#4a3434]">Bebs Salsabila</h4>
              <p class="text-[10px] text-gray-400">Bandung</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-white border border-[#ffe3e9] p-6 rounded-3xl relative flex flex-col justify-between shadow-sm hover:-translate-y-1 transition duration-300">
          <div class="space-y-4">
            <!-- Stars -->
            <div class="text-yellow-400 text-xs flex gap-0.5">
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
            </div>
            <!-- Text -->
            <p class="text-sm text-[#6b5555] leading-relaxed italic">
              "Pouch teddy bearnya tebel & muat banyak alat tulis. Packing bubblewrapnya kenceng bgt jadi aman ga penyok. Sukses selalu honey gift, luv bgt!"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-6 mt-4 border-t border-pink-50/50">
            <div class="w-10 h-10 rounded-full bg-[#e6e6fa] flex items-center justify-center font-bold text-sm text-[#7853ff]">K</div>
            <div>
              <h4 class="font-bold text-sm text-[#4a3434]">Bebs Khadijah</h4>
              <p class="text-[10px] text-gray-400">Surabaya</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive WhatsApp Order Builder (High conversion widget) -->
    <section id="order" class="py-16 px-6 bg-white scroll-mt-20">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-br from-[#fff0f3] to-[#fff9fb] border-2 border-[#ffd1dc] rounded-3xl p-6 md:p-10 shadow-cute relative overflow-hidden">
          
          <!-- Background decoration -->
          <div class="absolute -top-12 -right-12 w-32 h-32 bg-[#ff7eb3]/10 rounded-full blur-xl pointer-events-none"></div>

          <!-- Section Head -->
          <div class="text-center space-y-2 mb-8 relative">
            <div class="w-14 h-14 bg-gradient-to-tr from-[#ff5376] to-[#ff7eb3] rounded-full flex items-center justify-center text-2xl text-white mx-auto shadow-md animate-bounce mb-3">
              🛍️
            </div>
            <h3 class="text-2xl md:text-3xl font-extrabold text-[#4a3434]">Formulir Pesanan WhatsApp 📲</h3>
            <p class="text-xs md:text-sm text-[#7e6969] max-w-md mx-auto">
              Pilih produk lucu yang bebs inginkan, sistem akan menghitung total harga secara otomatis & membuat format pesan ke WhatsApp Admin!
            </p>
          </div>

          <!-- Order Builder Form -->
          <form @submit.prevent="sendWhatsAppMessage" class="space-y-6 max-w-xl mx-auto">
            <!-- Name Input -->
            <div class="space-y-2">
              <label for="buyer-name" class="block font-bold text-sm text-[#6b5555]">Nama Bebs (Pembeli):</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-[#ff5376]">
                  <i class="pi pi-user text-xs"></i>
                </span>
                <input id="buyer-name" v-model="orderForm.name" required type="text" placeholder="Masukkan nama bebs..." class="w-full pl-9 pr-4 py-3 rounded-xl border border-[#ffd1dc] bg-white outline-none focus:border-[#ff5376] focus:ring-1 focus:ring-[#ff5376] transition text-sm">
              </div>
            </div>

            <!-- Product Dropdown -->
            <div class="space-y-2">
              <label for="product-select" class="block font-bold text-sm text-[#6b5555]">Pilih Aksesoris Gemoy:</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-[#ff5376] pointer-events-none">
                  <i class="pi pi-gift text-xs"></i>
                </span>
                <select id="product-select" v-model="selectedProductIndex" class="w-full pl-9 pr-4 py-3 rounded-xl border border-[#ffd1dc] bg-white outline-none focus:border-[#ff5376] focus:ring-1 focus:ring-[#ff5376] transition text-sm appearance-none cursor-pointer">
                  <option v-for="(prod, idx) in allProducts" :key="idx" :value="idx">
                    {{ prod.name }} ({{ formatPrice(prod.price) }})
                  </option>
                </select>
                <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-[#ff5376] pointer-events-none">
                  <i class="pi pi-chevron-down text-xs"></i>
                </span>
              </div>
            </div>

            <!-- Quantity Selector & Variant -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Quantity -->
              <div class="space-y-2">
                <label for="quantity-select" class="block font-bold text-sm text-[#6b5555]">Jumlah (Pcs):</label>
                <div class="flex items-center">
                  <button type="button" @click="decrementQty" class="px-4 py-2.5 bg-white border border-[#ffd1dc] rounded-l-xl text-lg font-bold text-[#ff5376] hover:bg-[#fff0f3] active:scale-95 transition cursor-pointer select-none">
                    -
                  </button>
                  <input id="quantity-select" type="number" min="1" v-model.number="orderForm.qty" class="w-full text-center py-2.5 border-t border-b border-[#ffd1dc] bg-white font-bold outline-none focus:ring-0 text-sm">
                  <button type="button" @click="incrementQty" class="px-4 py-2.5 bg-white border border-[#ffd1dc] rounded-r-xl text-lg font-bold text-[#ff5376] hover:bg-[#fff0f3] active:scale-95 transition cursor-pointer select-none">
                    +
                  </button>
                </div>
              </div>

              <!-- Variant / Warna -->
              <div class="space-y-2">
                <label for="variant-select" class="block font-bold text-sm text-[#6b5555]">Varian / Warna Karakter:</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-[#ff5376] pointer-events-none">
                    <i class="pi pi-palette text-xs"></i>
                  </span>
                  <input id="variant-select" v-model="orderForm.variant" type="text" placeholder="Contoh: Pink Bunny / Stitch Biru" class="w-full pl-9 pr-4 py-3 rounded-xl border border-[#ffd1dc] bg-white outline-none focus:border-[#ff5376] focus:ring-1 focus:ring-[#ff5376] transition text-sm">
                </div>
              </div>
            </div>

            <!-- Custom Greeting Note -->
            <div class="space-y-2">
              <label for="buyer-note" class="block font-bold text-sm text-[#6b5555]">Catatan Khusus (Opsional):</label>
              <textarea id="buyer-note" v-model="orderForm.note" rows="3" placeholder="Tulis catatan jika ingin dijadikan kado, ditulis thank you card nama tertentu, dll..." class="w-full p-4 rounded-xl border border-[#ffd1dc] bg-white outline-none focus:border-[#ff5376] focus:ring-1 focus:ring-[#ff5376] transition text-sm resize-none"></textarea>
            </div>

            <!-- Precalculated Price Card -->
            <div class="bg-white border border-[#ffd1dc] p-4 rounded-2xl flex justify-between items-center shadow-sm">
              <div class="space-y-0.5">
                <span class="text-xs text-[#846b6b]">Estimasi Total (Belum ongkir):</span>
                <span class="text-xl font-black text-[#ff5376] block">{{ formatPrice(estimatedTotal) }}</span>
              </div>
              <div class="bg-[#fff0f3] text-[#ff5376] text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <span>Dapat Freebies 🎁</span>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white py-4 rounded-full font-black text-base shadow-md hover:scale-102 active:scale-98 transition transform duration-200 cursor-pointer flex items-center justify-center gap-2">
              <i class="pi pi-whatsapp text-lg"></i>
              <span>Kirim Formulir ke WhatsApp Admin 📲</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-16 px-6 max-w-4xl mx-auto scroll-mt-20">
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <span class="text-xs bg-[#ffeef2] text-[#ff5376] px-3 py-1 rounded-full font-bold uppercase tracking-wider font-semibold">Tanya Jawab Bebs</span>
        <h2 class="text-3xl font-extrabold text-[#4a3434]">Pertanyaan Sering Diajukan 💭</h2>
        <p class="text-sm text-[#846b6b]">Punya pertanyaan mengenai orderan, COD, atau packing? Intip infonya di bawah ya bebs!</p>
      </div>

      <div class="space-y-4">
        <div v-for="(item, idx) in faqs" :key="idx" class="bg-white border border-[#ffe3e9] rounded-2xl overflow-hidden transition-all duration-300">
          <button @click="toggleFaq(idx)" class="w-full px-6 py-4 text-left font-bold text-base text-[#4a3434] hover:text-[#ff5376] transition flex justify-between items-center cursor-pointer select-none">
            <span>{{ item.question }}</span>
            <i :class="['pi text-xs transition-transform duration-300', activeFaqIndex === idx ? 'pi-chevron-up text-[#ff5376]' : 'pi-chevron-down']"></i>
          </button>
          
          <transition enter-active-class="transition duration-200 ease-out" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-40 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="max-h-40 opacity-100" leave-to-class="max-h-0 opacity-0">
            <div v-if="activeFaqIndex === idx" class="px-6 pb-5 pt-1 text-sm text-[#7e6969] leading-relaxed border-t border-[#fff0f3]">
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#2f2425] text-[#b3a1a2] py-12 px-6 border-t-4 border-[#ff758c]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <!-- Brand / Logo -->
        <div class="space-y-4 md:col-span-2">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🧸</span>
            <span class="font-black text-white text-xl tracking-wide">HONEY GIFT</span>
          </div>
          <p class="text-xs leading-relaxed text-[#968283]">
            Honey Gift adalah toko pernak-pernik lucu online yang berdedikasi menyebarkan keceriaan melalui barang-barang gemoy berharga terjangkau. Kami menjamin packing bubblewrap tebal & banyak bonus stiker lucu di setiap pesanan!
          </p>
          <div class="flex gap-3 pt-2">
            <a href="https://www.tiktok.com/@honeygift_0" target="_blank" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#ff5376] hover:text-white transition"><i class="pi pi-video"></i></a>
            <a href="https://linktr.ee/honeygiftmyshop" target="_blank" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#ff5376] hover:text-white transition"><i class="pi pi-link"></i></a>
          </div>
        </div>

        <!-- Sitemap Quick Links -->
        <div class="space-y-3">
          <h4 class="font-bold text-white text-sm tracking-wider uppercase">Menu Pintar</h4>
          <ul class="text-xs space-y-2">
            <li><a href="#" class="hover:text-[#ff758c] transition">Beranda Utama</a></li>
            <li><a href="#produk" class="hover:text-[#ff758c] transition">Katalog Produk</a></li>
            <li><a href="#tiktok" class="hover:text-[#ff758c] transition">Siaran Live TikTok</a></li>
            <li><a href="#testimoni" class="hover:text-[#ff758c] transition">Komentar Pembeli</a></li>
          </ul>
        </div>

        <!-- Store Info -->
        <div class="space-y-3">
          <h4 class="font-bold text-white text-sm tracking-wider uppercase">Operasional & Link</h4>
          <ul class="text-xs space-y-2 text-[#968283]">
            <li>📅 Jam Packing: 09:00 - 18:00 WIB</li>
            <li>📍 Pengiriman dari: Jakarta, Indonesia</li>
            <li>🛍️ Toko TikTok: <a href="https://www.tiktok.com/@honeygift_0" target="_blank" class="text-blue-400 hover:underline">honeygift_0</a></li>
            <li>🔗 Linktree: <a href="https://linktr.ee/honeygiftmyshop" target="_blank" class="text-blue-400 hover:underline">honeygiftmyshop</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom Copyright -->
      <div class="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-[10px] text-[#7a6a6b]">
        <p>&copy; 2026 Honey Gift Accessories. All rights reserved. Created with 💖 for all bebs cantik.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// UI Interaction variables
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeTab = ref("semua");
const activeFaqIndex = ref(null);

// Form bindings
const selectedProductIndex = ref(0);
const orderForm = ref({
  name: "",
  qty: 1,
  variant: "",
  note: ""
});

// Product Categories
const tabs = [
  { id: "semua", label: "🎀 Semua Items" },
  { id: "pulpen", label: "✏️ Pulpen Karakter" },
  { id: "gantungan", label: "🔑 Gantungan Kunci" },
  { id: "pouch", label: "👛 Pouch Gemoy" },
  { id: "notes", label: "📓 Notes Estetik" }
];

// Complete Product list using the generated high-quality assets!
const allProducts = [
  {
    name: "Set Pulpen Gel Karakter Gemoy",
    category: "pulpen",
    price: 12500,
    badge: "Best Seller ⭐",
    image: "/img/cute_pens.png",
    reviews: "340",
    description: "Pulpen gel tinta hitam pekat dengan cap karakter hewan super imut. Genggaman soft rubber empuk nyaman buat belajar seharian."
  },
  {
    name: "Gantungan Kunci Plushie Fluffy Bear",
    category: "gantungan",
    price: 18900,
    badge: "Hot Deal 🔥",
    image: "/img/cute_keychain.png",
    reviews: "215",
    description: "Gantungan kunci bulu beludru super lembut berbentuk karakter fantasi berwajah gemesin. Sempurna dipajang di ransel atau tas bebs."
  },
  {
    name: "Pouch Kotak Pensil Teddy Fluffy",
    category: "pouch",
    price: 24500,
    badge: "Cute Choice 🎀",
    image: "/img/cute_pouch.png",
    reviews: "189",
    description: "Pouch berkapasitas besar berlapis bulu domba boneka teddy bear yang empuk. Dilengkapi resleting emas premium & anti macet."
  },
  {
    name: "Diary Padlock Notes Kartun Estetik",
    category: "notes",
    price: 29000,
    badge: "Eksklusif 🌟",
    image: "/img/cute_notebook.png",
    reviews: "95",
    description: "Buku diary catatan harian bersampul kartun gemoy lengkap dengan gembok emas mini. Kertas tebal bergaris anti tembus tinta."
  },
  {
    name: "Pulpen Gel Squishy Karakter Lucu",
    category: "pulpen",
    price: 13900,
    badge: "New Item ✨",
    image: "/img/cute_pens.png",
    reviews: "82",
    description: "Pulpen dengan mainan squishy karakter di badannya. Bisa diremas-remas pereda stress saat bebs lelah belajar di sekolah."
  },
  {
    name: "Gantungan Kunci Liquid Bear DIY",
    category: "gantungan",
    price: 15500,
    badge: "Best Seller ⭐",
    image: "/img/cute_keychain.png",
    reviews: "148",
    description: "Gantungan kunci bear akrilik dengan cairan glitter mengkilap di dalamnya. Goyang-goyangkan dan liat bintang berkilauan!"
  },
  {
    name: "Pouch Kosmetik Clear Glitter Hologram",
    category: "pouch",
    price: 22000,
    badge: "Aesthetic Choice 💖",
    image: "/img/cute_pouch.png",
    reviews: "112",
    description: "Tas pouch transparan hologram tahan air dengan taburan glitter gemerlap. Cocok untuk botol skincare dan kosmetik bebs."
  },
  {
    name: "Buku Sticky Notes Pony Pastel Set",
    category: "notes",
    price: 16500,
    badge: "Best Value 🏷️",
    image: "/img/cute_notebook.png",
    reviews: "260",
    description: "Set lengkap pembatas buku memo tempel aneka ukuran dengan corak kuda poni pastel lembut yang bikin catatan bebs rapi & gemoy."
  }
];

// Computed Filtered Products
const filteredProducts = computed(() => {
  if (activeTab.value === "semua") {
    return allProducts;
  }
  return allProducts.filter(p => p.category === activeTab.value);
});

// Computed WhatsApp Precalculated Price
const estimatedTotal = computed(() => {
  const selectedProduct = allProducts[selectedProductIndex.value];
  if (!selectedProduct) return 0;
  return selectedProduct.price * orderForm.value.qty;
});

// Scroll Listener to make header frosted glass
const handleScroll = () => {
  if (window.scrollY > 30) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

// Form selection link from catalog
const selectAndScrollToOrder = (product) => {
  // Find index of this product
  const idx = allProducts.findIndex(p => p.name === product.name);
  if (idx !== -1) {
    selectedProductIndex.value = idx;
    orderForm.value.qty = 1;
    orderForm.value.variant = "";
    orderForm.value.note = "";
  }
  // Scroll smoothly to order form
  const element = document.getElementById("order");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Form methods
const incrementQty = () => {
  orderForm.value.qty += 1;
};

const decrementQty = () => {
  if (orderForm.value.qty > 1) {
    orderForm.value.qty -= 1;
  }
};

const formatPrice = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(value);
};

// WhatsApp sender
const sendWhatsAppMessage = () => {
  const selectedProduct = allProducts[selectedProductIndex.value];
  if (!selectedProduct) return;

  const phone = "6288211068894"; // The phone matching honeygift_0 from picture
  
  // Format message text
  const messageText = `Halo Admin Honey Gift! ✨🧸
Aku mau order nih bebs:

🌸 *Nama Pembeli:* ${orderForm.value.name}
🛍️ *Nama Barang:* ${selectedProduct.name}
🎨 *Varian/Warna:* ${orderForm.value.variant || "-"}
🔢 *Jumlah:* ${orderForm.value.qty} pcs
🗒️ *Catatan Khusus:* ${orderForm.value.note || "-"}

💵 *Estimasi Total:* ${formatPrice(estimatedTotal.value)} (belum ongkir)

Tolong di-total belanjaan beserta ongkirnya ya bebs, makasih! 💖🎀`;

  // Encode message for URL
  const encodedText = encodeURIComponent(messageText);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;

  // Redirect to WhatsApp
  window.open(whatsappUrl, "_blank");
};

const toggleFaq = (idx) => {
  if (activeFaqIndex.value === idx) {
    activeFaqIndex.value = null;
  } else {
    activeFaqIndex.value = idx;
  }
};

// FAQ Data
const faqs = [
  {
    question: "Apakah bisa bayar di tempat (COD)?",
    answer: "Bisa banget bebs! COD tersedia untuk seluruh wilayah Indonesia dengan minimal belanja Rp 20.000 saja. Pastikan alamat bebs lengkap dan ada penerima di rumah ya."
  },
  {
    question: "Dapat freebies bonus apa saja?",
    answer: "Setiap orderan di Honey Gift pasti dapet gratis stiker-stiker aesthetic berukuran random, kartu ucapan thank you gemoy, dan stiker penutup packing lucu. Bebs tidak perlu bayar ekstra!"
  },
  {
    question: "Berapa lama estimasi pengirimannya?",
    answer: "Pengiriman kami lakukan dari Jakarta. Untuk sesama Jabodetabek biasanya 1-2 hari kerja, sedangkan luar pulau sekitar 3-5 hari kerja tergantung ekspedisi yang bebs pilih."
  },
  {
    question: "Apakah barangnya pasti original sesuai foto?",
    answer: "100% original & real picture bebs! Semua foto dan video yang dipajang adalah hasil jepretan studio Honey Gift sendiri. Keaslian & kelucuan barang dijamin sama persis dengan aslinya."
  }
];

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Scoped overrides if necessary */
input, select, textarea {
  transition: all 0.2s ease-in-out;
}
</style>