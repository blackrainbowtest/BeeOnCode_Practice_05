import { memo, useEffect, useRef, useState } from "react";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import styled from "styled-components";
import TitleComponent from "./content/TitleComponent/TitleComponent";
import ContentComponent from "./content/ContentComponent/ContentComponent";
import ActionComponent from "./content/ActionComponent/ActionComponent";

const PopupBody = styled("div")(
  ({ theme }) => `
    width: 300px;
    min-height: 360px;
    padding: 12px 20px;
    margin-top: 8px;
    border-radius: 5px;
    background: ${theme.palette.background.default};
    box-shadow: ${theme.palette.shadow.default};
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
  `
);

function PopupComponent({ id, open, anchor, placement = "bottom-end", close }) {
  const [gender, setGender] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      close();
    }
  };

  const handleActionPopup = () => {
    console.log({
      name: categoryName,
      image: categoryImage,
      gender: gender,
    });
    if (categoryName.trim() && categoryImage) {
      close();
    }
  };

  return (
    <BasePopup
      ref={popupRef}
      id={id}
      open={open}
      anchor={anchor}
      placement={placement}
    >
      <PopupBody>
        <TitleComponent close={close} />
        <ContentComponent
          props={{
            gender,
            setGender,
            categoryName,
            setCategoryName,
            categoryImage,
            setCategoryImage,
          }}
        />
        <ActionComponent callback={handleActionPopup} />
      </PopupBody>
    </BasePopup>
  );
}

export default memo(PopupComponent);
