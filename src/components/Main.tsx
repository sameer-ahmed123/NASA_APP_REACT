interface MainProps {
  data: any;
}

const Main = ({ data }: MainProps) => {
  return (
    <>
      <div className="imgContainer">
        <img src={data?.hdurl} alt={data?.title || 'bg_image'} className="bgImage" />
      </div>
    </>
  );
};

export default Main;
