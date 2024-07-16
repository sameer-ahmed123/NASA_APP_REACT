interface SidebarProps{
  handleToggleModal:()=>void 
  data :any
}

const Sidebar = ({handleToggleModal,data}:SidebarProps) => {
  return (
    <>
      <div onClick={handleToggleModal} className="sidebar">
        <div className="bgOverlay"></div>
        <div className="sidebarContent">
          <h2>{data?.title}</h2>
          <div className="Description_container">
            <p className="Description_title">{data?.date}</p>
            <p>{data?.explanation}</p>
          </div>
          <button onClick={handleToggleModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
