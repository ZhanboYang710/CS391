import {styled} from 'styled-components'

const AboutContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    blackground-color: lightblue;
`

export default function AboutPage() {
    return (
        <AboutContentDiv>  
            <h1>I am a CS391 instructor!</h1>
            <p>I love teaching the class because the class is fun to teach!</p>
        </AboutContentDiv>
    )
}