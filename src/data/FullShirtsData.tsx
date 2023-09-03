import teeFullRedDragon from '../assets/products_icon/tee_full_red_dragon.png'
import teeHeptaInv from '../assets/products_icon/tee_full_hepta_inv.png'
import teeButterflyMarb from '../assets/products_icon/tee_full_butterfly_marb.png'
import teeHeptaMud from '../assets/products_icon/tee_full_hepta_mud.png'

import teeFullRedDragonBig from '../assets/products_img/tee_full_hepta_inv.png'
import teeHeptaInvBig from '../assets/products_img/tee_full_hepta_inv.png'
import teeButterflyMarbBig from '../assets/products_img/tee_full_butterfly_marb.png'
import teeHeptaMudBig from '../assets/products_img/tee_full_hepta_mud.png'

interface IFullTshirtsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const FullTshirtsDataList: IFullTshirtsData[] = [
  {
    name:'Camiseta Dragão Vermelho',
    description:'Disponível em varias cores de gola e tamanhos',
    options:['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeFullRedDragon,
    imgSrc: teeFullRedDragonBig,
    price: 139.90 
  },
  {
    name:'Camiseta Dragão Vermelho',
    description:'Disponível em varias cores de gola e tamanhos',
    options:['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeHeptaInv,
    imgSrc: teeHeptaInvBig,
    price: 139.90 
  },
  {
    name:'Camiseta Dragão Vermelho',
    description:'Disponível em varias cores de gola e tamanhos',
    options:['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeButterflyMarb,
    imgSrc: teeButterflyMarbBig,
    price: 139.90 
  },
  {
    name:'Camiseta Dragão Vermelho',
    description:'Disponível em varias cores de gola e tamanhos',
    options:['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeHeptaMud,
    imgSrc: teeHeptaMudBig,
    price: 139.90 
  },
]

export default FullTshirtsDataList;