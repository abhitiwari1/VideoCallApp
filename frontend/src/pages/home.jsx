import withAuth from "../utils/withAuth"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const handleJoinVideoCall = async () => {
        navigate(`/${meetingCode}`);
    }
  return (
    <>
        
        <div className="navbar">
            <div style={{ display: "flex", alignItems: "center" }}>
                <h3>Video Call App</h3>
            </div>
        </div>
    </>
  )
}

export default withAuth(HomeComponent)
