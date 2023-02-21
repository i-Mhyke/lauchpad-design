import React, { useState } from 'react';
import { AppContainer } from '../AppContainer';
import janeDoe from '../../../assets/images/jane-doe.jpg';
import johnDoe from '../../../assets/images/john-doe.jpg';
import thomas from '../../../assets/images/thomas.jpg';
import bitcoin from '../../../assets/images/bitcoin.com.svg';
import cryptodotcom from '../../../assets/images/crypto.com.svg';
import cryptoslate from '../../../assets/images/cryptoslate.svg';
import investing from '../../../assets/images/investing.svg';
import { Card } from '../../common/Card';
import styled from 'styled-components';
import { SectionHeader } from './SectionHeader';

const PartnerCompanies = styled.a.attrs(() => ({
  className: `cursor-pointer`,
}))`
  img {
    transition: opacity 0.3s ease;
    opacity: 0.7;
    max-height: 70px;
    padding: 1rem;

    &:hover {
      opacity: 1;
    }
  }
`;

export const PartnersSection = () => {
  const [advisors] = useState([
    { image: janeDoe, name: 'Jane Doe' },
    { image: johnDoe, name: 'John Doe' },
    { image: thomas, name: 'Thomas Johnson' },
  ]);
  return (
    <div className="w-full py-20" id="partners">
      <AppContainer>
        <div className="pt-16">
          <SectionHeader>Our Partners & Advisors</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-20">
            {advisors.map((advisor, index) => (
              <Card
                data-aos="fade-right"
                data-aos-delay={(500 + index * 300).toString()}
                key={index}
                className="text-center"
              >
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="rounded-full w-48 h-48 mx-auto filter grayscale"
                />
                <h5 className="mt-5 font-bold text-xl">{advisor.name}</h5>
              </Card>
            ))}
          </div>
        </div>
        <div className="pt-16">
          <SectionHeader>Our Corporate Partners</SectionHeader>
          <div className="grid grid-cols-2 md:grid-cols-4 pt-14">
            <PartnerCompanies>
              <img
                data-aos="fade-right"
                data-aos-delay="500"
                src={bitcoin}
                alt="Bitcoin"
                className="filter grayscale"
              />
            </PartnerCompanies>
            <PartnerCompanies>
              <img
                data-aos="fade-right"
                data-aos-delay="600"
                src={investing}
                alt="Investing.com"
                className="filter grayscale"
              />
            </PartnerCompanies>
            <PartnerCompanies>
              <img
                data-aos="fade-right"
                data-aos-delay="700"
                src={cryptodotcom}
                alt="Crypto.com"
                className="filter grayscale"
              />
            </PartnerCompanies>
            <PartnerCompanies>
              <img
                data-aos="fade-right"
                data-aos-delay="800"
                src={cryptoslate}
                alt="CryptoSlate.com"
                className="filter grayscale"
              />
            </PartnerCompanies>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
