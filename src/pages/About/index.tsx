import { AboutCard, AboutStyles } from './styles'
import { Nav } from '../../components/Nav'
import ProductAnimation from '../../components/ProductAnimation'
import { allTeeArray } from '../../data/FullShirtsData'
import { allTShirtsArray } from '../../data/TshirtsData'
import { allSweatArray } from '../../data/SweatShirtsData'
import { allPillowArray } from '../../data/PillowsData'

export function About() {
  return (
    <AboutStyles>
      <Nav />
      <h2>Sobre</h2>
      <h4>Olá, seja bem-vindo(a) na Malanski Art Store!</h4>
      <AboutCard>
        <p>
          &ensp;&ensp;&ensp;&ensp;&ensp; Aqui, você encontrará uma seleção
          cuidadosamente escolhida dos nossos produtos favoritos da Malanski
          Art, a loja oficial na Colab 55. Mas antes de prosseguir, queremos te
          contar um segredo: ao clicar em `Comprar`, você será magicamente
          <b> redirecionado(a) </b>para a nossa loja oficial:&ensp;
          <a
            target="_blanc"
            rel="noopener noreferrer"
            title="Loja oficial Malanskiart"
            href="https://www.colab55.com/@malanskiart"
          >
            @malanskiart na plataforma Colab 55.
          </a>
        </p>
        <ProductAnimation images={allTeeArray} />
      </AboutCard>

      <AboutCard>
        <ProductAnimation images={allTShirtsArray} />

        <p>
          &ensp;&ensp;&ensp;&ensp;&ensp; Por quê? Simples! É lá que toda a
          mágica acontece. É onde você encontrará todo o nosso estoque incrível,
          coleções completas e tudo o que precisa para dar um toque artístico à
          sua vida. Além disso, é o lugar onde podemos nos conectar diretamente
          com você, ouvir suas ideias brilhantes e até mesmo criar produtos
          personalizados sob medida para você.
        </p>
      </AboutCard>
      <AboutCard>
        <p>
          &ensp;&ensp;&ensp;&ensp;&ensp; O Malanski Art Store é como a nossa
          `vitrine especial`. Um lugar onde destacamos o que há de mais legal e
          único, mas não se preocupe, você está a apenas um clique de distância
          de explorar todo o nosso universo artístico.
        </p>
        <ProductAnimation images={allSweatArray} />
      </AboutCard>
      <AboutCard>
        <ProductAnimation images={allPillowArray} />

        <p>
          &ensp;&ensp;&ensp;&ensp;&ensp; Então, vá em frente, navegue, clique, e
          se apaixone pelas nossas criações. E, é claro, se quiser nos contar
          algo ou criar algo totalmente exclusivo, estamos sempre aqui para
          você. Divirta-se explorando, e obrigado por ser parte da nossa jornada
          artística! Com amor, A equipe da Malanski Art P.S. Se tiver alguma
          pergunta ou ideia maluca, entre em contato! Adoraríamos ouvir você.
        </p>
      </AboutCard>
    </AboutStyles>
  )
}
