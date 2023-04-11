import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

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

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}

export default HomePage;
