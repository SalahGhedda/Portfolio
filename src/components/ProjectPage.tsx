const ProjectPage = () => {
  return (
    <>
      <div className="bg-blue-900 h-screen ">
        <h1 className=" text-white underline ml-12 h-20 items-center flex font-mono">
          My Projects
        </h1>
        <ul className="space-y-5 ml-12 mr-12">
          <li className="bg-blue-200 rounded-lg">
            <h1 className="ml-12">Binero</h1>
            <div className="flex items-center">
              <ul className="list-disc space-y-10 ">
                <li>
                  Binero is a logic puzzle game played on a grid of cells,
                  typically square in shape
                </li>
                <li>
                  The goal of the game is to fill the grid with zeros and ones
                  according to specific rules.
                </li>
                <li>
                  The rules state that each row and column must contain an equal
                  number of zeros and ones, and no more than two of the same
                  digit can be adjacent horizontally or vertically. Players
                  solve the puzzle by deducing the correct placement of zeros
                  and ones based on these rules.
                </li>
              </ul>
              <video className="w-1/3" controls>
                <source src="/Binero_REC.mp4" type="video/mp4" />
              </video>
            </div>
          </li>

          <li className="bg-blue-200 rounded-lg">
            <h1 className="ml-12">IMCI</h1>
            <div className="flex items-center">
              <ul className="list-disc space-y-10 ">
                <li>
                  Cellular Network Simulation: The project involves simulating a
                  cellular network environment where cellphones are connected to
                  nearby antennas. The simulation captures the communication
                  between cellphones and antennas, mimicking real-world network
                  scenarios.
                </li>
                <li>
                  Intelligent Man-in-the-Middle Communication Interception
                  (IMCI): One of the project's main features is the ability to
                  place an IMCI in the network. It intercepts communication
                  between cellphones and the antenna.
                </li>
              </ul>
              <video className="w-1/3" controls>
                <source src="/IMCI_REC.mp4" type="video/mp4" />
              </video>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectPage;
