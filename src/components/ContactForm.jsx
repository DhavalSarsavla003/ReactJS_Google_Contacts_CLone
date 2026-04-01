import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MatField } from "./MatField";
import { IcoBack, IcoCheck, IcoPeople, IcoEmail, IcoPhone, IcoBrief, IcoMap, IcoTag, IcoNote } from "./Icons";

export function ContactForm({ initial = {}, onSubmit, onCancel, title, subtitle }) {
  const [f, setF] = useState({
    firstName: initial.firstName || "", lastName: initial.lastName || "",
    email: initial.email || "", phone: initial.phone || "",
    company: initial.company || "", jobTitle: initial.jobTitle || "",
    address: initial.address || "", label: initial.label || "Other", notes: initial.notes || ""
  });
  const [errs, setErrs] = useState({});
  
  const set = k => v => {
    setF(x => ({ ...x, [k]: v }));
    if(errs[k]) setErrs(e => ({ ...e, [k]: null }));
  };

  const validate = () => {
    const e = {};
    if(!f.firstName.trim()) e.firstName = "First name is required";
    if(!f.email.trim()) e.email = "Email is required";
    else if(!/\S+@\S+\.\S+/.test(f.email)) e.email = "Invalid email format";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if(validate()) onSubmit(f);
  };
  
  return (
    <div className="form-wrap">
      <div className="form-card">
        <div className="form-head">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Link to="/contacts" className="back-btn"><IcoBack /> Back</Link>
            <div className="form-badge">New Contact</div>
          </div>
        </div>

        <div className="form-body">
          <div className="form-sec">
            <div className="form-sec-lbl">Personal Information</div>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <MatField label="First Name" value={f.firstName} onChange={set("firstName")} required error={errs.firstName} icon={IcoPeople} />
              </div>
              <div className="col-12 col-md-6">
                <MatField label="Last Name" value={f.lastName} onChange={set("lastName")} icon={IcoPeople} />
              </div>
            </div>
            
            <div className="row g-3 mt-1">
              <div className="col-12 col-md-7">
                <MatField label="Email Address" type="email" value={f.email} onChange={set("email")} required error={errs.email} icon={IcoEmail} />
              </div>
              <div className="col-12 col-md-5">
                <MatField label="Phone Number" type="tel" value={f.phone} onChange={set("phone")} icon={IcoPhone} />
              </div>
            </div>
          </div>

          <div className="form-sec mt-4">
            <div className="form-sec-lbl">Work Details</div>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <MatField label="Company" value={f.company} onChange={set("company")} icon={IcoBrief} />
              </div>
              <div className="col-12 col-md-6">
                <MatField label="Job Title" value={f.jobTitle} onChange={set("jobTitle")} icon={IcoTag} />
              </div>
            </div>
          </div>

          <div className="form-sec mt-4">
            <div className="form-sec-lbl">Additional Details</div>
            <MatField label="Address" value={f.address} onChange={set("address")} textarea icon={IcoMap} />
            
            <div className="row g-3 mt-1">
               <div className="col-12 col-md-6">
                 <MatField label="Label" value={f.label} onChange={set("label")} options={["Work", "Friends", "Family", "Other"]} icon={IcoTag} />
               </div>
            </div>
            
            <MatField label="Notes" value={f.notes} onChange={set("notes")} textarea icon={IcoNote} />
          </div>
        </div>

        <div className="form-footer">
          <button className="btn-act" onClick={onCancel}>Cancel Changes</button>
          <button className="btn-act primary" onClick={handleSave}>
            <IcoCheck /> Save Contact
          </button>
        </div>
      </div>
    </div>
  );
}
