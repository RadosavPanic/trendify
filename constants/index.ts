type MenuCategory = {
  name: string;
  slug: string;
  items: { name: string; slug: string }[];
};

type MenuGroup = Record<string, MenuCategory>;

type MenuItems = Record<string, MenuGroup>;

export const menuItems: MenuItems = {
  "New And Featured": {
    Featured: {
      name: "Featured",
      slug: "/new-arrivals",
      items: [
        { name: "Shop All New Arrivals", slug: "/new-arrivals" },
        { name: "Best Sellers", slug: "/best-sellers" },
        { name: "Last in Stock", slug: "/last-in-stock" },
      ],
    },
    "Shop Icons": {
      name: "Shop Icons",
      slug: "/shop-icons",
      items: [
        { name: "Nike Sportswear", slug: "/nike-sportswear" },
        { name: "Adidas RunFalcon", slug: "/adidas-run-falcon" },
        { name: "Nike Air Max", slug: "/nike-air-max" },
        { name: "Under Armour", slug: "/under-armour" },
      ],
    },
    Jordan: {
      name: "Jordan",
      slug: "/jordan",
      items: [
        { name: "Shop All Jordan", slug: "/jordan" },
        { name: "Jordan Streetwear", slug: "/jordan-streetwear" },
        { name: "Jordan Basketball", slug: "/jordan-basketball" },
        { name: "Jordan x PSG", slug: "/jordan-psg" },
      ],
    },
    "Discover Sport": {
      name: "Discover Sport",
      slug: "/football",
      items: [
        { name: "Football", slug: "/football" },
        { name: "Running", slug: "/running" },
        { name: "Basketball", slug: "/basketball" },
        { name: "Tennis", slug: "/tennis" },
        { name: "Training and Gym", slug: "/training-and-gym" },
      ],
    },
  },
  Men: {
    Featured: {
      name: "Featured",
      slug: "/mens-new-arrivals",
      items: [
        { name: "New Arrivals", slug: "/mens-new-arrivals" },
        { name: "Best Sellers", slug: "/mens-best-sellers" },
        { name: "Last in Stock", slug: "/mens-last-in-stock" },
      ],
    },
    Shoes: {
      name: "Shoes",
      slug: "mens-shoes",
      items: [
        { name: "All Shoes", slug: "/mens-shoes" },
        { name: "Lifestyle", slug: "/mens-shoes-lifestyle" },
        { name: "Running", slug: "/mens-shoes-running" },
        { name: "Jordan", slug: "/mens-shoes-jordan" },
        { name: "Football", slug: "/mens-shoes-football" },
        { name: "Training and Gym", slug: "/mens-shoes-training-and-gym" },
        { name: "Slippers", slug: "/mens-shoes-slippers" },
      ],
    },
    Clothing: {
      name: "Clothing",
      slug: "/mens-clothing",
      items: [
        { name: "All Clothing", slug: "/mens-clothing" },
        { name: "Hoodies and Sweatshirts", slug: "/mens-hoodies" },
        { name: "Jackets", slug: "/mens-jackets" },
        { name: "Trousers", slug: "/mens-trousers" },
        { name: "Tops and T-Shirts", slug: "/mens-t-shirts" },
        { name: "Shorts", slug: "/mens-shorts" },
      ],
    },
    "Accessories and Equipment": {
      name: "Accessories and Equipment",
      slug: "/mens-accessories",
      items: [
        { name: "All Accessories and Equipment", slug: "/mens-accessories" },
        { name: "Bags and Backpacks", slug: "/mens-bags-backpacks" },
        { name: "Hats", slug: "/mens-hats" },
        { name: "Headwear", slug: "/mens-headwear" },
        { name: "Socks", slug: "/mens-socks" },
      ],
    },
  },
  Women: {
    Featured: {
      name: "Featured",
      slug: "/womens-new-arrivals",
      items: [
        { name: "New Arrivals", slug: "/womens-new-arrivals" },
        { name: "Best Sellers", slug: "/womens-best-sellers" },
        { name: "Last in Stock", slug: "/womens-last-in-stock" },
      ],
    },
    Shoes: {
      name: "Shoes",
      slug: "/womens-shoes",
      items: [
        { name: "All Shoes", slug: "/womens-shoes" },
        { name: "Lifestyle", slug: "/womens-shoes-lifestyle" },
        { name: "Jordan", slug: "/womens-shoes-jordan" },
        { name: "Running", slug: "/womens-shoes-running" },
        { name: "Training and Gym", slug: "/womens-shoes-training-and-gym" },
        { name: "Slippers", slug: "/womens-shoes-slippers" },
      ],
    },
    Clothing: {
      name: "Clothing",
      slug: "/womens-clothing",
      items: [
        { name: "All Clothing", slug: "/womens-clothing" },
        { name: "Hoodies and Sweatshirts", slug: "/womens-hoodies" },
        { name: "Jackets", slug: "/womens-jackets" },
        { name: "Trousers", slug: "/womens-trousers" },
        { name: "Leggings", slug: "/womens-leggings" },
        { name: "Tops and T-Shirts", slug: "/womens-t-shirts" },
        { name: "Shorts", slug: "/womens-shorts" },
        { name: "Sports Bras", slug: "/womens-sports-bras" },
      ],
    },
    "Accessories and Equipment": {
      name: "Accessories and Equipment",
      slug: "/womens-accessories",
      items: [
        {
          name: "All Accessories and Equipment",
          slug: "/womens-accessories",
        },
        { name: "Bags and Backpacks", slug: "/womens-bags-backpacks" },
        { name: "Hats", slug: "/womens-hats" },
        { name: "Headwear", slug: "/womens-headwear" },
        { name: "Socks", slug: "/womens-socks" },
      ],
    },
  },
  Kids: {
    Featured: {
      name: "Featured",
      slug: "/kids-new-arrivals",
      items: [
        { name: "New Arrivals", slug: "/kids-new-arrivals" },
        { name: "Best Sellers", slug: "/kids-best-sellers" },
        { name: "Last in Stock", slug: "/kids-last-in-stock" },
      ],
    },
    Shoes: {
      name: "Shoes",
      slug: "/kids-shoes",
      items: [
        { name: "All Shoes", slug: "/kids-shoes" },
        { name: "Lifestyle", slug: "/kids-shoes-lifestyle" },
        { name: "Jordan", slug: "/kids-shoes-jordan" },
        { name: "Football", slug: "/kids-shoes-football" },
        { name: "Running", slug: "/kids-shoes-running" },
        { name: "Basketball", slug: "/kids-shoes-basketball" },
      ],
    },
    Clothing: {
      name: "Clothing",
      slug: "/kids-clothing",
      items: [
        { name: "All Clothing", slug: "/kids-clothing" },
        { name: "Hoodies and Sweatshirts", slug: "/kids-hoodies" },
        { name: "Jackets", slug: "/kids-jackets" },
        { name: "Trousers", slug: "/kids-trousers" },
        { name: "Tops and T-Shirts", slug: "/kids-tops" },
        { name: "Shorts", slug: "/kids-shorts" },
      ],
    },
    "Kids by Age": {
      name: "Kids by Age",
      slug: "/older-kids",
      items: [
        { name: "Older Kids (7 - 15 years)", slug: "/older-kids" },
        { name: "Younger Kids (3 - 7 years)", slug: "/younger-kids" },
        {
          name: "Baby & Toddler (0 - 3 years)",
          slug: "/baby-toddlers-kids",
        },
      ],
    },
    "Accessories and Equipment": {
      name: "Accessories and Equipment",
      slug: "/kids-accessories",
      items: [
        {
          name: "All Accessories and Equipment",
          slug: "/kids-accessories",
        },
        { name: "Bags and Backpacks", slug: "/kids-bags-backpacks" },
        { name: "Socks", slug: "/kids-socks" },
      ],
    },
  },
};

export const footerMenuItems = [
  {
    title: "Categories",
    links: [
      { name: "Shoes", slug: "#" },
      { name: "Clothing", slug: "#" },
      { name: "Accessories", slug: "#" },
      { name: "Gift Cards", slug: "#" },
      { name: "New Arrivals", slug: "#" },
      { name: "Best Sellers", slug: "#" },
      { name: "Sale", slug: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Get Help", slug: "#" },
      { name: "Payment Options", slug: "#" },
      { name: "Order Status", slug: "#" },
      { name: "Shipping and Delivery", slug: "#" },
      { name: "Returns", slug: "#" },
      { name: "Contact Us", slug: "#" },
      { name: "Reviews", slug: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Trendify", slug: "#" },
      { name: "News", slug: "#" },
      { name: "Careers", slug: "#" },
      { name: "Find a Store", slug: "#" },
      { name: "Purpose", slug: "#" },
      { name: "FAQ", slug: "#" },
    ],
  },
];

export const paymentMethods = [
  { name: "Mastercard", src: "/mastercard.png" },
  { name: "Maestro", src: "/maestro.png" },
  { name: "Visa", src: "/visa.png" },
  { name: "PayPal", src: "/paypal.png" },
  { name: "Google Pay", src: "/google-pay.png" },
  { name: "Apple Pay", src: "/apple-pay.png" },
  { name: "Cash Payment", src: "/cash-payment.png" },
];
