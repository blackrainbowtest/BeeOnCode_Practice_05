import { memo } from "react";
import AccordionComponent from "app/shared-components/AccordionComponent";
import { Box } from "@mui/material";
import styled from "styled-components";
import ProductGoldForm from "./ProductGoldForm";

function ProductGold({ props }) {
  const { productData, setProductData } = props;

  const header = (
    <HeaderContainer>
      <svg
        width='24'
        height='18'
        viewBox='0 0 24 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M23.9823 17.353L22.3823 10.853C22.3571 10.7508 22.3064 10.6613 22.2376 10.5978C22.1688 10.5343 22.0855 10.5 22 10.5H14.3628L18.4872 5.16022C18.6918 5.56028 18.8003 6.02522 18.8 6.5C18.8 6.63261 18.8421 6.75979 18.9171 6.85355C18.9922 6.94732 19.0939 7 19.2 7C19.3061 7 19.4078 6.94732 19.4828 6.85355C19.5578 6.75979 19.6 6.63261 19.6 6.5C19.6006 5.83719 19.8115 5.20175 20.1864 4.73307C20.5614 4.26439 21.0697 4.00076 21.6 4C21.7061 4 21.8078 3.94732 21.8828 3.85355C21.9578 3.75979 22 3.63261 22 3.5C22 3.36739 21.9578 3.24021 21.8828 3.14645C21.8078 3.05268 21.7061 3 21.6 3C21.0697 2.99924 20.5614 2.73561 20.1864 2.26693C19.8115 1.79825 19.6006 1.16281 19.6 0.5C19.6 0.367392 19.5578 0.240215 19.4828 0.146447C19.4078 0.0526785 19.3061 0 19.2 0C19.0939 0 18.9922 0.0526785 18.9171 0.146447C18.8421 0.240215 18.8 0.367392 18.8 0.5C18.8003 0.968039 18.6949 1.42667 18.4958 1.82307L15.3655 0.0447998C15.3135 0.0155298 15.257 0.000564302 15.2 0.000915527V0H10.4C10.2939 3.67393e-06 10.1922 0.0526717 10.1171 0.146423L6.3322 4.87761C6.11521 4.4694 5.99964 3.9901 6.00001 3.5C6.00001 3.36739 5.95787 3.24021 5.88285 3.14645C5.80784 3.05268 5.7061 3 5.60001 3C5.49392 3 5.39218 3.05268 5.31717 3.14645C5.24215 3.24021 5.20001 3.36739 5.20001 3.5C5.1994 4.16281 4.98849 4.79825 4.61355 5.26693C4.23861 5.73561 3.73026 5.99924 3.20001 6C3.09393 6 2.99218 6.05268 2.91717 6.14645C2.84216 6.24021 2.80001 6.36739 2.80001 6.5C2.80001 6.63261 2.84216 6.75979 2.91717 6.85355C2.99218 6.94732 3.09393 7 3.20001 7C3.59209 6.99954 3.97553 7.14401 4.3021 7.41524L1.71715 10.6464L1.71732 10.6466C1.67112 10.7042 1.63691 10.775 1.61769 10.853L0.0176923 17.353C-0.00071877 17.4278 -0.00483113 17.5069 0.0056861 17.584C0.0162033 17.6612 0.0410565 17.7341 0.0782463 17.7971C0.115436 17.86 0.163924 17.9112 0.21981 17.9464C0.275697 17.9816 0.33742 18 0.400017 18H23.6C23.6626 18 23.7243 17.9816 23.7802 17.9464C23.8361 17.9112 23.8846 17.86 23.9218 17.7971C23.9589 17.7341 23.9838 17.6612 23.9943 17.584C24.0048 17.5069 24.0007 17.4278 23.9823 17.353ZM16.6584 11.5L15.3046 17H9.34219L13.5904 11.5H16.6584ZM19.2 2.30127C19.437 2.79232 19.7661 3.20377 20.159 3.5C19.7661 3.79623 19.437 4.20768 19.2 4.69873C18.963 4.20768 18.6338 3.79623 18.241 3.5C18.6338 3.20377 18.963 2.79232 19.2 2.30127ZM17.9025 2.58444C17.5758 2.85588 17.1922 3.00047 16.8 3C16.6939 3 16.5922 3.05268 16.5171 3.14645C16.4421 3.24021 16.4 3.36739 16.4 3.5C16.4 3.63261 16.4421 3.75979 16.5171 3.85355C16.5922 3.94732 16.6939 4 16.8 4C17.2042 3.99952 17.5989 4.15303 17.9315 4.44006L8.58301 16.5432L7.25316 11.1407L15.2869 1.09857L17.9025 2.58444ZM10.5657 1H14.2343L6.63428 10.5H2.96574L4.86782 8.12239C5.0848 8.5306 5.20038 9.0099 5.20001 9.5C5.20001 9.63261 5.24215 9.75979 5.31717 9.85355C5.39218 9.94732 5.49392 10 5.60001 10C5.7061 10 5.80784 9.94732 5.88285 9.85355C5.95787 9.75979 6.00001 9.63261 6.00001 9.5C6.00062 8.83719 6.21152 8.20175 6.58646 7.73307C6.9614 7.26439 7.46976 7.00076 8.00001 7C8.10609 7 8.20783 6.94732 8.28285 6.85355C8.35786 6.75979 8.40001 6.63261 8.40001 6.5C8.40001 6.36739 8.35786 6.24021 8.28285 6.14645C8.20783 6.05268 8.10609 6 8.00001 6C7.60792 6.00047 7.22448 5.856 6.89792 5.58476L10.5657 1ZM5.60001 5.30127C5.83699 5.79232 6.16615 6.20377 6.55899 6.5C6.16615 6.79623 5.83699 7.20768 5.60001 7.69873C5.36303 7.20768 5.03387 6.79623 4.64103 6.5C5.03387 6.20377 5.36303 5.79232 5.60001 5.30127ZM0.941616 17L2.29542 11.5H6.5046L7.85841 17H0.941616ZM16.1416 17L17.4954 11.5H21.7046L23.0584 17H16.1416Z'
          fill='#2E2E2E'
        />
        <path d='M12.0004 2H10.4004V3H12.0004V2Z' fill='#2E2E2E' />
        <path d='M10.8002 3.5H9.2002V4.5H10.8002V3.5Z' fill='#2E2E2E' />
      </svg>
      Gold
    </HeaderContainer>
  );
  const content = (
    <ContentContainer>
      {productData.golds.map((gold, index) => {
        return (
          <ProductGoldForm
            key={index}
            gold={gold}
            index={index}
            canDelete={productData.golds.length === 1}
            addNew={productData.golds.length === index + 1}
            callback={setProductData}
          />
        );
      })}
    </ContentContainer>
  );
  return <AccordionComponent header={header} content={content} />;
}

export default memo(ProductGold);

const HeaderContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  gap: "10px",
}));

const ContentContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "10px",
}));
