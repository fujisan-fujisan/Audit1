import { useState, useRef, useEffect } from "react";

const formatTime = (sec) => {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

export default function AudioPlayer() {
  const [files, setFiles] = useState([]);
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [dragging, setDragging] = useState(false);
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);
  const progressRef = useRef(null);

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  const loadFiles = (fileList) => {
    const newFiles = Array.from(fileList)
      .filter((f) => f.type.startsWith("audio/"))
      .map((f) => ({ file: f, name: f.name, url: URL.createObjectURL(f) }));
    setFiles((prev) => [...prev, ...newFiles]);
    if (!current && newFiles.length > 0) setCurrent(newFiles[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    loadFiles(e.dataTransfer.files);
  };

  const selectFile = (item) => {
    setCurrent(item);
    setPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !current) return;
    audio.src = current.url;
    audio.playbackRate = speed;
    if (playing) audio.play();
  }, [current]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !current) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  const seek = (e) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  };

  const skip = (sec) => {
    if (audioRef.current) audioRef.current.currentTime += sec;
  };

  const cleanName = (name) => name.replace(/\.[^/.]+$/, "");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', serif",
      padding: "24px",
    }}>
      <audio ref={audioRef} />

      <div style={{ width: "100%", maxWidth: 480 }}>
        {/* Header */}
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: "#888", textTransform: "uppercase", marginBottom: 6 }}>
            Audio Player
          </div>
          <div style={{ width: 40, height: 1, background: "#c8a96e", margin: "0 auto" }} />
        </div>

        {/* Drop Zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => fileInputRef.current.click()}
          style={{
            border: `1px dashed ${dragging ? "#c8a96e" : "#333"}`,
            borderRadius: 8,
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            marginBottom: 24,
            transition: "all 0.2s",
            background: dragging ? "rgba(200,169,110,0.05)" : "transparent",
          }}
        >
          <div style={{ fontSize: 22, marginBottom: 6 }}>＋</div>
          <div style={{ color: "#666", fontSize: 13 }}>ファイルを選択 / ドロップ</div>
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            multiple
            style={{ display: "none" }}
            onChange={(e) => loadFiles(e.target.files)}
          />
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div style={{
            background: "#111116",
            border: "1px solid #222",
            borderRadius: 8,
            marginBottom: 24,
            maxHeight: 200,
            overflowY: "auto",
          }}>
            {files.map((item, i) => (
              <div
                key={i}
                onClick={() => selectFile(item)}
                style={{
                  padding: "12px 16px",
                  cursor: "pointer",
                  borderBottom: i < files.length - 1 ? "1px solid #1a1a1f" : "none",
                  background: current?.name === item.name ? "rgba(200,169,110,0.08)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "background 0.15s",
                }}
              >
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: current?.name === item.name ? "#c8a96e" : "#333",
                  flexShrink: 0,
                }} />
                <div style={{
                  color: current?.name === item.name ? "#e8d5a8" : "#888",
                  fontSize: 13,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}>
                  {cleanName(item.name)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Player */}
        <div style={{
          background: "#111116",
          border: "1px solid #222",
          borderRadius: 12,
          padding: "28px 24px",
        }}>
          {/* Track Name */}
          <div style={{
            color: current ? "#e8d5a8" : "#444",
            fontSize: 14,
            marginBottom: 24,
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
            {current ? cleanName(current.name) : "ファイルを選択してください"}
          </div>

          {/* Progress Bar */}
          <div style={{ marginBottom: 8 }}>
            <div
              ref={progressRef}
              onClick={seek}
              style={{
                height: 3,
                background: "#222",
                borderRadius: 2,
                cursor: "pointer",
                position: "relative",
              }}
            >
              <div style={{
                height: "100%",
                width: `${progress}%`,
                background: "#c8a96e",
                borderRadius: 2,
                transition: "width 0.1s",
              }} />
              <div style={{
                position: "absolute",
                top: "50%",
                left: `${progress}%`,
                transform: "translate(-50%, -50%)",
                width: 10, height: 10,
                borderRadius: "50%",
                background: "#c8a96e",
              }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", color: "#555", fontSize: 11, marginBottom: 24 }}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 28 }}>
            <button onClick={() => skip(-10)} style={btnStyle}>
              <span style={{ fontSize: 18 }}>↺</span>
              <span style={{ fontSize: 9, display: "block", color: "#666" }}>10</span>
            </button>
            <button
              onClick={togglePlay}
              style={{
                width: 56, height: 56,
                borderRadius: "50%",
                background: current ? "#c8a96e" : "#2a2a2a",
                border: "none",
                cursor: current ? "pointer" : "default",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
                color: "#0a0a0f",
                transition: "all 0.15s",
              }}
            >
              {playing ? "⏸" : "▶"}
            </button>
            <button onClick={() => skip(10)} style={btnStyle}>
              <span style={{ fontSize: 18 }}>↻</span>
              <span style={{ fontSize: 9, display: "block", color: "#666" }}>10</span>
            </button>
          </div>

          {/* Speed */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <span style={{ color: "#555", fontSize: 11, marginRight: 4 }}>速度</span>
            {speeds.map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                style={{
                  padding: "4px 8px",
                  borderRadius: 4,
                  border: `1px solid ${speed === s ? "#c8a96e" : "#2a2a2a"}`,
                  background: speed === s ? "rgba(200,169,110,0.12)" : "transparent",
                  color: speed === s ? "#c8a96e" : "#555",
                  fontSize: 11,
                  cursor: "pointer",
                }}
              >
                {s}×
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  background: "transparent",
  border: "none",
  color: "#888",
  cursor: "pointer",
  textAlign: "center",
  padding: "4px 8px",
};
