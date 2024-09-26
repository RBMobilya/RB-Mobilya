// Example of centralized data file

export const categories = [
  {
    id: 0,
    name: "Çay Seti",
  },
  {
    id: 1,
    name: "Qəhvə Masası",
  },
  {
    id: 2,
    name: "Masalar",
  },
  {
    id: 3,
    name: "Oturacaq",
  },
  {
    id: 4,
    name: "Divan&Kreslo",
  },
  {
    id: 5,
    name: "Bağ Mebeli",
  },
  {
    id: 6,
    name: "TV Stend",
  },
  {
    id: 7,
    name: "Saat",
  },
  {
    id: 8,
    name: "Yataq Otağı",
  },
  {
    id: 9,
    name: "Motbox",
  },
];
//   image: '/image/ofis.png'
// image: '/image/metbex.png'
// image: '/image/outdoor.png'
// image: '/image/chesterfield.png'
// image: '/image/vintage.png'
// image: '/image/metbex.png'
export const products = [
  {
    id: 0,
    name: 'Riley 84" Sofa Bed',
    category: "Divan&Kreslo",
    price: 3000,
    discountedPrice: 879.2, // Discounted price
    longDescription:
      "Glassblower rəngarəng wabi-sabi-dən ilhamlanmış şüşə qabları ilə qüsursuz gözəlliyi əhatə edir. Unikal, qeyri-müntəzəm girintiləri və dalğaları ilə, əl işi, bənzərsiz eynəklər 5 dəstdə gəlir - Yaponiyada şanslı nömrə olduğuna inanılır - və isteğe bağlı xatir küpü (həmçinin tokkuri adlanır) ilə birləşdirilə bilər. Bu heyrətamiz dəst, xüsusən də sizin başınıza gəlsə, sevimli xatirinə həvəskarınıza xromatik hədiyyə edir. Massaçusetsdə əl işi. Bu əşyanın əl işi olduğuna görə hər biri unikaldır və fərqli olacaq. More...",
    images: [
      "/image/divan2.png",
      "/image/divan3.png",
      "/image/divan4.png",
      "/image/divan5.png",
    ],
    colors: [
      {
        name: "Ağ",
        code: "#f5f5f5",
        images: [
          "/image/metbex.png",
          "/image/divan3_white.png",
          "/image/divan4_white.png",
        ],
        defaultColorImage:'/image/Aksesuarlar.png'
      },
      {
        name: "Qara",
        code: "#d94a3f",
        images: [
          "/image/divan4.png",
          "/image/divan3_white.png",
          "/image/divan4_white.png",
        ],
        defaultColorImage:'/image/AboutSection.png'

      },
      {
        name: "Boz",
        code: "#5a7f6f",
        images: [
          "/image/divan5.png",
          "/image/divan3_white.png",
          "/image/divan4_white.png",
        ],
        defaultColorImage:'/image/Aksesuarlar.png'

      },
    ],
    defaultImage:
      "https://res.cloudinary.com/dvkmhcbdu/image/upload/v1727376693/Rb_Mobilya/kjukpkxqh63kozkra9h2.jpg",
    description:
      "This elegant sofa bed offers comfort and versatility, perfect for any modern living room.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "bəli",
  },
  {
    id: 1,
    name: "amuntabi",
    category: "Oturacaq",
    price: 600,
    warranty: "1 illik",
    discountedPrice: 879.2, // Discounted price
    longDescription:
      "Glassblower rəngarəng wabi-sabi-dən ilhamlanmış şüşə qabları ilə qüsursuz gözəlliyi əhatə edir. Unikal, qeyri-müntəzəm girintiləri və dalğaları ilə, əl işi, bənzərsiz eynəklər 5 dəstdə gəlir - Yaponiyada şanslı nömrə olduğuna inanılır - və isteğe bağlı xatir küpü (həmçinin tokkuri adlanır) ilə birləşdirilə bilər. Bu heyrətamiz dəst, xüsusən də sizin başınıza gəlsə, sevimli xatirinə həvəskarınıza xromatik hədiyyə edir. Massaçusetsdə əl işi. Bu əşyanın əl işi olduğuna görə hər biri unikaldır və fərqli olacaq. More...",

    images: [
      "/image/divan2.png",
      "/image/divan3.png",
      "/image/divan4.png",
      "/image/divan5.png",
    ],
    colors: [
      { name: "Ağ", code: "#f5f5f5", image: "/image/ofis.png" },
      { name: "Qara", code: "#d94a3f", image: "/image/metbex.png" },
      { name: "Yaşıl", code: "#5a7f6f", image: "/image/chesterfield.png" },
    ],
    defaultImage: "/image/amuntabi.png",
    description:
      "This elegant sofa bed offers comfort and versatility, perfect for any modern living room.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bu həftə",
  },
  {
    id: 2,
    name: "amuntabi",
    category: "Oturacaq",
    price: 600,
    warranty: "1 illik",
    discountedPrice: 879.2, // Discounted price
    longDescription:
      "Glassblower rəngarəng wabi-sabi-dən ilhamlanmış şüşə qabları ilə qüsursuz gözəlliyi əhatə edir. Unikal, qeyri-müntəzəm girintiləri və dalğaları ilə, əl işi, bənzərsiz eynəklər 5 dəstdə gəlir - Yaponiyada şanslı nömrə olduğuna inanılır - və isteğe bağlı xatir küpü (həmçinin tokkuri adlanır) ilə birləşdirilə bilər. Bu heyrətamiz dəst, xüsusən də sizin başınıza gəlsə, sevimli xatirinə həvəskarınıza xromatik hədiyyə edir. Massaçusetsdə əl işi. Bu əşyanın əl işi olduğuna görə hər biri unikaldır və fərqli olacaq. More...",

    colors: [
      { name: "Ağ", code: "#f5f5f5", image: "/image/ofis.png" },
      { name: "Qara", code: "#d94a3f", image: "/image/metbex.png" },
      { name: "Yaşıl", code: "#5a7f6f", image: "/image/chesterfield.png" },
    ],
    defaultImage: "/image/metbex.png",
  },
  {
    id: 3,
    name: "amuntabi",
    category: "Oturacaq",
    warranty: "1 illik",
    price: 600,
    discountedPrice: 879.2, // Discounted price
    longDescription:
      "Glassblower rəngarəng wabi-sabi-dən ilhamlanmış şüşə qabları ilə qüsursuz gözəlliyi əhatə edir. Unikal, qeyri-müntəzəm girintiləri və dalğaları ilə, əl işi, bənzərsiz eynəklər 5 dəstdə gəlir - Yaponiyada şanslı nömrə olduğuna inanılır - və isteğe bağlı xatir küpü (həmçinin tokkuri adlanır) ilə birləşdirilə bilər. Bu heyrətamiz dəst, xüsusən də sizin başınıza gəlsə, sevimli xatirinə həvəskarınıza xromatik hədiyyə edir. Massaçusetsdə əl işi. Bu əşyanın əl işi olduğuna görə hər biri unikaldır və fərqli olacaq. More...",

    colors: [
      { name: "Ağ", code: "#f5f5f5", image: "/image/ofis.png" },
      { name: "Qara", code: "#d94a3f", image: "/image/metbex.png" },
      { name: "Yaşıl", code: "#5a7f6f", image: "/image/chesterfield.png" },
    ],
    defaultImage: "/image/metbex.png",
  },
  {
    id: 4,
    name: "amuntabi",
    category: "Oturacaq",
    warranty: "1 illik",
    price: 600,
    discountedPrice: 879.2, // Discounted price
    longDescription:
      "Glassblower rəngarəng wabi-sabi-dən ilhamlanmış şüşə qabları ilə qüsursuz gözəlliyi əhatə edir. Unikal, qeyri-müntəzəm girintiləri və dalğaları ilə, əl işi, bənzərsiz eynəklər 5 dəstdə gəlir - Yaponiyada şanslı nömrə olduğuna inanılır - və isteğe bağlı xatir küpü (həmçinin tokkuri adlanır) ilə birləşdirilə bilər. Bu heyrətamiz dəst, xüsusən də sizin başınıza gəlsə, sevimli xatirinə həvəskarınıza xromatik hədiyyə edir. Massaçusetsdə əl işi. Bu əşyanın əl işi olduğuna görə hər biri unikaldır və fərqli olacaq. More...",

    images: [
      "/image/divan2.png",
      "/image/divan3.png",
      "/image/divan4.png",
      "/image/divan5.png",
    ],
    colors: [
      { name: "Ağ", code: "#f5f5f5", image: "/image/ofis.png" },
      { name: "Qara", code: "#d94a3f", image: "/image/metbex.png" },
      { name: "Yaşıl", code: "#5a7f6f", image: "/image/chesterfield.png" },
    ],
    defaultImage: "/image/amuntabi.png",
    description:
      "This elegant sofa bed offers comfort and versatility, perfect for any modern living room.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bu həftə",
  },
  {
    id: 5,
    name: "amuntabi",
    category: "Oturacaq",
    warranty: "1 illik",
    price: 600,
    discountedPrice: 879.2, // Discounted price
    longDescription:
      "Glassblower rəngarəng wabi-sabi-dən ilhamlanmış şüşə qabları ilə qüsursuz gözəlliyi əhatə edir. Unikal, qeyri-müntəzəm girintiləri və dalğaları ilə, əl işi, bənzərsiz eynəklər 5 dəstdə gəlir - Yaponiyada şanslı nömrə olduğuna inanılır - və isteğe bağlı xatir küpü (həmçinin tokkuri adlanır) ilə birləşdirilə bilər. Bu heyrətamiz dəst, xüsusən də sizin başınıza gəlsə, sevimli xatirinə həvəskarınıza xromatik hədiyyə edir. Massaçusetsdə əl işi. Bu əşyanın əl işi olduğuna görə hər biri unikaldır və fərqli olacaq. More...",

    colors: [
      { name: "Ağ", code: "#f5f5f5", image: "/image/ofis.png" },
      { name: "Qara", code: "#d94a3f", image: "/image/metbex.png" },
      { name: "Yaşıl", code: "#5a7f6f", image: "/image/chesterfield.png" },
    ],
    defaultImage: "/image/metbex.png",
  },
  {
    id: 6,
    name: "amuntabi",
    category: "Oturacaq",
    warranty: "1 illik",
    price: 600,
    discountedPrice: 879.2, // Discounted price
    longDescription:
      "Glassblower rəngarəng wabi-sabi-dən ilhamlanmış şüşə qabları ilə qüsursuz gözəlliyi əhatə edir. Unikal, qeyri-müntəzəm girintiləri və dalğaları ilə, əl işi, bənzərsiz eynəklər 5 dəstdə gəlir - Yaponiyada şanslı nömrə olduğuna inanılır - və isteğe bağlı xatir küpü (həmçinin tokkuri adlanır) ilə birləşdirilə bilər. Bu heyrətamiz dəst, xüsusən də sizin başınıza gəlsə, sevimli xatirinə həvəskarınıza xromatik hədiyyə edir. Massaçusetsdə əl işi. Bu əşyanın əl işi olduğuna görə hər biri unikaldır və fərqli olacaq. More...",

    images: [
      "/image/divan2.png",
      "/image/divan3.png",
      "/image/divan4.png",
      "/image/divan5.png",
    ],
    colors: [
      { name: "Ağ", code: "#f5f5f5", image: "/image/ofis.png" },
      { name: "Qara", code: "#d94a3f", image: "/image/metbex.png" },
      { name: "Yaşıl", code: "#5a7f6f", image: "/image/chesterfield.png" },
    ],
    defaultImage: "/image/amuntabi.png",
  },
  {
    id: 7,
    name: "amuntabi",
    category: "Oturacaq",
    warranty: "1 illik",
    price: 600,
    discountedPrice: 879.2, // Discounted price
    longDescription:
      "Glassblower rəngarəng wabi-sabi-dən ilhamlanmış şüşə qabları ilə qüsursuz gözəlliyi əhatə edir. Unikal, qeyri-müntəzəm girintiləri və dalğaları ilə, əl işi, bənzərsiz eynəklər 5 dəstdə gəlir - Yaponiyada şanslı nömrə olduğuna inanılır - və isteğe bağlı xatir küpü (həmçinin tokkuri adlanır) ilə birləşdirilə bilər. Bu heyrətamiz dəst, xüsusən də sizin başınıza gəlsə, sevimli xatirinə həvəskarınıza xromatik hədiyyə edir. Massaçusetsdə əl işi. Bu əşyanın əl işi olduğuna görə hər biri unikaldır və fərqli olacaq. More...",

    colors: [
      { name: "Ağ", code: "#f5f5f5", image: "/image/ofis.png" },
      { name: "Qara", code: "#d94a3f", image: "/image/metbex.png" },
      { name: "Yaşıl", code: "#5a7f6f", image: "/image/chesterfield.png" },
    ],
    defaultImage: "/image/metbex.png",
    description:
      "This elegant sofa bed offers comfort and versatility, perfect for any modern living room.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bu həftə",
  },
  // Add more products as needed
];
export const Mycolors = [
  { name: "Ağ", code: "#fff" },
  { name: "Qara", code: "#000" },
  { name: "Boz", code: "#999" },
  { name: "Qırmızı", code: "#f00" },
  { name: "Yaşıl", code: "#0f0" },
];
