import React from "react";
import { details } from "../data/Skill";
import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";

export default function Skill() {
  return (
    <div>
      <section id="skill">
        <div id="skillDiv">
          <div className="skill-content">
            <div className="skillTitle title">{details.title}</div>
            <div className="skillDesc desc">
              {details.desc.map((descr) => (
                <div>{descr}</div>
              ))}
            </div>
          </div>
          <div className="skillChart">
            <BarChart width={400} height={400} data={details.skills}>
              <XAxis dataKey="skill" hide />
              <YAxis />
              <Bar dataKey="lvl" fill="#d98e20">
                <LabelList
                  dataKey="skill"
                  position="inside"
                  angle="-90"
                  fill="#ddd"
                />
              </Bar>
            </BarChart>
          </div>
        </div>
      </section>
    </div>
  );
}
