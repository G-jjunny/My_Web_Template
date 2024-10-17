import CollectionIntro from "../../components/main/CollectionIntro";
import Intro from "../../components/main/Intro";
import MainSlide from "../../components/main/MainSlide";
import "../../styles/main/main.scss";

const index = () => {
  return (
    <div className="pageContainer">
      <MainSlide />
      <Intro />
      <CollectionIntro />
    </div>
  );
};

export default index;
