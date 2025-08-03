"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, AlertTriangle, Lock, Eye, RefreshCw } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function SecurityPlatform() {
  const [securityScore, setSecurityScore] = useState(87)
  const [threatLevel, setThreatLevel] = useState("Faible")
  const [isScanning, setIsScanning] = useState(false)
  const [vulnerabilities, setVulnerabilities] = useState([
    { id: 1, severity: "Élevée", status: "Ouvert", description: "Certificat SSL obsolète" },
    { id: 2, severity: "Moyenne", status: "Corrigé", description: "Politique de mot de passe faible" },
    { id: 3, severity: "Faible", status: "Ouvert", description: "Ports ouverts inutilisés" },
    { id: 4, severity: "Moyenne", status: "Ouvert", description: "En-têtes de sécurité manquants" },
  ])
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Simulate security scan
  const runSecurityScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      // Randomly update security score
      const newScore = Math.min(100, Math.max(60, securityScore + (Math.random() > 0.5 ? 2 : -2)))
      setSecurityScore(newScore)

      // Update threat level based on score
      if (newScore >= 90) setThreatLevel("Très Faible")
      else if (newScore >= 80) setThreatLevel("Faible")
      else if (newScore >= 70) setThreatLevel("Modéré")
      else setThreatLevel("Élevé")

      // Update vulnerabilities
      const updatedVulnerabilities = [...vulnerabilities]
      const randomIndex = Math.floor(Math.random() * updatedVulnerabilities.length)
      if (Math.random() > 0.7) {
        updatedVulnerabilities[randomIndex].status =
          updatedVulnerabilities[randomIndex].status === "Ouvert" ? "Corrigé" : "Ouvert"
      }
      setVulnerabilities(updatedVulnerabilities)

      setIsScanning(false)
    }, 2000)
  }

  // Auto scan periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScanning) {
        runSecurityScan()
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isScanning, vulnerabilities, securityScore])

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 md:p-6 h-full">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
          <h3 className="font-medium text-sm md:text-base">Sécurité IOI</h3> {/* Changed to IOI */}
        </div>
        <button
          onClick={runSecurityScan}
          disabled={isScanning}
          className="flex items-center gap-1 text-[10px] md:text-xs bg-gray-800 hover:bg-gray-700 px-1.5 md:px-2 py-0.5 md:py-1 rounded disabled:opacity-50"
        >
          <RefreshCw className={`h-2.5 w-2.5 md:h-3 md:w-3 ${isScanning ? "animate-spin" : ""}`} />
          {isScanning ? "Scan en cours..." : "Lancer le scan"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-6">
        <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
          <h4 className="text-xs md:text-sm font-medium mb-2 md:mb-3">Score de Sécurité</h4>
          <div className="relative h-3 md:h-4 bg-gray-700 rounded-full overflow-hidden mb-1.5 md:mb-2">
            <motion.div
              className={`h-full ${
                securityScore >= 80 ? "bg-green-500" : securityScore >= 60 ? "bg-yellow-500" : "bg-red-500"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${securityScore}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm font-medium">{securityScore}/100</span>
            <span
              className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-full ${
                threatLevel === "Faible" || threatLevel === "Très Faible"
                  ? "bg-green-900/30 text-green-400"
                  : threatLevel === "Modéré"
                    ? "bg-yellow-900/30 text-yellow-400"
                    : "bg-red-900/30 text-red-400"
              }`}
            >
              Niveau de menace {threatLevel}
            </span>
          </div>
        </div>

        <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
          <h4 className="text-xs md:text-sm font-medium mb-2 md:mb-3">Statut de Protection</h4>
          <div className="space-y-1.5 md:space-y-2">
            {[
              { label: "Pare-feu", status: "Actif", icon: Lock },
              { label: "Détection d'intrusion", status: "Actif", icon: Eye },
              { label: "Chiffrement des données", status: "Actif", icon: Lock },
              { label: "Scanner de vulnérabilités", status: isScanning ? "Scan en cours" : "Prêt", icon: RefreshCw },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <item.icon className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                  <span className="text-[10px] md:text-xs">{item.label}</span>
                </div>
                <span
                  className={`text-[10px] md:text-xs ${
                    item.status === "Actif"
                      ? "text-green-400"
                      : item.status === "Scan en cours"
                        ? "text-yellow-400"
                        : "text-gray-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Threat Map - Hide on mobile */}
      {!isMobile && (
        <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium">Carte des Menaces</h4>
            <span className="text-xs text-gray-400">En direct</span>
          </div>

          <div className="relative h-[120px] bg-gray-900 rounded border border-gray-700 overflow-hidden">
            {/* World map grid representation */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-px opacity-20">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className="border border-gray-700"></div>
              ))}
            </div>

            {/* Animated threat points */}
            {[
              { x: "20%", y: "30%", size: 3 },
              { x: "70%", y: "20%", size: 4 },
              { x: "40%", y: "60%", size: 2 },
              { x: "85%", y: "40%", size: 3 },
              { x: "30%", y: "70%", size: 5 },
              { x: "60%", y: "50%", size: 2 },
            ].map((point, index) => (
              <motion.div
                key={index}
                className="absolute bg-red-500 rounded-full"
                style={{
                  left: point.x,
                  top: point.y,
                  width: point.size,
                  height: point.size,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  delay: index * 0.3,
                }}
              />
            ))}

            {/* Connection lines */}
            {[
              { x1: "20%", y1: "30%", x2: "70%", y2: "20%" },
              { x1: "70%", y1: "20%", x2: "40%", y2: "60%" },
              { x1: "40%", y1: "60%", x2: "85%", y2: "40%" },
              { x1: "30%", y1: "70%", x2: "60%", y2: "50%" },
            ].map((line, index) => (
              <motion.div
                key={index}
                className="absolute bg-red-500/30 h-px"
                style={{
                  left: line.x1,
                  top: line.y1,
                  width: "0%",
                  transformOrigin: "left center",
                  rotate: `calc(atan2(${Number.parseFloat(line.y2) - Number.parseFloat(line.y1)}, ${
                    Number.parseFloat(line.x2) - Number.parseFloat(line.x1)
                  }) * 180 / 3.14159deg)`,
                }}
                animate={{
                  width: `calc(sqrt(pow(${Number.parseFloat(line.x2) - Number.parseFloat(line.x1)}, 2) + pow(${
                    Number.parseFloat(line.y2) - Number.parseFloat(line.y1)
                  }, 2)) * 100%)`,
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  delay: index * 0.5,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2 md:mb-3">
          <h4 className="text-xs md:text-sm font-medium">Vulnérabilités</h4>
          <span className="text-[10px] md:text-xs text-gray-400">
            {vulnerabilities.filter((v) => v.status === "Ouvert").length} ouvertes
          </span>
        </div>

        <div className="space-y-1.5 md:space-y-2">
          {vulnerabilities.slice(0, isMobile ? 2 : 4).map((vuln) => (
            <div key={vuln.id} className="flex justify-between items-center p-1.5 md:p-2 rounded bg-gray-900/50">
              <div className="flex items-center gap-1.5 md:gap-2">
                {vuln.severity === "Élevée" ? (
                  <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-red-500" />
                ) : vuln.severity === "Moyenne" ? (
                  <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
                ) : (
                  <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                )}
                <span className="text-[10px] md:text-xs">{vuln.description}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <span
                  className={`text-[8px] md:text-xs px-1 md:px-1.5 py-0.5 rounded ${
                    vuln.severity === "Élevée"
                      ? "bg-red-900/30 text-red-400"
                      : vuln.severity === "Moyenne"
                        ? "bg-yellow-900/30 text-yellow-400"
                        : "bg-orange-900/30 text-orange-400" // Changed to orange-900/30 and orange-400
                  }`}
                >
                  {vuln.severity}
                </span>
                <span className={`text-[8px] md:text-xs ${vuln.status === "Ouvert" ? "text-red-400" : "text-green-400"}`}>
                  {vuln.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Make the component available as both a named and default export
export default SecurityPlatform
