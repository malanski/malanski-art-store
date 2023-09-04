import ApronsMandalaRed from '../assets/products_icon/aprons_koi_fishes.png'
import ApronsSunflower from '../assets/products_icon/aprons_big_rose.png'
import ApronsTurtleOrange from '../assets/products_icon/aprons_lion_red.png'
import ApronsRedWings from '../assets/products_icon/aprons_dragon_blue.png'

import ApronsMandalaRedBig from '../assets/products_icon/aprons_koi_fishes.png'
import ApronsSunflowerBig from '../assets/products_icon/aprons_big_rose.png'
import ApronsTurtleOrangeBig from '../assets/products_icon/aprons_lion_red.png'
import ApronsRedWingsBig from '../assets/products_icon/aprons_dragon_blue.png'



interface IProductsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const ApronsDataList: IProductsData[] = [
  {
    name:'Avental Carpas e Flores',
    description:'Brim 100% algodão , Bolso frontal arredondado, faixa para amarração nas costas e alça com regulador em metal',
    options:['Preto', 'Branco', 'Vermelho', 'Azul'],
    iconSrc: ApronsMandalaRed,
    imgSrc: ApronsMandalaRedBig,
    price: 89.90 
  },
  {
    name:'Avental Rosa Branca',
    description:'Brim 100% algodão , Bolso frontal arredondado, faixa para amarração nas costas e alça com regulador em metal',
    options:['Preto', 'Branco', 'Vermelho', 'Azul'],
    iconSrc: ApronsSunflower,
    imgSrc: ApronsSunflowerBig,
    price: 89.90 
  },
  {
    name:'Avental Leão Colorido',
    description:'Brim 100% algodão , Bolso frontal arredondado, faixa para amarração nas costas e alça com regulador em metal',
    options:['Preto', 'Branco', 'Vermelho', 'Azul'],
    iconSrc: ApronsTurtleOrange,
    imgSrc: ApronsTurtleOrangeBig,
    price: 89.90 
  },
  {
    name:'Avental Dragão Vermelho',
    description:'Brim 100% algodão , Bolso frontal arredondado, faixa para amarração nas costas e alça com regulador em metal',
    options:['Preto', 'Branco', 'Vermelho', 'Azul'],
    iconSrc: ApronsRedWings,
    imgSrc: ApronsRedWingsBig,
    price: 89.90 
  },
]

export default ApronsDataList;