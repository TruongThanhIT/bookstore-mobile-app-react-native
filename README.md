# 📚 Book Store Mobile App - React Native

This is my first React Native project after learning the framework by myself. I created this demo app as a learning exercise to practice building mobile applications with React Native, understanding navigation, API integration, and state management.

## 🎯 Project Overview

This is a simple Book Store management application built with React Native and Expo. The app allows users to view a list of books, add new books, edit existing books, and delete books. It demonstrates basic CRUD (Create, Read, Update, Delete) operations with a REST API.

## 🛠️ Tech Stack

- **React Native** (0.81.5)
- **Expo** (~54.0.26)
- **React Navigation** (Stack & Bottom Tabs)
- **Axios** (for API calls)
- **TypeScript**
- **Expo Vector Icons**

## 📱 Screens

### 1. HomeScreen
The main screen of the application that displays a list of books.

**Features:**
- Displays all books in a scrollable `FlatList`
- Each book is shown as a `BookCard` component with:
  - Book cover image
  - Book title
  - Author name
  - Price
  - Delete and Edit buttons
- Floating Action Button (FAB) to add new books
- Modal overlay for adding/editing books

**How it works:**
- On component mount (`useEffect`), it fetches the list of books from the API
- When a book is deleted, it calls the delete API and refreshes the list
- When the edit button is pressed, it opens the `AddBookScreen` modal with the selected book's data
- When the add button is pressed, it opens the `AddBookScreen` modal with empty fields

### 2. AddBookScreen
A modal screen for creating new books or editing existing ones.

**Features:**
- Form with 4 input fields:
  - Book name
  - Author name
  - Cover image URL
  - Book price (numeric keyboard)
- Close button (red X icon) to dismiss the modal
- Save button that either creates or updates based on whether `selectedItem` exists

**How it works:**
- If `selectedItem` is provided (has an `id`), it's in edit mode - pre-fills the form and calls `updateBook` API
- If `selectedItem` is empty, it's in create mode - starts with empty fields and calls `createBook` API
- After successful API call, it closes the modal and refreshes the book list via `onCreateSuccess` callback

### 3. ProfileScreen
A simple placeholder screen for user profile.

**Features:**
- Basic screen with "Hello world!" text
- Part of the bottom tab navigation

### 4. SettingScreen
A settings screen with navigation demonstration.

**Features:**
- Displays "I'm React Native" text
- Button to navigate to ProfileScreen
- Demonstrates React Navigation usage

## 🔄 Navigation Structure

The app uses **React Navigation** with a bottom tab navigator:

```
App
└── NavigationContainer
    └── BottomTabs (MyTabs)
        ├── HomeScreen (Home tab)
        ├── ProfileScreen (Profile tab)
        └── SettingScreen (Setting tab)
```

**Bottom Tab Navigation:**
- **Home**: Main screen with book list
- **Profile**: User profile screen
- **Setting**: Settings screen

Each tab has custom icons from `@expo/vector-icons` (AntDesign and Feather).

## 🌐 API & Data Flow

### API Endpoint
The app uses a mock API from MockAPI.io:
```
Manage project DB: https://mockapi.io/projects/69586d4a6c3282d9f1d4ff8b
Base URL: https://69586d4a6c3282d9f1d4ff8a.mockapi.io/books
```

### API Functions (`src/api/http.ts`)

All API functions follow a consistent pattern with `onSuccess` and `onError` callbacks:

1. **`getListOfBooks({ onSuccess, onError })`**
   - Method: GET
   - Fetches all books from the API
   - On success: Returns array of books
   - Used in: HomeScreen (on mount and after CRUD operations)

2. **`createBook({ body, onSuccess, onError })`**
   - Method: POST
   - Creates a new book
   - Body: `{ book_title, name_of_author, price_of_book, cover }`
   - Shows alert: "Book has been created!"
   - Used in: AddBookScreen (create mode)

3. **`updateBook({ body, itemID, onSuccess, onError })`**
   - Method: PUT
   - Updates an existing book
   - Body: `{ book_title, name_of_author, price_of_book, cover }`
   - Shows alert: "Book has been updated!"
   - Used in: AddBookScreen (edit mode)

4. **`deleteBookByID({ itemID, onSuccess, onError })`**
   - Method: DELETE
   - Deletes a book by ID
   - Shows alert: "Book Is Deleted Successfully"
   - Used in: HomeScreen (when delete button is pressed)

5. **`getBookByID({ onSuccess, onError })`**
   - Method: GET
   - Fetches a single book by ID (currently not used in the app)

### Data Flow

#### Reading Books (GET)
```
HomeScreen mounts
  → useEffect triggers
  → getListOfBooksFN() called
  → getListOfBooks() API call
  → onSuccess callback receives books array
  → setBookList(books) updates state
  → FlatList re-renders with new data
```

#### Creating a Book (POST)
```
User clicks Add Button
  → setModalVisible(true)
  → AddBookScreen opens with empty fields
  → User fills form and clicks Save
  → createNewBook() called
  → createBook() API call
  → onSuccess: close modal + refresh list
  → onCreateSuccess() callback (getListOfBooksFN)
  → List refreshes with new book
```

#### Updating a Book (PUT)
```
User clicks Edit button on a book
  → setSelectedItem(item) + setModalVisible(true)
  → AddBookScreen opens with pre-filled data
  → User modifies fields and clicks Save
  → editBook() called
  → updateBook() API call with itemID
  → onSuccess: close modal + refresh list
  → onCreateSuccess() callback (getListOfBooksFN)
  → List refreshes with updated book
```

#### Deleting a Book (DELETE)
```
User clicks Delete button on a book
  → onDeleteItem(item) called
  → deleteBookByID() API call with item.id
  → onSuccess: refresh list
  → getListOfBooksFN() called
  → List refreshes without deleted book
```

## 📦 Project Structure

```
react_native_first_start/
├── src/
│   ├── api/
│   │   └── http.ts              # All API functions
│   ├── components/
│   │   ├── AddButton.tsx        # Floating Action Button
│   │   ├── AppButton.tsx         # Reusable Save button
│   │   ├── AppTextInput.tsx     # Reusable text input
│   │   ├── BookCard.tsx         # Book list item component
│   │   └── ...
│   ├── navigation/
│   │   ├── BottomTabs.tsx        # Bottom tab navigator
│   │   └── MainStackNavigator.tsx # Stack navigator (not used)
│   └── screens/
│       ├── HomeScreen.tsx        # Main book list screen
│       ├── AddBookScreen.tsx     # Add/Edit book modal
│       ├── ProfileScreen.tsx     # Profile screen
│       └── SettingScreen.tsx     # Settings screen
├── App.tsx                       # Root component
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- Expo CLI installed globally: `npm install -g expo-cli`
- Expo Go app on your mobile device (for testing)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the Expo development server:
```bash
npm start
# or
expo start
```

4. Scan the QR code with Expo Go app (iOS) or Camera app (Android)

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser

## 🎓 Learning Points

This project helped me learn:

1. **React Native Basics**: Components, state management with `useState`, lifecycle with `useEffect`
2. **Navigation**: Bottom tabs and modal navigation
3. **API Integration**: Making HTTP requests with Axios, handling async operations
4. **Form Handling**: Controlled inputs, form validation concepts
5. **Component Architecture**: Reusable components, prop passing, callback functions
6. **State Management**: Lifting state up, passing callbacks between components
7. **Error Handling**: Try-catch blocks, error callbacks
8. **UI/UX**: FlatList, Modal, TouchableOpacity, custom styling

## 📝 Notes

- The app uses a mock API, so data changes are not persistent
- Error handling is basic and shows alerts to the user
- The app demonstrates basic CRUD operations suitable for learning
- Some screens (Profile, Setting) are placeholders for future development

## 🔮 Future Improvements

- Add form validation
- Implement loading states
- Add pull-to-refresh functionality
- Add search/filter functionality
- Implement proper error handling with retry mechanisms
- Add image picker for book covers
- Implement local storage/caching
- Add user authentication
- Improve UI/UX design

---

**Note**: This is a learning project and may contain code that could be improved. It serves as a foundation for understanding React Native development.
