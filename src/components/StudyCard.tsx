import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import IStudy from "../interfaces/IStudy";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function StudyCard(props: IStudy) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
      <p className="mb-1 text-sm font-normal leading-none text-gray-400">{`${props.startYear} - ${props.endYear}`}</p>
      <p className="text-lg font-semibold text-gray-900">{props.title}</p>
      <a
        href={props.localisationLink}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLocationDot} size="sm" /> {props.localisation}
      </a>
      <p>
        {props.desc ? (
          props.desc.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))
        ) : (
          <></>
        )}
      </p>
    </li>
  );
}
