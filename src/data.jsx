// import icons
import {

  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

// import images//
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/scampi.jpg';
import MenuImg2 from '../src/assets/img/menu/viande1.jpg';
import MenuImg3 from '../src/assets/img/menu/Mushrooms.jpg';
import MenuImg4 from '../src/assets/img/menu/Calamar.jpg';
import MenuImg5 from '../src/assets/img/menu/poisson.jpg';
import MenuImg6 from '../src/assets/img/menu/frits1.jpg';
import MenuImg7 from '../src/assets/img/menu/soupe.jpg';
import MenuImg8 from '../src/assets/img/menu/taquila.jpeg';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

//nav Data
export const navData = [
  { href: '#home', name: 'home' },
  { href: '#about', name: 'about' },
  { href: '#menu', name: 'menu' },
  { href: '#team', name: 'team' },
  { href: '#testimonials', name: 'testimonials' },
  { href: '#booking', name: 'book a table' },
  { href: '#contact', name: 'contact' },
];
//hero data
export const heroData = {
  pretitle: 'SELECT DELICIOUS, TRY SPECIAL. ',
  title: 'GoodFood',
  subtitle:
    'We welcome you to a delicious feast of exquisite dishes in GoodFood. Here you will dive into a friendly and romantic atmosphere and enjoy our haute cuisine. With our great selection of dishes from all over the world you can feel yourself as a traveler and true gourmet!',
  btnText: 'BOOK YOUR TABLE',
};
// SocialData
export const socialData = [

  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },

];

// AboutData

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle1: ' a few words about us',
  subtitle2: 'When visiting our European restaurant, just brace yourself to immersing into enjoying a truly delicious and perfectly cooked dishes.',
  subtitle3: 'The world-renowned chef showcases exhilarating interpretations of European food in a breathtaking space architect Tadao Ando built as a respite from the non-stop chaos of Belgium.',
  btnText: 'find out more',
  image: AboutImg,
};

//navMenu
export const navMenu = [
  { href: '/', name: 'APPETIZERS' },
  { href: '/', name: 'DESSERT' },
  { href: '/', name: 'Drinks' },
  { href: '/', name: 'Main Dishes' },
  { href: '/', name: 'RISOTTO' },
  { href: '/', name: 'SALADS' },
  { href: '/', name: 'SAUCES SOUPS' },
];

// MenuData

export const menuData = {
  title: 'Tasty Dishes',
  subtitle: 'view all menu for tasty meal ',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Scampis with butter sauce',
      price: '15.90 € ',
      description: 'Scampi cooked and marinated in a butter, garlic and herb sauce',
    },
    {
      image: MenuImg2,
      name: 'Beef fillet with pan-fried potatoes',
      price: '$15.49',
      description: 'Beef fillet with pan-fried potatos and vegetable sauce ',
    },
    {
      image: MenuImg3,
      name: 'Stuffed Mushrooms',
      price: '7.99€',
      description: 'Mushrooms caps baked with a filling of 3 choice cheeses,breadcrumbs and clams',
    },
    {
      image: MenuImg4,
      name: 'Fried Calamari',
      price: '8.99€',
      description: 'Breaded calamari, lightly fried in canola oil. Served with a side of marinara',
    },
   
    {
      image: MenuImg5,
      name: 'Grilled fish',
      price: '14.99€',
      description: 'grilled fish with a vegetable salad (onion, zucchini, tomato)',
    },
    {
      image: MenuImg6,
      name: 'French Fries',
      price: '3.45€',
      description: 'Hand cut wedges of Yukon Gold potatoes fried in canola oil',
    },
    {
      image: MenuImg7,
      name: 'vegetable soup',
      price: '7.99€',
      description: 'vegetable soup (potato,carrot, turnip, leek, pumpkin, leek, onion)',
    },
    {
      image: MenuImg8,
      name: 'Tequila sunrise',
      price: '7€',
      description: 'Tequila, orange juice, triple sec, and cranberry juice',
    },
    
  ],
};

//TeamData

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'Eva Savits',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

// TestimonialData

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};

// ReservationData

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 7AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

// NewsLetterData
export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};
// FooterData
export const footerData = {
  contact: {
    title: 'contact location',
    address: '3784 patterson road, #8 new york, CA 69000',
    phone: '(201)256-3689',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
     
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
 
     
    ],
  },
};