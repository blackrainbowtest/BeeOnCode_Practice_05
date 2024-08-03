import { memo, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent/ActionButtonComponent";
import ModalComponent from "app/shared-components/ModalComponent/ModalComponent";
import NewProduct from "./content/NewProduct";

import { css } from "styled-components";
import { useDispatch } from 'react-redux';
import { resetNewData } from 'features/Product/ProductSlice';

function AddNewProduct() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    dispatch(resetNewData())
    setOpen(false)
  };
  return (
    <>
      <ActionButtonComponent
        callback={handleOpen}
        label={<AddIcon />}
        customStyles={ActionButtonStyle}
      />
      <ModalComponent open={open} handleClose={handleClose}>
        <NewProduct handleClose={handleClose} />
      </ModalComponent>
    </>
  );
}

export default memo(AddNewProduct);

const ActionButtonStyle = ({ theme }) => css`
  min-height: 60px!important;
  min-width: 50px!important;
  border-radius: 10px 0px 0px 10px!important;
`;
