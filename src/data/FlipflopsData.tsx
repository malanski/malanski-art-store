import FlopsMandalaRed from '../assets/products_icon/flipflops_mandala_red.png'
import FlopsSunflower from '../assets/products_icon/flipflops_sunflower.png'
import FlopsTurtleOrange from '../assets/products_icon/flipflops_turtle_orange.png'
import FlopsRedWings from '../assets/products_icon/flipflops_red_wings.png'

import FlopsMandalaRedBig from '../assets/products_img/flipflops_mandala_red.png'
import FlopsSunflowerBig from '../assets/products_img/flipflops_sunflower.png'
import FlopsTurtleOrangeBig from '../assets/products_img/flipflops_turtle_orange.png'
import FlopsRedWingsBig from '../assets/products_img/flipflops_red_wings.png'


interface IProductsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const FlipflopsDataList: IProductsData[] = [
  {
    name:'Moletom Dragão Vermelho',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: FlopsMandalaRed,
    imgSrc: FlopsMandalaRedBig,
    price: 149.90 
  },
  {
    name:'Moletom Octógama Colorido',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: FlopsSunflower,
    imgSrc: FlopsSunflowerBig,
    price: 149.90 
  },
  {
    name:'Moletom Borboleta Rosa',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: FlopsTurtleOrange,
    imgSrc: FlopsTurtleOrangeBig,
    price: 149.90 
  },
  {
    name:'Moletom Serpente',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: FlopsRedWings,
    imgSrc: FlopsRedWingsBig,
    price: 149.90 
  },
]

export default FlipflopsDataList;