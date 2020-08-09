import React from "react";
import {SidebarRight} from "../home";
import ContactBody from "./ContactBody";

const Contacts = () => {
  return (
    <section id="page-3268"
             className="qw-mainsection qw-page-section qw-top30 post-3268 page type-page status-publish hentry">
      <div className="container  qw-bottom30">
        <div className="row">
          {/*========== Content col =========*/}
          <ContactBody />
          {/*========== Sidebar right col =========*/}
          <SidebarRight />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
