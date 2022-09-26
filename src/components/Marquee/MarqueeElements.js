import styled from "styled-components";

export const MarqueeContainer = styled.div`
    background-color: #000;
    color: #fff;
    text-align: center;
    margin-top: -25px;

    h1{
        color: #FFAB00;
    }
`

export const MarqueeList = styled.div`
    width: 100vw;
    height: 15vh;
    overflow: hidden;
`

export const MarqueeContent = styled.div`
    height: 100%;
    display: flex;
    animation: scrolling 30s linear infinite;

    @media screen and (max-width: 600px){
        animation: scrolling 20s linear infinite;
    }

    &:hover{
        animation-play-state: paused;
        cursor: pointer;
    }

    @keyframes scrolling {
        0% { transform: translateX(0vw); }
        100% { transform: translateX(-2225px); }
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: max-content;//20vw;
        flex-shrink: 0;
        font-size: 2.5rem;
        white-space: nowrap;
        padding: 0 10px;

        @media screen and (max-width: 600px){
            font-size: 1.5rem;
            @keyframes scrolling {
        0% { transform: translateX(0vw); }
        100% { transform: translateX(-1420px); }
    }
        }
    }
`