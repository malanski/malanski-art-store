import boneAbelhaPb from '../assets/products_icon/bone_abelha_pb.png'
import boneCrisantemoHex from '../assets/products_icon/bone_crisantemo_hexa.png'
import boneHexaInv from '../assets/products_icon/bone_hexa_inv.png'
import boneOctaInv from '../assets/products_icon/bone_octo_inv.png'

import boneAbelhaPbBig from '../assets/products_img/bone_abelha_pb.png'
import boneCrisantemoHexBig from '../assets/products_img/crisantemo_hexa.png'
import boneHexaInvBig from '../assets/products_img/bone_hexa_inv.png'
import boneOctaInvBig from '../assets/products_img/bone_octo_inv.png'

const ItemDescription = 'Bonés em brim, estampados com arte minimalista'
const category = 'Boné'
const ItemPrice = 99.9
const ItemOptions = ['preto', 'branco', 'azul', 'vermelho', 'rosa']

const CapsDataList = [
  {
    name: `${category} Abelha Rainha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: boneAbelhaPb,
    imgSrc: [boneAbelhaPbBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/caps/abelha-rainha-preto-e-branco',
  },
  {
    name: `${category} Crisântemo Hexagrama`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: boneCrisantemoHex,
    imgSrc: [boneCrisantemoHexBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/caps/crisantemo-hexagrama',
  },
  {
    name: `${category} Hexagrama invertido`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: boneHexaInv,
    imgSrc: [boneHexaInvBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/caps/crisantemo-e-estrela-hexagrama-vermelho?c=pink',
  },
  {
    name: `${category} Octagrama invertido`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: boneOctaInv,
    imgSrc: [boneOctaInvBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/caps/crisantemo-octograma-estrela-invertido?c=black',
  },
]

export default CapsDataList
