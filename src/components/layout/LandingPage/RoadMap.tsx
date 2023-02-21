import React from 'react';
import styled from 'styled-components';
import { Card } from '../../common/Card';
import { AppContainer } from '../AppContainer';
import { SectionHeader } from './SectionHeader';

const RoadMapNumber = styled.div.attrs(() => ({
  className: `relative flex justify-center items-center mr-auto`,
}))`
  width: 4rem;
  height: 4rem;

  .background-span {
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.colors.secondaryRed};
    transform: rotate(45deg);
  }
  .number-span {
    font-size: 1.5rem;
    font-weight: 700;
    transform: rotate(0);
    color: ${(props) => props.theme.colors.primaryRed};
  }
`;
interface IRoadMapBullet {
  completed?: boolean;
}
const RoadMapBullet = styled.i.attrs<IRoadMapBullet>(() => ({
  className: `las la-check font-bold mt-1`,
}))<IRoadMapBullet>`
  border-radius: 99px;
  background: ${(props) =>
    props.completed ? props.theme.colors.secondaryBlue : '#ffffff20'};
  color: ${(props) =>
    props.completed ? props.theme.colors.primaryBlue : '#ffffff'};
  padding: 5px;
  height: fit-content;
`;

const RoadMapItem = styled.h5.attrs(() => ({
  className: `text-lg`,
}))``;

export const RoadMap = () => {
  return (
    <div className="w-full py-20" id="roadmap">
      <AppContainer>
        <div>
          <SectionHeader>RoadMap</SectionHeader>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card data-aos="fade-right" data-aos-delay="300" className="px-5">
            <RoadMapNumber>
              <span className="background-span"></span>
              <span className="number-span">1</span>
            </RoadMapNumber>
            <h5 className="font-bold app-font text-2xl mt-8">Q1 - Q2 2022</h5>
            <div className="space-y-4 mt-8">
              <div className="flex space-x-3">
                <RoadMapBullet completed></RoadMapBullet>
                <RoadMapItem>Launch Site</RoadMapItem>
              </div>
              <div className="flex space-x-3">
                <RoadMapBullet completed></RoadMapBullet>
                <RoadMapItem>Create and release token</RoadMapItem>
              </div>
              <div className="flex space-x-3">
                <RoadMapBullet completed></RoadMapBullet>
                <RoadMapItem>Release whitepaper</RoadMapItem>
              </div>
              <div className="flex space-x-3">
                <RoadMapBullet completed></RoadMapBullet>
                <RoadMapItem>Build community and members</RoadMapItem>
              </div>
            </div>
          </Card>
          <Card data-aos="fade-right" data-aos-delay="500" className="px-5">
            <RoadMapNumber>
              <span className="background-span"></span>
              <span className="number-span">2</span>
            </RoadMapNumber>
            <h5 className="font-bold app-font text-2xl mt-8">Q3 2022</h5>
            <div className="space-y-4 mt-8">
              <div className="flex space-x-3">
                <RoadMapBullet completed></RoadMapBullet>
                <RoadMapItem>Launch Site</RoadMapItem>
              </div>
              <div className="flex space-x-3">
                <RoadMapBullet completed></RoadMapBullet>
                <RoadMapItem>Create and release token</RoadMapItem>
              </div>
              <div className="flex space-x-3">
                <RoadMapBullet></RoadMapBullet>
                <RoadMapItem>Release whitepaper</RoadMapItem>
              </div>
              <div className="flex space-x-3">
                <RoadMapBullet></RoadMapBullet>
                <RoadMapItem>Build community and members</RoadMapItem>
              </div>
            </div>
          </Card>
          <Card data-aos="fade-right" data-aos-delay="700" className="px-5">
            <RoadMapNumber>
              <span className="background-span"></span>
              <span className="number-span">3</span>
            </RoadMapNumber>
            <h5 className="font-bold app-font text-2xl mt-8">Q4 2022</h5>
            <div className="space-y-4 mt-8">
              <div className="flex space-x-3">
                <RoadMapBullet></RoadMapBullet>
                <RoadMapItem>Launch Site</RoadMapItem>
              </div>
              <div className="flex space-x-3">
                <RoadMapBullet></RoadMapBullet>
                <RoadMapItem>Create and release token</RoadMapItem>
              </div>
              <div className="flex space-x-3">
                <RoadMapBullet></RoadMapBullet>
                <RoadMapItem>Release whitepaper</RoadMapItem>
              </div>
              <div className="flex space-x-3">
                <RoadMapBullet></RoadMapBullet>
                <RoadMapItem>Build community and members</RoadMapItem>
              </div>
            </div>
          </Card>
        </div>
      </AppContainer>
    </div>
  );
};
