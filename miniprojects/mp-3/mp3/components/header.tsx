import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderWrapper = styled.header`
    background-color: darkolivegreen;
    max-width: 30vw;
    width: 25vw;
    margin: 1vw;
    padding-left: 1.5%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 750px) {
        padding: 0;
        text-align: center
    }
`

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Zhanbo Yang</h1>
            <p>Welcome to my online resume!</p>

            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/education`}>Education</Link>
                    </li>
                    <li>
                        <Link to={`/experience`}>Experience</Link>
                    </li>
                    <li>
                        <Link to={`/project`}>Project</Link>
                    </li>
                    <li>
                        <Link to={`/activity`}>Activity</Link>
                    </li>
                    <li>
                        <Link to={`/skill`}>Skill</Link>
                    </li>
                </ul>
            </nav>

        </HeaderWrapper>
    );
}