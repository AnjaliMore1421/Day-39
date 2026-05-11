# Day 39 - Frontend Task - 29/01/2026

# Deep Theory

---

# 1. Building Final Capstone App Features

## Introduction
Building final capstone app features means completing the important functionalities of the application before deployment. In a real-world project, the frontend should be fully connected with backend APIs, database operations, authentication, and user-friendly UI components.

For the Hospital App project, the final features include patient management, doctor details, appointment booking, API integration, CRUD operations, navigation, and responsive design.

---

## Important Features in Final Mobile App

### 1) User Authentication
Authentication is used to secure the application.

#### Features
- Login screen
- Signup screen
- Logout functionality
- JWT token handling
- Session management

#### Technologies Used
- React Native
- Expo Router / React Navigation
- Node.js Backend
- MySQL Database

---

### 2) CRUD Operations
CRUD means:
- Create
- Read
- Update
- Delete

#### Example in Hospital App

| Operation | Example |
|---|---|
| Create | Add patient |
| Read | View patient list |
| Update | Edit patient details |
| Delete | Remove patient |

#### Benefits
- Dynamic data handling
- Real-time updates
- Backend synchronization

---

### 3) API Integration

Frontend communicates with backend using APIs.

#### Example API Endpoints

```js
GET /patients
POST /patients
PUT /patients/:id
DELETE /patients/:id
```

#### Advantages
- Real-time communication
- Centralized data management
- Better scalability

---

### 4) Navigation System

Navigation improves app usability.

#### Types
- Stack Navigation
- Tab Navigation
- Drawer Navigation

#### Example

```js
Home → Patient List → Patient Details
```

---

### 5) Form Handling

Forms are used for user input.

#### Common Forms
- Add patient form
- Appointment form
- Login form

#### Features
- Validation
- Error messages
- Input handling

---

### 6) State Management

State management controls app data.

#### Common Methods
- useState
- useContext
- Redux Toolkit

#### Benefits
- Better data flow
- Easy component communication
- Cleaner code structure

---

### 7) Responsive UI Design

Responsive UI adapts to multiple screen sizes.

#### Techniques
- Flexbox
- Percentage widths
- Media queries
- ScrollView

#### Benefits
- Better mobile experience
- Cross-device support

---

### 8) Deployment Preparation

Before deployment:
- Remove unused code
- Optimize images
- Test APIs
- Check navigation
- Build APK

#### Deployment Platforms
- Expo EAS Build
- Railway
- Render
- Vercel

---

## Conclusion
Building final capstone features ensures the app is production-ready, user-friendly, scalable, and fully functional with frontend-backend integration.

---

# 2. Offline-First Mobile Patterns

## Introduction
Offline-first mobile applications are designed to work even without internet connectivity. Data is stored locally first and synchronized with the server later when internet becomes available.

This improves user experience and app reliability.

---

## How Offline-First Works

### Process
1. User performs action
2. Data stored locally
3. App works offline
4. Internet reconnects
5. Data syncs with server

---

## Local Storage Methods

### 1. AsyncStorage
Used for storing small local data.

#### Example

```js
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('user', 'Anjali');
```

---

### 2. SQLite
Used for structured offline databases.

#### Benefits
- Faster queries
- Better for large data
- Persistent storage

---

### 3. Realm Database
Modern mobile database solution.

#### Features
- Offline synchronization
- High performance
- Easy object handling

---

## Advantages of Offline-First

| Benefit | Description |
|---|---|
| Better UX | App works without internet |
| Faster performance | Local data loads quickly |
| Reduced API calls | Less server load |
| Reliable operations | Prevents data loss |

---

## Challenges

### 1. Data Synchronization
Conflict may occur when online data changes.

### 2. Storage Limitations
Mobile devices have limited storage.

### 3. Security
Local data must be encrypted.

---

## Best Practices
- Cache important data
- Use background sync
- Handle sync conflicts
- Show offline indicators
- Store only required data

---

## Conclusion
Offline-first architecture improves mobile app performance, reliability, and user experience by allowing the app to function even without internet connectivity.

---

# 3. Error Boundaries in Mobile Apps

## Introduction
Error boundaries are used to catch runtime errors in React and React Native applications. They prevent the entire app from crashing and display fallback UI instead.

---

## Purpose of Error Boundaries

### Main Goals
- Catch UI errors
- Prevent app crashes
- Improve user experience
- Log errors for debugging

---

## Example of Error Boundary

```js
import React from 'react';
import { View, Text } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something went wrong.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

---

## Benefits

| Benefit | Description |
|---|---|
| Crash Prevention | Prevents full app failure |
| Better UX | Shows fallback screen |
| Easier Debugging | Captures error logs |
| Stable Application | Improves reliability |

---

## Common Error Types

### 1. API Errors
Server not responding.

### 2. Rendering Errors
Invalid component rendering.

### 3. State Errors
Undefined or null state values.

### 4. Navigation Errors
Wrong route handling.

---

## Best Practices
- Wrap important screens
- Log errors to monitoring services
- Show user-friendly messages
- Avoid blank screens

---

## Error Monitoring Tools

| Tool | Purpose |
|---|---|
| Firebase Crashlytics | Crash reporting |
| Sentry | Error tracking |
| LogRocket | Session monitoring |

---

## Conclusion
Error boundaries improve mobile app stability by catching runtime errors and preventing complete application crashes.

---

# 4. Optimizing Bundle Size

## Introduction
Bundle size refers to the total size of JavaScript files, assets, images, and dependencies used in a mobile application.

Optimizing bundle size improves:
- App performance
- Loading speed
- Installation size
- User experience

---

## Techniques to Optimize Bundle Size

### 1. Remove Unused Libraries

Avoid installing unnecessary packages.

#### Example

```bash
npm uninstall package-name
```

---

### 2. Use Optimized Images

#### Recommended Formats
- WebP
- SVG
- Compressed PNG

#### Benefits
- Faster loading
- Reduced storage usage

---

### 3. Code Splitting

Load only required modules.

#### Benefits
- Faster startup time
- Better memory management

---

### 4. Lazy Loading

Load screens only when needed.

#### Example

```js
const HomeScreen = React.lazy(() => import('./HomeScreen'));
```

---

### 5. Tree Shaking

Removes unused code automatically.

#### Benefits
- Smaller JS bundle
- Better performance

---

### 6. Minification

Compresses JavaScript code.

#### Result
- Smaller file size
- Faster downloads

---

## Performance Optimization Tips

| Technique | Benefit |
|---|---|
| Image compression | Reduces app size |
| Remove console logs | Cleaner production build |
| Use lightweight libraries | Faster performance |
| Cache assets | Better loading speed |

---

## Expo Optimization

### Useful Commands

```bash
expo export
```

```bash
eas build -p android
```

---

## Conclusion
Optimizing bundle size improves app speed, reduces memory usage, and creates a smoother user experience in mobile applications.

---

# 5. Using Feature Flags

## Introduction
Feature flags are used to enable or disable specific features in an application without changing the main codebase or redeploying the app.

They help developers test features safely.

---

## Purpose of Feature Flags

### Main Uses
- Gradual feature rollout
- A/B testing
- Beta testing
- Quick feature disabling
- Experimental features

---

## Example of Feature Flag

```js
const featureEnabled = true;

if(featureEnabled){
  console.log("New Feature Enabled");
}else{
  console.log("Old Feature Running");
}
```

---

## Types of Feature Flags

| Type | Purpose |
|---|---|
| Release Flags | Launch new features |
| Experiment Flags | A/B testing |
| Operational Flags | Control app behavior |
| Permission Flags | Role-based access |

---

## Advantages

### 1. Safe Deployment
Features can be turned off instantly.

### 2. Faster Testing
Test features with selected users.

### 3. Better User Experience
Reduce risk of bugs affecting all users.

### 4. Continuous Delivery
Deploy features independently.

---

## Real-World Example

### Hospital App
- Enable appointment booking only for admin users.
- Test new dashboard design for selected users.
- Disable unstable feature temporarily.

---

## Best Practices
- Use clear flag names
- Remove old flags
- Avoid too many flags
- Monitor feature performance

---

## Tools for Feature Flags

| Tool | Usage |
|---|---|
| Firebase Remote Config | Dynamic feature control |
| LaunchDarkly | Feature management |
| ConfigCat | Remote configuration |

---

