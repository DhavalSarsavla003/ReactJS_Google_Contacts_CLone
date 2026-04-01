import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import { TopBar } from "../components/TopBar";
import { ContactForm } from "../components/ContactForm";
import { Toast } from "../components/Toast";
import { fullName } from "../utils/utils.js";

export function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getContact, updateContact } = useContacts();
  const [search, setSearch] = useState("");
  const contact = getContact(id);
  if (!contact) {
    navigate("/contacts");
    return null;
  }
  return (
    <div>
      <TopBar search={search} onSearch={setSearch} />
      <ContactForm
        title="Edit Contact"
        subtitle={`Editing ${fullName(contact)}`}
        initial={contact}
        onSubmit={data => {
          updateContact(contact.id, data);
          navigate("/contacts");
        }}
        onCancel={() => navigate("/contacts")}
      />
      <Toast />
    </div>
  );
}
