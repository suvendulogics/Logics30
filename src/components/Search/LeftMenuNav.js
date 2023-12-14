import React from 'react';
import { TreeView } from "@progress/kendo-react-treeview";
import navData from "../Basic/Nav";
import '@progress/kendo-theme-default/dist/all.css'

const items = [
    {
        text: "Home",
        expanded: true,
        items: [],
    },
      {
        text: "Cases",
        expanded: true,
        items: [
          {
            text: "New TR Cases",
          },
          {
            text: "New SL Case",
          },
        ],
      }

  ];

  const LeftMenuNav = () => {
    return <TreeView data={items} />;
  };
  export default LeftMenuNav;