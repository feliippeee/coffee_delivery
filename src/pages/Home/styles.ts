import styled from 'styled-components';

export const Container =styled.div`
    padding: 2rem 10rem;

`;
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 544px;

`;

export const Content = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: space-between;

    justify-content: space-between;
    > div { 
        img{ 
            width: 476px;
            height: 360px;
        }
    }

`;


export const ColumnLeft = styled.div`
    display: flex;
    width: 588px;
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

export const Image = styled.img`
    max-width: 476px;
    height: 360px;
    margin-left: 56px;
`;

export const TitleHome = styled.h2`
    font-size: 32px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 41.6px;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 54px;
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

`;