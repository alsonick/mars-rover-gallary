import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./components/Card";
import { API_KEY } from "./keys";

const App = () => {
  const [marsRoverImages, setMarsRoverImages] = useState<Response | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFetchMarsRoverImages = () => {
    setLoading(true);
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMarsRoverImages(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    handleFetchMarsRoverImages();
  }, []);

  return (
    <Wrapper>
      <Heading>Mars Rover Gallary</Heading>
      <Subheading>All images are provided by NASA</Subheading>
      <Card
        loading={loading}
        data={marsRoverImages as any}
        reload={handleFetchMarsRoverImages}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const Subheading = styled.p`
  text-align: center;
  color: #eee;
  font-size: 1.2rem;
`;

export default App;
