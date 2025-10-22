# Poetry Search App 📖

A beautiful Angular application for searching and discovering poetry from the PoetryDB API. Search by author, title, get surprised with random poems, and save your favorites!

## Features ✨

- 🔍 Search poems by author name
- 📝 Search poems by title
- 🔎 Combined search by both author and title
- 🎲 Random poem generator ("Surprise Me!" button)
- ❤️ **Favorite poems** - Save your favorite poems with a heart button
- 🏷️ **Filter by length** - Filter poems by Short, Medium, or Long
- 💜 Beautiful gradient UI with smooth animations
- 📱 Responsive design
- 💾 Persistent storage - Your favorites are saved locally

## Technology Stack

- **Angular 20.3.6** - Frontend framework
- **TypeScript** - Programming language
- **RxJS** - Reactive programming
- **PoetryDB API** - Poetry data source
- **CSS3** - Styling with gradients and animations
- **LocalStorage** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bluestaq-poet
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`

## Usage

### Search for Poems

1. **By Author**: Enter an author's last name (e.g., "Frost", "Shakespeare", "Dickinson")
2. **By Title**: Enter a poem title or keyword
3. **Both**: Fill in both fields for more specific results
4. **Random**: Click the "🎲 Surprise Me!" button for 5 random poems

### Favorite Poems ❤️

- Click the heart icon (🤍) on any poem card to add it to your favorites
- Click again (❤️) to remove from favorites
- Click the "❤️ Favorites" filter badge to view only your favorite poems
- Your favorites are saved automatically and persist across sessions

### Filter by Length 🏷️

Once poems are displayed, use the filter badges to view:
- **All** - Show all poems
- **❤️ Favorites** - Show only favorited poems
- **📄 Short** - Poems with 10 lines or fewer
- **📃 Medium** - Poems with 11-30 lines
- **📜 Long** - Poems with more than 30 lines

### Tips for Best Results

- Use just the last name for authors (e.g., "Frost" instead of "Robert Frost")
- The API is case-sensitive
- Try partial title matches for broader results
- Favorite poems you love to build your personal collection

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── search/          # Search form component
│   │   └── poem-list/       # Poem display component with favorites
│   ├── models/
│   │   └── poem.ts          # Poem interface
│   ├── services/
│   │   └── poetry.ts        # API service
│   ├── app.component.*      # Main app component
│   └── app.config.ts        # App configuration
└── ...
```

## Features in Detail

### Favorites System
- **Persistent Storage**: Favorites are stored in browser's localStorage
- **Cross-Session**: Your favorites remain even after closing the browser
- **Smart Matching**: Poems are identified by title + author combination
- **Visual Feedback**: Heart animation when favoriting/unfavoriting

### Length Filters
- **Dynamic Counts**: Each filter badge shows the number of poems in that category
- **Active State**: Currently selected filter is highlighted with a gradient
- **Smooth Transitions**: Animated hover effects on filter badges

## API Reference

This project uses the [PoetryDB API](https://poetrydb.org/):
- Base URL: `https://poetrydb.org`
- No API key required
- Free and open source

## Building for Production

To build the project for production:
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

Run unit tests:
```bash
ng test
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: LocalStorage must be enabled for the favorites feature to work.

## Acknowledgments

- Poetry data provided by [PoetryDB](https://poetrydb.org/)
- Built with [Angular](https://angular.dev/)

## Future Enhancements

- 📋 Copy poem to clipboard
- 🌙 Dark mode toggle
- 📊 Sort options (alphabetically, by length)
- 🔍 Search result highlighting
- 📤 Share poems via social media

---
