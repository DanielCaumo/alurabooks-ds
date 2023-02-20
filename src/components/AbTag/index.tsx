import React from "react"
import styled from "styled-components";

export interface AbTagProps {
    texto: string
}

const AbTagStyled = styled.div`
    padding: 25px 32px;
    color: #FFFFFF;
    background: #EB9B00;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`

export const AbTag = ({ texto }: AbTagProps) => {
    return (
        <AbTagStyled>
            {texto}
        </AbTagStyled>
    )
}