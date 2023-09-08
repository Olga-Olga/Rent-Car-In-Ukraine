import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  StyledBlueBumber,
  StyledCarGrey,
  StyledCarModel,
  StyledConditionBlock,
  StyledDescription,
  StyledFigure,
  StyledGreyBox,
  StyledImgModal,
  StyledImgTitle,
  StyledModalWrapper,
  StyledTel,
  StyledTitleModal,
  StyledX,
} from './Modal.styled';
import { addCommasToNumber } from './assets/helperMethods';
import { SpriteSVG } from './assets/SpriteSVG';

const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ onClose, children }) => {
  const car = children.props.children;

  const handleEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleX = () => {
    onClose();
  };

  const conditionArr = car.rentalConditions.split('\n');
  const minimumAgeValue = conditionArr[0].match(/\d+/g).join('');

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  return createPortal(
    <div>
      <div className="overlay" onClick={handleBackDropClick}>
        <StyledModalWrapper>
          <StyledFigure>
            <StyledImgModal src={car.img} alt={car.model} />
            <StyledImgTitle>
              {car.make}
              <StyledCarModel>{car.model},</StyledCarModel>
              {car.year}
            </StyledImgTitle>
          </StyledFigure>

          <StyledX onClick={handleX}>
            <SpriteSVG name="icon-x" />
          </StyledX>

          <StyledCarGrey>
            {car.address.split(',')[1]} | {car.address.split(',')[2]} | Year:{' '}
            {car.year} | Type: {car.type}
          </StyledCarGrey>
          <StyledCarGrey>
            Fuel Consumption {car.fuelConsumption} | Engine Size:{' '}
            {car.engineSize}
          </StyledCarGrey>
          <StyledDescription>{car.description}</StyledDescription>
          <StyledTitleModal>Accessories and functionalities:</StyledTitleModal>
          {/* {car.accessories.map{item => <div>item</div>}} */}
          <StyledCarGrey>
            {car.accessories[0]} | {car.accessories[1]} | {car.accessories[2]}
          </StyledCarGrey>
          <StyledCarGrey>
            {car.functionalities[0]} | {car.functionalities[1]} |{' '}
            {car.functionalities[2]}
          </StyledCarGrey>
          <StyledTitleModal>Rental conditions:</StyledTitleModal>
          <StyledConditionBlock>
            <StyledGreyBox>
              Minimum age:{' '}
              <StyledBlueBumber>{minimumAgeValue}</StyledBlueBumber>{' '}
            </StyledGreyBox>
            <StyledGreyBox>{conditionArr[1]} </StyledGreyBox>
            <StyledGreyBox>{conditionArr[2]} </StyledGreyBox>
            <StyledGreyBox>
              Mileage:{' '}
              <StyledBlueBumber>
                {addCommasToNumber(car.mileage)}
              </StyledBlueBumber>{' '}
            </StyledGreyBox>
            <StyledGreyBox>
              Price:{' '}
              <StyledBlueBumber>
                {car.rentalPrice.match(/\d+/g)}$
              </StyledBlueBumber>
            </StyledGreyBox>
          </StyledConditionBlock>
          <StyledTel href="tel:+380730000000">Rental car</StyledTel>
        </StyledModalWrapper>
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
