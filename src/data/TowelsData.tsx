import Towels from '../assets/products_icon/towel_lion.png'
import TowelsTurtle from '../assets/products_icon/towel_turtle.png'
import TowelsMoon from '../assets/products_icon/towel_moon_flower.png'
import TowelsVitruvian from '../assets/products_icon/towel_vitruviano.png'

import TowelsBig from '../assets/products_img/towel_lion.png'
import TowelsTurtleBig from '../assets/products_img/towel_turtle.png'
import TowelsMoonBig from '../assets/products_img/towel_moon_flower.png'
import TowelsVitruvianBig from '../assets/products_img/towel_vitruviano.png'



interface IProductsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const TowelsDataList: IProductsData[] = [
  {
    name:'Toalha Leão',
    description:'Toalhas de banho, de praia e de rosto com, tecido felpudo de poliéster',
    options:['Banho/Praia', 'Rosto'],
    iconSrc: Towels,
    imgSrc: TowelsBig,
    price: 84.90 
  },
  {
    name:'Toalha Tartaruga',
    description:'Toalhas de banho, de praia e de rosto com, tecido felpudo de poliéster',
    options:['Banho/Praia', 'Rosto'],
    iconSrc: TowelsTurtle,
    imgSrc: TowelsTurtleBig,
    price: 84.90 
  },
  {
    name:'Toalha Lua',
    description:'Toalhas de banho, de praia e de rosto com, tecido felpudo de poliéster',
    options:['Banho/Praia', 'Rosto'],
    iconSrc: TowelsMoon,
    imgSrc: TowelsMoonBig,
    price: 84.90 
  },
  {
    name:'Toalha Vitruviana',
    description:'Toalhas de banho, de praia e de rosto com, tecido felpudo de poliéster',
    options:['Banho/Praia', 'Rosto'],
    iconSrc: TowelsVitruvian,
    imgSrc: TowelsVitruvianBig,
    price: 84.90 
  },
]

export default TowelsDataList;