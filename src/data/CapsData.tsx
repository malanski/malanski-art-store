import boneAbelhaPb from '../assets/products_icon/bone_abelha_pb.png'
import boneCrisantemoHex from '../assets/products_icon/bone_crisantemo_hexa.png'
import boneHexaInv from '../assets/products_icon/bone_hexa_inv.png'
import boneOctaInv from '../assets/products_icon/bone_octo_inv.png'

import boneAbelhaPbBig from '../assets/products_img/bone_abelha_pb.png'
import boneCrisantemoHexBig from '../assets/products_img/crisantemo_hexa.png'
import boneHexaInvBig from '../assets/products_img/bone_hexa_inv.png'
import boneOctaInvBig from '../assets/products_img/bone_octo_inv.png'

interface ICapsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}

const CapsDataList: ICapsData[] = [
  {
    name:'Boné Abelha Rainha',
    description:'O bonezinho tradicional com arte minimalista',
    options:['Preto e branco', 'Colorido'],
    iconSrc: boneAbelhaPb,
    imgSrc: boneAbelhaPbBig,
    price: 99.99 
  },
  {
    name:'Boné Crisântemo Hexagrama',
    description:'O bonezinho tradicional com arte minimalista',
    options:['Preto e branco', 'Colorido'],
    iconSrc: boneCrisantemoHex,
    imgSrc: boneCrisantemoHexBig,
    price: 99.99 
  },
  {
    name:'Boné Hexagrama invertido',
    description:'O bonezinho tradicional com arte minimalista',
    options:['Preto e branco', 'Colorido'],
    iconSrc: boneHexaInv,
    imgSrc: boneHexaInvBig,
    price: 99.99 
  },
  {
    name:'Boné Octagrama invertido',
    description:'O bonezinho tradicional com arte minimalista',
    options:['Preto e branco', 'Colorido'],
    iconSrc: boneOctaInv,
    imgSrc: boneOctaInvBig,
    price: 99.99 
  },
]



export default CapsDataList ;