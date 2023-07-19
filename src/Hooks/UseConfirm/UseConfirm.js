export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return; // onCancel은 존재하지 않아도 상관없으니, 있는데 function아니면 return
  }
  const confirmAction = () => {
    if (confirm(message)) {
      return onConfirm(); // message에 대해 confirm 한다면.
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
export default function UseConfirm() {
  const deleteWorld = () => {
    console.log("deleting the world...");
  };
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
