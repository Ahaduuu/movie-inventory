# Movie Inventory
🎥 MovieHub
MovieHub is a modular, interactive web application that lets users browse movies, view details, save favorites, and personalize recommendations. Built with modern JavaScript, HTML partials, and CSS themes, it demonstrates clean code structure,implement authentication localStorage integration, and responsive UI design.
✨ Features
- 🔹 Dynamic partials (header/footer loaded via include.js)
- 🔹 Interactive homepage with clickable movie cards
- 🔹 Favorites page powered by localStorage
- 🔹 Personalization (theme + genre preferences)
- 🔹 Responsive CSS grid layout with dark/light themes

📂 Project Structure
movie-inventory/
│
├── frontend/
│   ├── index.html
│   ├── favorites.html
│   ├── personalize.html
│   ├── partials/
│   │   ├── header.html
│   │   └── footer.html
│   ├── js/
│   │   ├── include.js
│   │   ├── home.js
│   │   ├── favorites.js
│   │   └── personalize.js
│   └── css/
│       └── style.css



🚀 Getting Started
Prerequisites
- Modern browser (Chrome, Edge, Firefox)
- Optional: Node.js + npm for testing with jsdom
Run Locally
# Clone the repo
git clone https://github.com/your-username/moviehub.git

# Navigate to frontend
cd moviehub/frontend

# Open index.html in your browser



🛠️ Technologies
- HTML5
- CSS3 (responsive grid, dark/light themes)
- JavaScript (ES6+)
- localStorage

🌱 Branching Strategy
We follow a simple Git branching model:
- main → stable production branch
- dev → integration branch for new features
- feature/* → individual feature branches (e.g., feature/favorites-page, feature/personalization)
- hotfix/* → urgent fixes applied to main
Example workflow:
# Create a feature branch
git checkout -b feature/favorites-page

# Work on your changes
git commit -m "feat(favorites): render movies from localStorage"

# Push branch
git push origin feature/favorites-page

# Open a Pull Request into dev

👥 Team Members
Abrham Aragie 0089/16
Ahadu Akalu 0113/16
Abenezer Dagne 056/16
Aschalew Getahun 0193/16
Dagmawi Feyissa 0367/16

Next steps
- Integrate a real movie API (OMDb/TMDb)
- Enhance personalization with AI recommendations
