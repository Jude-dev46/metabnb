import React, { useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

function ModalExampleCloseIcon(props) {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={props.onClick}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Archive Old Messages" />
      <Modal.Content>
        <p>Choose your preferred Wallet:</p>
        <div></div>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleCloseIcon;
