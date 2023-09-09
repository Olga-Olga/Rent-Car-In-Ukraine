import styled from 'styled-components';

export const StyledGreyBox = styled.div`
  display: inline-block;
  padding: 7px 14px;
  align-items: center;
  border-radius: 35px;
  background: #f9f9f9;
  width: auto;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const StyledTitle = styled.h2`
  color: #6150f7;
  -webkit-text-stroke: 0.2px white;
  margin-bottom: 5px;
`;

export const StyledCarModel = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const StyledConditionBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
`;

export const StyledBlueBumber = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const StyledModalWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  position: relative;
  width: 541px;
  height: 100vh;
  max-height: 752px;
  background: white;
  border-radius: 24px;
  flex-shrink: 0;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background: #666666;
    border-radius: 10px;
  }
  .scroll-container::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.blue};
  }
`;

export const StyledTel = styled.a`
  display: inline-block;
  padding: 12px 50px;
  text-decoration: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.blue};
  width: fit-content;
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-top: 24px;
`;

export const StyledX = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 14px;
  right: 14px;
  stroke: black;
`;

export const StyledImgModal = styled.div`
  height: 268px;
  width: 100%;
  border-radius: 14px;
  background: url(${props => props.$imageUrl}), lightgray 50% / cover no-repeat;
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
`;

export const StyledImgTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const StyledFigure = styled.figure`
  margin: 0px;
`;

export const StyledCarGrey = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const StyledDescription = styled.div`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  padding-top: 14px;
  /* padding-bottom: 24px; */
`;

export const StyledTitleModal = styled.h3`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin: 0px;
  padding-bottom: 8px;
  padding-top: 24px;
`;
