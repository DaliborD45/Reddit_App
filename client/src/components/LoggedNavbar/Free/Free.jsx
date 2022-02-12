import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
const Free = () => {
  return (
    <section className="my-auto ml-2">
      <div className="w-20 bg-yellow-300 h-10 rounded-full flex hover:opacity-90" onClick={()=>alert("here is my metamask addres so you can support me <3: 0xb1Dd9482d6f7FA76c0379B74bA82a4f602059961")}>
        <FontAwesomeIcon icon={faMoneyBillAlt} className="mt-3 ml-3" />
        <p className="pt-1.5 pl-1 ">Free</p>
      </div>
    </section>
  );
};

export default Free;
