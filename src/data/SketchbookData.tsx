import Sketchbook from '../assets/products_icon/sketchbooks_red_dragon.png'
import SketchbookSunflower from '../assets/products_icon/sketchbooks_hepta.png'
import SketchbookTurtleOrange from '../assets/products_icon/sketchbooks_bee.png'
import SketchbookWings from '../assets/products_icon/sketchbooks_oxossi.png'

import SketchbookBig from '../assets/products_img/sketchbooks_red_dragon.png'
import SketchbookSunflowerBig from '../assets/products_img/sketchbooks_hepta.png'
import SketchbookTurtleOrangeBig from '../assets/products_img/sketchbooks_bee.png'
import SketchbookWingsBig from '../assets/products_img/sketchbooks_oxossi.png'

const ItemDescription =
  'Vários modelos como sketchbooks agendas, planners semanais e mensais, blocos de notas e bullet journals'
const category = 'Caderno'
const ItemPrice = 89.9
const ItemOptions = ['Cor do elástico']

const SketchbookDataList = [
  {
    name: `${category} Dragão Vermelho`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: Sketchbook,
    imgSrc: [SketchbookBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/sketchbooks/dragao-vermelho',
  },
  {
    name: `${category} Hectograma`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: SketchbookSunflower,
    imgSrc: [SketchbookSunflowerBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sketchbooks/crisantemo-estrela-heptagrama-colorido-aquarela',
  },
  {
    name: `${category} Abelha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: SketchbookTurtleOrange,
    imgSrc: [SketchbookTurtleOrangeBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sketchbooks/abelha-rainha-preto-e-branco',
  },
  {
    name: `${category} Oxossi`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: SketchbookWings,
    imgSrc: [SketchbookWingsBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/sketchbooks/oxossi-aquarela',
  },
]

export default SketchbookDataList
