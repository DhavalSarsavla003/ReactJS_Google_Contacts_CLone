import { useState, createContext, useContext ,useEffect} from "react";
import { getData ,setData} from "../utils/GetAndSetData.js";
import {getRestore,setRestore} from '../utils/RestoreDelete.js';

const Ctx = createContext(null);

export function ContactsProvider({ children }) {
  const [toast, setToast] = useState(null);
  const [contacts, setContacts] = useState(getData());
  
  const showToast = (msg, action, cb) => {
    setToast({ msg, action, cb });
    setTimeout(() => setToast(null), 4000);
  };

  const addContact = (data) => {
    const id = Date.now();
    setContacts(prev => [...prev, { ...data, id }]);
    showToast("Contact added");
    return id;
  };

  const updateContact = (id, data) => { 
    setContacts(prev => prev.map((rec)=>{
      if(String(rec.id) === String(id)){
          return {...rec,...data};
      }else{
        return rec;
      }
    }));
    showToast("Action: Save Contact"); 
  };

  const [trash,setTrash] = useState(getRestore());

  const deleteContact = (id) => {
    const contactToDelete = contacts.find(c => String(c.id) === String(id));
    if (contactToDelete) {
      setContacts(prev => prev.filter(c => String(c.id) !== String(id)));
      setTrash(prev => [...prev, { ...contactToDelete, deletedAt: Date.now() }]);
      showToast("Contact moved to trash");
    }
  };

  useEffect(() => {
    setRestore(trash);
  }, [trash]);

  const toggleStar = (id) => { 
    setContacts(prev => prev.map(c=>String(c.id)===String(id)?{
      ...c,starred:!c.starred
    }:c
   ));
    showToast("Action : Toggle Star"); 
  };
  
  
  useEffect(() => {
    setData(contacts);
  },[contacts])

  const restoreContact = (id) => {
    const contactToRestore = trash.find(c => String(c.id) === String(id));
    if (contactToRestore) {
      setTrash(prev => prev.filter(c => String(c.id) !== String(id)));
      const { deletedAt, ...rest } = contactToRestore;
      setContacts(prev => [...prev, rest]);
      showToast("Contact restored");
    }
  };

  const delFromTrash = (id) => {
    setTrash(prev => prev.filter(c => String(c.id) !== String(id)));
    showToast("Deleted permanently");
  };

  const getContact = (id) => contacts.find(c => String(c.id) === String(id));

  return (
    <Ctx.Provider value={{
      contacts,
      trash,
      toast,
      setToast,
      addContact,
      updateContact,
      deleteContact,
      toggleStar,
      restoreContact,
      delFromTrash,
      getContact
    }}>
      {children}
    </Ctx.Provider>
  );
}

export const useContacts = () => useContext(Ctx);
