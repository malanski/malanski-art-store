import Pillow from '../assets/products_icon/pillow_geisha.png'
import PillowTurtle from '../assets/products_icon/pillow_koi.png'
import PillowMoon from '../assets/products_icon/pillow_rose.png'
import PillowVitruvian from '../assets/products_icon/pillow_elephant.png'

import PillowBig from '../assets/products_img/pillow_geisha.png'
import PillowTurtleBig from '../assets/products_img/pillow_koi.png'
import PillowMoonBig from '../assets/products_img/pillow_rose.png'
import PillowVitruvianBig from '../assets/products_img/pillow_elephant.png'



interface IProductsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const PillowsDataList: IProductsData[] = [
  {
    name:'Almofada Geisha',
    description:'Fofinhas, antialérgicas, zíper invisível, macias e 100% poliéster',
    options:['40x40cm', '50x50cm'],
    iconSrc: Pillow,
    imgSrc: PillowBig,
    price: 79.90 
  },
  {
    name:'Almofada Carpas',
    description:'Fofinhas, antialérgicas, zíper invisível, macias e 100% poliéster',
    options:['40x40cm', '50x50cm'],
    iconSrc: PillowTurtle,
    imgSrc: PillowTurtleBig,
    price: 79.90 
  },
  {
    name:'Almofada Rosa',
    description:'Fofinhas, antialérgicas, zíper invisível, macias e 100% poliéster',
    options:['40x40cm', '50x50cm'],
    iconSrc: PillowMoon,
    imgSrc: PillowMoonBig,
    price: 79.90 
  },
  {
    name:'Almofada Elefante',
    description:'Fofinhas, antialérgicas, zíper invisível, macias e 100% poliéster',
    options:['40x40cm', '50x50cm'],
    iconSrc: PillowVitruvian,
    imgSrc: PillowVitruvianBig,
    price: 79.90 
  },
]

export default PillowsDataList;