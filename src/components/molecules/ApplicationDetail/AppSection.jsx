import React, { useEffect, useState } from "react";
import { getFormSchema } from "../../../../firebase/dbController";

const AppSection = ({ section, id }) => {
  const [sectionSchema, setSectionSchema] = useState();
  async function setSchema() {
    setSectionSchema(await getFormSchema(id));
  }
  useEffect(() => {
    setSchema();
  }, []);
  const universities = {
    bogazici: "Boğaziçi University",
    gsu: "Galatasaray University",
    odtu: "Middle East Technical University (ODTÜ)",
    itu: "Istanbul Technical University (İTÜ)",
    hacettepe: "Hacettepe University",
    bilkent: "Bilkent University",
  };
  return (
    sectionSchema && (
      <div className="col-lg-3">
        <h5 className="fw-bold text-secondary">{sectionSchema.title}</h5>
        {Object.entries(section).map(([key, value]) => (
          <p key={key}>
            <strong>{sectionSchema[`${key}`]}</strong>{" "}
            {key == "university"
              ? universities[value]
              : value == ""
              ? " - "
              : value}
          </p>
        ))}
      </div>
    )
  );
};

export default AppSection;
