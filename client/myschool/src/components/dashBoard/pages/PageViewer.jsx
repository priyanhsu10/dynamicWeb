import React from "react";
import Viewer from "../../common/Viewer";
import { useNavigate, useLocation } from "react-router-dom";
const PageViewer = () => {
  const loc = useLocation();
  const navigate = useNavigate();
  console.log(loc);
  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}>back</button>
      </div>
      <Viewer value={loc.state}></Viewer>
    </div>
  );
};

export default PageViewer;
