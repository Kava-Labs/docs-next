import styled from 'styled-components'

// sample styled div container 

export const Container = styled.div`
   background: ${(props) => props.theme.main};
   color: ${(props) => props.theme.mainColor};
`