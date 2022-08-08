import { Response } from "../types/response";
import styled from "styled-components";
import { Info } from "./Info";
import { Image } from "./Image";

interface Props {
  loading: boolean;
  reload: () => void;
  data: Response | undefined;
}

export const Card = ({ loading, data, reload }: Props) => {
  const randomRoverImage =
    data?.photos[Math.trunc(Math.random() * data.photos.length)];
  return (
    <CardWrapper>
      <Image img_src={randomRoverImage?.img_src} loading={loading} />
      <Info data={randomRoverImage} loading={loading} reload={reload} />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  width: 60rem;
  height: 494px;
  margin-top: 2.5rem;
  position: relative;
`;
