import { styled } from 'styled-components';

export const StyledDiv = styled.div`
  padding: 115px 143px 150px 143px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  display: none;
`;

export const StyledFilterBlock = styled.div`
  display: flex;
  gap: 18px;
`;

export const StyledOl = styled.ol`
  display: flex;
  align-items: flex-start;
  gap: 29px;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledItem = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-shrink: 0;
  overflow-x: hidden;
  position: relative;
`;

export const StyledImg = styled.img`
  height: 268px;
  width: 100%;
  object-fit: fit;
  border-radius: 14px;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  url(${props => props.$imageUrl}), lightgray 50% / cover no-repeat;
  /* url(<>), lightgray 50% / cover no-repeat; */
`;

export const StyledImgDiv = styled.div`
  height: 268px;
  width: 100%;
  border-radius: 14px;
`;

export const StyledTitleCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const StyledTitleFirstPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
`;

export const StyledCarModel = styled.div`
  color: #3470ff;
`;

export const StyledCarDescription = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledLoadMoreBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border: 0;
  &:hover {
    background: #0b44cd;
  }
`;

export const StyledLoadMoreLink = styled.button`
  border: 0;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: white;
  &:hover {
    color: #0b44cd;
  }
`;

export const StyledSelect = styled.select`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
export const StyledSelectFrom = styled.select``;
export const StyledSelectTo = styled.select``;

export const StyledDivLable = styled.div`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  display: flex;
  flex-direction: column;
`;

export const StyledHart = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 14px;
  right: 14px;
`;

export const Favorite = styled.div`
  fill: #9747ff;
  stroke: #9747ff;
`;

export const NotFavorite = styled.div`
  stroke: #ffffffcc;
  fill: transparent;
`;
