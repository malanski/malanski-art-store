import teeRedDragon from '../assets/products_icon/tee_red_dragon.png'
import teeOctoInv from '../assets/products_icon/tee_octo_inv.png'
import teeRoseSing from '../assets/products_icon/tee_rose_sing.png'
import teeKoiFishFlowers from '../assets/products_icon/tee_koi_fish_flowers.png'

import teeOctoInvBig from '../assets/products_img/tee_octo_inv.png'
import teeRoseSingBig from '../assets/products_img/tee_rose_sing.png'
import teeRedDragonBig from '../assets/products_img/bone_abelha_pb.png'
import teeKoiFishFlowersBig from '../assets/products_img/tee_koi_fish_flowers.png'

interface ITshirtsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const TshirtsDataList: ITshirtsData[] = [
  {
    name:'Camiseta Dragão Vermelho',
    description:'Disponível em varias cores e tamanhos',
    options:['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeRedDragon,
    imgSrc: teeRedDragonBig,
    price: 119.99 
  },
  {
    name:'Camiseta Dragão Vermelho',
    description:'Disponível em varias cores e tamanhos',
    options:['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeOctoInv,
    imgSrc: teeOctoInvBig,
    price: 119.99 
  },
  {
    name:'Peixes Koi Carpas Flores',
    description:'Disponível em varias cores e tamanhos',
    options:['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeKoiFishFlowers,
    imgSrc: teeKoiFishFlowersBig,
    price: 119.99 
  },
  {
    name:'Camiseta Rosa Singular',
    description:'Disponível em varias cores e tamanhos',
    options:['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeRoseSing,
    imgSrc: teeRoseSingBig,
    price: 119.99 
  },
  
]

export default TshirtsDataList;