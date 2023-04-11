import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alster_Hd_pano_a.jpg/1280px-Alster_Hd_pano_a.jpg"
        title="A First Event"
        address={"Some Street 5, Some City"}
        description="The meetup description"
      />
    </Fragment>
  );
}

export default MeetupDetails;
