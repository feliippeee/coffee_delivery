import styled from 'styled-components';

export const Container =styled.div`
    padding: 2rem 10rem;

`;
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 34rem;

`;

export const Content = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: space-between;

    justify-content: space-between;

`;


export const ColumnLeft = styled.div`
    display: flex;
    width: 36.75rem;
    flex-direction: column;
    gap: 1rem;
    
`;

export const ContainerTitles = styled.div`
    margin-bottom: 4.125rem;

`;

export const CardArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    grid-row-gap: 1.25rem;
`;



export const Title = styled.h1`
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 3.875rem;
    
`;

export const SubTitle = styled.p`
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.625rem;
    margin-top: 1rem;
`;

export const ImageBanner = styled.img`
    max-width: 29.75rem;
    height: 22.5rem;
    margin-left: 3.5rem;
`;

export const TitleHome = styled.h2`
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 2.6rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 3.375rem;
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

`;