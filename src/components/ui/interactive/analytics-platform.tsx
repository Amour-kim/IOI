"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BarChart3, PieChart, LineChart, ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function AnalyticsPlatform() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [chartData, setChartData] = useState<number[]>([65, 59, 80, 81, 56, 55, 40])
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isVerySmall = useMediaQuery("(max-width: 500px)")

  // Simulate data refresh
  const refreshData = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setChartData(Array.from({ length: 7 }, () => Math.floor(Math.random() * 60) + 20))
      setIsRefreshing(false)
    }, 1000)
  }

  // Auto refresh data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRefreshing) {
        refreshData()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isRefreshing])

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-3 md:p-6 h-full">
      <div className="flex justify-between items-center mb-3 md:mb-6">
        <div className="flex items-center gap-1 md:gap-2">
          <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-orange-500" /> {/* Changed to orange-500 */}
          <h3 className="font-medium text-xs sm:text-sm md:text-base">Analytique IOI</h3> {/* Changed to IOI */}
        </div>
        <button
          onClick={refreshData}
          disabled={isRefreshing}
          className="flex items-center gap-1 text-[10px] md:text-xs text-gray-400 hover:text-white disabled:opacity-50"
        >
          <RefreshCw className={`h-2.5 w-2.5 md:h-3 md:w-3 ${isRefreshing ? "animate-spin" : ""}`} />
          {isVerySmall ? "" : "Actualiser"}
        </button>
      </div>

      <div className="flex border-b border-gray-800 mb-3 md:mb-6 overflow-x-auto pb-1 -mx-1 px-1">
        {[
          { id: "overview", label: "Aperçu", icon: BarChart3 },
          { id: "performance", label: isVerySmall ? "Perf" : "Performance", icon: LineChart },
          { id: "distribution", label: isVerySmall ? "Dist" : "Distribution", icon: PieChart },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "text-orange-400 border-orange-500" // Changed to orange-400 and orange-500
                : "text-gray-400 border-transparent hover:text-gray-300"
            }`}
          >
            <tab.icon className="h-3 w-3 md:h-4 md:w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-6">
        {[
          { label: "Utilisateurs Totaux", value: isVerySmall ? "24.5k" : "24,521", change: "+12%", isPositive: true },
          { label: "Taux Conv.", value: "12.3%", change: "+2%", isPositive: true },
          { label: "Sess. Moy.", value: isVerySmall ? "4m" : "4m 23s", change: "-3%", isPositive: false },
          { label: "Taux Rebond", value: "32.4%", change: "-5%", isPositive: true },
        ].map((stat, index) => (
          <div key={index} className="bg-gray-800/50 p-2 md:p-3 rounded-lg">
            <div className="text-[8px] sm:text-xs text-gray-400 mb-0.5 md:mb-1 truncate">{stat.label}</div>
            <div className="flex justify-between items-end">
              <div className="text-xs sm:text-sm md:text-lg font-bold">{stat.value}</div>
              <div
                className={`text-[8px] sm:text-xs flex items-center gap-0.5 md:gap-1 ${stat.isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {stat.change}
                {stat.isPositive ? (
                  <ArrowUpRight className="h-2 w-2 md:h-3 md:w-3" />
                ) : (
                  <ArrowDownRight className="h-2 w-2 md:h-3 md:w-3" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg mb-3 md:mb-6">
        <div className="flex justify-between items-center mb-2 md:mb-4">
          <h4 className="text-[10px] sm:text-xs md:text-sm font-medium">Tendance Hebdomadaire</h4>
          {!isVerySmall && (
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-orange-500"></div>{" "}
                {/* Changed to orange-500 */}
                <span className="text-[8px] md:text-xs text-gray-400">Cette Semaine</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-yellow-500/50"></div>{" "}
                {/* Changed to yellow-500/50 */}
                <span className="text-[8px] md:text-xs text-gray-400">Semaine Dernière</span>
              </div>
            </div>
          )}
        </div>

        <div className="h-[80px] md:h-[120px] flex items-end justify-between">
          {chartData.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center group">
              <motion.div
                className="w-full max-w-[12px] md:max-w-[20px] bg-orange-500 rounded-sm cursor-pointer relative" // Changed to orange-500
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ duration: 0.5 }}
              >
                {!isVerySmall && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[8px] md:text-xs py-0.5 md:py-1 px-1 md:px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {value}%
                  </div>
                )}
              </motion.div>
              {!isVerySmall && (
                <div className="text-[6px] md:text-[8px] text-gray-500 mt-0.5 md:mt-1">
                  {["L", "M", "M", "J", "V", "S", "D"][index]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2 md:mb-3">
          <h4 className="text-[10px] sm:text-xs md:text-sm font-medium">Sources Principales</h4>
          <span className="text-[8px] md:text-xs text-gray-400">30 derniers jours</span>
        </div>

        <div className="space-y-2 md:space-y-3">
          {[
            { source: "Direct", percentage: 42, color: "bg-orange-500" }, // Changed to orange-500
            { source: isVerySmall ? "Rech" : "Recherche Organique", percentage: 28, color: "bg-yellow-500" }, // Changed to yellow-500
            { source: isVerySmall ? "Social" : "Médias Sociaux", percentage: 18, color: "bg-green-500" },
            { source: "Référence", percentage: 12, color: "bg-red-500" }, // Changed to red-500
          ].map((item, index) => (
            <div key={index} className="space-y-0.5 md:space-y-1">
              <div className="flex justify-between text-[8px] md:text-xs">
                <span>{item.source}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="h-1 md:h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${item.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
