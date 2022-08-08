import styled from "styled-components";

interface Props {
  img_src: string | undefined;
  loading: boolean;
}

export const Image = ({ img_src, loading }: Props) => {
  return (
    <>
      {loading ? <Loading>Loading...</Loading> : <ImageWrapper src={img_src} />}
    </>
  );
};

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-right: 1px solid #eee;
  width: 80%;
  font-size: 0.7rem;
  height: 100%;
  color: black;
  background-color: white;
`;

const ImageWrapper = styled.img`
  flex: 1;
  width: 80%;
  height: 100%;
`;
