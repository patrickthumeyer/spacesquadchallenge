import React from "react";
import "./timeline.scss";
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
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          dateClassName={"timeline__headline__date"}
          iconStyle={{ background: "rgb(24, 24, 94)", color: "#fff" }}
          icon={<CoronaSVG />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
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