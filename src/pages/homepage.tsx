import React from "react";

function HomePage() {
  return (
    <div className=" flex flex-col overflow-hidden">
      <main className=" overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="flex justify-between">
          <div className="flex-none w-1/4">
            {renderSection(
              "Match Overview",
              [
                "Match: Team A vs Team B",
                "Map: Map Name",
                "Score: Team A - Team B",
              ],
              "1/4"
            )}
            {renderSection(
              "Live Statistics",
              [
                <div className="flex justify-between">
                  {renderSubsection("Team A", ["Kills: 15", "Deaths: 7"])}
                  {renderSubsection("Team B", ["Kills: 12", "Deaths: 10"])}
                </div>,
              ],
              "1/4"
            )}
            {renderSection(
              "Economy and Resources",
              [
                <div className="flex justify-between">
                  {renderSubsection("Team A", [
                    "Money: $8000",
                    "Inventory Value: $5000",
                  ])}
                  {renderSubsection("Team B", [
                    "Money: $7500",
                    "Inventory Value: $4800",
                  ])}
                </div>,
              ],
              "1/4"
            )}
            {renderSection(
              "Map Control and Objectives",
              [
                "Control: Team A - 60%, Team B - 40%",
                "Objectives Completed: Team A - 3, Team B - 2",
              ],
              "1/4"
            )}
            {renderSection(
              "Match Prediction",
              ["Team A Win Probability: 60%", "Team B Win Probability: 40%"],
              "1/4"
            )}
            {renderSection(
              "Live Updates",
              [
                renderUpdate(
                  "10:15",
                  "Team A secures Round 10 with a defuse at Site B.",
                  "red"
                ),
                renderUpdate(
                  "11:30",
                  "Team B takes control of Site A after a successful retake.",
                  "green"
                ),
                renderUpdate(
                  "12:45",
                  "Team A's MVP, Player X, scores a headshot with an AWP.",
                  "blue"
                ),
              ],
              "1/4"
            )}
          </div>

          <div className=" flex-grow p-16">
            {renderSection(
              "Live Video",
              [
                <div className="flex justify-start">
                  <button className="play-button">
                    <i className="fas fa-play"></i>
                  </button>
                  <video controls>
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>,
              ],
              "2/4"
            )}
          </div>
          {renderSection(
            "Live AI Commentary",
            [
              <div className="flex items-center mb-2">
                <h2 className="text-xl font-semibold">Live Chat</h2>
              </div>,
              <div className="border-t mb-2"></div>,
              <div className="w-full">This is where there will live chat</div>,
            ],
            "1/4"
          )}
        </div>

        {renderSection(
          "Live AI Commentary",
          [
            <div className="flex items-center mb-2">
              <h2 className="text-xl font-semibold">Live AI Commentary</h2>
              <div className="flex-1 flex justify-start ml-8">
                <button className="play-button">
                  <i className="fas fa-play"></i>
                </button>
                <audio controls>
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>,
            <div className="border-t mb-2"></div>,
            <div className="w-full">
              This is where the live commentary captions will play when the user
              clicks on the play button.
            </div>,
          ],
          "1"
        )}
      </main>
    </div>
  );
}

function renderSection(
  title: string,
  content: React.ReactNode[],
  size: string
) {
  const liveCommentary = title === "Live AI Commentary" ? "" : title;

  return (
    <div key={title} className={`p-4 border rounded bg-white`}>
      <h2 className="text-xl font-semibold">{liveCommentary}</h2>
      {content.map((item, index) => (
        <div key={index} className={`mt-2`}>
          {item}
        </div>
      ))}
    </div>
  );
}
function renderSubsection(title: string, content: string[]) {
  return (
    <div key={title} className="w-1/2 pr-2">
      <h3>{title}</h3>
      {content.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

function renderTimelineEvent(event: string) {
  return (
    <div key={event} className="event">
      <p>{event}</p>
    </div>
  );
}

function renderUpdate(time: string, update: string, color?: string) {
  const bgColorClass = color ? `bg-${color}-200` : "bg-yellow-200";

  return (
    <div key={time} className={`update ${bgColorClass} py-2 mb-1`}>
      <p>
        <span className="time">{time}:</span> {update}
      </p>
    </div>
  );
}

export default HomePage;
