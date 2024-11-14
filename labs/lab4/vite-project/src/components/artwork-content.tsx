import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Artwork } from "../types";

export default function ArtworkContent() {
    const { id } = useParams();
    const [artwork, setArtwork] = useState<Artwork | null>(null);

    useEffect( () => {
        async function getArtworkInfo() {
            const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
            const data = await res.json();
            setArtwork(data.data);
        }

        getArtworkInfo();
    })

    return !artwork ? (
        <p>loading...</p>
    ) : !artwork.image_id  ? (
        <p>The preview of this artwork piece is missing.</p>
    ) : (
        <div>
            <h2>{artwork.title}</h2>
            <img src={`https://artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title}
                width={"80%"} 
            />
            <p>Origin: {artwork.place_of_origin}</p>
            <p>Medium: {artwork.medium_display}</p>
            <p>Public Domain: {artwork.is_public_domain ? "True" : "False"}</p>
            <p>Size Adjustible: {artwork.is_zoomable ? "True" : "False"}</p>

        </div>
    )

}

