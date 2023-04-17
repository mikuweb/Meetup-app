import MeetupList from "../components/meetups/MeetupList";

interface MeetupData {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

const DUMMY_MEETUPS: MeetupData[] = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alster_Hd_pano_a.jpg/1280px-Alster_Hd_pano_a.jpg",
    title: "A first event",
    address: "Some address 5, 12345 some street",
    description: "This is a first event",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alster_Hd_pano_a.jpg/1280px-Alster_Hd_pano_a.jpg",
    title: "Second event",
    address: "Some address 5, 12345 some street",
    description: "This is a first event",
  },
  {
    id: "m3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alster_Hd_pano_a.jpg/1280px-Alster_Hd_pano_a.jpg",
    title: "Third event",
    address: "Some address 5, 12345 some street",
    description: "This is a first event",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export default HomePage;

// it is called before "HomePage" component is called
// Next.js will wait for this Promise to resolve,
//which means it waits until your data is loaded,
//then you return the data to HomePage
export async function getStaticProps() {
  //fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
