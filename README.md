# Dynamic UI Editor for Customizable Components

A React TypeScript application that allows users to customize UI components in real-time without editing code. Built with Vite, Zustand, and styled-components.

## 🚀 Features

### Core Functionality
- **Real-time Preview**: All changes reflect instantly in the live preview
- **Typography Controls**: Font family, weight, and size customization
- **Button Styling**: Border radius, shadow, alignment, and color controls
- **Gallery Management**: Image spacing, alignment, and border radius
- **Layout Customization**: Container padding, corner radius, and background colors
- **Stroke/Border Controls**: Color and weight adjustments
- **Layout Switching**: Toggle between different design layouts
- **Configuration Export/Import**: Save and load UI configurations as JSON

### Technical Features
- TypeScript for type safety
- Zustand for state management
- Styled-components for dynamic styling
- CSS custom properties for real-time updates
- Local storage persistence
- Responsive design

## 🛠️ Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5174` (or the port shown in terminal)

## 📚 Usage

### Editor Interface

The right panel contains all customization controls organized into sections:

#### Typography
- **Font Family**: Choose from Inter, Roboto, or Poppins
- **Font Weight**: Select from 400, 500, 600, or 700
- **Font Size**: Adjust between 10px and 60px

#### Button Customization
- **Border Radius**: 0-50px range
- **Shadow**: None, Small, Medium, or Large
- **Alignment**: Left, Center, or Right
- **Background Color**: Color picker
- **Text Color**: Color picker

#### Gallery/Images
- **Alignment**: Left, Center, or Right
- **Spacing**: 0-48px between images
- **Border Radius**: 0-50px for image corners

#### Layout Controls
- **Card Corner Radius**: 0-50px
- **Container Padding**: 8-64px
- **Section Background**: Color picker

#### Stroke/Border
- **Color**: Color picker for borders
- **Weight**: 0-10px thickness

#### Layout Switching
- **Layout 1**: Default card-based design
- **Layout 2**: Feature cards with icons

### Export/Import
- **Export Configuration**: Download current settings as JSON
- **Import Configuration**: Upload and apply saved settings
- **Reset to Default**: Restore original configuration

## 🏗️ Architecture

### Project Structure
```
src/
├── components/
│   ├── UI/                 # Main UI component
│   ├── Editor/             # Editor controls
│   └── Preview/            # Preview container
├── hooks/                  # Custom hooks
├── store/                  # State management
├── types/                  # TypeScript definitions
└── utils/                  # Helper functions
```

### Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Task Requirements Completed

✅ **UI Design Implementation**: Recreated from Figma design with configurable components
✅ **Typography Controls**: Font family, weight, size (10-60px range)
✅ **Button Customization**: Border radius, shadow, alignment, colors
✅ **Gallery/Images**: Alignment, spacing, border radius
✅ **Layout Controls**: Card radius, padding, background colors
✅ **Stroke/Border**: Color and weight controls
✅ **Layout Switching**: Two different design layouts
✅ **Real-time Preview**: Instant updates using CSS variables
✅ **JSON Export**: Configuration save/load functionality
✅ **React TypeScript**: Clean, modular, maintainable code
✅ **State Management**: Zustand for efficient state handling
✅ **Responsive Design**: Works across devices

## 🚀 Next Steps

1. **Deploy**: Ready for deployment to Netlify/Vercel
2. **Extend**: Add more customization options
3. **Test**: Implement unit and integration tests
4. **Optimize**: Performance optimization for larger UIs

---

**Built with**: React 18 + TypeScript + Vite + Zustand + Styled Components