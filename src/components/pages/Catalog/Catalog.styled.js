import { styled } from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  display: none;
`;

export const StyledFilterBlock = styled.form`
  display: flex;
  gap: 18px;
  align-items: flex-end;
`;

export const StyledOl = styled.ol`
  display: flex;
  align-items: flex-start;
  gap: 29px;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1400px;
`;

export const StyledItem = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  overflow-x: hidden;
  position: relative;
`;

export const StyledImgDiv = styled.div`
  height: auto;
  width: 100%;
  border-radius: 14px;
`;

export const StyledImg = styled.div`
  aspect-ratio: 268 / 401;
  max-height: 268px;
  width: 100%;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(${props => props.$imageUrl}), lightgray 50% / cover no-repeat;
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
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
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const StyledTitleFirstPart = styled.div`
  align-items: center;
`;

export const StyledCarModel = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const StyledCarDescription = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  /* text-overflow: ellipsis; */
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
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.lightWhite};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border: 0;
  margin-top: 28px;
  &:hover {
    background: #0b44cd;
  }
`;

export const StyledSearchBtn = styled.button`
  padding: 14px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.lightWhite};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border: 0;
  display: inline-flex;
  align-items: flex-end;
  gap: 18px;
  &:hover {
    background: #0b44cd;
  }
`;

export const StyledSelected = styled.select`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
`;

export const StyledLoadMoreLink = styled.button`
  border: 0;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: white;
  padding-top: 100px;
  padding-bottom: 150px;

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
  color: ${({ theme }) => theme.colors.grey};
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
  fill: ${({ theme }) => theme.colors.perple};
  stroke: ${({ theme }) => theme.colors.perple};
`;

export const NotFavorite = styled.div`
  stroke: ${({ theme }) => theme.colors.light};
  fill: transparent;
`;
