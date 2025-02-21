# Smart Voice Assistant

**Demonstration Video:** [Watch Here](https://drive.google.com/file/d/1aL0-MNYlOddILhxCeE50Sf-QZIz7UDky/view?usp=sharing)

## Description
Smart Voice Assistant is a mobile-friendly web application designed to help professionals capture action items and important points during meetings. The app records voice conversations, transcribes them into text, and extracts actionable information such as tasks, calendar events, and meeting notes.

## Features

### 1. Voice Processing
- Uses the Web Speech API for real-time voice transcription.
- Supports English language processing and handles different accents effectively.
- Records and transcribes voice conversations accurately.

### 2. Action Extraction
- Identifies and extracts actionable information from the transcribed text.
- Detects key terms like "meeting," "task," "deadline," and "reminder."
- Extracts dates and times from conversations for scheduling purposes.

### 3. Action Generation
- Converts extracted actions into a to-do list.
- Integrates with Google Calendar to create events.
- Allows sharing of meeting notes via email.

## Technical Architecture
- Built using **React** for a dynamic and responsive user interface.
- Utilizes the **Web Speech API** for voice processing.
- **Moment.js** is used for formatting dates.
- Simple integrations for Google Calendar and email using URLs.

### Folder Structure
```
smart-voice-assistant/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TranscriptionBox.jsx
│   │   ├── ActionsBox.jsx
│   │   ├── ToDoBox.jsx
│   │   ├── DatesBox.jsx
│   │   └── Buttons.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
```

## Challenges and Solutions
- **Handling Different Accents:** Improved accuracy by fine-tuning Web Speech API settings.
- **Calendar and Email Integration:** Implemented Google Calendar links and `mailto` protocol for email sharing without requiring authentication.

## Conclusion
Smart Voice Assistant is an efficient tool for professionals to stay organized during meetings by capturing and processing important information. Its user-friendly interface makes it a valuable productivity app. Thank you for checking out this project!

