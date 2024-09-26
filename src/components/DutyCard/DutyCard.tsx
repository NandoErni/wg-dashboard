import { useState } from "react";
import { SubTitle, Name, Card, Icon } from "./Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import DutyModal from "./DutyModal";
import { Duty } from "../../data/Duties";
import { useTheme } from "styled-components";

type DutyCardProps = {
  name: string;
  duty: Duty;
};

const DutyCard = (props: DutyCardProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme.colors.modalBackground,
      borderRadius: "20px",
      border: "0px",
      height: "80vh",
      width: "40vw",
    },
  };

  Modal.setAppElement("#root");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Card onClick={openModal}>
        <Icon>
          <FontAwesomeIcon icon={props.duty.icon} />
        </Icon>
        <SubTitle>{props.duty.name}</SubTitle>
        <Name>{props.name}</Name>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="modal"
        closeTimeoutMS={500}
      >
        <DutyModal
          closeModal={closeModal}
          duty={props.duty}
          hasDetails={props.name !== "Lauro"}
        />
      </Modal>
    </>
  );
};

export default DutyCard;
