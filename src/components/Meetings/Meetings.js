import React from "react";
import { Card, CardTitle, CardBody } from "@progress/kendo-react-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Meetings.css";
import meetingsData from "./Meetingsdata"; 

const MeetingsGrid = () => {
  const meetings = meetingsData.result;

  return (
    <div className="meetings_main_div">
      {meetings.map((meeting) => (
        <div className="card_meet" key={meeting.meetingid}>
          <Card className="card_meeting">
            <CardBody>
              <CardTitle>{meeting.Subject}</CardTitle>
              <div className="custom-lines"></div>
              <div className="meeting_details">{meeting.description}</div>
              <div className="custom-lines"></div>

              <div className="join_div">
                <div onClick={() => joinMeeting(meeting.meetingid)} className="join_txt">
                  Join
                </div>
                <FontAwesomeIcon icon={faCircleChevronRight} className="meetings_arrow" />
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

const joinMeeting = (meetingId) => {
  console.log(`Joining meeting with ID: ${meetingId}`);
};

export default MeetingsGrid;
