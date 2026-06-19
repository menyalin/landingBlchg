import { Container, useTheme } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '~/shared/ui'
import Contacts from './ui/contacts'
const StyledFooter = styled.footer`
  background-color: ${props => props.theme.palette.primary.main};
`
const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '100%',
  paddingTop: '30px',
  color: 'white',
  justifyContent: 'space-between',
}

const Copyright = styled.div`
  color: grey;
  font-size: 1.1rem;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
`
const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 200px;
  align-items: center;
`

const Footer = () => {
  const theme = useTheme()
  return (
    <StyledFooter theme={theme}>
      <Container sx={containerStyles}>
        <WrapperRow>
          <div>
            <span>Общество с ограниченной ответственностью</span>
            <SectionTitle color="white">"Балчуг Тех" </SectionTitle>
            <span>ИНН: 9705181987</span>
          </div>
          <Contacts />
        </WrapperRow>
        <Copyright>
          © Все права защищены. ООО «Балчуг Тех» ® {new Date().getFullYear()}
        </Copyright>
      </Container>
    </StyledFooter>
  )
}

export default Footer
