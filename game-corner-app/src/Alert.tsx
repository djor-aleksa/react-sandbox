import { ReactNode } from "react";

// special name of the prop - children
interface Props {
  children: ReactNode;
  onCloseClicked: () => void;
}

const Alert = ({ children, onCloseClicked }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseClicked}
      ></button>
    </div>
  );
};

export default Alert;
