// components/contact/ContactInfo.js
function ContactInfo({ phone, email, phonedept, emaildept, fax }) {
  return (
    <div className="p-4 font-body text-primary-dark">
      <h3 className="text-3xl font-bold">Contact</h3>
      <p className="text-xl mt-2">Phone(HoD): {phone}</p>
      <p className="text-xl mt-2">Email(HoD): {email}</p>
      <p className="text-xl mt-2">Phone(Department): {phonedept}</p>
      <p className="text-xl mt-2">Email(Department): {emaildept}</p>
      <p className="text-xl mt-2">Fax: {fax}</p>
    </div>
  );
}
export default ContactInfo;
