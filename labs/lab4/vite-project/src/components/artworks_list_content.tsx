import { useState, useEffect } from "react";
import { Artwork } from "../types";
import { styled } from "styled-components";


export default function ArtworksListContent() {
    const [numArtworks, setNumArtworks] = useState(5);
    const [artworks, setArtWorks] = useState<Artwork[]>([]);

    useEffect(  () => {
        async function getArtworks() {
            const res = await fetch(`https:/api.artic.edu/api/v1/artworks?limit=${numArtworks}`);
            const data = await res.json();
            setArtWorks(data.data);
        }
        
        getArtworks();
    })

    return (
        <div>
            <input type="number" placeholder="Number of Artworks" value={numArtworks}
                onChange={ (e) => setNumArtworks(Number(e.target.value)) } />
            <div>
                {
                    /* <p>Number of artwroks: {numArtworks}</p> */
                    artworks.map(artwork => <ArtworkPreview artwork={artwork} /> )
                }
                
            </div>
        </div>
    )
}

const ArtworkPreviewDiv = styled.div`
    margin: 3rem;
    padding: 1rem;
    width: 20rem;
    background-color: lightblue;
`;

const ArtworkPreview = ({artwork}: {artwork: Artwork}) => {
    return (
        <ArtworkPreviewDiv> 
            <h3>{artwork.title}</h3>
            <p>{artwork.place_of_origin}</p>
            <p>{artwork.is_zoomable}</p>
        </ArtworkPreviewDiv>
    )
}

