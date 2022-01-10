import * as Constants from "./constants";

const OptionsByRover = (type) => {
  if (type === Constants.CURIOSITY) {
    return [
      {
        name: "Front Hazard Avoidance Camera",
        abbreviation: "FHAZ",
      },
      {
        name: "Rear Hazard Avoidance Camera",
        abbreviation: "RHAZ",
      },
      {
        name: "Mast Camera",
        abbreviation: "MAST",
      },
      {
        name: "Chemistry and Camera Complex",
        abbreviation: "CHEMCAM",
      },
      {
        name: "Mars Hand Lens Imager",
        abbreviation: "MAHLI",
      },
      {
        name: "Mars Descent Imager",
        abbreviation: "MARDI",
      },
      {
        name: "Navigation Camera",
        abbreviation: "NAVCAM",
      },
    ];
  }
  if (type === Constants.OPPORTUNITY || type === Constants.SPIRIT) {
    return [
      {
        name: "Front Hazard Avoidance Camera",
        abbreviation: "FHAZ",
      },
      {
        name: "Rear Hazard Avoidance Camera",
        abbreviation: "RHAZ",
      },
      {
        name: "Navigation Camera",
        abbreviation: "NAVCAM",
      },
      {
        name: "Panoramic Camera",
        abbreviation: "PANCAM",
      },
      {
        name: "Miniature Thermal Emission Spectrometer (Mini-TES)",
        abbreviation: "MINITES",
      },
    ];
  }
  return [];
};

export default OptionsByRover;
