import Buttons from '../assets/products_icon/buttons_lion.png'
import ButtonsButterfly from '../assets/products_icon/buttons_butterfly.png'
import ButtonsLionFlower from '../assets/products_icon/buttons_lion_flower.png'
import Buttonseagle from '../assets/products_icon/buttons_eagle.png'

import ButtonsBig from '../assets/products_img/buttons_lion.png'
import ButtonsButterflyBig from '../assets/products_img/buttons_butterfly.png'
import ButtonsLionFlowerBig from '../assets/products_img/buttons_lion_flower.png'
import ButtonseagleBig from '../assets/products_img/buttons_eagle.png'



interface IProductsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const ButtonsDataList: IProductsData[] = [
  {
    name:'Broche Leão',
    description:'Broches de banho, acabamento em película brilhante de polietileno, fecho	de alfinete em alumínio, 4,5cm de diâmetro',
    options:['Banho/Praia', 'Rosto'],
    iconSrc: Buttons,
    imgSrc: ButtonsBig,
    price: 84.90 
  },
  {
    name:'Broche Borboleta',
    description:'Broches de banho, acabamento em película brilhante de polietileno, fecho	de alfinete em alumínio, 4,5cm de diâmetro',
    options:['Banho/Praia', 'Rosto'],
    iconSrc: ButtonsButterfly,
    imgSrc: ButtonsButterflyBig,
    price: 84.90 
  },
  {
    name:'Broche Leão Floral',
    description:'Broches de banho, acabamento em película brilhante de polietileno, fecho	de alfinete em alumínio, 4,5cm de diâmetro',
    options:['Banho/Praia', 'Rosto'],
    iconSrc: ButtonsLionFlower,
    imgSrc: ButtonsLionFlowerBig,
    price: 84.90 
  },
  {
    name:'Broche Águia',
    description:'Broches de banho, acabamento em película brilhante de polietileno, fecho	de alfinete em alumínio, 4,5cm de diâmetro',
    options:['Banho/Praia', 'Rosto'],
    iconSrc: Buttonseagle,
    imgSrc: ButtonseagleBig,
    price: 84.90 
  },
]

export default ButtonsDataList;