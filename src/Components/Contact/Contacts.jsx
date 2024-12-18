import React from "react";
import ContactsStyled from "./Contacts.style";
import ContactCard from "./ContactCard";

export const ContactsPage = () => {
    return(
<ContactsStyled>
<div className="title">CONTACTS</div>
<ContactCard />
</ContactsStyled>
    );

}