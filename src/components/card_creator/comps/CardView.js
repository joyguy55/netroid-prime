import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function importAll(r) {
  let images = {};
  r.keys().map(item => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../../utils/images", false, /\.(png|jpe?g|svg)$/)
);

export const CardView = ({ card }) => {
  return (
    <div style={{ position: "relative" }}>
      <Name>{card.name}</Name>
      <Image id="" src={images[`${card.kind}_${card.faction}.png`]} />
    </div>
  );
};

CardView.propTypes = {
  card: PropTypes.object
};

const Image = styled.img`
  width: 312px;
  height: 444px;
  margin: 50px 100px;
`;

const Name = styled.div`
  position: absolute;
  top: 55px;
  left: 175px;
  font-size: 24px;
`;
