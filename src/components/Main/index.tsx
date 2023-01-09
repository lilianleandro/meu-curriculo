import * as S from '../styles'

const Main = ({
  title = 'Lilian Leandro',
  description = 'Estudante de análise e desenvolvimento de sistemas, programadora front-end, viciada em café, apreciadora de literatura, astronomia e jogos antigos'
}) => (
  <S.Wrapper>
    <S.TitleContent>
      <S.Logo
        src="/img/flower-pot.png"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
    </S.TitleContent>
    <S.Description>{description}</S.Description>
    <S.TitleSection>Dados Profissionais</S.TitleSection>
    <S.Section>
      <S.SectionContent>
        <b>Cargo</b>: Estágio em desenvolvimento web <br />
        <b>Empresa</b>: MadeiraMadeira <br />
        <b>Período</b>: 04/2021 à 04/2022
      </S.SectionContent>
      <S.SectionContent>
        <b>Empresa</b>: MadeiraMadeira <br />
        <b>Cargo</b>: Desenvolvedora frontend <br />
        <b>Período</b>: Desde 04/2022
      </S.SectionContent>
    </S.Section>
    <S.TitleSection>Formação Acadêmica</S.TitleSection>
    <S.Section>
      <S.SectionContent>
        <b>Curso</b>: Tecnólogo em Análise e Desenvolvimento de Sistemas -
        Uninter (2020 - 2023) <br />
        <b>Situação</b>: Cursando
      </S.SectionContent>
    </S.Section>
    <S.TitleSection>Formação Complementar</S.TitleSection>
    <S.Section>
      <S.SectionContent>
        <b>Curso</b>: Curso Web Moderno - Javascript
        <br />
        <b>Duração</b>: 97 horas
        <br />
        <b>Situação</b>: Completo
        <br />
      </S.SectionContent>
      <S.SectionContent>
        <b>Curso</b>: NextJS, GraphQL/GraphCMS e Leaflet na prática! -{' '}
        <a href="https://my-locals.vercel.app/" title="meu projeto">
          Link do projeto!
        </a>
        <br />
        <b>Duração</b>: 10 horas
        <br />
        <b>Situação</b>: Completo <br />
      </S.SectionContent>
      <S.SectionContent>
        <b>Curso</b>: React Avançado <br />
        <b>Duração</b>: 88 horas
        <br />
        <b>Situação</b>: Cursando
        <br />
      </S.SectionContent>
    </S.Section>
    <S.TitleSection>Mídias Sociais</S.TitleSection>
    <S.MediaSocial>
      <S.MediaLink
        href="https://www.instagram.com/lilianleandro95/"
        title="instagram"
        target="_blank"
      >
        {' '}
        <S.Logo
          src="/img/instagram (1).png"
          alt="Imagem de um átomo e React Avançado escrito ao lado."
        />
      </S.MediaLink>
      <S.MediaLink
        href="https://www.linkedin.com/in/lilian-leandro/"
        title="linkedin"
        target="_blank"
      >
        <S.Logo
          src="/img/linkedin (1).png"
          alt="Imagem de um átomo e React Avançado escrito ao lado."
        />
      </S.MediaLink>
    </S.MediaSocial>

    <S.ContactForm
      action="https://formsubmit.co/lilianleeandro@gmail.com"
      method="post"
    >
      <S.FiledsetForm>
        <S.TitleSection>Entre em contato</S.TitleSection>
        <S.LabelForm htmlFor="nome">Nome</S.LabelForm>
        <S.InputForm type="text" name="nome" />

        <S.LabelForm htmlFor="nome">Email</S.LabelForm>
        <S.InputForm type="text" name="email" />

        <S.LabelForm htmlFor="nome">Mensagem</S.LabelForm>
        <S.InputForm name="msg"></S.InputForm>

        <S.InputButton type="submit" value="Pronto! ;)" />
      </S.FiledsetForm>
    </S.ContactForm>
  </S.Wrapper>
)

export default Main
