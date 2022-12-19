import styled from "styled-components";

export const TextSectionContainer = styled.div`
    background-color: #000;
    color: #fff;
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    padding: 50px 30px;

    div{
        /*  */
        align-items: center;
        flex-wrap: wrap;
        display: flex;
        @media screen and (max-width: 960px) {

        }
    }

    p{
        width: 90%;
        max-width: 800px;
        margin: 10px 5px;
        color: #a9b3c1;
        font-size: 18px;
    }
`

export const Topline = styled.h2`
    color: #FFAB00;
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    /* margin-bottom: 16px; */
`

export const Heading = styled.h1`
  max-width: 90%;
  margin: 20px 0;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa; //1c2237
`

export const FlexParagraph = styled.div`
    display: flex;
    width: 45%;
    margin: 10px 5px;
    color: #a9b3c1;
    font-size: 18px;
    padding-right: 20px;

    @media screen and (max-width: 960px) {
        width: 90%;
    }
`