import { ReactNode } from "react";

interface AlertProps {
      children : ReactNode;
      onClose : () => void;
}

function Alert({ children, onClose } : AlertProps) {
      return (
            <>
              <div className="alert alert-primary alert-dismissible" role="alert">
                  {children}
                  <button type="button" className="btn-close" onClick={onClose}></button>
              </div>    
            </>
      );
}

export default Alert;
