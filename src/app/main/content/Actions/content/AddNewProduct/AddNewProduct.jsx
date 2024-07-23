import { memo, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent/ActionButtonComponent";
import ModalComponent from "app/shared-components/ModalComponent/ModalComponent";
import NewProduct from "./content/NewProduct";

function AddNewProduct() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ActionButtonComponent
        callback={handleOpen}
        label={<AddIcon />}
        customStyles={ActionButtonCss}
      />
      <ModalComponent open={open} handleClose={handleClose}>
        <NewProduct handleClose={handleClose} />
      </ModalComponent>
    </>
  );
}

export default memo(AddNewProduct);

const ActionButtonCss = `
  min-height: 60px!important;
  min-width: 50px!important;
  border-radius: 10px 0px 0px 10px!important;
`;
