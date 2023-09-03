import LegMandala from '../assets/products_icon/leggings_mandala.png'
import LegTattoSnake from '../assets/products_icon/leggings_tattoo_snake.png'
import LegLeaves from '../assets/products_icon/leggings_leaves.png'
import LegSnake from '../assets/products_icon/leggings_snake.png'

import LegMandalaBig from '../assets/products_img/leggings_mandala.png'
import LegTattoSnakeBig from '../assets/products_img/leggings_tattoo_snake.png'
import LegLeavesBig from '../assets/products_img/leggings_leaves.png'
import LegSnakeBig from '../assets/products_img/leggings_snake.png'


interface IProductsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const LeggingsDataList: IProductsData[] = [
  {
    name:'Moletom Dragão Vermelho',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: LegMandala,
    imgSrc: LegMandalaBig,
    price: 149.90 
  },
  {
    name:'Moletom Octógama Colorido',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: LegTattoSnake,
    imgSrc: LegTattoSnakeBig,
    price: 149.90 
  },
  {
    name:'Moletom Borboleta Rosa',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: LegLeaves,
    imgSrc: LegLeavesBig,
    price: 149.90 
  },
  {
    name:'Moletom Serpente',
    description:'Em tamanho único do 36 ao 44. Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: LegSnake,
    imgSrc: LegSnakeBig,
    price: 149.90 
  },
]

export default LeggingsDataList;