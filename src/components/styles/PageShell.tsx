import styled from 'styled-components'

export const PageShell = styled.div`
    min-height: 100%;
    padding: 28px 24px 48px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const PageHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const PageTitle = styled.h1`
    margin: 0;
    font-size: 1.65rem;
    font-weight: 650;
    letter-spacing: -0.02em;
`

export const PageSubtitle = styled.p`
    margin: 0;
    color: #9ca3af;
    font-size: 0.95rem;
`