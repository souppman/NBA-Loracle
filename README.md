# 🏀 NBA Oracle

**ML-Powered NBA Fantasy Point Projections**  
*Context-Aware. Time-Decayed. Precision Engineered.*

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://nba-oracle-flyqyf1oh-souppmans-projects.vercel.app)

![NBA Oracle Screenshot](public/Screenshot%202025-11-24%20at%207.24.16%20PM.png)

---

## 🎯 Overview

NBA Oracle is a machine learning application that predicts individual NBA player statistics (Points, Rebounds, Assists) for upcoming games. Unlike simple season averages, it uses **context-aware features** and **time-decay weighting** to generate accurate daily fantasy projections.

---

## 🧠 Machine Learning Pipeline

The prediction engine is built on a **Multi-Output Regression** model trained on ~500,000 historical player game logs.

### Key Features:
- **Rolling Window Statistics**: Calculates mean, standard deviation, and momentum over 3, 5, and 10-game windows
- **Opponent Defense Modeling**: Incorporates how many points/rebounds the opposing team allows on average
- **Fatigue Detection**: Tracks rest days and back-to-back game indicators
- **Time-Decay Weighting**: Recent games are weighted exponentially higher (60-day half-life) to capture current form

### Model Architecture:
- **Algorithm**: XGBoost Multi-Output Regressor
- **Targets**: Points, Rebounds, Assists (simultaneous prediction)
- **Performance**: 
  - Points: R² = 0.58, RMSE = 5.7
  - Rebounds: R² = 0.51, RMSE = 2.3
  - Assists: R² = 0.55, RMSE = 1.7

The model is trained in a Jupyter Notebook (`NBA_PlayerGamePredictor.ipynb`) and outputs predictions to CSV files.

---

## 🔌 UI Integration

The web application is a **React + Vite** frontend that consumes the ML predictions:

1. **Data Layer** (`src/data/predictions.js`): Pre-loaded predictions from the latest CSV export
2. **Component Layer** (`src/components/PlayerCard.jsx`): Displays individual player projections with fantasy score calculations
3. **App Layer** (`src/App.jsx`): Implements search, filtering, and sorting logic

### User Features:
- 🔍 **Search**: Filter by player name or team
- 📊 **Sort**: Rank players by Points, Rebounds, or Assists
- ⚡ **High Confidence Indicators**: Visual highlights for players projected >20 points

---

## 🛠️ Tech Stack

### Machine Learning
- **Python 3.x**
- **Pandas** - Data manipulation
- **Scikit-learn** - Model training & evaluation
- **XGBoost** - Gradient boosting regressor
- **NumPy** - Numerical computing

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Deployment
- **Vercel** - Hosting & CI/CD
- **PostCSS** - CSS processing

---

## 🚀 Live Demo

**[https://nba-oracle-flyqyf1oh-souppmans-projects.vercel.app](https://nba-oracle-flyqyf1oh-souppmans-projects.vercel.app)**

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/souppman/NBA-Loracle.git
cd NBA-Loracle/nba-oracle

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📊 Data Sources

All data is sourced from publicly available NBA statistics. No proprietary or sensitive information is included in this repository.

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🙏 Acknowledgments

Built as a demonstration of applied machine learning in sports analytics. Model training code available in `NBA_PlayerGamePredictor.ipynb`.
