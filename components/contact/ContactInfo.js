function ContactInfo({ phone, email, phonedept, emaildept, fax }) {
  const contactDetails = [
    { label: 'Phone(HoD):', value: phone },
    { label: 'Email(HoD):', value: email },
    { label: 'Phone(Department):', value: phonedept },
    { label: 'Email(Department):', value: emaildept },
    { label: 'Fax:', value: fax },
  ];

  return (
    <div className="flex flex-col gap-2 p-4 font-body text-primary-dark">
      <h3 className="heading-2">Contact</h3>
      {contactDetails.map((detail, index) => (
        <p key={index} className="body-normal font-body">
          {detail.label} {detail.value}
        </p>
      ))}
    </div>
  );
}
export default ContactInfo;
