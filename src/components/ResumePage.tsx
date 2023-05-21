const ResumePage = () => {
  return (
    <>
      <div className="bg-blue-900 h-screen ">
        <h1 className=" text-white underline ml-12 h-20 items-center flex font-mono">
          My Resume
        </h1>
        <div className="container items-center flex justify-center">
          <div className="cards-container">
            <div className="card">
              <div className="front-card">
                <div className="content-card">
                  <img src="/imgResume.png"></img>
                </div>
              </div>
              <div className="back-card">
                <div className="content-card">
                  <button
                    onClick={() =>
                      window.open("/Salah_Ghedda_CV.pdf", "_blank")
                    }
                  >
                    My resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
