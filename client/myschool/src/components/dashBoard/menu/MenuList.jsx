import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenu } from "../../../services/dashboardService";

const MenuList = () => {
  const navigate = useNavigate();
  const [menuLIst, setMenuList] = useState([]);

  useEffect(() => {
    async function fechdata() {
      const data = await getMenu();
      console.log("menu list :", data);
      setMenuList(data);
    }
    fechdata();
  }, []);
  return (
    <div>
      <section>
        <h1>Menu</h1>
      </section>
      {/* <TextE2 /> */}
      <section></section>
    </div>
  );
};

export default MenuList;
