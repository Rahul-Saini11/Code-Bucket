import Modal from "./UI/Modal";
import classes from "./Files.module.css";
const Files = () => {
  return (
    <Modal>
      <h3 className={classes["file-data"]}>No File Exist</h3>
    </Modal>
  );
};

export default Files;
