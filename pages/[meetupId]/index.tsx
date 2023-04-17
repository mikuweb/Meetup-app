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

//ダイナミックページを表示するとき
//どのページを表示するかをNextjsに知らせるために必要
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

//Page is pre-generated during the build process
export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alster_Hd_pano_a.jpg/1280px-Alster_Hd_pano_a.jpg",
        title: "A First Event",
        address: "Some Street 5, Some City",
        description: "The meetup description",
      },
    },
  };
}
