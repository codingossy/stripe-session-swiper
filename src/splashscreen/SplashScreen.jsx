import AnimatedText from "./AnimatedText";


const Splashscreen = ({ finishedLoading }) => {
  return (
    <>
      <div>
        <AnimatedText finishedLoading={finishedLoading} text="CODING OSSY" />
      </div>
    </>
  );
};

export default Splashscreen;
