import Home from "../blocks/home";
import Merchant from "../blocks/merchantScreen";
import Register from "../blocks/registerScreen";

export const ERRORS = {
  required: 'Please fill the Field',
  validPincode: 'Pincode is invalid',
  validMail: 'Email address is invalid'
};


export const MERCHANT_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    icon: require('../assets/rating.png'),
    title: '4.8',
    subTitle: 'Check reviews',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    icon: require('../assets/redMarkIcon.png'),
    title: '2.69 km',
    subTitle: 'Distance',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    icon: require('../assets/person.png'),
    title: '1k + ratings',
    subTitle: 'Good taste',
  },
];



export const tabData = [
  {
    id: 0,
    title: 'All',
  },
  {
    id: 1,
    icon: require('../assets/chicken.png'),
    title: 'Combo',
  },
  {
    id: 2,
    icon: require('../assets/hand.png'),
    title: 'Special',
  },
  {
    id: 3,
    icon: require('../assets/coffee.png'),
    title: 'Drinks',
  },
  {
    id: 4,
    icon: require('../assets/chicken.png'),
    title: 'Food',
  },
  {
    id: 5,
    icon: require('../assets/hand.png'),
    title: 'Side Dish',
  },
];


export const FOOD_DATA = [

  {
    id: 1,
    icon: require('../assets/briyani.png'),
    title: 'Briyani',
  },
  {
    id: 2,
    icon: require('../assets/pizza.png'),
    title: 'Pizza',
  },
  {
    id: 3,
    icon: require('../assets/salad.png'),
    title: 'Salad',
  },
  {
    id: 4,
    icon: require('../assets/chicken.png'),
    title: 'Sandwich',
  },
  {
    id: 5,
    icon: require('../assets/burger.png'),
    title: 'Burger',
  },
];

export const FOOD_CARD_DATA = [

  {
    id: 1,
    icon: require('../assets/briyani.png'),
    title: 'Hyderabad Briyani',
    rating: 5,
    distance: '2.5km',
    duration: '20 min delay'

  },
  {
    id: 2,
    icon: require('../assets/arabic-biryani.png'),
    title: 'Arabian Briyani',
    rating: 3,
    distance: '2.5km',
    duration: '20 min delay'
  },
  {
    id: 3,
    icon: require('../assets/mutton-biryani.png'),
    title: 'Mutton Briyani',
    rating: 4,
    distance: '2.5km',
    duration: '20 min delay'
  },
  {
    id: 4,
    icon: require('../assets/chicken.png'),
    title: 'Sandwich',
    rating: 4,
    distance: '2.5km',
    duration: '20 min delay'
  },
  {
    id: 5,
    icon: require('../assets/burger.png'),
    title: 'Burger',
    rating: 5,
    distance: '2.5km',
    duration: '20 min delay'
  },
];

export const MAPPING_ITEMS = [
  {
    id: 1,
    type: 'Combo',
    icon: "https://thumbs.dreamstime.com/b/diet-healthy-food-lifestyle-health-concept-sport-exercise-equipment-workout-and-gym-background-nutrition-detox-salad-f-179855057.jpg",
    title: 'Super Family Package',
    subTitle: '2 Chicken Wings, 2 Rice Bowl, 1 lt Coke',
    footText: '$12.00',
    count: 0
  },
  {
    id: 2,
    type: 'Combo',
    icon: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640777.jpg&fm=jpg",
    title: 'Chicken Super',
    subTitle: '1 Chicken Large, 2 Pocket Tomato Jazz',
    footText: '$18.00',
    count: 0
  },
  {
    id: 3,
    type: 'Food',
    icon: "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    title: 'Beef Steak Large',
    subTitle: '1 Beef Steak',
    footText: '$20.00',
    count: 0
  },
  {
    id: 4,
    type: 'Drinks',
    icon: "https://cdn.pixabay.com/photo/2024/02/16/15/36/recipe-8577854_1280.jpg",
    title: 'Special Orange Juice',
    subTitle: '1 Orange Juice',
    footText: '$3.00',
    count: 0
  },
  {
    id: 5,
    type: 'Food',
    icon: "https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_1280.jpg",
    title: 'Chicken Soup',
    subTitle: '1 Chicken Soup',
    footText: '$49.00',
    count: 0
  },
  {
    id: 6,
    type: 'Combo',
    icon: "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    title: 'Super Family Bucket Biriyani',
    subTitle: '2 Bucket Chicken Biriyani, 2 White Rice Bowl, 1 lt Coke',
    footText: '$32.00',
    count: 0
  },
];

export const drawerData = [
  {
    id: 1,
    name: 'Home',
    icon: require('../assets/home.png'),
    route: Home,
  },
  {
    id: 2,
    name: 'Register',
    icon: require('../assets/verify.png'),
    route: Register,
  },
  {
    id: 3,
    name: 'Mechant',
    icon: require('../assets/store.png'),
    route: Merchant,
  },
  
  {
    id: 4,
    name: 'Logout',
    icon: require('../assets/logout.png'),
    route: 'Home',
  },
];