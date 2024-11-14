import React from 'react';
import styled from 'styled-components';

const FooterComp = styled.footer`
`

export default function Footer() {
    return (
        <FooterComp>
        <p>All Rights Reserved by Zhanbo Yang 
            <a href="https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act">
                Credits
            </a> 
                &#169
        </p>
        </FooterComp>
    )
}