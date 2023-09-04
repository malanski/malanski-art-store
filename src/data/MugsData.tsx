import MugsMandalaRed from '../assets/products_icon/mugs_rose_white.png'
import MugsSunflower from '../assets/products_icon/mugs_firefly.png'
import MugsTurtleOrange from '../assets/products_icon/mugs_bee_black.png'
import MugsRedWings from '../assets/products_icon/mugs_eagle_wings.png'

import MugsMandalaRedBig from '../assets/products_img/mugs_rose_white.png'
import MugsSunflowerBig from '../assets/products_img/mugs_firefly.png'
import MugsTurtleOrangeBig from '../assets/products_img/mugs_bee_black.png'
import MugsRedWingsBig from '../assets/products_img/mugs_eagle_wings.png'

interface IProductsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const MugsDataList: IProductsData[] = [
  {
    name:'Moletom Dragão Vermelho',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: MugsMandalaRed,
    imgSrc: MugsMandalaRedBig,
    price: 149.90 
  },
  {
    name:'Moletom Octógama Colorido',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: MugsSunflower,
    imgSrc: MugsSunflowerBig,
    price: 149.90 
  },
  {
    name:'Moletom Borboleta Rosa',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: MugsTurtleOrange,
    imgSrc: MugsTurtleOrangeBig,
    price: 149.90 
  },
  {
    name:'Moletom Serpente',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: MugsRedWings,
    imgSrc: MugsRedWingsBig,
    price: 149.90 
  },
]

export default MugsDataList;