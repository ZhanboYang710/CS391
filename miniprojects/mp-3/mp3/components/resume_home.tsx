import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    main {
    height: 100vh;
    max-width: 70vw;
    background-color: rgba(255, 204, 0, 0.695);
    margin: 1vw;
    color: darkblue;
    padding: 2%;

    text-align: center;
    font-size: calc(5px + 2vw);
}

    table #old{
        margin: 3vh 0;
        text-align: left;
}
`

export default function ResumeHome() {
    return (
        <HomeWrapper>
            <main>
                <h2>Online Resume Home</h2>

                <table className="old">
                    <tr>
                        <td id="selfie">
                            <img src="self.jpg" alt="missing picture..." />
                        </td>
                        <td id="introduction">
                            <p>
                                Hello, my friend. My name is Zhanbo Yang. I am a senior at Boston University
                                studying Computer Science and Statistics. I also major in Economics and has 
                                finished all the curriculums in it. However, it will be pretty obvious to 
                                everyone that I am lacking a bit of working experience. Therefore, I hope to
                                participate in internships and entry level jobs as soon as possible.
                            </p>
                        </td>
                    </tr>
                </table>

                <p id="purpose">
                        The purpose of this website is to showcase my resume in the format of an 
                    online website. I listed content on my digital resume into different sites. Feel free to 
                    use the navigation links to explore a little bit!
                </p>
            </main>
        </HomeWrapper>
    )
}