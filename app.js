'use strict';

const products = [
  { id: 'kursi-laras', price: 1250000, weight: 8, stock: 12, image: './kursi-laras.jpg', variants: ['Natural', 'Madu', 'Cokelat'] },
  { id: 'keranjang-senja', price: 385000, weight: 2, stock: 24, image: './keranjang-senja.jpg', variants: ['Natural', 'Madu', 'Putih gading'] },
  { id: 'meja-rimba', price: 875000, weight: 6, stock: 0, image: './meja-rimba.jpg', variants: ['Natural', 'Madu'] }
];

const destinations = [
  { id: 'jabodetabek', rate: 18000 },
  { id: 'jawa', rate: 22000 },
  { id: 'sumatra', rate: 32000 },
  { id: 'bali-nusa', rate: 35000 },
  { id: 'kalimantan', rate: 38000 },
  { id: 'sulawesi-maluku-papua', rate: 45000 },
  { id: 'asia-tenggara', rate: 125000 },
  { id: 'asia-timur', rate: 175000 },
  { id: 'australia', rate: 220000 },
  { id: 'eropa-amerika', rate: 280000 }
];

const languages = {
  id: {
    locale: 'id-ID',
    strings: {
      pageTitle: 'RIDWANROTAN — Kerajinan Rotan Cirebon',
      metaDescription: 'Temukan produk rotan pilihan dari Cirebon, cek ketersediaan, hitung harga dan ongkir, serta lihat estimasi pengiriman.',
      brandAria: 'RIDWANROTAN, ke beranda', openNavigation: 'Buka navigasi',
      navCollection: 'Koleksi', navHow: 'Cara pesan', navFaq: 'FAQ', navQuote: 'Hitung pesanan', languageLabel: 'Pilih bahasa',
      heroEyebrow: 'DIBUAT DI CIREBON, DIKIRIM KE MANA SAJA',
      heroTitle: 'Hangatnya alam,<br><em>hadir di rumah.</em>',
      heroDescription: 'Kerajinan rotan pilihan yang dibuat dengan teliti oleh pengrajin lokal. Temukan koleksi, cek stok, dan hitung kebutuhanmu dengan mudah.',
      heroExplore: 'Jelajahi koleksi', heroAbout: 'Kenali RIDWANROTAN', heroHandmade: '100% buatan tangan',
      heroLocal: 'Bangga mendukung pengrajin lokal', heroImageAlt: 'Foto rak kerajinan rotan di Cirebon',
      heroNoteTitle: 'Sentuhan alami', heroNoteText: 'Untuk ruang yang lebih berarti',
      heroCaption: '01 — koleksi rumah', heroFooter: 'ROTAN ASLI · KARYA LOKAL · CERITA BERKELANJUTAN',
      seeCollection: 'Lihat koleksi produk',
      collectionEyebrow: 'DIBUAT UNTUK MENEMANI', collectionTitle: 'Temukan yang pas<br>untuk <em>ruangmu.</em>',
      collectionDescription: 'Setiap anyaman punya karakter. Pilih favoritmu, lihat pilihan warna dan ukuran, lalu cek ketersediaan secara langsung.',
      quoteEyebrow: 'RENCANAKAN PESANAN', quoteTitle: 'Hitung dulu,<br><em>lebih tenang.</em>',
      quoteDescription: 'Pilih produk dan tujuan pengiriman. Kami bantu hitung harga produk, ongkir, dan perkiraan waktu sampai.',
      quoteAssurance: 'Perhitungan transparan, tanpa biaya tersembunyi.',
      productLabel: 'Produk', variantLabel: 'Varian', quantityLabel: 'Jumlah', decreaseQuantity: 'Kurangi jumlah',
      increaseQuantity: 'Tambah jumlah', destinationLabel: 'Kirim ke', productCost: 'Harga produk',
      shippingCostLabel: 'Biaya pengiriman', estimatedTotal: 'Total perkiraan', deliveryEstimate: 'Estimasi sampai',
      quoteDisclaimer: 'Tarif ekspor adalah simulasi per kg, belum termasuk bea cukai, pajak, asuransi, dan biaya penanganan khusus. Konfirmasikan ongkir serta estimasi final sebelum memesan.',
      howEyebrow: 'DARI CIREBON UNTUKMU', howTitle: 'Alami prosesnya,<br><em>nikmati hasilnya.</em>',
      howDescription: 'Rotan kami dikerjakan dengan sabar dan dikirim dengan perhatian. Tak perlu menebak-nebak, semua informasi pesanan bisa kamu cek di sini.',
      howCta: 'Mulai hitung pesanan', stepOneTitle: 'Pilih karya favorit',
      stepOneText: 'Jelajahi koleksi dan temukan varian yang cocok dengan kebutuhanmu.',
      stepTwoTitle: 'Cek harga & ongkir', stepTwoText: 'Masukkan jumlah dan kota tujuan untuk melihat total perkiraan biaya.',
      stepThreeTitle: 'Hubungi kami untuk pesan',
      stepThreeText: 'Catat pilihanmu, lalu hubungi tim kami untuk konfirmasi dan pemesanan.',
      faqEyebrow: 'ADA YANG INGIN DITANYAKAN?', faqTitle: 'Yang sering<br>ditanyakan <em>kamu.</em>',
      faqDescription: 'Belum menemukan jawabannya? Kami siap membantu menjelaskan lebih lanjut.',
      faqContact: 'Tanya soal pesanan',
      footerDescription: 'Merawat tradisi, merangkai cerita.<br>Kerajinan rotan dari Cirebon.',
      footerExplore: 'JELAJAHI', footerCollection: 'Koleksi produk', footerCalculator: 'Kalkulator pesanan',
      footerFaq: 'Pertanyaan umum', footerFindUs: 'TEMUKAN KAMI', footerLocation: 'Cirebon, Jawa Barat',
      footerLocal: 'Kerajinan lokal, cerita personal.', photoCredits: 'Kredit foto',
      footerCopyright: 'Dibuat dengan hati di Cirebon.', backToTop: 'Kembali ke atas ↑',
      variantNatural: 'Natural', variantHoney: 'Madu', variantChocolate: 'Cokelat', variantIvory: 'Putih gading',
      stockAvailable: 'Ready · {stock} pcs', stockUnavailable: 'Pre-order', priceUnit: 'Mulai dari · per buah',
      chooseProduct: 'Pilih produk ↗', stockHint: 'Stok tersedia: {stock} buah',
      preOrderHint: 'Saat ini pre-order. Hubungi kami untuk konfirmasi jadwal.',
      subtotalUnavailable: 'Belum tersedia', totalUnavailable: 'Menunggu konfirmasi',
      shippingUnavailable: 'Dihitung setelah produk tersedia',
      weightNote: '({quantity} × {weight} kg)', shippingNote: '{weight} kg × {rate}/kg',
      destinations: ['Indonesia · Jakarta & Jabodetabek', 'Indonesia · Kota lain di Pulau Jawa', 'Indonesia · Sumatra', 'Indonesia · Bali & Nusa Tenggara', 'Indonesia · Kalimantan', 'Indonesia · Sulawesi, Maluku & Papua', 'Ekspor · Singapura & Malaysia (simulasi)', 'Ekspor · Asia Timur (simulasi)', 'Ekspor · Australia (simulasi)', 'Ekspor · Eropa & Amerika Utara (simulasi)'],
      deliveryTimes: ['2–4 hari kerja', '3–5 hari kerja', '5–8 hari kerja', '5–8 hari kerja', '6–9 hari kerja', '7–12 hari kerja', '5–10 hari kerja', '7–14 hari kerja', '8–16 hari kerja', '12–24 hari kerja'],
      preOrderDelivery: 'Konfirmasi jadwal pre-order',
      productCopy: [
        ['Kursi Laras', 'Duduk & bersantai', 'Kursi santai dengan siluet lembut untuk sudut favorit di rumah.', 'Favorit'],
        ['Keranjang Senja', 'Simpan & tata', 'Keranjang serbaguna, rapi untuk menyimpan benda-benda kecil.', 'Serbaguna'],
        ['Meja Rimba', 'Lengkapi ruang', 'Meja samping yang ringan, cantik menemani kopi dan buku.', 'Pre-order']
      ],
      faqs: [
        ['Bagaimana cara mengetahui produk yang ready?', 'Status stok ada di setiap kartu produk. Produk bertanda “Ready” dapat dipesan sekarang. Produk bertanda “Pre-order” sedang tidak tersedia dan perlu dikonfirmasi waktu produksinya kepada tim kami.'],
        ['Apa saja pilihan varian yang tersedia?', 'Setiap produk memiliki pilihan warna yang berbeda, seperti Natural, Madu, Cokelat, atau Putih gading. Pilihan varian dapat dilihat pada kalkulator pesanan; ketersediaan warna akan kami konfirmasi saat pemesanan.'],
        ['Bagaimana total harga pesanan dihitung?', 'Harga produk dikalikan jumlah yang dipilih, lalu ditambah biaya pengiriman. Kalkulator menampilkan total perkiraan secara langsung. Harga belum termasuk biaya tambahan khusus yang mungkin disepakati untuk pesanan ekspor atau kustom.'],
        ['Bagaimana cara menghitung biaya pengiriman?', 'Tarif estimasi ditampilkan per kilogram berdasarkan wilayah tujuan. Berat kiriman dihitung dari berat produk dikali jumlah, lalu dibulatkan ke atas ke kilogram berikutnya. Tarif akhir dapat berbeda menurut ekspedisi dan dimensi barang.'],
        ['Berapa lama produk sampai ke tujuan?', 'Estimasi berbeda menurut wilayah tujuan dan ditampilkan dalam kalkulator. Waktu dihitung dalam hari kerja sejak barang diserahkan ke ekspedisi dan dapat berubah karena cuaca, hari libur, atau kondisi pengiriman.'],
        ['Apakah ongkir ekspor sudah termasuk pajak dan bea cukai?', 'Belum. Tarif internasional pada kalkulator hanya simulasi biaya per kilogram dan belum mencakup bea cukai, pajak impor, asuransi, atau biaya penanganan khusus. Ongkir, dokumen ekspor, dan waktu pengiriman final perlu dikonfirmasi berdasarkan negara tujuan serta dimensi barang.'],
        ['Bagaimana cara melakukan pemesanan?', 'Gunakan kalkulator untuk mencatat produk, varian, jumlah, dan tujuan. Setelah itu hubungi tim RIDWANROTAN untuk konfirmasi stok, ongkir final, metode pembayaran, dan jadwal pengiriman sebelum pesanan diproses.']
      ]
    }
  },
  en: {
    locale: 'en-US',
    strings: {
      pageTitle: 'RIDWANROTAN — Cirebon Rattan Crafts',
      metaDescription: 'Explore rattan crafts from Cirebon, check availability, calculate product and shipping costs, and view delivery estimates.',
      brandAria: 'RIDWANROTAN, home', openNavigation: 'Open navigation',
      navCollection: 'Collection', navHow: 'How to order', navFaq: 'FAQ', navQuote: 'Get an estimate', languageLabel: 'Choose language',
      heroEyebrow: 'MADE IN CIREBON, SHIPPED WORLDWIDE',
      heroTitle: 'A touch of nature,<br><em>at home.</em>',
      heroDescription: 'Thoughtfully crafted rattan pieces by local artisans. Explore the collection, check stock, and estimate your order with ease.',
      heroExplore: 'Explore collection', heroAbout: 'Discover RIDWANROTAN', heroHandmade: '100% handmade',
      heroLocal: 'Proud to support local artisans', heroImageAlt: 'Photo of a rattan craft shelf in Cirebon',
      heroNoteTitle: 'A natural touch', heroNoteText: 'For spaces that mean more',
      heroCaption: '01 — home collection', heroFooter: 'GENUINE RATTAN · LOCAL CRAFT · LASTING STORIES',
      seeCollection: 'View product collection',
      collectionEyebrow: 'MADE TO BE WITH YOU', collectionTitle: 'Find the right piece<br>for <em>your space.</em>',
      collectionDescription: 'Every weave has its own character. Pick a favorite, explore colors and sizes, and check availability.',
      quoteEyebrow: 'PLAN YOUR ORDER', quoteTitle: 'Calculate first,<br><em>feel at ease.</em>',
      quoteDescription: 'Choose a product and destination. We will estimate the product price, shipping, and delivery time.',
      quoteAssurance: 'Transparent estimates, with no hidden costs.',
      productLabel: 'Product', variantLabel: 'Variant', quantityLabel: 'Quantity', decreaseQuantity: 'Decrease quantity',
      increaseQuantity: 'Increase quantity', destinationLabel: 'Ship to', productCost: 'Product price',
      shippingCostLabel: 'Shipping cost', estimatedTotal: 'Estimated total', deliveryEstimate: 'Estimated delivery',
      quoteDisclaimer: 'Export rates are per-kg estimates and exclude customs duties, taxes, insurance, and special handling. Confirm final shipping and delivery estimates before ordering.',
      howEyebrow: 'FROM CIREBON, WITH CARE', howTitle: 'Thoughtful craft,<br><em>made to be enjoyed.</em>',
      howDescription: 'Our rattan is carefully crafted and thoughtfully shipped. Check all your order details here—no guesswork needed.',
      howCta: 'Estimate your order', stepOneTitle: 'Choose a favorite piece',
      stepOneText: 'Explore the collection and find a variant that suits your needs.',
      stepTwoTitle: 'Check price & shipping', stepTwoText: 'Enter the quantity and destination to see an estimated total.',
      stepThreeTitle: 'Contact us to order',
      stepThreeText: 'Note your choices, then contact our team to confirm and place your order.',
      faqEyebrow: 'HAVE A QUESTION?', faqTitle: 'Questions we<br><em>often hear.</em>',
      faqDescription: 'Didn’t find your answer? We’re happy to help with more details.',
      faqContact: 'Ask about an order',
      footerDescription: 'Honoring tradition, weaving stories.<br>Rattan crafts from Cirebon.',
      footerExplore: 'EXPLORE', footerCollection: 'Product collection', footerCalculator: 'Order estimator',
      footerFaq: 'Common questions', footerFindUs: 'FIND US', footerLocation: 'Cirebon, West Java',
      footerLocal: 'Local craft, personal stories.', photoCredits: 'Photo credits',
      footerCopyright: 'Made with care in Cirebon.', backToTop: 'Back to top ↑',
      variantNatural: 'Natural', variantHoney: 'Honey', variantChocolate: 'Chocolate', variantIvory: 'Ivory',
      stockAvailable: 'In stock · {stock} pcs', stockUnavailable: 'Pre-order', priceUnit: 'Starting at · each',
      chooseProduct: 'Choose product ↗', stockHint: 'Available stock: {stock} pieces',
      preOrderHint: 'Available for pre-order. Contact us to confirm the schedule.',
      subtotalUnavailable: 'Not available yet', totalUnavailable: 'Awaiting confirmation',
      shippingUnavailable: 'Calculated when the product is available',
      weightNote: '({quantity} × {weight} kg)', shippingNote: '{weight} kg × {rate}/kg',
      destinations: ['Indonesia · Jakarta & Greater Jakarta', 'Indonesia · Other cities in Java', 'Indonesia · Sumatra', 'Indonesia · Bali & Nusa Tenggara', 'Indonesia · Kalimantan', 'Indonesia · Sulawesi, Maluku & Papua', 'Export · Singapore & Malaysia (estimate)', 'Export · East Asia (estimate)', 'Export · Australia (estimate)', 'Export · Europe & North America (estimate)'],
      deliveryTimes: ['2–4 business days', '3–5 business days', '5–8 business days', '5–8 business days', '6–9 business days', '7–12 business days', '5–10 business days', '7–14 business days', '8–16 business days', '12–24 business days'],
      preOrderDelivery: 'Confirm pre-order schedule',
      productCopy: [
        ['Laras Rattan Chair', 'Sit & unwind', 'A lounge chair with a gentle silhouette for your favorite corner.', 'Favorite'],
        ['Senja Woven Basket', 'Store & organize', 'A versatile basket for keeping small essentials neat.', 'Versatile'],
        ['Rimba Side Table', 'Complete your space', 'A lightweight side table for coffee and a good book.', 'Pre-order']
      ],
      faqs: [
        ['How can I check if a product is in stock?', 'Stock status appears on each product card. Items marked “In stock” can be ordered now. “Pre-order” items are currently unavailable; please contact our team to confirm production timing.'],
        ['What product variants are available?', 'Each product offers different colors, such as Natural, Honey, Chocolate, or Ivory. See the options in the order estimator; we will confirm color availability when you place an order.'],
        ['How is the order total calculated?', 'The product price is multiplied by the selected quantity, then shipping is added. The estimator updates the estimated total instantly. Special fees for export or custom orders may be agreed separately.'],
        ['How is shipping calculated?', 'Estimated rates are shown per kilogram by destination region. Shipment weight is the product weight multiplied by quantity, rounded up to the next kilogram. Final rates can vary by carrier and package dimensions.'],
        ['How long will delivery take?', 'Estimates vary by destination and appear in the estimator. Business days are counted from handover to the carrier; weather, holidays, or shipping conditions may affect timing.'],
        ['Do export shipping estimates include taxes and customs duties?', 'No. International rates are per-kilogram estimates and exclude customs duties, import taxes, insurance, and special handling. Final shipping, export documents, and delivery time depend on the destination country and package dimensions.'],
        ['How do I place an order?', 'Use the estimator to note your product, variant, quantity, and destination. Then contact RIDWANROTAN to confirm stock, final shipping, payment, and delivery schedule before the order is processed.']
      ]
    }
  },
  zh: {
    locale: 'zh-CN',
    strings: {
      pageTitle: 'RIDWANROTAN — 西冷藤编工艺品', metaDescription: '浏览来自井里汶的藤编工艺品，查询库存、计算商品和运费，并查看预计送达时间。',
      brandAria: 'RIDWANROTAN，首页', openNavigation: '打开导航',
      navCollection: '产品系列', navHow: '订购方式', navFaq: '常见问题', navQuote: '计算订单', languageLabel: '选择语言',
      heroEyebrow: '产自井里汶，配送至各地', heroTitle: '自然的温度，<br><em>融入你的家。</em>',
      heroDescription: '由本地工匠精心制作的藤编作品。浏览系列、查看库存，并轻松估算订单。',
      heroExplore: '浏览系列', heroAbout: '了解 RIDWANROTAN', heroHandmade: '100% 手工制作',
      heroLocal: '支持本地工匠', heroImageAlt: '井里汶藤编工艺品架的实拍照片',
      heroNoteTitle: '自然质感', heroNoteText: '让空间更有意义',
      heroCaption: '01 — 家居系列', heroFooter: '天然藤材 · 本地手艺 · 延续的故事', seeCollection: '查看产品系列',
      collectionEyebrow: '为日常相伴而制', collectionTitle: '为你的空间<br>找到<em>合适之选。</em>',
      collectionDescription: '每一道编织都有自己的特点。挑选心仪作品、查看颜色和尺寸，并查询库存。',
      quoteEyebrow: '规划你的订单', quoteTitle: '先算一算，<br><em>更安心。</em>',
      quoteDescription: '选择产品和配送目的地，我们会估算商品价格、运费和送达时间。',
      quoteAssurance: '价格透明，没有隐藏费用。',
      productLabel: '产品', variantLabel: '款式', quantityLabel: '数量', decreaseQuantity: '减少数量',
      increaseQuantity: '增加数量', destinationLabel: '配送至', productCost: '商品价格',
      shippingCostLabel: '运费', estimatedTotal: '预估总价', deliveryEstimate: '预计送达',
      quoteDisclaimer: '出口运费仅为每公斤估算，不含关税、税费、保险及特殊处理费用。下单前请确认最终运费和时效。',
      howEyebrow: '来自井里汶，用心呈现', howTitle: '用心编织，<br><em>让美好融入生活。</em>',
      howDescription: '藤编作品经过细心制作与妥善配送。所有订单信息都可在此查看，无需猜测。',
      howCta: '计算订单', stepOneTitle: '挑选喜欢的作品',
      stepOneText: '浏览产品系列，找到适合你需求的款式。',
      stepTwoTitle: '查询价格和运费', stepTwoText: '输入数量和目的地，查看预估总费用。',
      stepThreeTitle: '联系我们下单',
      stepThreeText: '记下你的选择，然后联系我们确认并下单。',
      faqEyebrow: '有问题想咨询？', faqTitle: '大家常问的<br><em>问题。</em>',
      faqDescription: '没有找到答案？欢迎联系我们了解更多。',
      faqContact: '咨询订单',
      footerDescription: '传承手艺，编织故事。<br>来自井里汶的藤编工艺。',
      footerExplore: '浏览', footerCollection: '产品系列', footerCalculator: '订单计算器',
      footerFaq: '常见问题', footerFindUs: '联系我们', footerLocation: '印度尼西亚西爪哇井里汶',
      footerLocal: '本地手艺，专属故事。', photoCredits: '照片来源',
      footerCopyright: '用心制作于井里汶。', backToTop: '返回顶部 ↑',
      variantNatural: '原色', variantHoney: '蜂蜜色', variantChocolate: '棕色', variantIvory: '象牙白',
      stockAvailable: '有货 · {stock} 件', stockUnavailable: '预订', priceUnit: '起价 · 每件',
      chooseProduct: '选择产品 ↗', stockHint: '库存：{stock} 件',
      preOrderHint: '目前可预订，请联系我们确认生产时间。',
      subtotalUnavailable: '暂不可用', totalUnavailable: '等待确认',
      shippingUnavailable: '产品有货后计算',
      weightNote: '（{quantity} × {weight} 千克）', shippingNote: '{weight} 千克 × {rate}/千克',
      destinations: ['印度尼西亚 · 雅加达及周边', '印度尼西亚 · 爪哇岛其他城市', '印度尼西亚 · 苏门答腊', '印度尼西亚 · 巴厘岛及努沙登加拉', '印度尼西亚 · 加里曼丹', '印度尼西亚 · 苏拉威西、马鲁古及巴布亚', '出口 · 新加坡和马来西亚（估算）', '出口 · 东亚（估算）', '出口 · 澳大利亚（估算）', '出口 · 欧洲和北美（估算）'],
      deliveryTimes: ['2–4 个工作日', '3–5 个工作日', '5–8 个工作日', '5–8 个工作日', '6–9 个工作日', '7–12 个工作日', '5–10 个工作日', '7–14 个工作日', '8–16 个工作日', '12–24 个工作日'],
      preOrderDelivery: '请确认预订时间',
      productCopy: [
        ['Laras 藤编椅', '休憩与放松', '线条柔和的休闲椅，适合家中最喜欢的角落。', '人气之选'],
        ['Senja 编织篮', '收纳整理', '多用途收纳篮，让小物件整齐有序。', '多用途'],
        ['Rimba 边桌', '点缀空间', '轻巧的边桌，适合摆放咖啡与书籍。', '预订']
      ],
      faqs: [
        ['如何查询产品是否有库存？', '每张产品卡片都会显示库存状态。标注“有货”的产品可以立即订购；标注“预订”的产品暂时缺货，请联系我们确认生产时间。'],
        ['产品有哪些款式可选？', '不同产品提供不同颜色，例如原色、蜂蜜色、棕色或象牙白。请在订单计算器中查看选项，下单时我们会确认颜色库存。'],
        ['订单总价如何计算？', '商品单价乘以所选数量，再加上运费。计算器会即时显示预估总价。出口或定制订单可能产生其他费用，需另行确认。'],
        ['运费如何计算？', '系统按目的地区域显示每公斤的估算运费。计费重量为产品重量乘以数量，并向上取整至整公斤。最终价格可能因承运商和包裹尺寸而异。'],
        ['大约多久可以送达？', '送达时间因目的地而异，可在计算器中查看。工作日从交给承运商之日起计算；天气、节假日和运输状况可能影响时效。'],
        ['出口运费是否包含税费和关税？', '不包含。国际运费仅为每公斤估算，不含关税、进口税、保险或特殊处理费用。最终运费、出口文件和送达时间需根据目的地国家及包裹尺寸确认。'],
        ['如何下单？', '使用计算器记录产品、款式、数量和目的地，然后联系 RIDWANROTAN 确认库存、最终运费、付款方式和配送时间。']
      ]
    }
  },
  ja: {
    locale: 'ja-JP',
    strings: {
      pageTitle: 'RIDWANROTAN — チルボンのラタン工芸', metaDescription: 'チルボンのラタン製品をご覧ください。在庫、商品価格、送料、配送目安を確認できます。',
      brandAria: 'RIDWANROTAN、ホーム', openNavigation: 'ナビゲーションを開く',
      navCollection: 'コレクション', navHow: '注文方法', navFaq: 'よくある質問', navQuote: '見積もり', languageLabel: '言語を選択',
      heroEyebrow: 'チルボン製、世界各地へお届け', heroTitle: '自然のぬくもりを、<br><em>暮らしの中に。</em>',
      heroDescription: '地元の職人が丁寧に仕上げたラタン製品。商品を選び、在庫を確認し、注文の目安を簡単に計算できます。',
      heroExplore: '商品を見る', heroAbout: 'RIDWANROTANについて', heroHandmade: '100% ハンドメイド',
      heroLocal: '地元の職人を応援しています', heroImageAlt: 'チルボンのラタン製品棚の写真',
      heroNoteTitle: '自然のぬくもり', heroNoteText: '心地よい空間づくりに',
      heroCaption: '01 — ホームコレクション', heroFooter: '天然ラタン · 地元の手仕事 · 受け継ぐ物語', seeCollection: '商品一覧を見る',
      collectionEyebrow: '暮らしに寄り添うものづくり', collectionTitle: 'あなたの空間に<br><em>ぴったりの一品を。</em>',
      collectionDescription: '編み方ひとつひとつに個性があります。お気に入りを選び、色やサイズ、在庫をご確認ください。',
      quoteEyebrow: 'ご注文の計画', quoteTitle: '先に計算して、<br><em>安心のお買い物。</em>',
      quoteDescription: '商品と配送先を選ぶと、商品価格、送料、配送目安を計算できます。',
      quoteAssurance: '明確な料金表示。追加料金はありません。',
      productLabel: '商品', variantLabel: 'バリエーション', quantityLabel: '数量', decreaseQuantity: '数量を減らす',
      increaseQuantity: '数量を増やす', destinationLabel: '配送先', productCost: '商品価格',
      shippingCostLabel: '送料', estimatedTotal: '合計目安', deliveryEstimate: 'お届け目安',
      quoteDisclaimer: '輸出送料は1kgあたりの概算です。関税、税金、保険、特別な取扱費用は含まれません。ご注文前に最終送料と配送目安をご確認ください。',
      howEyebrow: 'チルボンから、あなたへ', howTitle: '丁寧な手仕事を、<br><em>日々の暮らしに。</em>',
      howDescription: 'ラタンを丁寧に編み上げ、心を込めてお届けします。注文に必要な情報はここですべてご確認いただけます。',
      howCta: '注文の見積もり', stepOneTitle: 'お気に入りを選ぶ',
      stepOneText: '商品を見て、ご希望に合うバリエーションをお選びください。',
      stepTwoTitle: '価格と送料を確認', stepTwoText: '数量と配送先を入力して合計目安を確認します。',
      stepThreeTitle: 'ご注文はお問い合わせください',
      stepThreeText: '選んだ内容を控えて、在庫と注文方法をスタッフにご確認ください。',
      faqEyebrow: 'ご質問はありますか？', faqTitle: 'よくいただく<br><em>ご質問。</em>',
      faqDescription: 'お探しの回答が見つからない場合は、お気軽にお問い合わせください。',
      faqContact: '注文について問い合わせる',
      footerDescription: '伝統を大切に、物語を編む。<br>チルボンのラタン工芸。',
      footerExplore: 'メニュー', footerCollection: '商品一覧', footerCalculator: '注文見積もり',
      footerFaq: 'よくある質問', footerFindUs: '所在地', footerLocation: 'インドネシア、西ジャワ州チルボン',
      footerLocal: '地元の手仕事と、一つひとつの物語。', photoCredits: '写真クレジット',
      footerCopyright: 'チルボンで心を込めて制作。', backToTop: 'ページ上部へ ↑',
      variantNatural: 'ナチュラル', variantHoney: 'ハニー', variantChocolate: 'ブラウン', variantIvory: 'アイボリー',
      stockAvailable: '在庫あり · {stock}点', stockUnavailable: '予約注文', priceUnit: '〜 · 1点あたり',
      chooseProduct: '商品を選ぶ ↗', stockHint: '在庫数：{stock}点',
      preOrderHint: '予約注文を受付中です。納期はお問い合わせください。',
      subtotalUnavailable: '現在ご用意できません', totalUnavailable: '確認中',
      shippingUnavailable: '商品入荷後に計算されます',
      weightNote: '（{quantity} × {weight} kg）', shippingNote: '{weight} kg × {rate}/kg',
      destinations: ['インドネシア · ジャカルタ首都圏', 'インドネシア · ジャワ島のその他地域', 'インドネシア · スマトラ島', 'インドネシア · バリ島・ヌサトゥンガラ', 'インドネシア · カリマンタン', 'インドネシア · スラウェシ・マルク・パプア', '輸出 · シンガポール・マレーシア（概算）', '輸出 · 東アジア（概算）', '輸出 · オーストラリア（概算）', '輸出 · 欧州・北米（概算）'],
      deliveryTimes: ['2〜4営業日', '3〜5営業日', '5〜8営業日', '5〜8営業日', '6〜9営業日', '7〜12営業日', '5〜10営業日', '7〜14営業日', '8〜16営業日', '12〜24営業日'],
      preOrderDelivery: '予約商品の納期をご確認ください',
      productCopy: [
        ['ララス ラタンチェア', 'くつろぎの時間', 'お気に入りの場所にぴったりな、やわらかなシルエットのチェア。', '人気商品'],
        ['スンジャ バスケット', '収納と整理', '小物をすっきり収納できる、多用途のバスケット。', '多用途'],
        ['リンバ サイドテーブル', '空間を彩る', 'コーヒーや本を置くのにちょうどよい、軽やかなサイドテーブル。', '予約注文']
      ],
      faqs: [
        ['商品の在庫はどこで確認できますか？', '在庫状況は各商品カードに表示されています。「在庫あり」はすぐに注文可能です。「予約注文」は現在在庫がないため、制作期間をお問い合わせください。'],
        ['どのようなバリエーションがありますか？', '商品ごとにナチュラル、ハニー、ブラウン、アイボリーなど異なる色をご用意しています。注文時に在庫を確認いたします。'],
        ['注文の合計金額はどのように計算されますか？', '商品価格に数量を掛け、送料を加算します。見積もり欄に合計目安がすぐに表示されます。輸出や特注の追加費用は別途確認が必要です。'],
        ['送料はどのように計算されますか？', '配送地域ごとの1kgあたりの概算料金を表示します。商品重量と数量を掛け、次の整数kgに切り上げます。実際の料金は配送会社や荷物の寸法により異なる場合があります。'],
        ['商品が届くまでどのくらいかかりますか？', '配送先ごとの目安は見積もり欄に表示されます。営業日は配送会社への引き渡し後から数えます。天候、祝日、配送状況により変動する場合があります。'],
        ['輸出送料に税金や関税は含まれますか？', '含まれません。国際送料は1kgあたりの概算で、関税、輸入税、保険、特別取扱費用は別途です。最終送料、輸出書類、配送日数は国と荷物の寸法に応じて確認が必要です。'],
        ['注文方法を教えてください。', '見積もりで商品、バリエーション、数量、配送先を確認し、RIDWANROTANまでご連絡ください。在庫、最終送料、お支払い方法、配送日程をご案内します。']
      ]
    }
  },
  ru: {
    locale: 'ru-RU',
    strings: {
      pageTitle: 'RIDWANROTAN — ротанговые изделия из Чиребона', metaDescription: 'Ротанговые изделия из Чиребона: проверка наличия, расчёт стоимости, доставки и сроков.',
      brandAria: 'RIDWANROTAN, на главную', openNavigation: 'Открыть навигацию',
      navCollection: 'Коллекция', navHow: 'Как заказать', navFaq: 'Вопросы', navQuote: 'Рассчитать заказ', languageLabel: 'Выбрать язык',
      heroEyebrow: 'СДЕЛАНО В ЧИРЕБОНЕ — ДОСТАВКА ПО ВСЕМУ МИРУ', heroTitle: 'Тепло природы<br><em>в вашем доме.</em>',
      heroDescription: 'Ротанговые изделия, бережно созданные местными мастерами. Изучите коллекцию, проверьте наличие и рассчитайте заказ.',
      heroExplore: 'Смотреть коллекцию', heroAbout: 'О RIDWANROTAN', heroHandmade: '100% ручная работа',
      heroLocal: 'Поддерживаем местных мастеров', heroImageAlt: 'Фотография ротанговой полки ручной работы из Чиребона',
      heroNoteTitle: 'Природная фактура', heroNoteText: 'Для пространства со смыслом',
      heroCaption: '01 — для дома', heroFooter: 'НАТУРАЛЬНЫЙ РОТАН · МЕСТНЫЕ МАСТЕРА · ЖИВЫЕ ИСТОРИИ', seeCollection: 'Смотреть товары',
      collectionEyebrow: 'СОЗДАНО ДЛЯ ВАШЕГО ДОМА', collectionTitle: 'Найдите то, что<br>подойдёт <em>вашему дому.</em>',
      collectionDescription: 'Каждое плетение уникально. Выберите изделие, посмотрите цвета и размеры и проверьте наличие.',
      quoteEyebrow: 'ПЛАНИРУЙТЕ ЗАКАЗ', quoteTitle: 'Сначала расчёт —<br><em>затем покупка.</em>',
      quoteDescription: 'Выберите товар и направление доставки. Мы рассчитаем стоимость изделий, доставки и примерный срок.',
      quoteAssurance: 'Прозрачный расчёт без скрытых платежей.',
      productLabel: 'Товар', variantLabel: 'Вариант', quantityLabel: 'Количество', decreaseQuantity: 'Уменьшить количество',
      increaseQuantity: 'Увеличить количество', destinationLabel: 'Доставка в', productCost: 'Стоимость товара',
      shippingCostLabel: 'Стоимость доставки', estimatedTotal: 'Итого примерно', deliveryEstimate: 'Срок доставки',
      quoteDisclaimer: 'Экспортные тарифы указаны примерно за кг и не включают пошлины, налоги, страховку и специальную обработку. Уточните окончательную стоимость и сроки до заказа.',
      howEyebrow: 'ИЗ ЧИРЕБОНА С ЗАБОТОЙ', howTitle: 'Тщательная работа,<br><em>радость каждый день.</em>',
      howDescription: 'Мы бережно плетём изделия и внимательно организуем доставку. Все детали заказа можно проверить здесь.',
      howCta: 'Рассчитать заказ', stepOneTitle: 'Выберите изделие',
      stepOneText: 'Изучите коллекцию и найдите подходящий вариант.',
      stepTwoTitle: 'Уточните цену и доставку', stepTwoText: 'Укажите количество и город, чтобы увидеть примерную сумму.',
      stepThreeTitle: 'Свяжитесь с нами для заказа',
      stepThreeText: 'Запишите свой выбор и свяжитесь с командой для подтверждения заказа.',
      faqEyebrow: 'ОСТАЛИСЬ ВОПРОСЫ?', faqTitle: 'Часто задаваемые<br><em>вопросы.</em>',
      faqDescription: 'Не нашли ответ? Мы с радостью расскажем подробнее.',
      faqContact: 'Спросить о заказе',
      footerDescription: 'Храним традиции, создаём истории.<br>Ротанговые изделия из Чиребона.',
      footerExplore: 'РАЗДЕЛЫ', footerCollection: 'Коллекция товаров', footerCalculator: 'Расчёт заказа',
      footerFaq: 'Частые вопросы', footerFindUs: 'НАШ АДРЕС', footerLocation: 'Чиребон, Западная Ява',
      footerLocal: 'Местное ремесло, личные истории.', photoCredits: 'Авторы фотографий',
      footerCopyright: 'Сделано с заботой в Чиребоне.', backToTop: 'Наверх ↑',
      variantNatural: 'Натуральный', variantHoney: 'Медовый', variantChocolate: 'Коричневый', variantIvory: 'Слоновая кость',
      stockAvailable: 'В наличии · {stock} шт.', stockUnavailable: 'Предзаказ', priceUnit: 'От · за штуку',
      chooseProduct: 'Выбрать товар ↗', stockHint: 'В наличии: {stock} шт.',
      preOrderHint: 'Доступен предзаказ. Уточните сроки у нашей команды.',
      subtotalUnavailable: 'Пока недоступен', totalUnavailable: 'Ожидает подтверждения',
      shippingUnavailable: 'Рассчитывается после появления товара',
      weightNote: '({quantity} × {weight} кг)', shippingNote: '{weight} кг × {rate}/кг',
      destinations: ['Индонезия · Джакарта и окрестности', 'Индонезия · Другие города Явы', 'Индонезия · Суматра', 'Индонезия · Бали и Нуса-Тенгара', 'Индонезия · Калимантан', 'Индонезия · Сулавеси, Малуку и Папуа', 'Экспорт · Сингапур и Малайзия (оценка)', 'Экспорт · Восточная Азия (оценка)', 'Экспорт · Австралия (оценка)', 'Экспорт · Европа и Северная Америка (оценка)'],
      deliveryTimes: ['2–4 рабочих дня', '3–5 рабочих дней', '5–8 рабочих дней', '5–8 рабочих дней', '6–9 рабочих дней', '7–12 рабочих дней', '5–10 рабочих дней', '7–14 рабочих дней', '8–16 рабочих дней', '12–24 рабочих дня'],
      preOrderDelivery: 'Уточните срок предзаказа',
      productCopy: [
        ['Кресло Laras', 'Отдых и уют', 'Уютное кресло с мягкими линиями для любимого уголка дома.', 'Популярное'],
        ['Корзина Senja', 'Хранение и порядок', 'Универсальная корзина для аккуратного хранения мелочей.', 'Универсальная'],
        ['Столик Rimba', 'Уют в интерьере', 'Лёгкий приставной столик для кофе и любимой книги.', 'Предзаказ']
      ],
      faqs: [
        ['Как узнать, есть ли товар в наличии?', 'Статус указан на карточке каждого товара. Изделия «В наличии» можно заказать сразу. Для товаров «Предзаказ» уточните у команды сроки изготовления.'],
        ['Какие варианты доступны?', 'У каждого изделия свой набор цветов: натуральный, медовый, коричневый или цвета слоновой кости. Доступность выбранного цвета подтвердим при заказе.'],
        ['Как рассчитывается итоговая сумма?', 'Цена товара умножается на количество, затем добавляется доставка. Калькулятор сразу показывает примерный итог. Дополнительные расходы для экспорта или индивидуального заказа согласуются отдельно.'],
        ['Как рассчитывается доставка?', 'Показывается примерный тариф за килограмм для каждого направления. Вес равен весу изделия, умноженному на количество, с округлением вверх до целого килограмма. Итоговый тариф зависит от перевозчика и габаритов.'],
        ['Сколько времени занимает доставка?', 'Срок зависит от направления и указан в калькуляторе. Рабочие дни отсчитываются после передачи груза перевозчику; погода, праздники и условия доставки могут повлиять на срок.'],
        ['Включены ли налоги и пошлины в стоимость экспорта?', 'Нет. Международные тарифы указаны примерно за килограмм и не включают пошлины, импортные налоги, страховку или специальную обработку. Окончательная стоимость, документы и сроки зависят от страны и размера груза.'],
        ['Как оформить заказ?', 'Запишите товар, вариант, количество и адрес из калькулятора, затем свяжитесь с RIDWANROTAN. Мы подтвердим наличие, стоимость доставки, оплату и график отправки.']
      ]
    }
  },
  de: {
    locale: 'de-DE',
    strings: {
      pageTitle: 'RIDWANROTAN — Rattanhandwerk aus Cirebon', metaDescription: 'Rattanhandwerk aus Cirebon entdecken, Verfügbarkeit prüfen, Preise und Versand berechnen und Lieferzeiten ansehen.',
      brandAria: 'RIDWANROTAN, Startseite', openNavigation: 'Navigation öffnen',
      navCollection: 'Kollektion', navHow: 'So bestellen Sie', navFaq: 'FAQ', navQuote: 'Bestellung berechnen', languageLabel: 'Sprache wählen',
      heroEyebrow: 'IN CIREBON GEFERTIGT, WELTWEIT VERSENDET', heroTitle: 'Ein Stück Natur<br><em>für Ihr Zuhause.</em>',
      heroDescription: 'Sorgfältig gefertigte Rattanprodukte lokaler Handwerker. Entdecken Sie die Kollektion, prüfen Sie den Bestand und berechnen Sie Ihre Bestellung.',
      heroExplore: 'Kollektion entdecken', heroAbout: 'RIDWANROTAN entdecken', heroHandmade: '100 % handgefertigt',
      heroLocal: 'Wir unterstützen lokales Handwerk', heroImageAlt: 'Foto eines handgefertigten Rattanregals aus Cirebon',
      heroNoteTitle: 'Natürliche Akzente', heroNoteText: 'Für Räume mit Bedeutung',
      heroCaption: '01 — Wohnkollektion', heroFooter: 'ECHTES RATTAN · LOKALES HANDWERK · BLEIBENDE GESCHICHTEN', seeCollection: 'Produkte ansehen',
      collectionEyebrow: 'FÜR DEN ALLTAG GEFERTIGT', collectionTitle: 'Finden Sie das Richtige<br>für <em>Ihr Zuhause.</em>',
      collectionDescription: 'Jedes Geflecht hat seinen eigenen Charakter. Wählen Sie Ihren Favoriten, sehen Sie Farben und Größen und prüfen Sie die Verfügbarkeit.',
      quoteEyebrow: 'BESTELLUNG PLANEN', quoteTitle: 'Erst berechnen,<br><em>dann entspannt bestellen.</em>',
      quoteDescription: 'Wählen Sie Produkt und Lieferziel. Wir berechnen Produktpreis, Versandkosten und voraussichtliche Lieferzeit.',
      quoteAssurance: 'Transparente Berechnung ohne versteckte Kosten.',
      productLabel: 'Produkt', variantLabel: 'Variante', quantityLabel: 'Menge', decreaseQuantity: 'Menge verringern',
      increaseQuantity: 'Menge erhöhen', destinationLabel: 'Lieferziel', productCost: 'Produktpreis',
      shippingCostLabel: 'Versandkosten', estimatedTotal: 'Geschätzte Gesamtsumme', deliveryEstimate: 'Voraussichtliche Lieferung',
      quoteDisclaimer: 'Exporttarife sind Schätzungen pro kg und enthalten keine Zölle, Steuern, Versicherung oder Sonderbehandlung. Bitte bestätigen Sie Versandkosten und Lieferzeit vor der Bestellung.',
      howEyebrow: 'MIT SORGFALT AUS CIREBON', howTitle: 'Mit Liebe gefertigt,<br><em>für jeden Tag.</em>',
      howDescription: 'Unser Rattan wird sorgfältig verarbeitet und achtsam versendet. Alle Bestellinformationen können Sie hier prüfen.',
      howCta: 'Bestellung berechnen', stepOneTitle: 'Lieblingsstück auswählen',
      stepOneText: 'Entdecken Sie die Kollektion und finden Sie die passende Variante.',
      stepTwoTitle: 'Preis und Versand prüfen', stepTwoText: 'Geben Sie Menge und Lieferort ein, um die geschätzte Summe zu sehen.',
      stepThreeTitle: 'Für die Bestellung Kontakt aufnehmen',
      stepThreeText: 'Notieren Sie Ihre Auswahl und kontaktieren Sie unser Team zur Bestätigung.',
      faqEyebrow: 'HABEN SIE NOCH FRAGEN?', faqTitle: 'Häufig gestellte<br><em>Fragen.</em>',
      faqDescription: 'Keine passende Antwort gefunden? Wir helfen Ihnen gerne weiter.',
      faqContact: 'Frage zur Bestellung stellen',
      footerDescription: 'Tradition bewahren, Geschichten flechten.<br>Rattanhandwerk aus Cirebon.',
      footerExplore: 'ENTDECKEN', footerCollection: 'Produktkollektion', footerCalculator: 'Bestellrechner',
      footerFaq: 'Häufige Fragen', footerFindUs: 'HIER FINDEN SIE UNS', footerLocation: 'Cirebon, West-Java',
      footerLocal: 'Lokales Handwerk, persönliche Geschichten.', photoCredits: 'Bildnachweise',
      footerCopyright: 'Mit Sorgfalt in Cirebon gefertigt.', backToTop: 'Nach oben ↑',
      variantNatural: 'Natur', variantHoney: 'Honig', variantChocolate: 'Schokoladenbraun', variantIvory: 'Elfenbein',
      stockAvailable: 'Auf Lager · {stock} Stk.', stockUnavailable: 'Vorbestellung', priceUnit: 'Ab · pro Stück',
      chooseProduct: 'Produkt wählen ↗', stockHint: 'Auf Lager: {stock} Stück',
      preOrderHint: 'Vorbestellung möglich. Lieferzeit bitte bei uns erfragen.',
      subtotalUnavailable: 'Derzeit nicht verfügbar', totalUnavailable: 'Wird bestätigt',
      shippingUnavailable: 'Wird berechnet, sobald das Produkt verfügbar ist',
      weightNote: '({quantity} × {weight} kg)', shippingNote: '{weight} kg × {rate}/kg',
      destinations: ['Indonesien · Jakarta und Großraum', 'Indonesien · Andere Städte auf Java', 'Indonesien · Sumatra', 'Indonesien · Bali und Nusa Tenggara', 'Indonesien · Kalimantan', 'Indonesien · Sulawesi, Maluku und Papua', 'Export · Singapur und Malaysia (Schätzung)', 'Export · Ostasien (Schätzung)', 'Export · Australien (Schätzung)', 'Export · Europa und Nordamerika (Schätzung)'],
      deliveryTimes: ['2–4 Werktage', '3–5 Werktage', '5–8 Werktage', '5–8 Werktage', '6–9 Werktage', '7–12 Werktage', '5–10 Werktage', '7–14 Werktage', '8–16 Werktage', '12–24 Werktage'],
      preOrderDelivery: 'Lieferzeit der Vorbestellung bestätigen',
      productCopy: [
        ['Laras Rattanstuhl', 'Sitzen und entspannen', 'Ein Loungesessel mit sanfter Form für Ihre Lieblingsecke.', 'Beliebt'],
        ['Senja Flechtkorb', 'Aufbewahren und ordnen', 'Ein vielseitiger Korb für kleine Dinge und mehr Ordnung.', 'Vielseitig'],
        ['Rimba Beistelltisch', 'Raum ergänzen', 'Ein leichter Beistelltisch für Kaffee und ein gutes Buch.', 'Vorbestellung']
      ],
      faqs: [
        ['Wie sehe ich, ob ein Produkt verfügbar ist?', 'Der Lagerstatus steht auf jeder Produktkarte. Produkte „Auf Lager“ können sofort bestellt werden. Bei „Vorbestellung“ erfragen Sie bitte den Fertigungstermin bei unserem Team.'],
        ['Welche Varianten gibt es?', 'Je nach Produkt sind Natur, Honig, Schokoladenbraun oder Elfenbein verfügbar. Die Farbauswahl sehen Sie im Bestellrechner; die Verfügbarkeit bestätigen wir bei der Bestellung.'],
        ['Wie wird der Gesamtpreis berechnet?', 'Der Produktpreis wird mit der Menge multipliziert und die Versandkosten werden addiert. Der Rechner zeigt sofort eine Schätzung. Zusätzliche Kosten für Export oder Sonderanfertigungen werden separat vereinbart.'],
        ['Wie werden die Versandkosten berechnet?', 'Der Rechner zeigt geschätzte Kosten pro Kilogramm nach Lieferregion. Das Versandgewicht ergibt sich aus Produktgewicht mal Menge und wird auf das nächste volle Kilogramm aufgerundet. Der endgültige Preis hängt von Versanddienst und Paketmaßen ab.'],
        ['Wie lange dauert die Lieferung?', 'Die Schätzung hängt vom Zielort ab und wird im Rechner angezeigt. Werktage zählen ab Übergabe an den Versanddienst; Wetter, Feiertage oder Versandbedingungen können die Laufzeit beeinflussen.'],
        ['Sind Steuern und Zollgebühren im Exportversand enthalten?', 'Nein. Internationale Tarife sind Schätzungen pro Kilogramm und enthalten keine Zölle, Einfuhrsteuern, Versicherung oder Sonderbehandlung. Endpreis, Exportdokumente und Lieferzeit hängen vom Zielland und den Paketmaßen ab.'],
        ['Wie kann ich bestellen?', 'Notieren Sie Produkt, Variante, Menge und Lieferziel aus dem Rechner. Kontaktieren Sie RIDWANROTAN, um Bestand, endgültige Versandkosten, Zahlung und Liefertermin zu bestätigen.']
      ]
    }
  },
  es: {
    locale: 'es-ES',
    strings: {
      pageTitle: 'RIDWANROTAN — Artesanía de ratán de Cirebon', metaDescription: 'Descubre artesanía de ratán de Cirebon, consulta disponibilidad, calcula precios y envío y revisa los plazos estimados.',
      brandAria: 'RIDWANROTAN, inicio', openNavigation: 'Abrir navegación',
      navCollection: 'Colección', navHow: 'Cómo pedir', navFaq: 'Preguntas frecuentes', navQuote: 'Calcular pedido', languageLabel: 'Elegir idioma',
      heroEyebrow: 'HECHO EN CIREBON, ENVIADO A TODO EL MUNDO', heroTitle: 'Calidez natural<br><em>para tu hogar.</em>',
      heroDescription: 'Piezas de ratán elaboradas con cuidado por artesanos locales. Explora la colección, consulta el stock y calcula tu pedido fácilmente.',
      heroExplore: 'Explorar colección', heroAbout: 'Conoce RIDWANROTAN', heroHandmade: '100 % hecho a mano',
      heroLocal: 'Apoyamos con orgullo a los artesanos locales', heroImageAlt: 'Foto de una estantería artesanal de ratán de Cirebon',
      heroNoteTitle: 'Un toque natural', heroNoteText: 'Para espacios con significado',
      heroCaption: '01 — colección para el hogar', heroFooter: 'RATÁN AUTÉNTICO · ARTESANÍA LOCAL · HISTORIAS QUE PERDURAN', seeCollection: 'Ver productos',
      collectionEyebrow: 'CREADO PARA ACOMPAÑARTE', collectionTitle: 'Encuentra la pieza ideal<br>para <em>tu espacio.</em>',
      collectionDescription: 'Cada tejido tiene su carácter. Elige tu favorito, consulta colores y tamaños y comprueba la disponibilidad.',
      quoteEyebrow: 'PLANIFICA TU PEDIDO', quoteTitle: 'Calcula primero,<br><em>compra con calma.</em>',
      quoteDescription: 'Elige un producto y destino. Calcularemos el precio, el envío y el plazo estimado de entrega.',
      quoteAssurance: 'Cálculo transparente, sin costes ocultos.',
      productLabel: 'Producto', variantLabel: 'Variante', quantityLabel: 'Cantidad', decreaseQuantity: 'Reducir cantidad',
      increaseQuantity: 'Aumentar cantidad', destinationLabel: 'Enviar a', productCost: 'Precio del producto',
      shippingCostLabel: 'Coste de envío', estimatedTotal: 'Total estimado', deliveryEstimate: 'Entrega estimada',
      quoteDisclaimer: 'Las tarifas de exportación son estimaciones por kg y no incluyen aduanas, impuestos, seguro ni manipulación especial. Confirma el coste y el plazo finales antes de hacer el pedido.',
      howEyebrow: 'DE CIREBON, CON CUIDADO', howTitle: 'Hecho con esmero,<br><em>para disfrutarlo.</em>',
      howDescription: 'Tejemos el ratán con paciencia y lo enviamos con cuidado. Aquí puedes consultar toda la información del pedido.',
      howCta: 'Calcular mi pedido', stepOneTitle: 'Elige tu pieza favorita',
      stepOneText: 'Explora la colección y encuentra la variante que mejor se adapte a ti.',
      stepTwoTitle: 'Consulta precio y envío', stepTwoText: 'Indica la cantidad y el destino para ver el total estimado.',
      stepThreeTitle: 'Contáctanos para pedir',
      stepThreeText: 'Anota tu selección y contacta con nuestro equipo para confirmarla.',
      faqEyebrow: '¿TIENES ALGUNA PREGUNTA?', faqTitle: 'Lo que más<br><em>nos preguntan.</em>',
      faqDescription: '¿No encuentras la respuesta? Estamos aquí para ayudarte.',
      faqContact: 'Consultar sobre un pedido',
      footerDescription: 'Cuidamos la tradición, tejemos historias.<br>Artesanía de ratán de Cirebon.',
      footerExplore: 'EXPLORAR', footerCollection: 'Colección de productos', footerCalculator: 'Calculadora de pedidos',
      footerFaq: 'Preguntas habituales', footerFindUs: 'ENCUÉNTRANOS', footerLocation: 'Cirebon, Java Occidental',
      footerLocal: 'Artesanía local, historias personales.', photoCredits: 'Créditos de las fotos',
      footerCopyright: 'Hecho con cariño en Cirebon.', backToTop: 'Volver arriba ↑',
      variantNatural: 'Natural', variantHoney: 'Miel', variantChocolate: 'Marrón', variantIvory: 'Marfil',
      stockAvailable: 'Disponible · {stock} uds.', stockUnavailable: 'Por encargo', priceUnit: 'Desde · por unidad',
      chooseProduct: 'Elegir producto ↗', stockHint: 'Disponibles: {stock} unidades',
      preOrderHint: 'Disponible por encargo. Contáctanos para confirmar el plazo.',
      subtotalUnavailable: 'No disponible todavía', totalUnavailable: 'Pendiente de confirmación',
      shippingUnavailable: 'Se calcula cuando el producto esté disponible',
      weightNote: '({quantity} × {weight} kg)', shippingNote: '{weight} kg × {rate}/kg',
      destinations: ['Indonesia · Yakarta y alrededores', 'Indonesia · Otras ciudades de Java', 'Indonesia · Sumatra', 'Indonesia · Bali y Nusa Tenggara', 'Indonesia · Kalimantan', 'Indonesia · Sulawesi, Maluku y Papúa', 'Exportación · Singapur y Malasia (estimación)', 'Exportación · Asia Oriental (estimación)', 'Exportación · Australia (estimación)', 'Exportación · Europa y Norteamérica (estimación)'],
      deliveryTimes: ['2–4 días laborables', '3–5 días laborables', '5–8 días laborables', '5–8 días laborables', '6–9 días laborables', '7–12 días laborables', '5–10 días laborables', '7–14 días laborables', '8–16 días laborables', '12–24 días laborables'],
      preOrderDelivery: 'Confirma el plazo del pedido',
      productCopy: [
        ['Silla de ratán Laras', 'Descanso y relax', 'Una silla de líneas suaves para tu rincón favorito de casa.', 'Favorito'],
        ['Cesta tejida Senja', 'Guardar y ordenar', 'Una cesta versátil para mantener organizados los objetos pequeños.', 'Versátil'],
        ['Mesa auxiliar Rimba', 'Completa tu espacio', 'Una mesa ligera para acompañar el café y los libros.', 'Por encargo']
      ],
      faqs: [
        ['¿Cómo sé si un producto está disponible?', 'El estado del stock aparece en cada ficha. Los productos disponibles se pueden pedir ahora. Para los productos por encargo, consulta con nuestro equipo el plazo de producción.'],
        ['¿Qué variantes hay disponibles?', 'Cada producto tiene diferentes colores, como natural, miel, marrón o marfil. Consulta las opciones en la calculadora; confirmaremos la disponibilidad al hacer el pedido.'],
        ['¿Cómo se calcula el total del pedido?', 'El precio del producto se multiplica por la cantidad y se suma el envío. La calculadora muestra el total estimado al instante. Los costes especiales de exportación o personalización se acuerdan aparte.'],
        ['¿Cómo se calcula el coste de envío?', 'Se muestra una tarifa estimada por kilogramo según la región. El peso se calcula multiplicando el peso del producto por la cantidad y redondeando al kilogramo superior. La tarifa final depende del transportista y las dimensiones.'],
        ['¿Cuánto tarda en llegar el pedido?', 'El plazo depende del destino y aparece en la calculadora. Los días laborables empiezan cuando el transportista recibe el paquete; el clima, los festivos y las condiciones de envío pueden afectar la entrega.'],
        ['¿El envío de exportación incluye impuestos y aduanas?', 'No. Las tarifas internacionales son estimaciones por kilogramo y no incluyen aduanas, impuestos de importación, seguro ni manipulación especial. El coste final, los documentos y el plazo dependen del país y las dimensiones del paquete.'],
        ['¿Cómo puedo hacer un pedido?', 'Anota el producto, la variante, la cantidad y el destino de la calculadora. Después contacta con RIDWANROTAN para confirmar el stock, el envío final, el pago y la fecha de entrega.']
      ]
    }
  },
  ar: {
    locale: 'ar-SA',
    strings: {
      pageTitle: 'RIDWANROTAN — حرف الروطان من سيريبون', metaDescription: 'اكتشف منتجات الروطان من سيريبون، وتحقق من التوفر واحسب الأسعار والشحن وموعد التسليم المتوقع.',
      brandAria: 'RIDWANROTAN، الصفحة الرئيسية', openNavigation: 'فتح قائمة التنقل',
      navCollection: 'المجموعة', navHow: 'كيفية الطلب', navFaq: 'الأسئلة الشائعة', navQuote: 'احسب الطلب', languageLabel: 'اختر اللغة',
      heroEyebrow: 'صُنع في سيريبون ويُشحن إلى مختلف أنحاء العالم', heroTitle: 'دفء الطبيعة<br><em>في منزلك.</em>',
      heroDescription: 'قطع من الروطان يصنعها حرفيون محليون بعناية. استكشف المجموعة وتحقق من المخزون واحسب طلبك بسهولة.',
      heroExplore: 'استكشف المجموعة', heroAbout: 'تعرّف على RIDWANROTAN', heroHandmade: 'صناعة يدوية ١٠٠٪',
      heroLocal: 'نفخر بدعم الحرفيين المحليين', heroImageAlt: 'صورة رف من مصنوعات الروطان في سيريبون',
      heroNoteTitle: 'لمسة طبيعية', heroNoteText: 'لمساحات تحمل معنى',
      heroCaption: '٠١ — مجموعة المنزل', heroFooter: 'روطان أصلي · حرفة محلية · حكايات تدوم', seeCollection: 'عرض المنتجات',
      collectionEyebrow: 'صُنعت لترافقك', collectionTitle: 'اختر القطعة المناسبة<br><em>لمساحتك.</em>',
      collectionDescription: 'لكل نسيج طابعه الخاص. اختر ما يعجبك، واستكشف الألوان والأحجام، وتحقق من التوفر.',
      quoteEyebrow: 'خطط لطلبك', quoteTitle: 'احسب التكلفة أولاً،<br><em>واطلب براحة.</em>',
      quoteDescription: 'اختر المنتج ووجهة الشحن، وسنحسب سعر المنتج وتكلفة الشحن والمدة المتوقعة.',
      quoteAssurance: 'حساب واضح دون تكاليف مخفية.',
      productLabel: 'المنتج', variantLabel: 'النوع', quantityLabel: 'الكمية', decreaseQuantity: 'تقليل الكمية',
      increaseQuantity: 'زيادة الكمية', destinationLabel: 'الشحن إلى', productCost: 'سعر المنتج',
      shippingCostLabel: 'تكلفة الشحن', estimatedTotal: 'الإجمالي التقديري', deliveryEstimate: 'موعد الوصول المتوقع',
      quoteDisclaimer: 'أسعار التصدير تقديرية لكل كجم ولا تشمل الرسوم الجمركية أو الضرائب أو التأمين أو المناولة الخاصة. يرجى تأكيد تكلفة الشحن والمدة النهائية قبل الطلب.',
      howEyebrow: 'من سيريبون بكل عناية', howTitle: 'حرفة متقنة،<br><em>لتستمتع بها كل يوم.</em>',
      howDescription: 'ننسج الروطان بعناية ونرسله باهتمام. يمكنك الاطلاع على جميع تفاصيل الطلب هنا.',
      howCta: 'احسب طلبك', stepOneTitle: 'اختر قطعتك المفضلة',
      stepOneText: 'استكشف المجموعة واختر النوع الذي يناسب احتياجاتك.',
      stepTwoTitle: 'تحقق من السعر والشحن', stepTwoText: 'أدخل الكمية والوجهة للاطلاع على الإجمالي التقديري.',
      stepThreeTitle: 'تواصل معنا لإتمام الطلب',
      stepThreeText: 'دوّن اختياراتك ثم تواصل مع فريقنا لتأكيد الطلب.',
      faqEyebrow: 'هل لديك سؤال؟', faqTitle: 'أسئلة يطرحها<br><em>عملاؤنا كثيراً.</em>',
      faqDescription: 'لم تجد الإجابة؟ يسعدنا تقديم المزيد من المعلومات.',
      faqContact: 'استفسر عن الطلب',
      footerDescription: 'نحافظ على التقاليد وننسج الحكايات.<br>حرف الروطان من سيريبون.',
      footerExplore: 'استكشف', footerCollection: 'مجموعة المنتجات', footerCalculator: 'حاسبة الطلب',
      footerFaq: 'أسئلة شائعة', footerFindUs: 'موقعنا', footerLocation: 'سيريبون، جاوة الغربية',
      footerLocal: 'حرفة محلية وحكايات شخصية.', photoCredits: 'مصادر الصور',
      footerCopyright: 'صُنع بعناية في سيريبون.', backToTop: 'العودة إلى الأعلى ↑',
      variantNatural: 'طبيعي', variantHoney: 'عسلي', variantChocolate: 'بني', variantIvory: 'عاجي',
      stockAvailable: 'متوفر · {stock} قطع', stockUnavailable: 'طلب مسبق', priceUnit: 'ابتداءً من · للقطعة',
      chooseProduct: 'اختر المنتج ↗', stockHint: 'المخزون المتوفر: {stock} قطع',
      preOrderHint: 'متاح للطلب المسبق. تواصل معنا لتأكيد موعد التجهيز.',
      subtotalUnavailable: 'غير متوفر حالياً', totalUnavailable: 'بانتظار التأكيد',
      shippingUnavailable: 'يُحسب عند توفر المنتج',
      weightNote: '({quantity} × {weight} كجم)', shippingNote: '{weight} كجم × {rate}/كجم',
      destinations: ['إندونيسيا · جاكرتا الكبرى', 'إندونيسيا · مدن أخرى في جاوة', 'إندونيسيا · سومطرة', 'إندونيسيا · بالي ونوسا تنغارا', 'إندونيسيا · كاليمانتان', 'إندونيسيا · سولاوسي ومالوكو وبابوا', 'تصدير · سنغافورة وماليزيا (تقديري)', 'تصدير · شرق آسيا (تقديري)', 'تصدير · أستراليا (تقديري)', 'تصدير · أوروبا وأمريكا الشمالية (تقديري)'],
      deliveryTimes: ['٢–٤ أيام عمل', '٣–٥ أيام عمل', '٥–٨ أيام عمل', '٥–٨ أيام عمل', '٦–٩ أيام عمل', '٧–١٢ يوم عمل', '٥–١٠ أيام عمل', '٧–١٤ يوم عمل', '٨–١٦ يوم عمل', '١٢–٢٤ يوم عمل'],
      preOrderDelivery: 'يرجى تأكيد موعد الطلب المسبق',
      productCopy: [
        ['كرسي لاراس من الروطان', 'للجلوس والاسترخاء', 'كرسي مريح بتصميم ناعم لزاويتك المفضلة في المنزل.', 'الأكثر رواجاً'],
        ['سلة سينجا المنسوجة', 'للتخزين والترتيب', 'سلة متعددة الاستخدامات لترتيب الأغراض الصغيرة.', 'متعددة الاستخدامات'],
        ['طاولة ريومبا الجانبية', 'لمسة تكمل مساحتك', 'طاولة جانبية خفيفة للقهوة والكتب.', 'طلب مسبق']
      ],
      faqs: [
        ['كيف أعرف ما إذا كان المنتج متوفراً؟', 'تظهر حالة المخزون على بطاقة كل منتج. يمكن طلب المنتجات المتوفرة الآن. أما المنتجات التي تتطلب طلباً مسبقاً، فيرجى التواصل معنا لمعرفة مدة التصنيع.'],
        ['ما الأنواع المتوفرة؟', 'تختلف الألوان حسب المنتج، ومنها الطبيعي والعسلي والبني والعاجي. تظهر الخيارات في الحاسبة، وسنؤكد توفر اللون عند الطلب.'],
        ['كيف يُحسب إجمالي الطلب؟', 'يُضرب سعر المنتج في الكمية المختارة ثم تُضاف تكلفة الشحن. تعرض الحاسبة الإجمالي التقديري فوراً. وقد تُتفق على رسوم إضافية للطلبات المخصصة أو التصدير.'],
        ['كيف تُحسب تكلفة الشحن؟', 'تعرض الحاسبة سعراً تقديرياً لكل كيلوجرام حسب المنطقة. يُحسب الوزن بضرب وزن المنتج في الكمية ثم تقريبه إلى الكيلوجرام الأعلى. وقد تختلف التكلفة النهائية حسب شركة الشحن وأبعاد الطرد.'],
        ['كم يستغرق وصول الطلب؟', 'تختلف المدة حسب الوجهة وتظهر في الحاسبة. تُحسب أيام العمل منذ تسليم الشحنة لشركة النقل، وقد يؤثر الطقس والعطلات وظروف الشحن في موعد الوصول.'],
        ['هل تشمل تكلفة التصدير الضرائب والجمارك؟', 'لا. الأسعار الدولية تقديرية لكل كيلوجرام ولا تشمل الجمارك أو ضرائب الاستيراد أو التأمين أو المناولة الخاصة. يجب تأكيد التكلفة النهائية والوثائق والمدة حسب بلد الوجهة وأبعاد الشحنة.'],
        ['كيف أقدم طلباً؟', 'سجل المنتج والنوع والكمية والوجهة من الحاسبة، ثم تواصل مع RIDWANROTAN لتأكيد المخزون والشحن النهائي والدفع وموعد التسليم.']
      ]
    }
  }
};

let currentLanguage = 'id';
const productGrid = document.getElementById('productGrid');
const productSelect = document.getElementById('productSelect');
const variantSelect = document.getElementById('variantSelect');
const quantityInput = document.getElementById('quantityInput');
const destinationSelect = document.getElementById('destinationSelect');
const stockHint = document.getElementById('stockHint');
const languageSelect = document.getElementById('languageSelect');

function currentCopy() {
  return languages[currentLanguage];
}

function formatCurrency(amount) {
  return new Intl.NumberFormat(currentCopy().locale, {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}

function renderStaticText() {
  const strings = currentCopy().strings;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = strings[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = strings[element.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', strings[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.alt = strings[element.dataset.i18nAlt];
  });
  document.title = strings.pageTitle;
  document.getElementById('metaDescription').content = strings.metaDescription;
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
}

function getSelectedProduct() {
  return products.find((product) => product.id === productSelect.value) || products[0];
}

function renderProducts() {
  const strings = currentCopy().strings;
  productGrid.innerHTML = products.map((product, index) => {
    const [name, category, description, tag] = strings.productCopy[index];
    const available = product.stock > 0;
    const stockText = available
      ? strings.stockAvailable.replace('{stock}', product.stock)
      : strings.stockUnavailable;
    return `
      <div class="col-md-6 col-lg-4">
        <article class="product-card">
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${name}" loading="lazy">
            <span class="product-tag">${tag}</span>
          </div>
          <div class="product-body">
            <p class="product-category">${category}</p>
            <div class="product-title-row">
              <h3>${name}</h3>
              <span class="availability${available ? '' : ' out-of-stock'}">${stockText}</span>
            </div>
            <p class="product-description">${description}</p>
            <div class="product-meta">
              <span class="product-price">${formatCurrency(product.price)}<small>${strings.priceUnit}</small></span>
              <button class="product-detail-button" type="button" data-product-id="${product.id}">${strings.chooseProduct}</button>
            </div>
          </div>
        </article>
      </div>`;
  }).join('');
}

function renderOptions() {
  const strings = currentCopy().strings;
  productSelect.innerHTML = products.map((product, index) => {
    const [name] = strings.productCopy[index];
    const availability = product.stock > 0 ? strings.stockAvailable.replace('{stock}', product.stock) : strings.stockUnavailable;
    return `<option value="${product.id}">${name} — ${availability}</option>`;
  }).join('');
  destinationSelect.innerHTML = destinations.map((destination, index) =>
    `<option value="${destination.id}">${strings.destinations[index]}</option>`
  ).join('');
  updateVariantOptions();
}

function updateVariantOptions() {
  const product = getSelectedProduct();
  const strings = currentCopy().strings;
  const variantLabels = {
    Natural: strings.variantNatural,
    Madu: strings.variantHoney,
    Cokelat: strings.variantChocolate,
    'Putih gading': strings.variantIvory
  };
  variantSelect.innerHTML = product.variants.map((variant) =>
    `<option value="${variant}">${variantLabels[variant]}</option>`
  ).join('');
  quantityInput.max = String(Math.max(product.stock, 1));
  quantityInput.value = '1';
  quantityInput.disabled = product.stock === 0;
  variantSelect.disabled = product.stock === 0;
  stockHint.textContent = product.stock > 0
    ? strings.stockHint.replace('{stock}', product.stock)
    : strings.preOrderHint;
  updateQuote();
}

function updateQuote() {
  const strings = currentCopy().strings;
  const product = getSelectedProduct();
  const destinationIndex = destinations.findIndex((item) => item.id === destinationSelect.value);
  const destination = destinations[destinationIndex] || destinations[0];
  const requestedQuantity = Number.parseInt(quantityInput.value, 10);
  const quantity = Number.isFinite(requestedQuantity) && requestedQuantity > 0
    ? Math.min(requestedQuantity, Math.max(product.stock, 1))
    : 1;
  if (quantityInput.value !== String(quantity)) quantityInput.value = String(quantity);

  const subtotal = product.price * quantity;
  const totalWeight = product.weight * quantity;
  const billedWeight = Math.ceil(totalWeight);
  const shipping = billedWeight * destination.rate;
  const available = product.stock > 0;
  const formattedRate = formatCurrency(destination.rate);

  document.getElementById('subtotal').textContent = available ? formatCurrency(subtotal) : strings.subtotalUnavailable;
  document.getElementById('shippingCost').textContent = available ? formatCurrency(shipping) : strings.totalUnavailable;
  document.getElementById('grandTotal').textContent = available ? formatCurrency(subtotal + shipping) : strings.totalUnavailable;
  document.getElementById('weightNote').textContent = strings.weightNote
    .replace('{quantity}', quantity)
    .replace('{weight}', product.weight);
  document.getElementById('shippingNote').textContent = available
    ? strings.shippingNote.replace('{weight}', billedWeight).replace('{rate}', formattedRate)
    : strings.shippingUnavailable;
  document.getElementById('deliveryTime').textContent = available
    ? strings.deliveryTimes[destinationIndex]
    : strings.preOrderDelivery;
}

function renderFaqs() {
  const faqs = currentCopy().strings.faqs;
  document.getElementById('faqList').innerHTML = faqs.map(([question, answer], index) => `
    <article class="faq-item">
      <button class="faq-question" type="button" id="faq-question-${index}" aria-expanded="false" aria-controls="faq-answer-${index}">
        <span>${question}</span><span class="faq-toggle" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}" hidden>${answer}</div>
    </article>`
  ).join('');
}

function setLanguage(language) {
  if (!Object.hasOwn(languages, language)) return;
  currentLanguage = language;
  renderStaticText();
  renderProducts();
  renderOptions();
  renderFaqs();
}

productGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product-id]');
  if (!button) return;
  productSelect.value = button.dataset.productId;
  updateVariantOptions();
  document.getElementById('kalkulator').scrollIntoView({ behavior: 'smooth' });
});

languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));
productSelect.addEventListener('change', updateVariantOptions);
variantSelect.addEventListener('change', updateQuote);
quantityInput.addEventListener('input', updateQuote);
destinationSelect.addEventListener('change', updateQuote);
document.getElementById('quantityMinus').addEventListener('click', () => {
  quantityInput.value = String(Math.max(1, Number.parseInt(quantityInput.value, 10) - 1));
  updateQuote();
});
document.getElementById('quantityPlus').addEventListener('click', () => {
  const product = getSelectedProduct();
  quantityInput.value = String(Math.min(Math.max(1, product.stock), Number.parseInt(quantityInput.value, 10) + 1));
  updateQuote();
});
document.getElementById('faqList').addEventListener('click', (event) => {
  const button = event.target.closest('.faq-question');
  if (!button) return;
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  document.getElementById(button.getAttribute('aria-controls')).hidden = expanded;
});

document.getElementById('currentYear').textContent = String(new Date().getFullYear());
setLanguage(languageSelect.value);
