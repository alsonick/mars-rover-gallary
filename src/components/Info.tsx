import styled from "styled-components";
import { Photos } from "../types/response";
import { saveAs } from "file-saver";

interface Props {
  data: Photos | undefined;
  reload: () => void;
  loading: boolean;
}

export const Info = ({ data, loading, reload }: Props) => {
  return (
    <>
      {loading ? (
        <LoadingInfoWrapper>loading...</LoadingInfoWrapper>
      ) : (
        <InfoWrapper>
          <Heading>Photo Info</Heading>
          <Section>
            <SectionTitle>Camera</SectionTitle>
            <Cell>
              <Key>id</Key>
              <Value>{data?.camera.id}</Value>
            </Cell>
            <Cell>
              <Key>Name</Key>
              <Value>{data?.camera.name}</Value>
            </Cell>
            <Cell>
              <Key>Full Name</Key>
              <Value>{data?.camera.full_name}</Value>
            </Cell>
            <Cell>
              <Key>Rover ID</Key>
              <Value>{data?.camera.rover_id}</Value>
            </Cell>
          </Section>
          <Section>
            <SectionTitle>Rover</SectionTitle>
            <Cell>
              <Key>ID</Key>
              <Value>{data?.rover.id}</Value>
            </Cell>
            <Cell>
              <Key>Landing Date</Key>
              <Value>{data?.rover.landing_date}</Value>
            </Cell>
            <Cell>
              <Key>Name</Key>
              <Value>{data?.rover.name}</Value>
            </Cell>
            <Cell>
              <Key>Status</Key>
              <Value>{data?.rover.status}</Value>
            </Cell>
            <Cell>
              <Key>Landing Date</Key>
              <Value>{data?.rover.landing_date}</Value>
            </Cell>
            <Cell>
              <Key>Launch Date</Key>
              <Value>{data?.rover.launch_date}</Value>
            </Cell>
          </Section>
          <Section>
            <SectionTitle>Info</SectionTitle>
            <Cell>
              <Key>Sol</Key>
              <Value>{data?.sol}</Value>
            </Cell>
            <Cell>
              <Key>Earth Date</Key>
              <Value>{data?.earth_date}</Value>
            </Cell>
            <Cell>
              <Key>ID</Key>
              <Value>{data?.id}</Value>
            </Cell>
            <a
              href={data?.img_src}
              rel="noreferrer"
              target="_blank"
              style={{
                fontSize: "0.7rem",
                position: "relative",
                width: "auto",
              }}
            >
              {data?.img_src.substring(0, 30) + "..."}
            </a>
          </Section>
          <button onClick={reload}>Reload</button>
          <button
            onClick={() => {
              saveAs(data?.img_src as string, "image.jpg");
            }}
          >
            Download
          </button>
        </InfoWrapper>
      )}
    </>
  );
};

const LoadingInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: black;
  float: right;
  width: 20%;
  height: 100%;
  background-color: #ffffff;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  float: right;
  width: 20%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ffffff;

  & button {
    font-size: 0.7rem;
    margin-top: 10px;
    cursor: pointer;
    width: 100%;
  }

  & a:hover {
    text-decoration: none;
  }
`;

const Heading = styled.h2`
  color: black;
  font-size: 1rem;
  font-weight: 300;
  margin-top: 20px;
`;

const Section = styled.div`
  display: flex;
  color: #757575;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`;

const SectionTitle = styled.h1`
  font-size: 0.8rem;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 5px;
  justify-content: space-between;
  height: 10px;
`;

const Key = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
`;

const Value = styled.p`
  font-size: 0.7rem;
`;
