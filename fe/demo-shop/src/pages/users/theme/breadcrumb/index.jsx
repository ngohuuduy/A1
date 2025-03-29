import { memo } from "react";
import "./style.scss";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__text">
        <h2>ND SHOP</h2>
      </div>
    </div>
  );
};

export default memo(Breadcrumb);
