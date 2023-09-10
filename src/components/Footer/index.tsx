import {
  BehanceLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react'
import { FooterStyle, SocialLinks } from './styles'

export default function Footer() {
  return (
    <FooterStyle>
      <SocialLinks>
        <a
          target="_blank"
          rel="noreferrer"
          title="Instagram"
          href="https://www.instagram.com/malanskiart/"
        >
          <InstagramLogo />
          <br />
          <p>Instagram</p>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          title="Github"
          href="https://github.com/malanski"
        >
          <GithubLogo />
          <br />
          <p>Github</p>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          title="Behance"
          href="https://www.behance.net/malanski"
        >
          <BehanceLogo />
          <br />
          <p>Behance</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
          href="https://www.linkedin.com/in/ulisses-malanski/"
        >
          <LinkedinLogo />
          <br />
          <p>Linkedin</p>
        </a>
      </SocialLinks>
    </FooterStyle>
  )
}
