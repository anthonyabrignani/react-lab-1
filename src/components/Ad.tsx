import "./Ad.css";
import Ads from "../module/Ad"

interface Props {
    ads: Ads;
}

function Ad({ads}: Props) {
  const styles: any = { fontFamily: "Caveat, cursive" };


  return (
    <div className={"Ad"}>
      <p className="TheBox">
      <h4>Vote For</h4>
      <h4 style={styles}>{ads.flavor}</h4>
      </p>
    </div>
  );
}

export default Ad;
