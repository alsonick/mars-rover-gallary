import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./components/Card";
import { API_KEY } from "./keys";

const App = () => {
    const [marsRoverImages, setMarsRoverImages] = useState<Response | null>(
        null
    );
    const [loading, setLoading] = useState(false);

    const handleFetchMarsRoverImages = () => {
        setLoading(true);
        fetch(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setMarsRoverImages(data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        handleFetchMarsRoverImages();
    }, []);

    return (
        <AppWrapper>
            <Heading>Mars Rover Gallary</Heading>
            <Sub>All images are provided by NASA</Sub>
            <Card
                loading={loading}
                data={marsRoverImages as any}
                reload={handleFetchMarsRoverImages}
            />
        </AppWrapper>
    );
};

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Heading = styled.h1`
    font-size: 2.5rem;
`;

const Sub = styled.p`
    font-size: 1rem;
    color: #eee;
`;

export default App;
