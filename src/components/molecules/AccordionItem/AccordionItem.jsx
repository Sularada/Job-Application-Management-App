import { useState } from "react";
import ApplicationDetails from "../ApplicationDetail/ApplicationDetails";

const AccordionItem = ({
  application,
  user,
  updateAppStatus,
  sonrakiAsama,
}) => {
  const [app, setApp] = useState(application);
  const universities = {
    bogazici: "Boğaziçi University",
    gsu: "Galatasaray University",
    odtu: "Middle East Technical University (ODTÜ)",
    itu: "Istanbul Technical University (İTÜ)",
    hacettepe: "Hacettepe University",
    bilkent: "Bilkent University",
  };
  return (
    <div className="accordion-item border rounded shadow-sm mb-3" key={app.id}>
      <h2 className="accordion-header" id={`heading${app.id}`}>
        <button
          className="accordion-button bg-light text-dark fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${app.id}`}
          aria-expanded="true"
          aria-controls={`collapse${app.id}`}
        >
          {app.personal.fullname} - {universities[app.education.university]} -
          {app.experience.position}
        </button>
      </h2>
      <div
        id={`collapse${app.id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${app.id}`}
        data-bs-parent="#applicationsAccordion"
      >
        <ApplicationDetails
          app={app}
          setApp={setApp}
          user={user}
          updateAppStatus={updateAppStatus}
          sonrakiAsama={sonrakiAsama}
        />
      </div>
    </div>
  );
};

export default AccordionItem;
