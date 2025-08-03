"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal, TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"



// Types de données
interface ChartDataPoint {
  date: string;
  value: number;
  label: string;
}

interface CountryData {
  country: string;
  sales: number;
  growth: number;
  flag: string;
  percentage: number;
}

interface CategoryData {
  category: string;
  value: number;
  color: string;
  growth: number;
}

interface UserActivity {
  minute: number;
  users: number;
}

// Données dynamiques
const generateWeeklyData = (): ChartDataPoint[] => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const baseValue = 15000;
  
  // Utiliser des valeurs fixes basées sur l'index pour éviter l'hydratation
  const variations = [12000, 18000, 14000, 22000, 16000, 19000, 17000];
  
  return days.map((day, index) => ({
    date: day,
    value: baseValue + variations[index] + Math.sin(index) * 5000,
    label: day
  }));
};

const generateUserActivity = (): UserActivity[] => {
  // Utiliser des valeurs fixes basées sur l'index pour éviter l'hydratation
  const baseUsers = [25, 28, 32, 35, 30, 38, 42, 45, 40, 35, 38, 42, 45, 48, 50, 45, 42, 38, 35, 32, 28, 25, 22, 20, 18, 15, 12, 10, 8, 5];
  
  return Array.from({ length: 30 }, (_, i) => ({
    minute: i,
    users: baseUsers[i] + Math.sin(i * 0.3) * 10
  }));
};

const generateCountryData = (): CountryData[] => [
  {
    country: "Gabon",
    sales: 45000,
    growth: 28.5,
    flag: "🇬🇦",
    percentage: 85
  },
  {
    country: "Cameroun",
    sales: 38000,
    growth: 22.3,
    flag: "🇨🇲",
    percentage: 72
  },
  {
    country: "Côte d'Ivoire",
    sales: 32000,
    growth: 18.7,
    flag: "🇨🇮",
    percentage: 65
  },
  {
    country: "Sénégal",
    sales: 28000,
    growth: 15.2,
    flag: "🇸🇳",
    percentage: 58
  },
  {
    country: "Mali",
    sales: 22000,
    growth: 12.8,
    flag: "🇲🇱",
    percentage: 45
  }
];

const generateCategoryData = (): CategoryData[] => [
  {
    category: "Développement Web",
    value: 4567,
    color: "#0f60ff",
    growth: 15.2
  },
  {
    category: "Applications Mobile",
    value: 3167,
    color: "#0fb7ff",
    growth: 12.8
  },
  {
    category: "Design UX/UI",
    value: 2890,
    color: "#89a008",
    growth: 18.5
  },
  {
    category: "Marketing Digital",
    value: 2345,
    color: "#ff6b35",
    growth: 22.1
  }
];

export default function Statistique() {
  const [weeklyData, setWeeklyData] = useState<ChartDataPoint[]>([]);
  const [userActivity, setUserActivity] = useState<UserActivity[]>([]);
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simuler le chargement des données
  useEffect(() => {
    const loadData = () => {
      setIsLoading(true);
      setTimeout(() => {
        setWeeklyData(generateWeeklyData());
        setUserActivity(generateUserActivity());
        setCountryData(generateCountryData());
        setCategoryData(generateCategoryData());
        setIsLoading(false);
      }, 1000);
    };

    loadData();
    
    // Actualiser les données toutes les 5 minutes
    const interval = setInterval(loadData, 300000);
    return () => clearInterval(interval);
  }, []);

  // Calculer les statistiques globales
  const totalCustomers = weeklyData.reduce((sum, data) => sum + data.value, 0);
  const totalProducts = categoryData.reduce((sum, cat) => sum + cat.value, 0);
  const currentUsers = userActivity[userActivity.length - 1]?.users || 0;
  const averageGrowth = countryData.reduce((sum, country) => sum + country.growth, 0) / countryData.length;

  // Générer le SVG path pour le graphique linéaire
  const generateLinePath = (data: ChartDataPoint[]): string => {
    if (data.length === 0) return "";
    
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue;
    
    const points = data.map((point, index) => {
      const x = (index / (data.length - 1)) * 400;
      const y = 200 - ((point.value - minValue) / range) * 180;
      return `${x},${y}`;
    }).join(" ");
    
    return points;
  };

  // Générer les points du graphique
  const generateDataPoints = (data: ChartDataPoint[]) => {
    if (data.length === 0) return [];
    
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue;
    
    return data.map((point, index) => {
      const x = (index / (data.length - 1)) * 400;
      const y = 200 - ((point.value - minValue) / range) * 180;
      return { x, y, value: point.value };
    });
  };

  const dataPoints = generateDataPoints(weeklyData);
  const linePath = generateLinePath(weeklyData);

  // Gestion des interactions du graphique
  useEffect(() => {
    if (isLoading || dataPoints.length === 0) return;

    const tooltip = document.getElementById('chart-tooltip') as HTMLElement;
    const tooltipDate = document.getElementById('tooltip-date') as HTMLElement;
    const tooltipValue = document.getElementById('tooltip-value') as HTMLElement;
    const tooltipChange = document.getElementById('tooltip-change') as HTMLElement;
    const tooltipDetails = document.getElementById('tooltip-details') as HTMLElement;

    const showTooltip = (event: MouseEvent, pointIndex: number) => {
      const point = weeklyData[pointIndex];
      const previousPoint = weeklyData[pointIndex - 1];
      
      // Calculer le changement par rapport au point précédent
      let changeText = "";
      let changeColor = "";
      if (previousPoint) {
        const change = ((point.value - previousPoint.value) / previousPoint.value) * 100;
        changeText = `${change > 0 ? '+' : ''}${change.toFixed(1)}%`;
        changeColor = change >= 0 ? 'text-green-600' : 'text-red-600';
      }

      // Formater la date
      const dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
      const dayIndex = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(point.date);
      const fullDayName = dayIndex >= 0 ? dayNames[dayIndex] : point.date;
      
      tooltipDate.textContent = fullDayName;
      tooltipValue.textContent = `${Math.round(point.value).toLocaleString()}`;
      tooltipChange.textContent = changeText;
      tooltipChange.className = `text-xs ${changeColor}`;
      
      // Ajouter des détails supplémentaires
      const avgValue = weeklyData.reduce((sum, d) => sum + d.value, 0) / weeklyData.length;
      const performance = point.value > avgValue ? 'Au-dessus de la moyenne' : 'En dessous de la moyenne';
      const performanceColor = point.value > avgValue ? 'text-green-600' : 'text-orange-600';
      
      tooltipDetails.innerHTML = `
        <div class="flex items-center gap-1">
          <span class="${performanceColor}">●</span>
          <span>${performance}</span>
        </div>
      `;

      // Positionner le tooltip
      const rect = (event.target as Element).getBoundingClientRect();
      const chartRect = document.querySelector('.relative.h-64')?.getBoundingClientRect();
      
      if (chartRect) {
        const x = event.clientX - chartRect.left + 10;
        const y = event.clientY - chartRect.top - 60;
        
        tooltip.style.left = `${Math.min(x, chartRect.width - 150)}px`;
        tooltip.style.top = `${Math.max(y, 10)}px`;
        tooltip.classList.remove('hidden');
      }
    };

    const hideTooltip = () => {
      tooltip.classList.add('hidden');
    };

    // Ajouter les événements aux points du graphique
    dataPoints.forEach((_, index) => {
      const pointElement = document.querySelector(`circle[cx="${dataPoints[index].x}"][cy="${dataPoints[index].y}"]`);
      if (pointElement) {
        pointElement.addEventListener('mouseenter', (e) => showTooltip(e as MouseEvent, index));
        pointElement.addEventListener('mouseleave', hideTooltip);
      }
    });

    // Nettoyer les événements
    return () => {
      dataPoints.forEach((_, index) => {
        const pointElement = document.querySelector(`circle[cx="${dataPoints[index].x}"][cy="${dataPoints[index].y}"]`);
        if (pointElement) {
          pointElement.removeEventListener('mouseenter', (e) => showTooltip(e as MouseEvent, index));
          pointElement.removeEventListener('mouseleave', hideTooltip);
        }
      });
    };
  }, [dataPoints, weeklyData, isLoading]);

  return (
    <div className="min-h-screen bg-[#ffffff] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#23272e] mb-4">Statistiques en Temps Réel</h1>
          <p className="text-[#8b909a] text-lg max-w-4xl mx-auto">
            IOI vous accompagne avec des solutions digitales efficaces pour faire évoluer votre activité et fixer de
            nouveaux standards.
          </p>
        </div>

        {/* Statistiques globales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#8b909a] text-sm">Total Clients</p>
                  <p className="text-2xl font-bold text-[#23272e]">
                    {isLoading ? "..." : Math.round(totalCustomers / 1000) + "k"}
                  </p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#8b909a] text-sm">Projets Réalisés</p>
                  <p className="text-2xl font-bold text-[#23272e]">
                    {isLoading ? "..." : Math.round(totalProducts / 1000) + "k"}
                  </p>
                </div>
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#8b909a] text-sm">Utilisateurs Actifs</p>
                  <p className="text-2xl font-bold text-[#23272e]">
                    {isLoading ? "..." : currentUsers + "k"}
                  </p>
                </div>
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#8b909a] text-sm">Croissance Moyenne</p>
                  <p className="text-2xl font-bold text-[#23272e]">
                    {isLoading ? "..." : averageGrowth.toFixed(1) + "%"}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reports Section */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-[#23272e] text-lg font-semibold">Activité Hebdomadaire</CardTitle>
                  <p className="text-[#8b909a] text-sm">Dernières 7 jours</p>
                </div>
                <Button className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4 text-[#8b909a]" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex gap-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-[#23272e]">
                      {isLoading ? "..." : Math.round(totalCustomers / 1000) + "k"}
                    </div>
                    <div className="text-[#8b909a] text-sm">Clients</div>
                    <div className="w-16 h-1 bg-[#0f60ff] rounded mt-2"></div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#23272e]">
                      {isLoading ? "..." : Math.round(totalProducts / 1000) + "k"}
                    </div>
                    <div className="text-[#8b909a] text-sm">Projets Totaux</div>
                  </div>
                </div>

                {/* Enhanced Line Chart */}
                <div className="relative h-64">
                  {/* Y-axis labels with better styling */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#8b909a] font-medium">
                    <span className="bg-white px-1 rounded">50k</span>
                    <span className="bg-white px-1 rounded">40k</span>
                    <span className="bg-white px-1 rounded">30k</span>
                    <span className="bg-white px-1 rounded">20k</span>
                    <span className="bg-white px-1 rounded">10k</span>
                    <span className="bg-white px-1 rounded">0k</span>
                  </div>
                  
                  {/* Grid lines */}
                  <div className="ml-8 h-full relative">
                    {!isLoading && (
                      <svg className="w-full h-full animate-fade-in" viewBox="0 0 400 200">
                        {/* Grid lines */}
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                          <line
                            key={i}
                            x1="0"
                            y1={i * 40}
                            x2="400"
                            y2={i * 40}
                            stroke="#f1f5f9"
                            strokeWidth="1"
                            strokeDasharray="2,2"
                          />
                        ))}
                        
                        {/* Gradient area under the line */}
                        <defs>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0f60ff" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#0f60ff" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        
                        {/* Area under the line */}
                        <path
                          d={`M 0,200 ${linePath.split(' ').map((point, index) => {
                            const [x, y] = point.split(',').map(Number);
                            return index === 0 ? `L ${x},${y}` : `L ${x},${y}`;
                          }).join(' ')} L 400,200 Z`}
                          fill="url(#areaGradient)"
                        />
                        
                        {/* Main line with gradient */}
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0f60ff" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#0f60ff" />
                          </linearGradient>
                        </defs>
                        
                        <polyline
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={linePath}
                          className="drop-shadow-sm"
                        />
                        
                        {/* Enhanced data points with hover effects */}
                        {dataPoints.map((point, index) => (
                          <g key={index}>
                            {/* Animated pulse effect */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="6"
                              fill="transparent"
                              stroke="#0f60ff"
                              strokeWidth="1"
                              className="animate-pulse opacity-30"
                            />
                            
                            {/* Hover area (invisible but clickable) */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="12"
                              fill="transparent"
                              className="cursor-pointer hover:fill-blue-50 hover:fill-opacity-30 transition-all duration-200"
                            />
                            
                            {/* Outer glow on hover */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="8"
                              fill="transparent"
                              stroke="#0f60ff"
                              strokeWidth="2"
                              className="opacity-0 hover:opacity-100 transition-all duration-200"
                            />
                            
                            {/* Main point with enhanced styling */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="4"
                              fill="#0f60ff"
                              className="hover:r-6 hover:fill-white hover:stroke-2 hover:stroke-blue-600 transition-all duration-200 drop-shadow-sm"
                            />
                            
                            {/* Inner highlight */}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="2"
                              fill="white"
                              className="opacity-60"
                            />
                            
                            {/* Data point label on hover */}
                            <text
                              x={point.x}
                              y={point.y - 15}
                              textAnchor="middle"
                              className="text-xs font-medium fill-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                            >
                              {Math.round(point.value / 1000)}k
                            </text>
                          </g>
                        ))}
                      </svg>
                    )}
                  </div>
                  
                  {/* Enhanced X-axis labels */}
                  <div className="flex justify-between text-xs text-[#8b909a] mt-2 ml-8">
                    {weeklyData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <span className="cursor-pointer hover:text-[#0f60ff] transition-colors font-medium px-2 py-1 rounded hover:bg-blue-50">
                          {data.date}
                        </span>
                        <span className="text-[10px] opacity-60 mt-1">
                          {Math.round(data.value / 1000)}k
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced Interactive tooltip */}
                  <div 
                    id="chart-tooltip"
                    className="absolute hidden bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-10 pointer-events-none backdrop-blur-sm bg-white/95"
                    style={{ minWidth: '160px' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-gray-800" id="tooltip-date"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-xl font-bold text-blue-600 mb-1" id="tooltip-value"></div>
                    <div className="text-xs font-medium" id="tooltip-change"></div>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <div className="text-xs text-gray-500">
                        <span id="tooltip-details"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Users in last 30 minutes */}
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="text-[#23272e] font-semibold mb-1">Utilisateurs actifs (30 min)</h3>
                  <div className="text-3xl font-bold text-[#23272e]">
                    {isLoading ? "..." : currentUsers + "K"}
                  </div>
                  <div className="text-[#8b909a] text-sm">Utilisateurs par minute</div>
                </div>

                {/* Bar Chart */}
                <div className="flex items-end gap-1 h-16">
                  {userActivity.slice(-30).map((activity, i) => (
                    <div 
                      key={i} 
                      className="bg-[#0f60ff] rounded-sm flex-1 transition-all duration-300 hover:bg-[#0b4fd1]" 
                      style={{ height: `${(activity.users / 60) * 100}%` }}
                      title={`Minute ${activity.minute}: ${activity.users} utilisateurs`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Chart */}
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-[#23272e] font-semibold mb-4">Répartition par Catégorie</h3>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Camembert 3D SVG */}
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg width="192" height="192" viewBox="0 0 192 192">
                      <defs>
                        <radialGradient id="pie3d" cx="50%" cy="40%" r="80%">
                          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                          <stop offset="80%" stopColor="#bbb" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#000" stopOpacity="0.15" />
                        </radialGradient>
                      </defs>
                      {(() => {
                        // Calcul des angles
                        const total = categoryData.reduce((sum, c) => sum + c.value, 0);
                        let startAngle = -90;
                        return categoryData.map((cat, i) => {
                          const angle = (cat.value / total) * 360;
                          const endAngle = startAngle + angle;
                          const largeArc = angle > 180 ? 1 : 0;
                          const radius = 90;
                          const depth = 18; // effet 3D
                          // Calcul des points pour le path SVG
                          const x1 = 96 + radius * Math.cos((Math.PI * startAngle) / 180);
                          const y1 = 96 + radius * Math.sin((Math.PI * startAngle) / 180);
                          const x2 = 96 + radius * Math.cos((Math.PI * endAngle) / 180);
                          const y2 = 96 + radius * Math.sin((Math.PI * endAngle) / 180);
                          // Path du dessus
                          const d = [
                            `M 96 96`,
                            `L ${x1} ${y1}`,
                            `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
                            `Z`,
                          ].join(' ');
                          // Path du dessous (effet 3D)
                          const d3d = [
                            `M 96 ${96 + depth}`,
                            `L ${x1} ${y1 + depth}`,
                            `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2 + depth}`,
                            `L ${x2} ${y2}`,
                            `A ${radius} ${radius} 0 ${largeArc} 0 ${x1} ${y1}`,
                            `Z`,
                          ].join(' ');
                          const slice = (
                            <g key={cat.category}>
                              {/* Ombre 3D */}
                              <path d={d3d} fill={cat.color} opacity="0.25" />
                              {/* Tranche principale */}
                              <path d={d} fill={cat.color} stroke="#fff" strokeWidth="2" filter="url(#shadow)" />
                              {/* Reflet */}
                              <path d={d} fill="url(#pie3d)" opacity="0.18" />
                            </g>
                          );
                          startAngle = endAngle;
                          return slice;
                        });
                      })()}
                    </svg>
                    {/* Pourcentage au centre */}
                    {!isLoading && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-3xl font-extrabold text-[#23272e] drop-shadow-lg">
                          {categoryData.length > 0 ? Math.round((categoryData[0].value / categoryData.reduce((s, c) => s + c.value, 0)) * 100) : 0}%
                        </span>
                        <span className="text-xs text-[#8b909a] font-semibold">{categoryData[0]?.category}</span>
                      </div>
                    )}
                  </div>
                  {/* Légende */}
                  <div className="flex flex-col gap-2">
                    {categoryData.map((cat, i) => (
                      <div key={cat.category} className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 rounded-full" style={{ background: cat.color }}></span>
                        <span className="font-medium text-[#23272e]">{cat.category}</span>
                        <span className="text-xs text-[#8b909a]">{cat.value.toLocaleString()} ({((cat.value / categoryData.reduce((s, c) => s + c.value, 0)) * 100).toFixed(1)}%)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sales by Country */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#23272e] text-lg font-semibold">Ventes par Pays</CardTitle>
              <p className="text-[#8b909a] text-sm">Chiffre d'affaires</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {countryData.map((country, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-2xl">{country.flag}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-[#23272e]">
                        {country.sales.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-1 text-[#28c76f]">
                        {country.growth > 0 ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        <span className="text-sm font-medium">{country.growth}%</span>
                      </div>
                    </div>
                    <div className="text-[#8b909a] text-sm mb-2">{country.country}</div>
                    <div className="w-full bg-[#f7fcff] rounded-full h-2">
                      <div 
                        className="bg-[#0f60ff] h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${country.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#23272e] text-lg font-semibold">Métriques de Performance</CardTitle>
              <p className="text-[#8b909a] text-sm">Indicateurs clés</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#8b909a] text-sm">Taux de Conversion</p>
                  <p className="text-xl font-bold text-[#23272e]">3.2%</p>
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#8b909a] text-sm">Temps de Chargement</p>
                  <p className="text-xl font-bold text-[#23272e]">1.2s</p>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#8b909a] text-sm">Satisfaction Client</p>
                  <p className="text-xl font-bold text-[#23272e]">4.8/5</p>
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
