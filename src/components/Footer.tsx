interface FooterProps {
  handleToggleModal: () => void;
  data: any;
}

const Footer = ({ handleToggleModal, data }: FooterProps) => {
  return (
    <>
      <footer>
        <div className="bgGradient"></div>
        <div>
          <h1>APOD PROJECT</h1>
          <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </footer>
    </>
  );
};

export default Footer;
