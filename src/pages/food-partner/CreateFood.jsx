
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import axios from "axios";
// import "../../styles/CreateFood.css";
// import { useNavigate } from "react-router-dom";

// const CreateFood = () => {
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [videoFile, setVideoFile] = useState(null);
//     const [videoURL, setVideoURL] = useState("");
//     const [fileError, setFileError] = useState("");
//     const [loading, setLoading] = useState(false);

//     const fileInputRef = useRef(null);
//     const navigate = useNavigate();

//     // Video preview
//     useEffect(() => {
//         if (!videoFile) {
//             setVideoURL("");
//             return;
//         }

//         const url = URL.createObjectURL(videoFile);
//         setVideoURL(url);

//         return () => URL.revokeObjectURL(url);
//     }, [videoFile]);

//     // Select video
//     const onFileChange = (e) => {
//         const file = e.target.files?.[0];

//         if (!file) return;

//         if (!file.type.startsWith("video/")) {
//             setFileError("Please select a valid video file.");
//             return;
//         }

//         setFileError("");
//         setVideoFile(file);
//     };

//     // Drag and drop
//     const onDrop = (e) => {
//         e.preventDefault();

//         const file = e.dataTransfer.files?.[0];

//         if (!file) return;

//         if (!file.type.startsWith("video/")) {
//             setFileError("Please drop a valid video file.");
//             return;
//         }

//         setFileError("");
//         setVideoFile(file);
//     };

//     const onDragOver = (e) => {
//         e.preventDefault();
//     };

//     // Open file dialog
//     const openFileDialog = () => {
//         fileInputRef.current?.click();
//     };

//     // Remove video
//     const removeVideo = () => {
//         setVideoFile(null);
//         setFileError("");

//         if (fileInputRef.current) {
//             fileInputRef.current.value = "";
//         }
//     };

//     // Submit food
//     const onSubmit = async (e) => {
//         e.preventDefault();

//         if (!videoFile) {
//             setFileError("Please select a food video.");
//             return;
//         }

//         try {
//             setLoading(true);

//             const formData = new FormData();

//             formData.append("name", name.trim());
//             formData.append("description", description.trim());
//             formData.append("video", videoFile);

//             const response = await axios.post(
//                 "http://localhost:3000/api/food",
//                 formData,
//                 {
//                     withCredentials: true,
//                 }
//             );

//             console.log("Food created:", response.data);

//             alert("Food created successfully!");

//             setName("");
//             setDescription("");
//             setVideoFile(null);

//             if (fileInputRef.current) {
//                 fileInputRef.current.value = "";
//             }

//             navigate("/");

//         } catch (error) {
//             console.error(
//                 "Food creation failed:",
//                 error.response?.data || error.message
//             );

//             alert(
//                 error.response?.data?.message ||
//                 "Something went wrong while creating food."
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     const isDisabled = useMemo(
//         () => !name.trim() || !videoFile || loading,
//         [name, videoFile, loading]
//     );

//     return (
//         <div className="create-food-page">

//             <div className="create-food-card">

//                 <header className="create-food-header">
//                     <h1 className="create-food-title">
//                         Create Food
//                     </h1>

//                     <p className="create-food-subtitle">
//                         Upload a short video, give it a name,
//                         and add a description.
//                     </p>
//                 </header>

//                 <form
//                     className="create-food-form"
//                     onSubmit={onSubmit}
//                 >

//                     {/* VIDEO UPLOAD */}

//                     <div className="field-group">

//                         <label htmlFor="foodVideo">
//                             Food Video
//                         </label>

//                         <input
//                             id="foodVideo"
//                             ref={fileInputRef}
//                             className="file-input-hidden"
//                             type="file"
//                             accept="video/*"
//                             onChange={onFileChange}
//                         />

//                         <div
//                             className="file-dropzone"
//                             role="button"
//                             tabIndex={0}
//                             onClick={openFileDialog}
//                             onKeyDown={(e) => {
//                                 if (
//                                     e.key === "Enter" ||
//                                     e.key === " "
//                                 ) {
//                                     e.preventDefault();
//                                     openFileDialog();
//                                 }
//                             }}
//                             onDrop={onDrop}
//                             onDragOver={onDragOver}
//                         >

//                             <div className="file-dropzone-inner">

//                                 <div className="file-dropzone-text">
//                                     <strong>Tap to upload</strong>
//                                     {" "}or drag and drop
//                                 </div>

//                                 <div className="file-hint">
//                                     MP4, WebM, MOV
//                                 </div>

//                             </div>

//                         </div>

//                         {fileError && (
//                             <p className="error-text" role="alert">
//                                 {fileError}
//                             </p>
//                         )}

//                         {/* SELECTED FILE */}

//                         {videoFile && (
//                             <div className="file-chip">

//                                 <span className="file-chip-name">
//                                     {videoFile.name}
//                                 </span>

//                                 <span className="file-chip-size">
//                                     {(videoFile.size / 1024 / 1024).toFixed(1)} MB
//                                 </span>

//                                 <div className="file-chip-actions">

//                                     <button
//                                         type="button"
//                                         className="btn-ghost"
//                                         onClick={openFileDialog}
//                                     >
//                                         Change
//                                     </button>

//                                     <button
//                                         type="button"
//                                         className="btn-ghost danger"
//                                         onClick={removeVideo}
//                                     >
//                                         Remove
//                                     </button>

//                                 </div>

//                             </div>
//                         )}

//                     </div>

//                     {/* VIDEO PREVIEW */}

//                     {videoURL && (
//                         <div className="video-preview">

//                             <video
//                                 className="video-preview-el"
//                                 src={videoURL}
//                                 controls
//                                 playsInline
//                                 preload="metadata"
//                             />

//                         </div>
//                     )}

//                     {/* FOOD NAME */}

//                     <div className="field-group">

//                         <label htmlFor="foodName">
//                             Food Name
//                         </label>

//                         <input
//                             id="foodName"
//                             type="text"
//                             placeholder="e.g., Spicy Paneer Wrap"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />

//                     </div>

//                     {/* DESCRIPTION */}

//                     <div className="field-group">

//                         <label htmlFor="foodDesc">
//                             Description
//                         </label>

//                         <textarea
//                             id="foodDesc"
//                             rows={4}
//                             placeholder="Write a short description..."
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                         />

//                     </div>

//                     {/* SUBMIT */}

//                     <div className="form-actions">

//                         <button
//                             className="btn-primary"
//                             type="submit"
//                             disabled={isDisabled}
//                         >
//                             {loading ? "Uploading..." : "Save Food"}
//                         </button>

//                     </div>

//                 </form>

//             </div>

//         </div>
//     );
// };

// export default CreateFood;



import React, { useEffect, useMemo, useRef, useState } from "react";
import API from "../../services/api";
import "../../styles/CreateFood.css";
import { useNavigate } from "react-router-dom";

const CreateFood = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [videoURL, setVideoURL] = useState("");
    const [fileError, setFileError] = useState("");
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!videoFile) {
            setVideoURL("");
            return;
        }

        const url = URL.createObjectURL(videoFile);
        setVideoURL(url);

        return () => URL.revokeObjectURL(url);
    }, [videoFile]);

    const onFileChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("video/")) {
            setFileError("Please select a valid video file.");
            return;
        }

        setFileError("");
        setVideoFile(file);
    };

    const onDrop = (e) => {
        e.preventDefault();

        const file = e.dataTransfer.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("video/")) {
            setFileError("Please drop a valid video file.");
            return;
        }

        setFileError("");
        setVideoFile(file);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const openFileDialog = () => {
        fileInputRef.current?.click();
    };

    const removeVideo = () => {
        setVideoFile(null);
        setFileError("");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!videoFile) {
            setFileError("Please select a food video.");
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();

            formData.append("name", name.trim());
            formData.append("description", description.trim());
            formData.append("video", videoFile);

            const response = await API.post(
                "/api/food",
                formData
            );

            console.log("Food created:", response.data);

            alert("Food created successfully!");

            setName("");
            setDescription("");
            setVideoFile(null);

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            navigate("/");

        } catch (error) {
            console.error(
                "Food creation failed:",
                error.response?.data || error.message
            );

            alert(
                error.response?.data?.message ||
                "Something went wrong while creating food."
            );
        } finally {
            setLoading(false);
        }
    };

    const isDisabled = useMemo(
        () => !name.trim() || !videoFile || loading,
        [name, videoFile, loading]
    );

    return (
        <div className="create-food-page">

            <div className="create-food-card">

                <header className="create-food-header">
                    <h1 className="create-food-title">
                        Create Food
                    </h1>

                    <p className="create-food-subtitle">
                        Upload a short video, give it a name,
                        and add a description.
                    </p>
                </header>

                <form className="create-food-form" onSubmit={onSubmit}>

                    <div className="field-group">

                        <label htmlFor="foodVideo">
                            Food Video
                        </label>

                        <input
                            id="foodVideo"
                            ref={fileInputRef}
                            className="file-input-hidden"
                            type="file"
                            accept="video/*"
                            onChange={onFileChange}
                        />

                        <div
                            className="file-dropzone"
                            role="button"
                            tabIndex={0}
                            onClick={openFileDialog}
                            onKeyDown={(e) => {
                                if (
                                    e.key === "Enter" ||
                                    e.key === " "
                                ) {
                                    e.preventDefault();
                                    openFileDialog();
                                }
                            }}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                        >

                            <div className="file-dropzone-inner">

                                <div className="file-dropzone-text">
                                    <strong>Tap to upload</strong>
                                    {" "}or drag and drop
                                </div>

                                <div className="file-hint">
                                    MP4, WebM, MOV
                                </div>

                            </div>

                        </div>

                        {fileError && (
                            <p className="error-text" role="alert">
                                {fileError}
                            </p>
                        )}

                        {videoFile && (
                            <div className="file-chip">

                                <span className="file-chip-name">
                                    {videoFile.name}
                                </span>

                                <span className="file-chip-size">
                                    {(videoFile.size / 1024 / 1024).toFixed(1)} MB
                                </span>

                                <div className="file-chip-actions">

                                    <button
                                        type="button"
                                        className="btn-ghost"
                                        onClick={openFileDialog}
                                    >
                                        Change
                                    </button>

                                    <button
                                        type="button"
                                        className="btn-ghost danger"
                                        onClick={removeVideo}
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>
                        )}

                    </div>

                    {videoURL && (
                        <div className="video-preview">
                            <video
                                className="video-preview-el"
                                src={videoURL}
                                controls
                                playsInline
                                preload="metadata"
                            />
                        </div>
                    )}

                    <div className="field-group">

                        <label htmlFor="foodName">
                            Food Name
                        </label>

                        <input
                            id="foodName"
                            type="text"
                            placeholder="e.g., Spicy Paneer Wrap"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                    </div>

                    <div className="field-group">

                        <label htmlFor="foodDesc">
                            Description
                        </label>

                        <textarea
                            id="foodDesc"
                            rows={4}
                            placeholder="Write a short description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </div>

                    <div className="form-actions">

                        <button
                            className="btn-primary"
                            type="submit"
                            disabled={isDisabled}
                        >
                            {loading ? "Uploading..." : "Save Food"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default CreateFood;
