import React from 'react';
import styled from 'styled-components';



export default function ExperiencePage() {
    return (
        <>
         <main>
            <p>I do not have much experience. Since we are implementing something for projects
                page, I will redirect projects on my resume here.
            </p>

            <table>
                <tr>
                    <td>
                        Rental Car Sharing Analysis Tool
                        <ul>
                            <li>work with real dataset of bike rental counts in 2011 and 2012 in Washington, D.C.,
                                with 18 variables and 18,110 entries of data points</li>
                            <li>perform exploratory data analysis, generate plots 30+ plots with R and ggplot2</li>
                            <li>perform linear regression with 2011 data applying variable selection and time series
                                analysis with model diagnostics, model predicts highly accurate bike rentals for 2012</li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>
                        Photo Sharing Website
                        <ul>
                            <li>Co-implemented a photo sharing web-application with HTML, Python, SQL</li>
                            <li>Allowed users to register, share photos, create albums and tags, and search that
                                display popular photos based on tags</li>
                        </ul>
                    </td>
                </tr>

            </table>
        </main>
        
        </>
    )
}