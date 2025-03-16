
import { DivisionBreaker } from "../components";
import { BUILD_ID } from "../utils/buildIdentifier";

const Index = () => {
  console.log("Index component rendered with build ID:", BUILD_ID);
  return <DivisionBreaker />;
};

export default Index;
