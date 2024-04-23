import React, { ReactNode, useState } from "react";
import styled from "styled-components";

interface ModalProps {
  open: boolean;
}

const Modal = styled.div<ModalProps>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #ffff;
  margin: auto;
  padding: 20px;
  width: 500px;
  border-radius: 20px;
`;

const TextMain = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const TextNormal = styled.p`
  font-size: 20px;
`;

const ButtonLayout = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: end;
`;

const Button = styled.p`
  padding: 10px 30px;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  width: max-content;
  &:hover {
    background: #018cff;
    color: #ffff;
    border: 1px solid #ffff;
  }
`;

export const ModalComponent: React.FC<{
  title?: string;
  message?: string;
  onClose: () => void;
}> = ({ title = "Warning", message = "Empty", onClose }) => {
  const [open, setOpen] = useState(true);
  return (
    <Modal open={open}>
      <ModalContent>
        <TextMain>{title}</TextMain>
        <div style={{ marginBottom: 20 }} />
        <TextNormal>{message}</TextNormal>
        <div style={{ marginBottom: 40 }} />
        <ButtonLayout>
          <Button
            onClick={() => {
              onClose && onClose();
              setOpen(false);
            }}
          >
            OK
          </Button>
        </ButtonLayout>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
