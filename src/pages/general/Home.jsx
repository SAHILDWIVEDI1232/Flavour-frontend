
// import React, { useRef } from "react";
// import { useNavigate,Link } from "react-router-dom";
// import "../../styles/auth0share.css";
// import axios from 'axios'
// import '../../styles/reels.css'

// // const videos = [
// //   {
// //     id: 1,
// //     src: "https://res.cloudinary.com/dobj27m3t/video/upload/v1793706129/food-items/0a70ab78-aa47-4639-bbb4-3def12ef0c3e.mp4",
// //     description:
// //       "Delicious crispy burger made with fresh ingredients and special cheese.",
// //     storeUrl: "/create-food",
// //   },
// //   {
// //     id: 2,
// //     src: "https://res.cloudinary.com/dobj27m3t/video/upload/v1793706129/food-items/0a70ab78-aa47-4639-bbb4-3def12ef0c3e.mp4",
// //     description:
// //       "Enjoy our special cheesy pizza with fresh toppings and amazing taste.",
// //     storeUrl: "/create-food",
// //   },
// //   {
// //     id: 3,
// //     src: "https://res.cloudinary.com/dobj27m3t/video/upload/v1793706129/food-items/0a70ab78-aa47-4639-bbb4-3def12ef0c3e.mp4",
// //     description:
// //       "Fresh and tasty food prepared with love. Order your favourite meal today!",
// //     storeUrl: "/create-food",
// //   },
// // ];

// const Home = () => {
//   const navigate = useNavigate();
// const [videos,setVideos]=useState([])
// const containerRef=useRef(null)
// useEffect(()=>{
// const observer=new IntersectionObserver(
//   entries
// =>{
//   entries.forEach((entry)=>{
//     const video=entry.target'
//     if(!(video insta))
//   })
// })
//   const 
// })
// useEffect(()=>{
//   axios.get("http://localhost:3000/api/food")
//   .then(response=>{
//     setVideos(response.data.foodItems)
//   })
// })
// const setVideoRef=(id)=>(el)=>{
//   if(!el){
//     videosRefs.current.delete(id)
//     return
//   }
//   videoRefs.current.set(id,el)
// }
//   return (
  

//     <div className="reels-container">
//       {videos.map((item) => (
//         <section key={iterm._id} className="resl" role ="listitem"

//         <div className="reel" key={item.id}>
//           <video
//           ref={setVideoRef(item._id)}
//             className="reel-video"
//             src={item.src}
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="metadata"
//           />

//           <div className="reel-overlay">
//             <div className="reel-content">
//               <p className="reel-description">
//                 {item.description}
//               </p>

//               <button
//               <Link
//                 className="visit-store-btn"
//                 className="reel-btn"
//                 to={"/food-patner/"+item.foodPartener}
//                 aria-label="Visit Store"
//                 onClick={() => navigate(item.storeUrl)}
//               >
//                 Visit the Store
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

// );
// };

// export default Home;




// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../../styles/auth0share.css";

// const Home = () => {
//   const [videos, setVideos] = useState([]);
//   const videoRefs = useRef(new Map());

//   // Fetch food videos from backend
//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/food",
//           { withCredentials: true }
//         );

//         setVideos(response.data.foodItems || []);

//         console.log("All Food Videos:", response.data.foodItems);
//       } catch (error) {
//         console.error("Error fetching food videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   // Set video reference
//   const setVideoRef = (id) => (el) => {
//     if (el) {
//       videoRefs.current.set(id, el);
//     } else {
//       videoRefs.current.delete(id);
//     }
//   };

//   // Automatically play/pause videos based on visibility
//   useEffect(() => {
//     if (videos.length === 0) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const video = entry.target;

//           if (entry.isIntersecting) {
//             video.currentTime = 0;

//             video.play().catch((error) => {
//               console.log("Video play error:", error);
//             });
//           } else {
//             video.pause();
//             video.currentTime = 0;
//           }
//         });
//       },
//       {
//         threshold: 0.7,
//       }
//     );

//     videoRefs.current.forEach((video) => {
//       observer.observe(video);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, [videos]);

//   return (
//     <div className="reels-container">
//       {videos.map((item) => {
//         console.log("Food item:", item);
//         console.log("Food Partner ID:", item.foodPartner);

//         // Get the actual Food Partner ID
//         const partnerId =
//           typeof item.foodPartner === "object"
//             ? item.foodPartner?._id
//             : item.foodPartner;

//         return (
//           <section
//             key={item._id}
//             className="reel"
//             role="listitem"
//           >
//             <video
//               ref={setVideoRef(item._id)}
//               className="reel-video"
//               src={item.video}
//               autoPlay
//               muted
//               playsInline
//               preload="metadata"
//             />

//             <div className="reel-overlay">
//               <div className="reel-content">
//                 <p className="reel-description">
//                   {item.description}
//                 </p>

//                 {partnerId ? (
//                   <Link
//                     className="reel-btn"
//                     to={`/food-partner/${partnerId}`}
//                   >
//                     Visit the Store
//                   </Link>
//                 ) : (
//                   <p>Food Partner ID not available</p>
//                 )}
//               </div>
//             </div>
//           </section>
//         );
//       })}
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import BottomNav from "../../components/BottomNav";
// import "../../styles/reels.css";

// const API = "http://localhost:3000/api";

// const Home = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [activeComments, setActiveComments] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
//   const [commentsLoading, setCommentsLoading] = useState(false);

//   const videoRefs = useRef([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(`${API}/food`, {
//           withCredentials: true,
//         });

//         setVideos(response.data.foodItems || []);
//       } catch (err) {
//         console.error("Videos fetch failed:", err);
//         setError(
//           err.response?.data?.message || "Unable to load food videos."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   useEffect(() => {
//     if (!videos.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const video = entry.target;

//           if (entry.isIntersecting) {
//             video.play().catch(() => {});
//           } else {
//             video.pause();
//             video.currentTime = 0;
//           }
//         });
//       },
//       { threshold: 0.7 }
//     );

//     videoRefs.current.forEach((video) => {
//       if (video) observer.observe(video);
//     });

//     return () => observer.disconnect();
//   }, [videos]);

//   const getPartnerId = (item) => {
//     if (!item.foodPartner) return "";
//     return typeof item.foodPartner === "object"
//       ? item.foodPartner._id
//       : item.foodPartner;
//   };

//   const toggleLike = async (foodId) => {
//     try {
//       await axios.post(
//         `${API}/food/like`,
//         { foodId },
//         { withCredentials: true }
//       );

//       setVideos((prev) =>
//         prev.map((item) => {
//           if (item._id !== foodId) return item;

//           const wasLiked = Boolean(item.isLiked);

//           return {
//             ...item,
//             isLiked: !wasLiked,
//             likeCount: Math.max(
//               0,
//               (item.likeCount || 0) + (wasLiked ? -1 : 1)
//             ),
//           };
//         })
//       );
//     } catch (err) {
//       console.error("Like failed:", err);
//       alert(err.response?.data?.message || "Please login to like videos.");
//     }
//   };

//   const toggleSave = async (foodId) => {
//     try {
//       await axios.post(
//         `${API}/food/save`,
//         { foodId },
//         { withCredentials: true }
//       );

//       setVideos((prev) =>
//         prev.map((item) => {
//           if (item._id !== foodId) return item;

//           return {
//             ...item,
//             isSaved: !item.isSaved,
//             saveCount: Math.max(
//               0,
//               (item.saveCount || 0) + (item.isSaved ? -1 : 1)
//             ),
//           };
//         })
//       );
//     } catch (err) {
//       console.error("Save failed:", err);
//       alert(err.response?.data?.message || "Please login to save videos.");
//     }
//   };

//   const openComments = async (foodId) => {
//     setActiveComments(foodId);
//     setComments([]);
//     setCommentsLoading(true);

//     try {
//       const response = await axios.get(
//         `${API}/comments/${foodId}`,
//         { withCredentials: true }
//       );

//       setComments(response.data.comments || []);
//     } catch (err) {
//       console.error("Comments fetch failed:", err);
//       alert(err.response?.data?.message || "Unable to load comments.");
//     } finally {
//       setCommentsLoading(false);
//     }
//   };

//   const addComment = async (e) => {
//     e.preventDefault();

//     const text = commentText.trim();
//     if (!text || !activeComments) return;

//     try {
//       const response = await axios.post(
//         `${API}/comments`,
//         { foodId: activeComments, text },
//         { withCredentials: true }
//       );

//       if (response.data.comment) {
//         setComments((prev) => [response.data.comment, ...prev]);
//       } else {
//         const refreshed = await axios.get(
//           `${API}/comments/${activeComments}`,
//           { withCredentials: true }
//         );
//         setComments(refreshed.data.comments || []);
//       }

//       setVideos((prev) =>
//         prev.map((item) =>
//           item._id === activeComments
//             ? { ...item, commentCount: (item.commentCount || 0) + 1 }
//             : item
//         )
//       );

//       setCommentText("");
//     } catch (err) {
//       console.error("Comment failed:", err);
//       alert(err.response?.data?.message || "Unable to add comment.");
//     }
//   };

//   if (loading) {
//     return <div className="reels-message">Loading food videos...</div>;
//   }

//   if (error) {
//     return (
//       <div className="reels-message">
//         {error}
//       </div>
//     );
//   }

//   if (!videos.length) {
//     return (
//       <>
//         <div className="reels-message">No food videos available yet.</div>
//         <BottomNav />
//       </>
//     );
//   }

//   return (
//     <>
//       <main className="reels-container">
//         {videos.map((item, index) => {
//           const partnerId = getPartnerId(item);

//           return (
//             <section className="reel" key={item._id}>
//               <video
//                 ref={(el) => (videoRefs.current[index] = el)}
//                 className="reel-video"
//                 src={item.video}
//                 autoPlay={index === 0}
//                 muted
//                 loop
//                 playsInline
//                 preload="metadata"
//               />

//               <div className="reel-overlay" />

//               <div className="reel-content">
//                 <p className="reel-description">
//                   {item.description || item.name}
//                 </p>

//                 {partnerId && (
//                   <Link
//                     className="reel-btn"
//                     to={`/food-partner/${partnerId}`}
//                   >
//                     Visit the Store
//                   </Link>
//                 )}
//               </div>

//               <div className="reel-actions">
//                 <button
//                   className={`reel-action ${item.isLiked ? "liked" : ""}`}
//                   onClick={() => toggleLike(item._id)}
//                   type="button"
//                 >
//                   <span className="reel-action-icon">
//                     {item.isLiked ? "♥" : "♡"}
//                   </span>
//                   <span>{item.likeCount || 0}</span>
//                 </button>

//                 <button
//                   className={`reel-action ${item.isSaved ? "saved" : ""}`}
//                   onClick={() => toggleSave(item._id)}
//                   type="button"
//                 >
//                   <span className="reel-action-icon">
//                     {item.isSaved ? "▣" : "♧"}
//                   </span>
//                   <span>{item.saveCount || 0}</span>
//                 </button>

//                 <button
//                   className="reel-action"
//                   onClick={() => openComments(item._id)}
//                   type="button"
//                 >
//                   <span className="reel-action-icon">☏</span>
//                   <span>{item.commentCount || 0}</span>
//                 </button>
//               </div>

//               {activeComments === item._id && (
//                 <div className="comments-panel">
//                   <div className="comments-header">
//                     <strong>Comments</strong>
//                     <button
//                       type="button"
//                       onClick={() => setActiveComments(null)}
//                     >
//                       ×
//                     </button>
//                   </div>

//                   <div className="comments-list">
//                     {commentsLoading ? (
//                       <p>Loading comments...</p>
//                     ) : comments.length === 0 ? (
//                       <p>No comments yet. Be the first to comment!</p>
//                     ) : (
//                       comments.map((comment) => (
//                         <div className="comment-item" key={comment._id}>
//                           <div className="comment-author">
//                             {comment.user?.fullName || "User"}
//                           </div>
//                           <div className="comment-text">
//                             {comment.text}
//                           </div>
//                         </div>
//                       ))
//                     )}
//                   </div>

//                   <form className="comment-form" onSubmit={addComment}>
//                     <input
//                       type="text"
//                       placeholder="Add a comment..."
//                       value={commentText}
//                       onChange={(e) => setCommentText(e.target.value)}
//                     />
//                     <button type="submit">Post</button>
//                   </form>
//                 </div>
//               )}
//             </section>
//           );
//         })}
//       </main>

//       <BottomNav />
//     </>
//   );
// };

// export default Home;




import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BottomNav from "../../components/BottomNav";
import "../../styles/reels.css";

const API = "http://localhost:3000/api";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Comments states
  const [activeComments, setActiveComments] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [postingComment, setPostingComment] = useState(false);
  const [deletingComment, setDeletingComment] = useState(null);

  const videoRefs = useRef([]);

  // Fetch food videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${API}/food`, {
          withCredentials: true,
        });

        setVideos(response.data.foodItems || []);
      } catch (err) {
        console.error("Videos fetch failed:", err);

        setError(
          err.response?.data?.message || "Unable to load food videos."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Video autoplay and pause
  useEffect(() => {
    if (!videos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.7 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [videos]);

  // Get food partner ID
  const getPartnerId = (item) => {
    if (!item.foodPartner) return "";

    return typeof item.foodPartner === "object"
      ? item.foodPartner._id
      : item.foodPartner;
  };

  // Like / Unlike food
  const toggleLike = async (foodId) => {
    try {
      await axios.post(
        `${API}/food/like`,
        { foodId },
        { withCredentials: true }
      );

      setVideos((prev) =>
        prev.map((item) => {
          if (item._id !== foodId) return item;

          const wasLiked = Boolean(item.isLiked);

          return {
            ...item,
            isLiked: !wasLiked,
            likeCount: Math.max(
              0,
              (item.likeCount || 0) + (wasLiked ? -1 : 1)
            ),
          };
        })
      );
    } catch (err) {
      console.error("Like failed:", err);

      alert(
        err.response?.data?.message || "Please login to like videos."
      );
    }
  };

  // Save / Unsave food
  const toggleSave = async (foodId) => {
    try {
      await axios.post(
        `${API}/food/save`,
        { foodId },
        { withCredentials: true }
      );

      setVideos((prev) =>
        prev.map((item) => {
          if (item._id !== foodId) return item;

          const wasSaved = Boolean(item.isSaved);

          return {
            ...item,
            isSaved: !wasSaved,
            saveCount: Math.max(
              0,
              (item.saveCount || 0) + (wasSaved ? -1 : 1)
            ),
          };
        })
      );
    } catch (err) {
      console.error("Save failed:", err);

      alert(
        err.response?.data?.message || "Please login to save videos."
      );
    }
  };

  // Open comments for selected video
  const openComments = async (foodId) => {
    setActiveComments(foodId);
    setComments([]);
    setCommentText("");
    setCommentsLoading(true);

    try {
      const response = await axios.get(
        `${API}/comments/${foodId}`,
        { withCredentials: true }
      );

      setComments(response.data.comments || []);
    } catch (err) {
      console.error("Comments fetch failed:", err);

      alert(
        err.response?.data?.message || "Unable to load comments."
      );
    } finally {
      setCommentsLoading(false);
    }
  };

  // Close comments
  const closeComments = () => {
    setActiveComments(null);
    setComments([]);
    setCommentText("");
  };

  // Add comment
  const addComment = async (e) => {
    e.preventDefault();

    const text = commentText.trim();

    if (!text || !activeComments || postingComment) return;

    setPostingComment(true);

    try {
      const response = await axios.post(
        `${API}/comments`,
        {
          foodId: activeComments,
          text,
        },
        { withCredentials: true }
      );

      if (response.data.comment) {
        const newComment = {
          ...response.data.comment,
          isOwner: true,
        };

        setComments((prev) => [newComment, ...prev]);
      } else {
        // Refresh comments if API does not return the comment
        const refreshed = await axios.get(
          `${API}/comments/${activeComments}`,
          { withCredentials: true }
        );

        setComments(refreshed.data.comments || []);
      }

      setVideos((prev) =>
        prev.map((item) =>
          item._id === activeComments
            ? {
                ...item,
                commentCount: (item.commentCount || 0) + 1,
              }
            : item
        )
      );

      setCommentText("");
    } catch (err) {
      console.error("Comment failed:", err);

      alert(
        err.response?.data?.message || "Unable to add comment."
      );
    } finally {
      setPostingComment(false);
    }
  };

  // Delete own comment
  const deleteComment = async (commentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );

    if (!confirmDelete) return;

    setDeletingComment(commentId);

    try {
      await axios.delete(
        `${API}/comments/${commentId}`,
        { withCredentials: true }
      );

      // Remove comment immediately from UI
      setComments((prev) =>
        prev.filter((comment) => comment._id !== commentId)
      );

      // Update comment count
      setVideos((prev) =>
        prev.map((item) =>
          item._id === activeComments
            ? {
                ...item,
                commentCount: Math.max(
                  0,
                  (item.commentCount || 0) - 1
                ),
              }
            : item
        )
      );
    } catch (err) {
      console.error("Delete comment failed:", err);

      alert(
        err.response?.data?.message || "Unable to delete comment."
      );
    } finally {
      setDeletingComment(null);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="reels-message">
        Loading food videos...
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="reels-message">
        {error}
      </div>
    );
  }

  // No videos
  if (!videos.length) {
    return (
      <>
        <div className="reels-message">
          No food videos available yet.
        </div>

        <BottomNav />
      </>
    );
  }

  return (
    <>
      <main className="reels-container">
        {videos.map((item, index) => {
          const partnerId = getPartnerId(item);

          return (
            <section className="reel" key={item._id}>
              {/* Food Video */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="reel-video"
                src={item.video}
                autoPlay={index === 0}
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="reel-overlay" />

              {/* Video Description */}
              <div className="reel-content">
                <p className="reel-description">
                  {item.description || item.name}
                </p>

                {partnerId && (
                  <Link
                    className="reel-btn"
                    to={`/food-partner/${partnerId}`}
                  >
                    Visit the Store
                  </Link>
                )}
              </div>

              {/* Like, Save and Comment Buttons */}
              <div className="reel-actions">
                <button
                  className={`reel-action ${
                    item.isLiked ? "liked" : ""
                  }`}
                  onClick={() => toggleLike(item._id)}
                  type="button"
                >
                  <span className="reel-action-icon">
                    {item.isLiked ? "♥" : "♡"}
                  </span>

                  <span>{item.likeCount || 0}</span>
                </button>

                <button
                  className={`reel-action ${
                    item.isSaved ? "saved" : ""
                  }`}
                  onClick={() => toggleSave(item._id)}
                  type="button"
                >
                  <span className="reel-action-icon">
                    {item.isSaved ? "▣" : "♧"}
                  </span>

                  <span>{item.saveCount || 0}</span>
                </button>

                <button
                  className="reel-action"
                  onClick={() => openComments(item._id)}
                  type="button"
                >
                  <span className="reel-action-icon">☏</span>

                  <span>{item.commentCount || 0}</span>
                </button>
              </div>

              {/* Comments Panel */}
              {activeComments === item._id && (
                <div className="comments-panel">
                  {/* Header */}
                  <div className="comments-header">
                    <strong>
                      Comments ({comments.length})
                    </strong>

                    <button
                      type="button"
                      onClick={closeComments}
                      aria-label="Close comments"
                    >
                      ×
                    </button>
                  </div>

                  {/* Comments List */}
                  <div className="comments-list">
                    {commentsLoading ? (
                      <p>Loading comments...</p>
                    ) : comments.length === 0 ? (
                      <p>
                        No comments yet. Be the first to comment!
                      </p>
                    ) : (
                      comments.map((comment) => (
                        <div
                          className="comment-item"
                          key={comment._id}
                        >
                          <div className="comment-details">
                            <div className="comment-content">
                              <div className="comment-author">
                                {comment.user?.fullName || "User"}
                              </div>

                              <div className="comment-text">
                                {comment.text}
                              </div>
                            </div>

                            {/* Delete only own comments */}
                            {comment.isOwner && (
                              <button
                                type="button"
                                className="delete-comment-btn"
                                onClick={() =>
                                  deleteComment(comment._id)
                                }
                                disabled={
                                  deletingComment === comment._id
                                }
                              >
                                {deletingComment === comment._id
                                  ? "Deleting..."
                                  : "Delete"}
                              </button>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Add Comment Form */}
                  <form
                    className="comment-form"
                    onSubmit={addComment}
                  >
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={commentText}
                      onChange={(e) =>
                        setCommentText(e.target.value)
                      }
                      disabled={postingComment}
                      autoComplete="off"
                    />

                    <button
                      type="submit"
                      disabled={
                        !commentText.trim() || postingComment
                      }
                    >
                      {postingComment ? "Posting..." : "Post"}
                    </button>
                  </form>
                </div>
              )}
            </section>
          );
        })}
      </main>

        {activeComments === null && <BottomNav />}
    </>
  );
};

export default Home;
