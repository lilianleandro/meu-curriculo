import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #bd97ff;
  color: #61615e;
  padding: 3rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TitleContent = styled.div`
  display: inline-flex;
`

export const Logo = styled.img`
  width: 60px;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  align-self: center;
  font-size: 3.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  border: 2px solid #d9d8d2;
  padding: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 800px;
  }
`
export const MediaLink = styled.a`
  margin: 8px;
`
export const TitleSection = styled.h2`
  font-size: 24px;
  font-weight: 400;
`
export const Section = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SectionContent = styled.section`
  font-size: 16px;
  align-self: center;
  font-weight: 300;
  background-color: #ccc;
  line-height: 28px;
  padding: 16px;
  margin: 16px;
  width: 100%;
  max-width: 360px;
`

export const ContactForm = styled.form`
  display: flex;
`
export const LabelForm = styled.label`
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  align-self: center;
  padding: 8px;
`
export const InputForm = styled.input`
  border: #669 2px solid;
  font-size: 12px;
  display: flex;
  align-self: center;
  width: 480px;
  border-radius: 4px;
  padding: 8px;
  @media (max-width: 768px) {
    width: 280px;
  }
`

export const FiledsetForm = styled.fieldset`
  border: #ccc 1px dotted;
  margin-top: 1em;
  padding: 8px;
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 280px;
  }
`

export const InputButton = styled.input`
  border: #bbb 1px solid;
  border-radius: 4px;
  font-size: 16px;
  align-self: center;
  line-height: 28px;
  padding: 8px;
  width: 80px;
  margin-top: 0.5em;
`

export const MediaSocial = styled.div`
  display: flex;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
