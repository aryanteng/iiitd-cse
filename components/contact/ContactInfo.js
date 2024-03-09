function ContactInfo({ phone, email, phonedept, emaildept, fax }) {
  const contactDetails = [
    { label: 'Phone(HoD):', value: phone },
    { label: 'Email(HoD):', value: email },
    { label: 'Phone(Department):', value: phonedept },
    { label: 'Email(Department):', value: emaildept },
    { label: 'Fax:', value: fax },
  ];

  return (
    <div className="flex flex-col gap-2 text-primary-dark">
      <div className="body-large font-bold text-primary-dark">Contact</div>
      {contactDetails.map((detail, index) => (
        <p key={index} className="body-small">
          {detail.label} {detail.value}
        </p>
      ))}
    </div>
  );
}
export default ContactInfo;
