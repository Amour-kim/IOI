"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Settings, PictureInPicture2 } from "lucide-react"

interface VideoPlayerProps {
  src: string
  title: string
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }, [isPlaying])

  const handleVolumeChange = useCallback((value: number[]) => {
    if (videoRef.current) {
      const newVolume = value[0] / 100
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }, [])

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      if (!isMuted && volume === 0) {
        setVolume(0.5) // Restore a default volume if it was 0 when unmuting
        videoRef.current.volume = 0.5
      }
    }
  }, [isMuted, volume])

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }, [])

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }, [])

  const handleProgressChange = useCallback(
    (value: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = (value / 100) * duration
        setCurrentTime(videoRef.current.currentTime)
      }
    },
    [duration],
  )

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const toggleFullScreen = useCallback(() => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
        })
        setIsFullScreen(true)
      } else {
        document.exitFullscreen()
        setIsFullScreen(false)
      }
    }
  }, [])

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullScreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-lg aspect-video group">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />
      {/* Controls Overlay */}
      <div className="absolute inset-x-0 bottom-0 grid gap-2 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 pt-0">
        {/* Progress Bar */}
        <Slider
          className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-red-500 [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-red-500 [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
          value={duration > 0 ? (currentTime / duration) * 100 : 0}
          max={100}
          step={0.1}
          onChange={handleProgressChange}
        />
        {/* Control Buttons */}
        <div className="flex items-center gap-3 text-white [&_svg]:text-white">
          <Button size="icon" variant="ghost" className="w-9 h-9 hover:bg-white/20" onClick={togglePlay}>
            {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white" />}
          </Button>
          <div className="flex items-center gap-1">
            <Button size="icon" variant="ghost" className="w-9 h-9 hover:bg-white/20" onClick={toggleMute}>
              {isMuted || volume === 0 ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </Button>
            <Slider
              className="w-24 [&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
              value={isMuted ? 0 : volume * 100}
              max={100}
              step={1}
              onChange={handleVolumeChange}
            />
          </div>
          <div className="text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button size="icon" variant="ghost" className="w-9 h-9 hover:bg-white/20">
              <Settings className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost" className="w-9 h-9 hover:bg-white/20">
              <PictureInPicture2 className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost" className="w-9 h-9 hover:bg-white/20" onClick={toggleFullScreen}>
              {isFullScreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
