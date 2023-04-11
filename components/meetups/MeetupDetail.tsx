import classes from "./MeetupDetail.module.css"

interface MeetupDetailProps {
  image: string;
  title: string;
  address: string;
  description: string;
}

const MeetupDetail: React.FC<MeetupDetailProps> = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>props.description{}</p>
    </section>
  );
};

export default MeetupDetail;
