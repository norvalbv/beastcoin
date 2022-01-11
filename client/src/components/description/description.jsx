import "./description.scss";
import whitepaper from '../../../../Whitepaper.pdf';

export default function Description() {
  return (
    <div className="description">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nisi perferendis adipisci culpa voluptate, eius assumenda earum fugiat doloribus similique excepturi illum. Nam ipsam fugit debitis quisquam iste hic obcaecati.
        <br />
        <br />
        Become a Beast
      </p>
      <button className="whitepaper"><a href={whitepaper} target="_blank">Read Whitepaper</a></button>
    </div>
  );
}