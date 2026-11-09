
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import BottomNav from "../../components/BottomNav";
// import "../../styles/reels.css";

// const Saved = () => {
//   const [savedFoods, setSavedFoods] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSavedFoods = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/food/saved",
//           { withCredentials: true }
//         );

//         setSavedFoods(response.data.savedFoods || []);
//       } catch (err) {
//         console.error("Saved videos fetch failed:", err);
//         setError(
//           err.response?.data?.message || "Unable to load saved videos."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSavedFoods();
//   }, []);

//   if (loading) {
//     return <div className="reels-message">Loading saved videos...</div>;
//   }

//   return (
//     <>
//       <main className="saved-page">
//         <h2>Saved Videos</h2>

//         {error ? (
//           <p>{error}</p>
//         ) : savedFoods.length === 0 ? (
//           <p>You haven't saved any videos yet.</p>
//         ) : (
//           <div className="saved-grid">
//             {savedFoods.map((food) => {
//               const partnerId =
//                 typeof food.foodPartner === "object"
//                   ? food.foodPartner?._id
//                   : food.foodPartner;

//               return (
//                 <div className="saved-card" key={food._id}>
//                   <video
//                     src={food.video}
//                     muted
//                     loop
//                     playsInline
//                     controls
//                   />

//                   <div className="saved-card-info">
//                     <p>{food.description || food.name}</p>

//                     {partnerId && (
//                       <Link to={`/food-partner/${partnerId}`}>
//                         Visit Store
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </main>

//       <BottomNav />
//     </>
//   );
// };

// export default Saved;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import BottomNav from "../../components/BottomNav";
// import "../../styles/reels.css";

// const API = "http://localhost:3000/api";

// const Saved = () => {
//   const [savedFoods, setSavedFoods] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [removingId, setRemovingId] = useState(null);

//   // Fetch saved videos
//   useEffect(() => {
//     const fetchSavedFoods = async () => {
//       try {
//         const response = await axios.get(`${API}/food/saved`, {
//           withCredentials: true
//         });

//         setSavedFoods(response.data.savedFoods || []);
//       } catch (err) {
//         console.error("Saved videos fetch failed:", err);
//         setError(
//           err.response?.data?.message || "Unable to load saved videos."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSavedFoods();
//   }, []);

//   // Remove video from saved
//   const removeSavedFood = async (foodId) => {
//     try {
//       setRemovingId(foodId);

//       await axios.post(
//         `${API}/food/save`,
//         { foodId },
//         { withCredentials: true }
//       );

//       setSavedFoods((prev) =>
//         prev.filter((item) => item._id !== foodId)
//       );

//     } catch (err) {
//       console.error("Unsave failed:", err);
//       alert(
//         err.response?.data?.message || "Unable to remove saved video."
//       );
//     } finally {
//       setRemovingId(null);
//     }
//   };

//   if (loading) {
//     return (
//       <>
//         <div className="reels-message">Loading saved videos...</div>
//         <BottomNav />
//       </>
//     );
//   }

//   if (error) {
//     return (
//       <>
//         <div className="reels-message">{error}</div>
//         <BottomNav />
//       </>
//     );
//   }

//   return (
//     <>
//       <main className="saved-page">
//         <h2>Saved Videos ({savedFoods.length})</h2>

//         {savedFoods.length === 0 ? (
//           <p>You haven't saved any videos yet.</p>
//         ) : (
//           <div className="saved-grid">
//             {savedFoods.map((item) => {
//               const partnerId =
//                 typeof item.foodPartner === "object"
//                   ? item.foodPartner?._id
//                   : item.foodPartner;

//               return (
//                 <div className="saved-card" key={item._id}>

//                   <video
//                     src={item.video}
//                     controls
//                     muted
//                     playsInline
//                     preload="metadata"
//                   />

//                   {/* Remove from Saved Icon */}
//                   <button
//                     type="button"
//                     className="saved-icon-btn"
//                     onClick={() => removeSavedFood(item._id)}
//                     disabled={removingId === item._id}
//                     title="Remove from Saved"
//                     aria-label="Remove video from saved"
//                   >
//                     {removingId === item._id ? "..." : "▣"}
//                   </button>

//                   <div className="saved-card-info">
//                     <p>{item.description || item.name}</p>

//                     {partnerId && (
//                       <Link to={`/food-partner/${partnerId}`}>
//                         Visit Store
//                       </Link>
//                     )}
//                   </div>

//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </main>

//       <BottomNav />
//     </>
//   );
// };

// export default Saved;

import React, { useEffect, useState } from "react";
import API from "../../services/api";
import { Link } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import "../../styles/reels.css";

const Saved = () => {
  const [savedFoods, setSavedFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [removingId, setRemovingId] = useState(null);

  // Fetch saved videos
  useEffect(() => {
    const fetchSavedFoods = async () => {
      try {
        const response = await API.get("/api/food/saved");

        setSavedFoods(response.data.savedFoods || []);
      } catch (err) {
        console.error("Saved videos fetch failed:", err);
        setError(
          err.response?.data?.message || "Unable to load saved videos."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSavedFoods();
  }, []);

  // Remove video from saved
  const removeSavedFood = async (foodId) => {
    try {
      setRemovingId(foodId);

      await API.post(
        "/api/food/save",
        { foodId }
      );

      setSavedFoods((prev) =>
        prev.filter((item) => item._id !== foodId)
      );

    } catch (err) {
      console.error("Unsave failed:", err);
      alert(
        err.response?.data?.message || "Unable to remove saved video."
      );
    } finally {
      setRemovingId(null);
    }
  };

  if (loading) {
    return (
      <>
        <div className="reels-message">Loading saved videos...</div>
        <BottomNav />
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="reels-message">{error}</div>
        <BottomNav />
      </>
    );
  }

  return (
    <>
      <main className="saved-page">
        <h2>Saved Videos ({savedFoods.length})</h2>

        {savedFoods.length === 0 ? (
          <p>You haven't saved any videos yet.</p>
        ) : (
          <div className="saved-grid">
            {savedFoods.map((item) => {
              const partnerId =
                typeof item.foodPartner === "object"
                  ? item.foodPartner?._id
                  : item.foodPartner;

              return (
                <div className="saved-card" key={item._id}>

                  <video
                    src={item.video}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />

                  <button
                    type="button"
                    className="saved-icon-btn"
                    onClick={() => removeSavedFood(item._id)}
                    disabled={removingId === item._id}
                    title="Remove from Saved"
                    aria-label="Remove video from saved"
                  >
                    {removingId === item._id ? "..." : "▣"}
                  </button>

                  <div className="saved-card-info">
                    <p>{item.description || item.name}</p>

                    {partnerId && (
                      <Link to={`/food-partner/${partnerId}`}>
                        Visit Store
                      </Link>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </main>

      <BottomNav />
    </>
  );
};

export default Saved;
