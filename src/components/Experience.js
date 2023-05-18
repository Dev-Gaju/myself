import React from "react";

const industry_experience = [
  {
    title: "Artificial Intelligence Engineer",
    date: "Feb 2022 - Present",
    organization: "AInoviQ",
    todo_list: ["Data mining, cleaning, processing", "Developing a model."],
  },
];

const research_experience = [
  {
    title: "Research Assistant",
    date: "Feb 2020 - Dec 2021",
    organization: "Artificial Intelligence and Cybernetics Lab",
    todo_list: [
      "Remote sensing and statistical data collection, cleaning and processing.",
      "Managing gps devices and undertake gps data collection and processing.",
      "Develop and manage spatial database.",
      "Infrastructure categorization from remote sensing imagery.",
      "Explainability and interpretability of neural networks.",
      "Cleaning, georeferencing, maintaining datasets using ArcGIS, ArcMap and QGis platform.",
    ],
  },
  {
    title: "Research Assistant",
    date: "July 2018 - Jan 2020",
    organization: "Independent University, Bangladesh",
    todo_list: [
      "Investigated methods to interpret deep learning models",
      "Improved deep learning models for semantic segmentation of satellite imagery",
      "Developed machine learning algorithms to model gis data",
      "Solve class imbalance problem in image dataset",
      "Develop loss function for image segmentation",
      "Analyze and visualize methods of land use/land cover classification and segmentation",
      "Investigate deep learning models boundary segmentation.",
      "Investigate data augmentation methods for satellite images.",
    ],
  },
];

const Experience = () => {
  const industry = industry_experience.map((exp, id) => {
    return (
      <div className="font-poppins block mb-6" key={id}>
        <span className="block text-[#3d4346] font-poppins text-base font-medium capitalize tracking-wider">
          {exp.title}
        </span>
        <code className="block text-[#3d4346] text-sm">{exp.date}</code>
        <span className="block text-[#3d434680] text-sm mb-2">
          {exp.organization}
        </span>
        <ul className="text-[#3d4346] text-sm font-poppins list-inside leading-7">
          {exp.todo_list.map((todo, ind) => {
            return (<li key={ind} className="list-bullet">{todo}</li>);
          })}
        </ul>
      </div>
    );
  });

  const research = research_experience.map((exp, id) => {
    return (
      <div className="font-poppins block mb-6" key={id}>
        <span className="block text-[#3d4346] font-poppins text-base font-medium capitalize tracking-wider">
          {exp.title}
        </span>
        <code className="block text-[#3d4346] text-sm">{exp.date}</code>
        <span className="block text-[#3d434680] text-sm mb-2">
          {exp.organization}
        </span>
        <ul className="text-[#3d4346] text-sm font-poppins list-inside leading-7">
          {exp.todo_list.map((todo, ind) => {
            return (<li key={ind} className="list-bullet">{todo}</li>);
          })}
        </ul>
      </div>
    );
  });

  return (
    <div className="mb-8">
      <h1 className="text-[#3d4346] font-light text-3xl font-poppins leading-5 break-words mb-8">Publications</h1>
      <div>
        <div className="mb-8">
          <h1 className="text-[#3d4346] font-light text-2xl font-poppins break-words mb-2">Industry</h1>
          <div className="mb-2">{industry}</div>
        </div>
        <div className="mb-8">
          <h1 className="text-[#3d4346] font-light text-2xl font-poppins break-words mb-2">Research</h1>
          <div className="mb-2">{research}</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
