import React from "react";
import "./Timeline.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CoronaSVG from "../../assets/svgs/corona";

const Timeline = () => {
  return (
    <div className="timeline">
      <h1 className="timeline__headline">Corona Timeline</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(152, 152, 236)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(152, 152, 236)" }}
          date="February 27, 2021"
          dateClassName={"timeline__headline__date"}
          iconStyle={{
            background: "rgb(24, 24, 94)",
            color: "#fff",
          }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">CNN</h3>
          <h4 className="vertical-timeline-element-subtitle">
            United States of America
          </h4>
          <p>
            The FDA grants emergency use authorization to Johnson & Johnson's
            Covid-19 vaccine, the first single dose Covid-19 vaccine available
            in the US.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 22, 2021"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">CNN</h3>
          <h4 className="vertical-timeline-element-subtitle">
            United States of America
          </h4>
          <p>
            The death toll from Covid-19 exceeds 500,000 in the United States.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 7, 2020"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">
            The New York Times
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Brazil’s president tested positive.
          </h4>
          <p>
            President Jair Bolsonaro of Brazil disclosed on July 7 that he had
            been infected with the virus, saying that he was tested after
            experiencing fatigue, muscle pain and a fever. The news came after
            months of denying the seriousness of the pandemic and brushing aside
            protective measures, and after more than 65,000 Brazilians had died.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2, 2020"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">
            The New York Times
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The U.K. approved Pfizer’s coronavirus vaccine.
          </h4>
          <p>
            Britain gave emergency authorization on Dec. 2 to Pfizer’s
            coronavirus vaccine, leaping ahead of the United States to become
            the first Western country to allow mass inoculations.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 8, 2020"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">
            The New York Times
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The U.S. surpassed 10 million infections.
          </h4>
          <p>
            The United States reached 10 million coronavirus cases on Nov. 8,
            with the last million added in 10 days time. The grim benchmark
            arrived as the country struggled to contain outbreaks in the third
            and most widespread wave of infection since the pandemic began.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 23, 2020"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">
            The New York Times
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Italy saw a major surge in cases.
          </h4>
          <p>
            Europe faced its first major outbreak as the number of reported
            cases in Italy grew from fewer than five to more than 150. In the
            Lombardy region, officials locked down 10 towns after a cluster of
            cases suddenly emerged in Codogno, southeast of Milan. Schools
            closed and sporting and cultural events were canceled.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Januar 31, 2020"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">
            The New York Times
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The Trump administration restricted travel from China
          </h4>
          <p>
            The Trump administration suspended entry into the United States by
            any foreign nationals who had traveled to China in the past 14 days,
            excluding the immediate family members of American citizens or
            permanent residents. By this date, 213 people had died and nearly
            9,800 had been infected worldwide.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 9, 2020"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">BBC</h3>
          <h4 className="vertical-timeline-element-subtitle">China</h4>
          <p>
            On 11 January, China reported its first confirmed death from the
            virus - a 61-year-old male resident of the city. Chinese scientists
            identified the illness as a type of coronavirus, which cause
            different diseases from the common cold to more severe ones like
            Sars (severe acute respiratory syndrome).
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
